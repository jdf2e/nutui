<template>
  <view :class="classes">
    <view ref="barRef" class="nut-menu__bar" :class="{ opened: opened }">
      <template v-for="(item, index) in children" :key="index">
        <view
          class="nut-menu__item"
          :class="{ disabled: item.disabled, active: item.state.showPopup }"
          :style="{ color: item.state.showPopup ? activeColor : '' }"
          @click="!item.disabled && toggleItem(index)"
        >
          <view class="nut-menu__title" :class="getClasses(item.state.showPopup)">
            <view class="nut-menu__title-text">{{ item.renderTitle() }}</view>
            <span class="nut-menu__title-icon">
              <slot name="icon">
                <RectUp v-if="direction === 'up'" />
                <RectDown v-else />
              </slot>
            </span>
          </view>
        </view>
      </template>
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, ref, onMounted, onUnmounted, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useRect } from '@/packages/utils/useRect';
const { componentName, create } = createComponent('menu');
import { RectUp, RectDown } from '@nutui/icons-vue';
import { MENU_KEY, MenuDirection } from './types';
import { useChildren } from '@/packages/utils/useRelation';
export default create({
  components: {
    RectUp,
    RectDown
  },
  props: {
    activeColor: {
      type: String,
      default: ''
    },
    overlay: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String as PropType<MenuDirection>,
      default: 'down'
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: false
    },
    titleClass: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const barRef = ref<HTMLElement>();
    const offset = ref(0);
    const isScrollFixed = ref(false);

    const { children, linkChildren } = useChildren(MENU_KEY);

    const opened = computed(() => children.some((item) => item.state.showWrapper));

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        'scroll-fixed': isScrollFixed.value
      };
    });

    const updateOffset = () => {
      if (barRef.value) {
        const rect = useRect(barRef);

        if (props.direction === 'down') {
          offset.value = rect.bottom;
        } else {
          offset.value = window.innerHeight - rect.top;
        }
      }
    };

    linkChildren({ props, offset });

    const toggleItem = (active: number) => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    };

    const getScrollTop = (el: Element | Window) => {
      return Math.max(0, 'scrollTop' in el ? el.scrollTop : el.pageYOffset);
    };

    const onScroll = () => {
      const { scrollFixed } = props;

      const scrollTop = getScrollTop(window);

      isScrollFixed.value = scrollTop > (typeof scrollFixed === 'boolean' ? 30 : Number(scrollFixed));
    };

    const getClasses = (showPopup: boolean) => {
      let str = '';
      const { titleClass } = props;

      if (showPopup) {
        str += 'active';
      }

      if (titleClass) {
        str += ` ${titleClass}`;
      }

      return str;
    };

    onMounted(() => {
      const { scrollFixed } = props;

      if (scrollFixed) {
        window.addEventListener('scroll', onScroll);
      }
    });

    onUnmounted(() => {
      const { scrollFixed } = props;

      if (scrollFixed) {
        window.removeEventListener('scroll', onScroll);
      }
    });

    return {
      toggleItem,
      children,
      opened,
      classes,
      barRef,
      getClasses
    };
  }
});
</script>
