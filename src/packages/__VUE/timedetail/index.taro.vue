<template>
  <view class="nut-time-detail">
    <view class="nut-time-detail__detail nut-time-detail__detail--moring">
      <view class="nut-time-detail__detail__list">
        <view v-for="item in renderData" :key="item" :class="getClass(item)" @click="handleTime(item)">{{ item }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs, inject, computed, PropType } from 'vue';
import { createComponent } from '@/packages/utils';
const { create } = createComponent('time-detail');
export default create({
  name: 'timedetail',
  props: {
    times: {
      type: Array as PropType<any[]>,
      default: () => []
    }
  },
  emits: ['select'],
  setup: (props, { emit }) => {
    const currentKey = inject('currentKey');
    const currentTime = inject('currentTime');

    const state = reactive({
      currentKey,
      currentTime: currentTime as any[]
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
      emit('select', time);
    };

    return {
      ...toRefs(state),
      getClass,
      renderData,
      handleTime
    };
  }
});
</script>
