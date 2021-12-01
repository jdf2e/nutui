<template>
  <nut-popup
    :visible="visible"
    position="bottom"
    round
    :closeable="true"
    :destroy-on-close="false"
    @click-overlay="closePopup"
    @click-close-icon="closePopup"
  >
    <template v-if="title">
      <view class="nut-cascader__bar">{{ title }}</view>
    </template>

    <nut-cascader-item
      @change="onChange"
      @pathChange="onPathChange"
      :modelValue="innerValue"
      :options="options"
      :lazy="lazy"
      :lazyLoad="lazyLoad"
      :valueKey="valueKey"
      :textKey="textKey"
      :childrenKey="childrenKey"
      :convertConfig="convertConfig"
      :visible="visible"
    />
  </nut-popup>
</template>
<script lang="ts">
import { watch, ref, Ref } from 'vue';
import { CascaderValue, CascaderOption } from './types';
import { createComponent } from '../../utils/create';
const { create } = createComponent('cascader');
import CascaderItem from './cascader-item.vue';

export default create({
  components: {
    [CascaderItem.name]: CascaderItem
  },
  props: {
    modelValue: Array,
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    options: {
      type: Array,
      default: () => []
    },
    lazy: Boolean,
    lazyLoad: Function,
    valueKey: {
      type: String,
      default: 'value'
    },
    textKey: {
      type: String,
      default: 'text'
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    convertConfig: Object
  },
  emits: ['update:modelValue', 'change', 'pathChange', 'update:visible', 'close'],
  setup(props, { emit }) {
    const innerValue: Ref<CascaderValue> = ref(props.modelValue as CascaderValue);

    const onChange = (value: CascaderValue, pathNodes: CascaderOption[]) => {
      innerValue.value = value;
      emit('change', value, pathNodes);
      emit('update:modelValue', value);
      closePopup();
    };

    const onPathChange = (pathNodes: CascaderOption[]) => {
      emit('pathChange', pathNodes);
    };

    const closePopup = () => {
      emit('close');
      emit('update:visible', false);
    };

    watch(
      () => props.modelValue,
      (value) => {
        if (value !== innerValue.value) {
          innerValue.value = value as CascaderValue;
        }
      }
    );

    return {
      onChange,
      onPathChange,
      closePopup,
      innerValue
    };
  }
});
</script>
