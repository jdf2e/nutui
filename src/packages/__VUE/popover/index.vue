<template>
  <view @click.stop="openPopover" :class="classes">
    <div ref="reference"> <slot name="reference"></slot></div>
    <template v-if="showPopup">
      <view class="more-background" @click.stop="closePopover"> </view>
      <view :class="popoverContent" :style="getStyle">
        <view :class="popoverArrow" :style="getArrowStyle"> </view>

        <slot name="content"></slot>

        <view
          v-for="(item, index) in list"
          :key="index"
          :class="{ 'title-item': true, disabled: item.disabled }"
          @click.stop="chooseItem(item, index)"
        >
          <slot v-if="item.icon"> <nut-icon class="item-img" :name="item.icon"></nut-icon></slot>
          <view class="title-name">{{ item.name }}</view>
        </view>
      </view>
    </template>
  </view>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref, PropType, toRefs, reactive, CSSProperties } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('popover');
import Popup, { popupProps } from '../popup/index.vue';
import Button from '../button/index.vue';

export type PopoverTheme = 'light' | 'dark';

export type PopoverLocation = 'bottom' | 'top' | 'left' | 'right';

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
      type: String as PropType<PopoverTheme>,
      default: 'light'
    },

    location: {
      type: String as PropType<PopoverLocation>,
      default: 'bottom'
    }
  },
  emits: ['update', 'update:visible', 'close', 'choose', 'openPopover'],
  setup(props, { emit }) {
    const reference = ref();
    const state = reactive({
      elWidth: 0,
      elHeight: 0
    });
    const showPopup = ref(props.visible);

    const { theme, location } = toRefs(props);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--${theme.value}`]: theme.value
      };
    });

    const popoverContent = computed(() => {
      const prefixCls = 'popoverContent';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    const popoverArrow = computed(() => {
      const prefixCls = 'popoverArrow';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${location.value}`]: location.value
      };
    });

    function getReference() {
      const domElem = document.documentElement;
      state.elWidth = reference.value.offsetWidth;
      state.elHeight = reference.value.offsetHeight;
    }

    const getStyle = computed(() => {
      const style: CSSProperties = {};
      if (location.value == 'top') {
        style.bottom = state.elHeight + 20 + 'px';
        style.left = 0 + 'px';
      } else if (location.value == 'right') {
        style.top = 0 + 'px';
        style.right = -state.elWidth + 'px';
      } else if (location.value == 'left') {
        style.top = 0 + 'px';
        style.left = -state.elWidth + 'px';
      } else {
        style.top = state.elHeight + 20 + 'px';
        style.left = 0 + 'px';
      }

      return style;
    });

    const getArrowStyle = computed(() => {
      const style: CSSProperties = {};
      if (location.value == 'top') {
        style.bottom = -20 + 'px';
        style.left = state.elWidth / 2 + 'px';
      } else if (location.value == 'right') {
        style.top = 20 + 'px';
        style.left = -20 + 'px';
      } else if (location.value == 'left') {
        style.top = 20 + 'px';
        style.right = -20 + 'px';
      } else {
        style.left = state.elWidth / 2 + 'px';
        style.top = -20 + 'px';
      }

      return style;
    });

    onMounted(() => {
      getReference();
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
      getArrowStyle
    };
  }
});
</script>
