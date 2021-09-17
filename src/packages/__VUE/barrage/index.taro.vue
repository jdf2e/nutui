<template>
  <view class="dmBody" :class="classes">
    <view class="dmContainer" id="dmContainer"></view>
    <!-- <view v-for="(item, index) of danmuList" :key="'danmu'+index" class="dmitem">
      {{item}}
    </view> -->
  </view>
</template>
<script lang="ts">
import {
  computed,
  onMounted,
  ref,
  reactive,
  toRefs,
  watch,
  nextTick,
  onUnmounted,
  onDeactivated
} from 'vue';
import Taro from '@tarojs/taro';
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
      default: 200
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

    let timer: number = 0;
    const danmuList = ref<any[]>(props.danmu);
    const rows = ref<number>(props.rows);
    const top = ref<number>(props.top);
    const index = ref<number>(0);
    const speeds = props.speeds;

    onMounted(() => {
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
      const query = Taro.createSelectorQuery();
      let dmContainer: any = document.getElementById('dmContainer');
      const _index = props.loop
        ? index.value % danmuList.value.length
        : index.value;
      let el: any = document.createElement(`view`);
      el.innerHTML = danmuList.value[_index] as string;
      el.classList.add('dmitem');
      dmContainer.appendChild(el);

      let domList: Array<any> = [];
      query.selectAll('.dmitem').boundingClientRect((recs: any) => {
        domList = recs;
      });

      nextTick(() => {
        query
          .select('.dmBody')
          .boundingClientRect((rec) => {
            let danmuCWidth = rec.width;
            // let width = domList[_index]['width'];
            let height = domList[_index]['height'];
            el.classList.add('move');
            el.style.animationDuration = `${speeds}ms`;
            el.style.top =
              (_index % rows.value) * (height + top.value) + 20 + 'px';
            // el.style.width = width + 20 + 'px';
            el.style.width = 'auto';
            // el.style.left = "-"+(_index % rows.value) + 'px';
            el.style.setProperty('--move-distance', `-${danmuCWidth}px`);
            el.dataset.index = `${_index}`;
            el.addEventListener('animationend', () => {
              dmContainer.removeChild(el);
            });
            index.value++;
          })
          .exec();
      });
    };
    return { classes, danmuList, add };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
