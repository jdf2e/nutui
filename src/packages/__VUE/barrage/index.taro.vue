<template>
  <view class="dmBody" :class="classes">
    <view class="dmContainer" id="dmContainer">
      <view
        v-for="(item, index) of danmuList"
        :key="'danmu' + index"
        :class="['dmitem', 'dmitem' + index, 'move']"
        :style="styleList[index]"
      >
        {{ item.length > 8 ? item.substr(0, 8) + '...' : item }}
      </view>
    </view>
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
  onDeactivated,
  getCurrentInstance
} from 'vue';
import { createComponent } from '../../utils/create';
import Taro from '@tarojs/taro';
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
    const timeId = ref(new Date().getTime());
    const danmuList = ref<any[]>(props.danmu);
    const rows = ref<number>(props.rows);
    const top = ref<number>(props.top);
    const speeds = props.speeds;

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['dmBody' + timeId.value]: true
      };
    });

    onMounted(() => {
      runStep();
    });

    onUnmounted(() => {
      danmuList.value = [];
    });

    onDeactivated(() => {
      danmuList.value = [];
    });

    watch(
      () => props.danmu,
      (newValue, oldVlaue) => {
        danmuList.value = [...newValue];
      }
    );

    const add = (word: string) => {
      danmuList.value = [...danmuList.value, word];
      runStep();
    };

    const getNode = (index) => {
      const query = Taro.createSelectorQuery();
      setTimeout(() => {
        let width = 100;
        query.select('.dmBody' + timeId.value).boundingClientRect((rec) => {
          width = rec.width || 300;
        });
        query
          .select('.dmitem' + index)
          .boundingClientRect((recs: any) => {
            let height = recs.height;
            let nodeTop = (index % rows.value) * (height + top.value) + 20 + 'px';
            styleInfo(index, nodeTop, width);
          })
          .exec();
        // let ele = document.getElementsByClassName('dmitem'+index)[0];
        // let transitionFlag = false;
        // ele.addEventListener('animationend', (e:any) => {
        //   if(e.target.id === e.currentTarget.id && transitionFlag) {
        //     transitionFlag = false;
        //     // deleteNode(index)
        //   }else {
        //     transitionFlag = true;
        //   }
        // }, false);
      }, 500);
    };

    const runStep = () => {
      danmuList.value.forEach((item, index) => {
        getNode(index);
      });
    };
    let styleList = reactive([]);
    const styleInfo = (index, nodeTop, width) => {
      let n = Math.floor(Math.random() * (10 - 5)) + 5;
      let timeIndex = index - rows.value > 0 ? index - rows.value : 0;
      let list = styleList;
      let time = list[timeIndex] ? Number(list[timeIndex]['--time']) : 0;

      let obj = {
        top: nodeTop,
        '--time': `${props.frequency * index + time}`,
        animationDuration: `${speeds}ms`,
        animationIterationCount: `${props.loop ? 'infinite' : 1}`,
        animationDelay: `${props.frequency * index + time}ms`,
        '--move-distance': `-${width}px`
      };
      styleList.push(obj);
    };

    return { classes, danmuList, add, styleList };
  }
});
</script>
