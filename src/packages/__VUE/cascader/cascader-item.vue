<template>
  <nut-tabs class="nut-cascader" v-model="tabsCursor" @click="handleTabClick" title-scroll>
    <template v-if="!initLoading && panes.length">
      <nut-tabpane v-for="(pane, index) in panes" :title="formatTabTitle(pane)" :key="index">
        <view role="menu" class="nut-cascader-pane">
          <template v-for="node in pane.nodes" :key="node.value">
            <view
              class="nut-cascader-item"
              :aria-checked="isSelected(pane, node)"
              :aria-disabled="node.disabled || undefined"
              :class="{ active: isSelected(pane, node), disabled: node.disabled }"
              role="menuitemradio"
              @click="handleNode(node, false)"
            >
              <view class="nut-cascader-item__title">{{ node.text }}</view>

              <nut-icon v-if="node.loading" class="nut-cascader-item__icon-loading" name="loading" />
              <nut-icon v-else class="nut-cascader-item__icon-check" name="checklist" />
            </view>
          </template>
        </view>
      </nut-tabpane>
    </template>
    <template v-else>
      <nut-tabpane title="Loading...">
        <view class="nut-cascader-pane"></view>
      </nut-tabpane>
    </template>
  </nut-tabs>
</template>
<script lang="ts">
import { watch, ref, Ref, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, translate } = createComponent('cascader-item');
import { convertListToOptions } from './helper';
import { CascaderPane, CascaderOption, CascaderValue, convertConfig, Tabs } from './types';
import Tree from './tree';

export default create({
  props: {
    visible: Boolean,
    modelValue: Array,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: 'value'
    },
    textKey: {
      type: String,
      default: 'text'
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    convertConfig: Object
  },
  components: {},
  emits: ['update:modelValue', 'change', 'pathChange'],

  setup(props, { emit }) {
    const configs = computed(() => ({
      lazy: props.lazy,
      lazyLoad: props.lazyLoad,
      valueKey: props.valueKey,
      textKey: props.textKey,
      childrenKey: props.childrenKey,
      convertConfig: props.convertConfig
    }));

    const tabsCursor = ref(0);
    const initLoading = ref(false);
    const innerValue: Ref<CascaderValue> = ref(props.modelValue as CascaderValue);
    const tree: Ref<Tree> = ref(new Tree([], {}));
    const panes: Ref<CascaderPane[]> = ref([]);
    const isLazy = computed(() => configs.value.lazy && Boolean(configs.value.lazyLoad));

    const lazyLoadMap = new Map();
    let currentProcessNode: CascaderOption | null;
    const init = async () => {
      lazyLoadMap.clear();
      panes.value = [];
      tabsCursor.value = 0;
      initLoading.value = false;
      currentProcessNode = null;

      let { options } = props;

      if (configs.value.convertConfig) {
        options = convertListToOptions(options as CascaderOption[], configs.value.convertConfig as convertConfig);
      }

      tree.value = new Tree(options as CascaderOption[], {
        value: configs.value.valueKey,
        text: configs.value.textKey,
        children: configs.value.childrenKey
      });

      if (isLazy.value && !tree.value.nodes.length) {
        await invokeLazyLoad({
          root: true,
          loading: true,
          text: '',
          value: ''
        });
      }

      panes.value = [{ nodes: tree.value.nodes, selectedNode: null }];
      syncValue();
    };

    const syncValue = async () => {
      const currentValue = innerValue.value;

      if (currentValue === undefined || !tree.value.nodes.length) {
        return;
      }

      if (currentValue.length === 0) {
        tabsCursor.value = 0;
        panes.value = [{ nodes: tree.value.nodes, selectedNode: null }];
        return;
      }

      let needToSync = currentValue;

      if (isLazy.value && Array.isArray(currentValue) && currentValue.length) {
        needToSync = [];
        let parent = tree.value.nodes.find((node) => node.value === currentValue[0]);

        if (parent) {
          needToSync = [parent.value];
          initLoading.value = true;

          const last = await currentValue.slice(1).reduce(async (p: Promise<CascaderOption | void>, value) => {
            const parent = await p;

            await invokeLazyLoad(parent);
            const node = parent?.children?.find((item) => item.value === value);

            if (node) {
              needToSync.push(value);
            }

            return Promise.resolve(node);
          }, Promise.resolve(parent));

          await invokeLazyLoad(last);

          initLoading.value = false;
        }
      }

      if (needToSync.length && currentValue === props.modelValue) {
        const pathNodes = tree.value.getPathNodesByValue(needToSync);
        pathNodes.map((node, index) => {
          tabsCursor.value = index;
          methods.handleNode(node, true);
        });
      }
    };

    const invokeLazyLoad = async (node?: CascaderOption | void) => {
      if (!node) {
        return;
      }

      if (!configs.value.lazyLoad) {
        node.leaf = true;
        return;
      }

      if (tree.value.isLeaf(node, isLazy.value) || tree.value.hasChildren(node, isLazy.value)) {
        return;
      }

      node.loading = true;

      const parent = node.root ? null : node;
      let lazyLoadPromise = lazyLoadMap.get(node);

      if (!lazyLoadPromise) {
        lazyLoadPromise = new Promise((resolve) => {
          // 外部必须resolve
          configs.value.lazyLoad?.(node, resolve);
        });
        lazyLoadMap.set(node, lazyLoadPromise);
      }

      const nodes: CascaderOption[] | void = await lazyLoadPromise;

      if (Array.isArray(nodes) && nodes.length > 0) {
        tree.value.updateChildren(nodes, parent);
      } else {
        // 如果加载完成后没有提供子节点，作为叶子节点处理
        node.leaf = true;
      }

      node.loading = false;
      lazyLoadMap.delete(node);
    };

    const emitChange = (pathNodes: CascaderOption[]) => {
      const emitValue = pathNodes.map((node) => node.value);

      innerValue.value = emitValue;
      emit('change', emitValue, pathNodes);
      emit('update:modelValue', emitValue, pathNodes);
    };

    const methods = {
      // 选中一个节点，静默模式不触发事件
      async handleNode(node: CascaderOption, silent?: boolean) {
        const { disabled, loading } = node;

        if ((!silent && disabled) || !panes.value[tabsCursor.value]) {
          return;
        }

        if (tree.value.isLeaf(node, isLazy.value)) {
          node.leaf = true;
          panes.value[tabsCursor.value].selectedNode = node;
          panes.value = panes.value.slice(0, (node.level as number) + 1);

          if (!silent) {
            const pathNodes = panes.value.map((pane) => pane.selectedNode);

            emitChange(pathNodes as CascaderOption[]);
            emit('pathChange', pathNodes);
          }
          return;
        }

        if (tree.value.hasChildren(node, isLazy.value)) {
          const level = (node.level as number) + 1;

          panes.value[tabsCursor.value].selectedNode = node;
          panes.value = panes.value.slice(0, level);
          panes.value.push({
            nodes: node.children || [],
            selectedNode: null
          });

          tabsCursor.value = level;

          if (!silent) {
            const pathNodes = panes.value.map((pane) => pane.selectedNode);
            emit('pathChange', pathNodes);
          }
          return;
        }

        currentProcessNode = node;

        if (loading) {
          return;
        }

        await invokeLazyLoad(node);

        if (currentProcessNode === node) {
          panes.value[tabsCursor.value].selectedNode = node;
          methods.handleNode(node, silent);
        }
      },
      handleTabClick(tab: Tabs) {
        currentProcessNode = null;
        tabsCursor.value = Number(tab.paneKey);
      },
      formatTabTitle(pane: CascaderPane) {
        return pane.selectedNode ? pane.selectedNode.text : translate('select');
      },
      isSelected(pane: CascaderPane, node: CascaderOption) {
        return pane.selectedNode && pane.selectedNode.value === node.value;
      }
    };

    watch(
      [configs, () => props.options],
      () => {
        init();
      },
      {
        deep: true,
        immediate: true
      }
    );
    watch(
      () => props.modelValue,
      (value) => {
        if (value !== innerValue.value) {
          innerValue.value = value as CascaderValue;
          syncValue();
        }
      }
    );
    watch(
      () => props.visible,
      (val) => {
        // console.log('watch: props.visible', val);
        // TODO: value为空时，保留上次选择记录，修复单元测试问题
        if (val && Array.isArray(innerValue.value) && innerValue.value.length > 0) {
          syncValue();
        }
      }
    );

    return { panes, initLoading, tabsCursor, ...methods };
  }
});
</script>
