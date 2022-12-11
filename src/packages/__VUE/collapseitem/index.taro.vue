<template>
  <view :class="classes">
    <view :class="['nut-collapse-item__title', { 'nut-collapse-item__title--disabled': disabled }]" @click="toggleOpen">
      <view class="nut-collapse-item__title-main">
        <view class="nut-collapse-item__title-main-value">
          <nut-icon
            v-if="titleIcon"
            :name="titleIcon"
            v-bind="$attrs"
            :size="titleIconSize"
            :color="titleIconColor"
            :class="[
              'nut-collapse-item__title-main-icon',
              titleIconPosition == 'left' ? 'titleIconLeft' : 'titleIconRight'
            ]"
          ></nut-icon>
          <template v-if="$slots.mTitle">
            <slot name="mTitle"></slot>
          </template>
          <template v-else>
            <view v-html="title" class="nut-collapse-item__title-mtitle"></view>
          </template>
        </view>
      </view>
      <view v-if="$slots.sTitle" class="nut-collapse-item__title-sub">
        <slot name="sTitle"></slot>
      </view>
      <view v-else v-html="subTitle" class="nut-collapse-item__title-sub"></view>
      <nut-icon
        v-if="icon"
        :name="icon"
        v-bind="$attrs"
        :size="iconSize"
        :color="iconColor"
        :class="['nut-collapse-item__title-icon', { 'nut-collapse-item__title-icon--expanded': openExpanded }]"
        :style="iconStyle"
      ></nut-icon>
    </view>
    <view v-if="$slots.extraRender" class="nut-collapse__item-extraWrapper">
      <div class="nut-collapse__item-extraWrapper__extraRender">
        <slot name="extraRender"></slot>
      </div>
    </view>
    <view
      :class="['nut-collapse__item-wrapper', openExpanded ? 'open-style' : 'close-style']"
      ref="wrapperRef"
      :style="{ height: openExpanded ? (conHeight == 'auto' ? 'auto' : conHeight + 'px') : 0 }"
    >
      <view class="nut-collapse__item-wrapper__content" ref="contentRef">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import {
  reactive,
  inject,
  toRefs,
  onMounted,
  ref,
  nextTick,
  computed,
  watch,
  getCurrentInstance,
  ComponentInternalInstance
} from 'vue';
import Taro, { eventCenter, getCurrentInstance as getCurrentInstanceTaro } from '@tarojs/taro';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('collapse-item');

export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [Number, String],
      default: -1,
      required: true
    },
    collapseRef: {
      type: Object
    }
  },
  setup(props, ctx: any) {
    const collapse: any = inject('collapseParent');
    const conHeight: any = ref('auto');
    const parent: any = reactive(collapse);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const relation = (child: ComponentInternalInstance): void => {
      if (child.proxy) {
        parent.children.push(child.proxy);
      }
    };
    relation(getCurrentInstance() as ComponentInternalInstance);
    const proxyData: any = reactive({
      icon: parent.props.icon,
      iconSize: parent.props.iconSize,
      iconColor: parent.props.iconColor,
      openExpanded: false,
      // classDirection: 'right',
      iconStyle: {
        transform: 'rotate(0deg)',
        marginTop: parent.props.iconHeght ? '-' + parent.props.iconHeght / 2 + 'px' : '-10px'
      }
    });

    const titleIconStyle = reactive({
      titleIcon: parent.props.titleIcon,
      titleIconSize: parent.props.titleIconSize,
      titleIconColor: parent.props.titleIconColor,
      titleIconPosition: parent.props.titleIconPosition
      // titleIconWH: {
      //   width: '13px',
      //   height: '13px'
      // }
    });

    // 获取 Dom 元素
    const wrapperRef: any = ref(null);
    const contentRef: any = ref(null);

    // 清除 willChange 减少性能浪费
    const onTransitionEnd = () => {
      nextTick(() => {
        parent.children.forEach((item1: any, index: number) => {
          let ary = Array.from(item1.$el.children);
          ary.forEach((item2: any, index: number) => {
            if (item2.className.includes('nut-collapse__item-wrapper')) {
              item2.style.willChange = 'auto';
            }
          });
        });
      });
    };

    // 手风琴模式
    const animation = () => {
      if (parent.props.icon && !proxyData.openExpanded) {
        proxyData.iconStyle['transform'] = 'rotate(0deg)';
      } else {
        proxyData.iconStyle['transform'] = 'rotate(' + parent.props.rotate + 'deg)';
      }
      nextTick(() => {
        // const query = Taro.createSelectorQuery();
        const query = Taro.getEnv() === 'ALIPAY' ? my.createSelectorQuery() : Taro.createSelectorQuery();
        query.selectAll('.nut-collapse__item-wrapper__content').boundingClientRect();
        query.exec((res: any[]) => {
          if (Taro.getEnv() === 'WEB') {
            getH5();
          } else {
            getH(res[0]);
          }
        });
        if (!proxyData.openExpanded) {
          onTransitionEnd();
        }
      });
    };
    const open = () => {
      proxyData.openExpanded = !proxyData.openExpanded;
      let time = contentRef.value.childNodes?.length || 1;
      setTimeout(() => {
        animation();
      }, 500 * time);
      // timer.value = setInterval(() => {
      // animation();
      // }, 600);
    };

    const defaultOpen = () => {
      open();
      if (parent.props.icon) {
        proxyData['iconStyle']['transform'] = 'rotate(' + parent.props.rotate + 'deg)';
      }
    };

    const currentName = computed(() => props.name);
    const toggleOpen = () => {
      if (parent.props.accordion) {
        nextTick(() => {
          if (currentName.value == parent.props.active) {
            open();
          } else {
            parent.changeVal(currentName.value);
          }
        });
      } else {
        parent.changeValAry(props.name);
        open();
      }
    };
    // 更改子组件展示
    const changeOpen = (bol: boolean) => {
      proxyData.openExpanded = bol;
    };

    const expanded = computed(() => {
      if (parent) {
        return parent.isExpanded(props.name);
      }
      return null;
    });

    watch(expanded, (value, oldValue) => {
      if (value) {
        proxyData.openExpanded = true;
      }
    });

    // watch(
    //   () => ctx?.slots?.default?.(),
    //   () => {
    //     getRefHeight();
    //   }
    // );
    const getH = (list: any) => {
      parent.children.forEach((item1: any, index1: number) => {
        let ary: any = Array.from(item1.$el.children);
        let _uid = ary[1].children[0]['uid'];
        let tm = list?.filter((item2: any) => item2.id == _uid);
        if (tm && tm.length > 0) {
          let h = tm[0]['height'];
          item1.conHeight = h;
          // resetHeight(h);
        }
      });
    };

    const getH5 = () => {
      parent.children.forEach((item1: any, index1: number) => {
        let ary: any = Array.from(item1.$el.children);
        let h = ary[1].children[0]['offsetHeight'];
        item1.conHeight = h;
      });
    };

    const getRefHeight = () => {
      const query = Taro.getEnv() === 'ALIPAY' ? my.createSelectorQuery() : Taro.createSelectorQuery();
      query.selectAll('.nut-collapse__item-wrapper__content').boundingClientRect();
      query.exec((res: any[]) => {
        if (Taro.getEnv() === 'WEB') {
          getH5();
        } else {
          getH(res[0]);
        }
      });
    };
    onMounted(() => {
      const { name } = props;
      const active = parent && parent.props.active;
      if (typeof active == 'number' || typeof active == 'string') {
        if (name == active) {
          defaultOpen();
        }
      } else if (Object.values(active) instanceof Array) {
        const f = Object.values(active).filter((item) => item == name);
        if (f.length > 0) {
          defaultOpen();
        }
      }
      // 获取 DOM 元素
      if (Taro.getEnv() === 'WEB') {
        getRefHeight();
      } else {
        eventCenter.once((getCurrentInstanceTaro() as any).router.onReady, () => {
          getRefHeight();
        });
      }
    });

    return {
      classes,
      ...toRefs(proxyData),
      ...toRefs(parent.props),
      ...toRefs(titleIconStyle),
      conHeight,
      wrapperRef,
      contentRef,
      open,
      toggleOpen,
      changeOpen,
      animation
    };
  }
});
</script>
