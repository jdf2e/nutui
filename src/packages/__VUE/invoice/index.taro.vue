<template>
  <view :class="classes">
    <nut-form :model-value="formValue" ref="formRef">
      <nut-form-item
        v-for="(item, index) of list"
        :key="index"
        :label="item.label"
        :required="item.required"
        :rules="item.rules"
        :prop="item.formItemProp"
      >
        <template v-if="item.type === 'radio'">
          <nut-radiogroup v-model="formValue[item.formItemProp]">
            <nut-radio
              v-for="(radioItem, radioIndex) of item.radioLabel"
              :key="radioIndex"
              shape="button"
              :label="radioItem.label"
            >
              {{ radioItem.label }}
            </nut-radio>
          </nut-radiogroup>
        </template>
        <template v-else>
          <input
            class="nut-input-text"
            :placeholder="item.placeholder"
            v-model="formValue[item.formItemProp]"
            type="text"
          />
        </template>
      </nut-form-item>
    </nut-form>
    <div v-if="submit" class="nut-invoice__submit">
      <nut-button type="primary" block @click="submit">提交审批</nut-button>
    </div>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed, ref, onMounted, watch, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('invoice');
export default create({
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
  emits: ['onSubmit', 'scroll-bottom'],

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

    const submit = () => {
      formRef.value.validate().then(({ valid, errors }: any) => {
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
      submit
    };
  }
});
</script>
