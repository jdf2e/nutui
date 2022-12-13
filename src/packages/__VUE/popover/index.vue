<template>
  <div class="nut-popover-wrapper" @click="openPopover" ref="popoverRef"><slot name="reference"></slot></div>
  <view :class="['nut-popover', `nut-popover--${theme}`, `${customClass}`]" :style="getRootPosition">
    <nut-popup
      :popClass="`nut-popover-content nut-popover-content--${location}`"
      :style="customStyle"
      v-model:visible="showPopup"
      position=""
      transition="nut-popover"
      :overlay="overlay"
      :duration="duration"
      :overlayStyle="overlayStyle"
      :overlayClass="overlayClass"
      :closeOnClickOverlay="closeOnClickOverlay"
    >
      <view ref="popoverContentRef" class="nut-popover-content-group">
        <view :class="popoverArrow" v-if="showArrow" :style="popoverArrowStyle"> </view>
        <slot name="content"></slot>
        <view
          v-for="(item, index) in list"
          :key="index"
          :class="[item.className, item.disabled && 'nut-popover-menu-disabled', 'nut-popover-menu-item']"
          @click.stop="chooseItem(item, index)"
        >
          <slot v-if="item.icon">
            <Icon v-bind="$attrs" class="nut-popover-item-img" :classPrefix="iconPrefix" :name="item.icon"></Icon
          ></slot>
          <view class="nut-popover-menu-item-name">{{ item.name }}</view>
        </view>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { computed, watch, ref, PropType, CSSProperties, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { isArray } from '@/packages/utils/util';
import { useRect, rect } from '@/packages/utils/useRect';
import { Icon } from '@nutui/icons-vue';
import Popup from '../popup/index.vue';
const { create } = createComponent('popover');
export default create({
  components: {
    Icon
  },
  props: {
    visible: { type: Boolean, default: false },
    list: { type: Array as PropType<import('./type').PopoverList[]>, default: [] },
    theme: { type: String as PropType<import('./type').PopoverTheme>, default: 'light' },
    location: { type: String as PropType<import('./type').PopoverLocation>, default: 'bottom' },
    offset: { type: Array, default: [0, 12] },
    customClass: { type: String, default: '' },
    showArrow: { type: Boolean, default: true },
    iconPrefix: { type: String, default: 'nut-icon' },
    duration: { type: [Number, String], default: 0.3 },
    overlay: { type: Boolean, default: false },
    overlayClass: { type: String, default: '' },
    overlayStyle: { type: Object as PropType<CSSProperties> },
    closeOnClickOverlay: { type: Boolean, default: true },
    closeOnClickAction: { type: Boolean, default: true },
    closeOnClickOutside: { type: Boolean, default: true },
    targetId: { type: String, default: '' },
    bgColor: { type: String, default: '' }
  },
  emits: ['update', 'update:visible', 'close', 'choose', 'open'],
  setup(props, { emit }) {
    const popoverRef = ref();
    const popoverContentRef = ref();
    const showPopup = ref(props.visible);

    let rootRect = ref<rect>();

    let conentRootRect = ref<{
      height: number;
      width: number;
    }>();

    const popoverArrow = computed(() => {
      const prefixCls = 'nut-popover-arrow';
      const loca = props.location;
      const direction = loca.split('-')[0];
      return `${prefixCls} ${prefixCls}-${direction} ${prefixCls}--${loca}`;
    });

    const popoverArrowStyle = computed(() => {
      const styles: CSSProperties = {};
      const direction = upperCaseFirst(props.location.split('-')[0]);
      if (props.bgColor) {
        styles[`border${direction}Color`] = props.bgColor;
      }

      return styles;
    });

    const upperCaseFirst = (str: string) => {
      var str = str.toLowerCase();
      str = str.replace(/\b\w+\b/g, (word) => word.substring(0, 1).toUpperCase() + word.substring(1));
      return str;
    };

    const getRootPosition = computed(() => {
      let styles: CSSProperties = {};

      if (!rootRect.value || !conentRootRect.value) return {};

      const conentWidth = conentRootRect.value.width;
      const conentHeight = conentRootRect.value.height;
      const { width, height, left, top } = rootRect.value;

      const { location, offset } = props;
      const direction = location.split('-')[0];
      const skew = location.split('-')[1];
      let cross = 0;
      if (isArray(offset) && offset.length == 2) {
        cross += +offset[1];
      }
      if (width) {
        if (['bottom', 'top'].includes(direction)) {
          console.log('高度', conentHeight);
          const h = direction == 'bottom' ? height + cross : -(conentHeight + cross);
          styles.top = `${top + h}px`;

          if (!skew) {
            styles.left = `${-(conentWidth - width) / 2 + left}px`;
          }
          if (skew == 'start') {
            styles.left = `${left}px`;
          }
          if (skew == 'end') {
            styles.left = `${rootRect.value.right}px`;
          }
        }
        if (['left', 'right'].includes(direction)) {
          const contentW = direction == 'left' ? -(conentWidth + cross) : width + cross;
          styles.left = `${left + contentW}px`;
          if (!skew) {
            styles.top = `${top - conentHeight / 2 + height / 2 - 4}px`;
          }
          if (skew == 'start') {
            styles.top = `${top}px`;
          }
          if (skew == 'end') {
            styles.top = `${top + height}px`;
          }
        }
      }

      return styles;
    });

    const customStyle = computed(() => {
      const styles: CSSProperties = {};
      if (props.bgColor) {
        styles.background = props.bgColor;
      }

      return styles;
    });
    // 获取宽度
    const getContentWidth = () => {
      let rect = useRect(popoverRef.value);
      if (props.targetId) {
        rect = useRect(document.querySelector(`#${props.targetId}`));
      }
      rootRect.value = rect;
      setTimeout(() => {
        conentRootRect.value = {
          height: popoverContentRef.value.clientHeight,
          width: popoverContentRef.value.clientWidth
        };
      }, 0);
    };
    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        if (value) {
          window.addEventListener('touchstart', clickAway, true);
          getContentWidth();
        } else {
          window.removeEventListener('touchstart', clickAway, true);
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
      !item.disabled && emit('choose', item, index);
      if (props.closeOnClickAction) {
        closePopover();
      }
    };
    const clickAway = (event: Event) => {
      const element = popoverRef.value;
      const elContent = popoverContentRef.value;

      let el = element && !element.contains(event.target);

      if (props.targetId) {
        const dom = document.querySelector(`#${props.targetId}`);
        el = dom && !dom.contains(event.target);
      }
      if (el && elContent && !elContent.contains(event.target) && props.closeOnClickOutside) {
        closePopover();
      }
    };

    return {
      showPopup,
      openPopover,
      popoverArrow,
      closePopover,
      chooseItem,
      popoverRef,
      popoverContentRef,
      getRootPosition,
      customStyle,
      popoverArrowStyle
    };
  }
});
</script>
