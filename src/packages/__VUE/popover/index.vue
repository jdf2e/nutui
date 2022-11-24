<template>
  <view :class="classes">
    <view class="nut-popover-wrapper" @click="openPopover" ref="popoverRef"><slot name="reference"></slot></view>

    <!-- <Teleport :to="teleport" > -->
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
    <!-- </Teleport> -->
  </view>
</template>
<script lang="ts">
import { computed, watch, ref, PropType, toRefs, CSSProperties, reactive, onMounted, onUnmounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('popover');

export default create({
  inheritAttrs: false,
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
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
    },
    closeOnClickAction: {
      type: Boolean,
      default: true
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true
    },
    teleport: {
      type: [String, Element],
      default: 'body'
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
      let { offset, location } = props;
      if (Array.isArray(offset) && offset.length == 2) {
        cross += +offset[1];
        lengthways += +offset[1];
      }
      const direction = location.split('-')[0];
      const style: CSSProperties = {};
      const mapd: any = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      if (['top', 'bottom'].includes(direction)) {
        style[mapd[direction]] = `${cross}px`;
        style.marginLeft = `${offset[0]}px`;
      } else {
        style[mapd[direction]] = `${lengthways}px`;
        style.marginTop = `${offset[0]}px`;
      }
      return style;
    });

    // 获取宽度
    const getContentWidth = () => {
      const { offsetHeight, offsetWidth } = popoverRef.value;
      state.rootHeight = offsetHeight;
      state.rootWidth = offsetWidth;
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
    const update = (val: boolean) => {
      emit('update', val);
      emit('update:visible', val);
    };

    const openPopover = () => {
      update(!props.visible);
      emit('open');
    };

    const closePopover = () => {
      emit('update:visible', false);
      emit('close');
    };

    const chooseItem = (item: any, index: number) => {
      emit('choose', item, index);
      if (props.closeOnClickAction) {
        closePopover();
      }
    };

    const clickAway = (event: Event) => {
      const element = popoverRef.value;
      const elContent = contentRef.value;
      if (
        element &&
        !element.contains(event.target) &&
        elContent &&
        !elContent.contains(event.target) &&
        props.closeOnClickOutside
      ) {
        closePopover();
      }
    };
    onMounted(() => {
      window.addEventListener('touchstart', clickAway, true);
    });

    onUnmounted(() => {
      window.removeEventListener('touchstart', clickAway, true);
    });

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
