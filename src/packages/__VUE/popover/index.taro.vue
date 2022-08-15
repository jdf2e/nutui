<template>
  <view @click.stop="openPopover" :class="classes">
    <div ref="reference" :id="'reference-' + refRandomId" :class="customClass"> <slot name="reference"></slot></div>
    <template v-if="showPopup">
      <view class="more-background" @click.stop="closePopover"> </view>
      <view :class="popoverContent" :style="getStyle">
        <view :class="popoverArrow" v-if="showArrow"> </view>

        <view class="popover-menu">
          <slot name="content"></slot>
          <view
            v-for="(item, index) in list"
            :key="index"
            :class="{ 'popover-menu-item': true, disabled: item.disabled }"
            @click.stop="chooseItem(item, index)"
          >
            <slot v-if="item.icon"> <nut-icon v-bind="$attrs" class="item-img" :name="item.icon"></nut-icon></slot>
            <view class="popover-menu-name">{{ item.name }}</view>
          </view>
        </view>
      </view>
    </template>
  </view>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref, PropType, toRefs, reactive, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('popover');
import Popup, { popupProps } from '../popup/index.vue';
import Button from '../button/index.vue';
import { useTaroRect } from '@/packages/utils/useTaroRect';
import Taro from '@tarojs/taro';

export default create({
  inheritAttrs: false,
  components: {
    [Popup.name]: Popup,
    [Button.name]: Button
  },
  props: {
    ...popupProps,
    list: {
      type: Array,
      default: []
    },

    theme: {
      type: String as PropType<import('./type').PopoverTheme>,
      default: 'light'
    },

    location: {
      type: String as PropType<import('./type').PopoverLocation>,
      default: 'bottom'
    },
    // 位置出现的偏移量
    offset: {
      type: Array,
      default: [0, 12]
    },
    customClass: {
      type: String,
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update', 'update:visible', 'close', 'choose', 'open'],
  setup(props, { emit }) {
    const reference = ref<HTMLElement>();
    const state = reactive({
      elWidth: 0,
      elHeight: 0
    });
    const showPopup = ref(props.visible);

    const { theme, location, offset } = toRefs(props);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [`${prefixCls}-taro`]: true,
        [`${prefixCls}-taro--${theme.value}`]: theme.value
      };
    });

    const popoverContent = computed(() => {
      const prefixCls = 'popover-content';
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    const popoverArrow = computed(() => {
      const prefixCls = 'popover-arrow';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    const getReference = async () => {
      const refe = await useTaroRect(reference, Taro);
      console.log(refe);
      state.elWidth = refe.width;
      state.elHeight = refe.height;
    };

    const getStyle = computed(() => {
      console.log(offset);
      const style: CSSProperties = {};
      if (location.value.indexOf('top') !== -1) {
        style.bottom = state.elHeight + (offset.value as any)[1] + 'px';
      } else if (location.value.indexOf('right') !== -1) {
        style.left = state.elWidth + (offset.value as any)[1] + 'px';
      } else if (location.value.indexOf('left') !== -1) {
        style.right = state.elWidth + (offset.value as any)[1] + 'px';
      } else {
        style.top = state.elHeight + (offset.value as any)[1] + 'px';
      }

      return style;
    });

    onMounted(() => {
      setTimeout(() => {
        getReference();
      }, 200);
    });

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
      }
    );

    const update = (val: boolean) => {
      emit('update', val);
      emit('update:visible', val);
    };

    const openPopover = () => {
      update(!props.visible);
      emit('open');
    };

    const closePopover = () => {
      emit('close');
      emit('update:visible', false);
    };

    const chooseItem = (item: unknown, index: number) => {
      emit('choose', item, index);
    };

    const refRandomId = Math.random().toString(36).slice(-8);

    return {
      classes,
      showPopup,
      openPopover,
      popoverContent,
      popoverArrow,
      closePopover,
      chooseItem,
      getReference,
      reference,
      getStyle,
      refRandomId
    };
  }
});
</script>
<style lang="scss">
.self-content {
  width: 195px;
  display: flex;
  flex-wrap: wrap;
  &-item {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &-desc {
    margin-top: 5px;
    width: 60px;
    font-size: 10px;
    text-align: center;
  }
}
</style>
