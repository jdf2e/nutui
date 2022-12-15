<template>
  <view
    class="nut-popover-wrapper"
    @click="openPopover"
    v-if="!targetId"
    ref="popoverRef"
    :id="'popoverRef' + refRandomId"
    ><slot name="reference"></slot
  ></view>
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
      <view ref="popoverContentRef" :id="'popoverContentRef' + refRandomId" class="nut-popover-content-group">
        <view :class="popoverArrow" v-if="showArrow" :style="popoverArrowStyle"> </view>
        <slot name="content"></slot>
        <view
          v-for="(item, index) in list"
          :key="index"
          :class="[
            item.className,
            item.disabled && 'nut-popover-menu-disabled',
            'nut-popover-menu-item',
            'nut-popover-menu-taroitem'
          ]"
          @click.stop="chooseItem(item, index)"
        >
          <slot v-if="item.icon">
            <nut-icon
              v-bind="$attrs"
              class="nut-popover-item-img"
              :classPrefix="iconPrefix"
              :name="item.icon"
            ></nut-icon
          ></slot>
          <view class="nut-popover-menu-item-name">{{ item.name }}</view>
        </view>
      </view>
    </nut-popup>

    <view class="nut-popover-content-bg" v-if="showPopup" @touchmove="clickAway" @click="clickAway"></view>
  </view>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref, PropType, toRefs, reactive, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('popover');
import { useTaroRect } from '@/packages/utils/useTaroRect';
import { useRect, rect } from '@/packages/utils/useRect';
import { isArray } from '@/packages/utils/util';
import Taro from '@tarojs/taro';

export default create({
  inheritAttrs: false,
  components: {},
  props: {
    visible: { type: Boolean, default: false },
    list: { type: Array, default: [] },
    theme: { type: String as PropType<import('./type').PopoverTheme>, default: 'light' },
    location: { type: String as PropType<import('./type').PopoverLocation>, default: 'bottom' },
    offset: { type: Array, default: [0, 12] },
    arrowOffset: { type: Number, default: 0 },
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
      const { bgColor, arrowOffset, location } = props;
      const direction = location.split('-')[0];
      const skew = location.split('-')[1];
      const base = 16;

      if (bgColor) {
        styles[`border${upperCaseFirst(direction)}Color`] = bgColor;
      }

      if (props.arrowOffset != 0) {
        if (['bottom', 'top'].includes(direction)) {
          if (!skew) {
            styles.left = `calc(50% + ${arrowOffset}px)`;
          }
          if (skew == 'start') {
            styles.left = `${base + arrowOffset}px`;
          }
          if (skew == 'end') {
            styles.right = `${base - arrowOffset}px`;
          }
        }

        if (['left', 'right'].includes(direction)) {
          if (!skew) {
            styles.top = `calc(50% - ${arrowOffset}px)`;
          }
          if (skew == 'start') {
            styles.top = `${base - arrowOffset}px`;
          }
          if (skew == 'end') {
            styles.bottom = `${base + arrowOffset}px`;
          }
        }
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
      let parallel = 0;
      if (isArray(offset) && offset.length == 2) {
        cross += +offset[1];
        parallel += +offset[0];
      }
      if (width) {
        if (['bottom', 'top'].includes(direction)) {
          const h = direction == 'bottom' ? height + cross : -(conentHeight + cross);

          styles.top = `${top + h}px`;

          if (!skew) {
            styles.left = `${-(conentWidth - width) / 2 + left + parallel}px`;
          }
          if (skew == 'start') {
            styles.left = `${left + parallel}px`;
          }
          if (skew == 'end') {
            styles.left = `${rootRect.value.right + parallel}px`;
          }
        }
        if (['left', 'right'].includes(direction)) {
          const contentW = direction == 'left' ? -(conentWidth + cross) : width + cross;
          styles.left = `${left + contentW}px`;
          if (!skew) {
            styles.top = `${top - conentHeight / 2 + height / 2 - 4 + parallel}px`;
          }
          if (skew == 'start') {
            styles.top = `${top + parallel}px`;
          }
          if (skew == 'end') {
            styles.top = `${top + height + parallel}px`;
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
    const getContentWidth = async () => {
      let rect;
      if (props.targetId) {
        rect = await useTaroRect(props.targetId, Taro);
      } else {
        rect = await useTaroRect(popoverRef, Taro);
      }
      rootRect.value = rect;
    };

    const getPopoverContentW = async () => {
      let rectContent = await useTaroRect(popoverContentRef, Taro);
      conentRootRect.value = {
        height: rectContent.height,
        width: rectContent.width
      };
    };
    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
        if (value) {
          setTimeout(() => {
            getContentWidth();
          }, 100);

          setTimeout(() => {
            getPopoverContentW();
          }, 300);
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
      closePopover();
    };

    onMounted(() => {
      setTimeout(() => {
        getContentWidth();
      }, 200);
    });

    const refRandomId = Math.random().toString(36).slice(-8);

    return {
      showPopup,
      openPopover,
      popoverArrow,
      closePopover,
      chooseItem,
      popoverRef,
      popoverContentRef,
      refRandomId,
      clickAway,
      popoverArrowStyle,
      customStyle,
      getRootPosition
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
