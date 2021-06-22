<template>
  <picker
    :mode="mode"
    :range="range"
    @change="onChange"
    @columnchange="onColumnChange"
    :value="value"
  >
    <slot></slot>
  </picker>
</template>

<script lang="ts">
import { onUpdated, ref, watch } from 'vue';
const { create } = createComponent('picker');
import { commonProps } from './commonProps';
import { createComponent } from '@/packages/utils/create';
export default create({
  props: {
    mode: {
      type: String,
      default: 'selector'
    },
    ...commonProps
  },
  emits: ['confirm'],
  setup(props, { emit }) {
    let value = ref<any>([]);
    let range = ref<any>([]);

    onUpdated(() => {
      console.log('updated', props.listData);
    });

    const onChange = (e: any) => {
      let ret;

      if (props.mode === 'selector') {
        ret = props.listData[e.detail.value];
      } else if (props.mode === 'multiSelector') {
        ret = range.value
          ?.map((item: any, idx: number) => item[e.detail.value[idx]])
          .filter((res: any) => res);
      }
      emit('confirm', e.detail.value, ret);
    };

    watch(
      props.listData,
      (val: any) => {
        try {
          if (val.length) {
            value.value = [];
            range.value = [];
            if (props.mode === 'selector') {
              range.value = props.listData;
            } else if (props.mode === 'multiSelector') {
              val.forEach((item: any) => {
                value.value.push(item.defaultIndex);
                range.value.push(item.values);
              });
            }
          }
        } catch (error) {
          console.log('listData参数格式错误', error);
        }
      },
      { immediate: true, deep: true }
    );

    const onColumnChange = (e: any) => {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    };

    return {
      confirm,
      onChange,
      value,
      range,
      onColumnChange
    };
  }
});
</script>

<style lang="scss" scoped></style>
