<template>
  <view ref="dmBody" :class="classes">
    <view ref="dmContainer" class="dmContainer"></view>
    <!-- <view v-for="(item, index) of danmuList" :key="'danmu'+index" class="dmitem">
      {{item}}
    </view> -->
  </view>
</template>
<script lang="ts">
import {
  computed,
  onMounted,
  onUnmounted,
  onDeactivated,
  ref,
  reactive,
  toRefs,
  watch,
  nextTick
} from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('barrage');

export default create({
  props: {
    danmu: {
      type: Array,
      default: () => []
    },
    frequency: {
      type: Number,
      default: 500
    },
    speeds: {
      type: Number,
      default: 2000
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    let dmBody = ref<HTMLDivElement>(document.createElement('div'));
    let dmContainer = ref<HTMLDivElement>(document.createElement('div'));

    let timer: number = 0;
    const danmuList = ref<any[]>(props.danmu);
    const rows = ref<number>(props.rows);
    const top = ref<number>(props.top);
    const index = ref<number>(0);
    const speeds = props.speeds;
    const danmuCWidth = ref(0);

    onMounted(() => {
      danmuCWidth.value = dmBody.value.offsetWidth;
      run();
    });

    onUnmounted(() => {
      clearInterval(timer);
      timer = 0;
    });

    onDeactivated(() => {
      clearInterval(timer);
      timer = 0;
    });

    watch(
      () => props.danmu,
      (newValue, oldVlaue) => {
        danmuList.value = [...newValue];
      }
    );

    const add = (word: string) => {
      const _index = index.value % danmuList.value.length;
      danmuList.value.splice(_index, 0, word);
    };

    const run = () => {
      clearInterval(timer);
      timer = 0;
      timer = setInterval(() => {
        play();
        run();
      }, props.frequency);
    };

    const play = () => {
      const _index = props.loop
        ? index.value % danmuList.value.length
        : index.value;
      let el = document.createElement(`view`);
      el.innerHTML = danmuList.value[_index] as string;
      el.classList.add('dmitem');
      dmContainer.value.appendChild(el);

      nextTick(() => {
        const width = el.offsetWidth;
        const height = el.offsetHeight;
        el.classList.add('move');
        el.style.animationDuration = `${speeds}ms`;
        el.style.top = (_index % rows.value) * (height + top.value) + 20 + 'px';
        el.style.width = width + 20 + 'px';
        // el.style.left = "-"+(_index % rows.value) + 'px';
        el.style.setProperty('--move-distance', `-${danmuCWidth.value}px`);
        el.dataset.index = `${_index}`;
        el.addEventListener('animationend', () => {
          dmContainer.value.removeChild(el);
        });
        index.value++;
      });
    };
    return { classes, danmuList, dmBody, dmContainer, add };
  }
});
</script>
