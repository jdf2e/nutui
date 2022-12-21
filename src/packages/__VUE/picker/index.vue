<template>
  <div :class="classes">
    <view class="nut-picker__bar" v-if="showToolbar">
      <view class="nut-picker__left" @click="cancel">{{ cancelText || translate('cancel') }}</view>
      <view class="nut-picker__title"> {{ title }}</view>
      <view class="nut-picker__right" @click="confirmHandler()">{{ okText || translate('confirm') }}</view>
    </view>

    <slot name="top"></slot>

    <view class="nut-picker__column" :style="columnStyle">
      <view class="nut-picker__columnitem" v-for="(column, columnIndex) in columnsList" :key="columnIndex">
        <nut-picker-column
          :ref="swipeRef"
          :column="column"
          :columnsType="columnsType"
          :value="defaultValues && defaultValues[columnIndex]"
          :threeDimensional="threeDimensional"
          :swipeDuration="swipeDuration"
          :visibleOptionNum="visibleOptionNum"
          :optionHeight="optionHeight"
          @change="
            (option:PickerOption) => {
              changeHandler(columnIndex, option);
            }
          "
        ></nut-picker-column>
      </view>
    </view>

    <slot name="default"></slot>
  </div>
</template>
<script lang="ts">
import { ref, computed, PropType, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { usePicker } from './usePicker';
import column from './Column.vue';
import baseProps from './baseProps';
const { componentName, create, translate } = createComponent('picker');
import { PickerOption } from './types';

export default create({
  components: {
    [column.name]: column
  },
  props: baseProps,
  emits: ['cancel', 'change', 'confirm', 'update:modelValue'],
  setup(props, { emit }) {
    const { changeHandler, confirm, defaultValues, columnsList, columnsType, classes, cancel } = usePicker(props, emit);

    const pickerColumn = ref<any[]>([]);

    const swipeRef = (el: any) => {
      if (el && pickerColumn.value.length < columnsList.value.length) {
        pickerColumn.value.push(el);
      }
    };
    const columnStyle = computed(() => {
      const styles: CSSProperties = {};
      styles.height = `${+props.visibleOptionNum * +props.optionHeight}px`;
      styles['--lineHeight'] = `${+props.optionHeight}px`;
      return styles;
    });

    const confirmHandler = () => {
      pickerColumn.value.length > 0 &&
        pickerColumn.value.forEach((column) => {
          column.stopMomentum();
        });

      confirm();
    };

    return {
      classes,
      column,
      columnsType,
      columnsList,
      cancel,
      changeHandler,
      confirmHandler,
      defaultValues,
      translate,
      pickerColumn,
      swipeRef,
      columnStyle
    };
  }
});
</script>
