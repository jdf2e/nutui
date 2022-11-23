<template>
  <view :class="classes">
    <view class="nut-popover-wrapper" @click="openPopover" ref="popoverRef"><slot name="reference"></slot></view>

    <Transition name="nut-popover">
      <view :class="popoverContent" :style="getStyles" ref="contentRef" v-if="showPopup">
        <!-- 气泡弹出层  箭头 -->
        <view :class="popoverArrow" v-if="showArrow"> </view>
        <slot name="content"></slot>
        <view
          v-for="(item, index) in list"
          :key="index"
          :class="[item.className, item.disabled && 'nut-popover-menu-disabled', 'nut-popover-menu-item']"
          @click.stop="chooseItem(item, index)"
        >
          <slot v-if="item.icon"> <nut-icon v-bind="$attrs" class="item-img" :name="item.icon"></nut-icon></slot>
          <view class="nut-popover-menu-name">{{ item.name }}</view>
        </view>
      </view>
    </Transition>

    <nut-overlay
      :visible="showPopup"
      :duration="0"
      @click="closePopover"
      :overlayStyle="{ background: 'transparent' }"
    />
  </view>
</template>
<script lang="ts">
import { computed, watch, ref, PropType, toRefs, CSSProperties, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import overlay, { overlayProps } from '../overlay/index.vue';
const { componentName, create } = createComponent('popover');

export default create({
  inheritAttrs: false,
  components: {
    [overlay.name]: overlay
  },
  props: {
    ...overlayProps,
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
    const popoverRef = ref();
    const contentRef = ref();
    const showPopup = ref(props.visible);

    const state = reactive({
      rootWidth: 0,
      rootHeight: 0
    });

    const { location } = toRefs(props);

    const classes = computed(() => {
      const prefixCls = componentName;
      const { theme, customClass } = props;
      return `${prefixCls} ${prefixCls}--${theme} ${customClass}`;
    });

    const popoverContent = computed(() => {
      const prefixCls = 'nut-popover-content';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    const popoverArrow = computed(() => {
      const prefixCls = 'nut-popover-arrow';
      const direction = props.location.split('-')[0];
      return `${prefixCls} ${prefixCls}-${direction} ${location ? `${prefixCls}--${props.location}` : ''}`;
    });

    const getStyles = computed(() => {
      let cross = +state.rootHeight;
      let lengthways = +state.rootWidth;
      if (Array.isArray(props.offset) && props.offset.length == 2) {
        cross += +props.offset[1];
        lengthways += +props.offset[1];
      }
      const direction = props.location.split('-')[0];
      const style: CSSProperties = {};
      const mapd: any = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      if (['top', 'bottom'].includes(direction)) {
        style[mapd[direction]] = `${cross}px`;
        style.marginLeft = `${props.offset[0]}px`;
      } else {
        style[mapd[direction]] = `${lengthways}px`;
        style.marginTop = `${props.offset[0]}px`;
      }
      return style;
    });

    // 获取宽度
    const getContentWidth = () => {
      const { offsetHeight, offsetWidth } = popoverRef.value;
      state.rootHeight = offsetHeight;
      state.rootWidth = offsetWidth;

      setTimeout(() => {
        console.log(contentRef.value.offsetWidth);
      });
    };

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        if (value) {
          getContentWidth();
        }
      }
    );

    watch(
      () => props.location,
      (value) => {}
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
      console.log('关闭');
      emit('update:visible', false);
      emit('close');
    };

    const chooseItem = (item: any, index: number) => {
      emit('choose', item, index);
    };

    return {
      classes,
      showPopup,
      openPopover,
      popoverContent,
      popoverArrow,
      closePopover,
      chooseItem,
      popoverRef,
      getStyles,
      contentRef
    };
  }
});
</script>
