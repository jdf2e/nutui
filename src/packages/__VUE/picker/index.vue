<template>
  <div class="nut-picker">
    <view class="nut-picker__bar" v-if="showToolbar">
      <view class="nut-picker__left" @click="cancel">{{ cancelText || translate('cancel') }}</view>
      <view class="nut-picker__title"> {{ title }}</view>
      <view class="nut-picker__right" @click="confirmHandler">{{ okText || translate('confirm') }}</view>
    </view>

    <slot name="top"></slot>

    <view class="nut-picker__column" :style="columnStyle">
      <view class="nut-picker__columnitem" v-for="(column, columnIndex) in columnsList" :key="columnIndex">
        <nut-picker-column
          :ref="swipeRef"
          :column="column"
          :columns-type="columnsType"
          :field-names="columnFieldNames"
          :value="defaultValues && defaultValues[columnIndex]"
          :three-dimensional="threeDimensional"
          :swipe-duration="swipeDuration"
          :visible-option-num="visibleOptionNum"
          :option-height="optionHeight"
          @change="
            (option: any) => {
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
import { ref, computed, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { usePicker } from './usePicker';
import column from './Column.vue';
import baseProps from './baseProps';
const { create, translate } = createComponent('picker');

export default create({
  components: {
    [column.name]: column
  },
  props: baseProps,
  emits: ['cancel', 'change', 'confirm', 'update:modelValue'],
  setup(props, { emit }) {
    const { changeHandler, confirm, defaultValues, columnsList, columnsType, columnFieldNames, cancel } = usePicker(
      props,
      emit
    );

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
      column,
      columnsType,
      columnsList,
      columnFieldNames,
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
