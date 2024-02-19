<template>
  <view :class="classes">
    <nut-form ref="formRef" :model-value="formValue">
      <nut-form-item
        v-for="(item, index) of list"
        :key="index"
        :label="item.label"
        :required="item.required"
        :rules="item.rules"
        :prop="item.formItemProp"
      >
        <template v-if="item.type === 'radio'">
          <nut-radio-group v-model="formValue[item.formItemProp]">
            <nut-radio
              v-for="(radioItem, radioIndex) of item.radioLabel"
              :key="radioIndex"
              shape="button"
              :label="radioItem.label"
            >
              {{ radioItem.label }}
            </nut-radio>
          </nut-radio-group>
        </template>
        <template v-else>
          <input
            v-model="formValue[item.formItemProp]"
            class="nut-input-text"
            :placeholder="item.placeholder"
            type="text"
          />
        </template>
      </nut-form-item>
    </nut-form>
    <div v-if="submit" class="nut-invoice__submit">
      <nut-button type="primary" block @click="submitFun">提交审批</nut-button>
    </div>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed, ref, onMounted, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import NutForm from '../form';
import NutFormItem from '../formitem';
import NutRadio from '../radio/index.vue';
import NutRadioGroup from '../radiogroup/index.vue';
import NutButton from '../button';
const { componentName, create } = createComponent('invoice');
export default create({
  components: {
    NutForm,
    NutFormItem,
    NutRadio,
    NutRadioGroup,
    NutButton
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    formValue: {
      type: Object,
      default: {}
    },
    submit: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    'submit',
    'scrollBottom',
    // will be deprecated
    'onSubmit'
  ],

  setup(props, { emit }) {
    const formRef = ref();

    const list: any = ref([]);

    const state = reactive({
      // list: []
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    onMounted(() => {
      init();
    });

    const init = () => {
      list.value = props.data;
    };

    const submitFun = () => {
      formRef.value.validate().then(({ valid, errors }: any) => {
        emit('submit', valid, errors);
        emit('onSubmit', valid, errors);
      });
    };

    watch(
      () => props.data,
      () => init(),
      { deep: true }
    );

    return {
      ...toRefs(state),
      classes,
      formRef,
      list,
      submitFun
    };
  }
});
</script>
