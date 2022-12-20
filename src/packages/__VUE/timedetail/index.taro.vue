<template>
  <view :class="classes">
    <view class="nut-time-detail__detail nut-time-detail__detail--moring">
      <!-- <view class="nut-time-detail__detail__time">上午</view> -->
      <view class="nut-time-detail__detail__list">
        <view :class="getClass(item)" v-for="item in renderData" :key="item" @click="handleTime(item)">{{ item }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs, inject, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('time-detail');
export default create({
  name: 'timedetail',
  props: {
    times: {
      type: Array,
      default: () => {
        return [];
      }
    },
    detailKey: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['select'],
  setup: (props: any, context: any) => {
    const currentKey = inject('currentKey');
    const currentTime = inject('currentTime');
    const muti = inject('muti');

    const state = reactive({
      currentKey,
      currentTime: currentTime as any[]
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const getClass = (item: string) => {
      let find = state.currentTime.find((item: any) => item.key == state.currentKey);
      if (find) {
        return {
          'nut-time-detail__detail__list__item': true,
          'nut-time-detail__detail__list__item--curr': find.list.filter((value: string) => value === item).length > 0
        };
      }
    };

    const renderData = computed(() => {
      return props.times.find((time: any) => time.key == state.currentKey)['list'];
    });

    const handleTime = (time: string) => {
      context.emit('select', time);
    };

    return {
      classes,
      ...toRefs(state),
      getClass,
      renderData,
      handleTime
    };
  }
});
</script>
