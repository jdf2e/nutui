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
        <input
          class="nut-input-text"
          :placeholder="item.placeholder"
          v-model="formValue[item.formItemProp]"
          type="text"
        />
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
    required: {
      type: Boolean,
      default: false
    },
    formValue: {
      type: Object,
      default: {}
    },
    rules: {
      type: Array as PropType<import('./types').FormItemRule[]>,
      default: () => {
        return [];
      }
    },
    formItemProp: {
      type: String,
      default: ''
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
      console.log('prefixCls', prefixCls);
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
      console.log('11');
      formRef.value.validate().then(({ valid, errors }: any) => {
        console.log('22', valid, errors);
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
