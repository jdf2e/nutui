<template>
  <div
    :class="['nut-backtop', { show: backTop }]"
    :style="{
      right: styleRight,
      bottom: styleBottom,
      'z-index': zIndex
    }"
    @click="click"
  >
    <slot>
      <nut-icon size="19px" class="nut-backtop-main" name="top"></nut-icon>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('backtop');

export default create({
  props: {
    //距离页面底部
    bottom: {
      type: Number,
      default: 20
    },
    //距离页面右侧
    right: {
      type: Number,
      default: 10
    },
    ///获取容器ID
    elId: {
      type: String,
      default: ''
    },
    //页面垂直滚动多高后出现
    distance: {
      type: Number,
      default: 200
    },
    //设置层级
    zIndex: {
      type: Number,
      default: 1111
    }
  },

  emits: ['click'],

  components: {},

  setup(props, { emit }) {
    const styleBottom = computed(() => `${props.bottom}px`);
    const styleRight = computed(() => `${props.right}px`);
    // const styleDistance = computed(() => `${props.distance}px`);
    const zIndex = computed(() => `${props.zIndex}px`);

    //默认图标不出现
    const backTop = ref(false);

    let scrollEl: Window | HTMLElement = window;
    const elId = ref(props.elId);

    function scrollListener() {
      //滚动条偏移量
      //Window
      if (scrollEl instanceof Window) {
        const scrollTop =
          scrollEl.pageYOffset !== undefined ? scrollEl.pageYOffset : '';
        backTop.value = scrollTop >= props.distance;
        //DOM
      } else if (scrollEl instanceof HTMLElement) {
        const scrollTop = scrollEl.scrollTop;
        backTop.value = scrollTop >= props.distance;
      }
    }

    //点击按钮返回顶部
    function scroll(y = 0) {
      if (scrollEl instanceof Window) {
        window.scrollTo(0, y);
      } else if (scrollEl instanceof HTMLElement) {
        scrollEl.scrollTop = y;
      }
    }

    //监听页面滚动事件
    function addEventListener() {
      scrollEl.addEventListener('scroll', scrollListener, true);
    }

    //解绑监听页面滚动事件
    function removeEventListener() {
      scrollEl.removeEventListener('scroll', scrollListener, true);
    }
    // function deactivated() {
    //   keepAlive.value = true;
    //   removeEventListener();
    // }

    onUnmounted(() => {
      removeEventListener();
    });

    //点击回到顶部
    function click() {
      scroll();
      emit('click');
    }

    function init() {
      //重新获取容器id
      const _scrollEl = document.getElementById(elId.value);

      if (elId.value && _scrollEl) {
        scrollEl = _scrollEl;
        _scrollEl.style.scrollBehavior = 'smooth';
      }

      addEventListener();
      scrollListener();
    }

    onMounted(() => {
      init();
    });

    return {
      backTop,
      scrollEl,
      click,
      styleBottom,
      styleRight,
      zIndex
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
