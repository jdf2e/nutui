<template>
  <picker
    :mode="mode"
    :range="computedData"
    @change="onChange"
    @columnChange="onColumnChange"
    :value="value"
  >
    <slot></slot>
  </picker>
</template>

<script lang="ts">
import { toRefs, onMounted, reactive, computed, CSSProperties, ref } from 'vue';
const { create } = createComponent('picker');
import { commonProps } from '../../../../../../packages/__VUE/picker/commonProps';
import { createComponent } from './../../../../../../packages/utils/create';
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

    const onChange = (e: any) => {
      let ret;
      if (props.mode === 'selector') {
        ret = props.listData[e.detail.value];
      } else if (props.mode === 'multiSelector') {
        ret = computedData.value?.map(
          (item: any, idx) => item[e.detail.value[idx]]
        );
      }
      emit('confirm', ret);
    };

    const computedData = computed(() => {
      if (props.mode === 'selector') {
        return props.listData;
      } else if (props.mode === 'multiSelector') {
        try {
          if (props.listData.length) {
            const range: object[] = []; // 构造range
            props.listData.forEach((item: any, idx: number) => {
              value.value.push(item.defaultIndex);
              range.push(item.values);
            });
            return range;
          }
        } catch (error) {
          console.log('listData参数格式错误', error);
        }
      }
    });

    const onColumnChange = e => {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    };

    return {
      confirm,
      onChange,
      computedData,
      value,
      onColumnChange
    };
  }
});
</script>

<style lang="scss" scoped></style>
