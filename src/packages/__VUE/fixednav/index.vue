<template>
  <view :class="classes" :style="position">
    <nut-overlay v-if="overlay" :visible="visible" :z-index="200" @click="updateValue(false)" />
    <slot name="list">
      <view class="nut-fixednav__list">
        <view
          class="nut-fixednav__list-item"
          v-for="(item, index) in cloneNavlist"
          @click="selected(item, $event)"
          :key="item.id || index"
        >
          <img :src="item.icon" :style="{ color: item.selected ? activeColor : '#000' }" />
          <view class="span" :style="{ color: item.selected ? activeColor : '#000' }">{{ item.text }}</view>
          <view class="b" v-if="item.num">{{ item.num }}</view>
        </view>
      </view>
    </slot>
    <div class="nut-fixednav__btn" @click="updateValue()">
      <slot name="btn">
        <nut-icon name="left" color="#fff" />
        <view class="text"
          >{{ visible ? activeText || translate('activeText') : unActiveText || translate('unActiveText') }}
        </view>
      </slot>
    </div>
  </view>
</template>
<script lang="ts">
import { computed, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import overlay from '../overlay/index.vue';
const { componentName, create, translate } = createComponent('fixednav');

export default create({
  components: {
    [overlay.name]: overlay
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    navList: {
      default: () => [],
      type: Array
    },
    activeText: {
      default: '',
      type: String
    },
    unActiveText: {
      default: '',
      type: String
    },
    position: {
      default: () => {
        return {
          top: 'auto',
          bottom: 'auto'
        };
      },
      type: Object
    },
    type: {
      default: 'right',
      type: String
    },
    activeColor: {
      default: '#fa2c19',
      type: String
    }
  },
  emits: ['update:visible', 'selected'],

  setup(props, { emit }) {
    const cloneNavlist = ref<any[]>([]);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        active: props.visible,
        [props.type]: true
      };
    });

    const updateValue = (value: boolean = !props.visible) => {
      emit('update:visible', value);
    };
    const selected = (item: any, event: Event) => {
      cloneNavlist.value.map((item) => {
        item.selected = false;
      });
      item.selected = true;
      let selectItem: any = {};
      for (let i in item) {
        if (i !== 'selected') {
          selectItem[i] = item[i];
        }
      }
      emit('selected', {
        item: selectItem,
        event
      });
    };

    watch(
      () => props.navList,
      (val) => {
        cloneNavlist.value = val.map((item: any) => {
          return {
            ...item,
            selected: false
          };
        });
      },
      { immediate: true, deep: true }
    );

    return { classes, updateValue, selected, translate, cloneNavlist };
  }
});
</script>
