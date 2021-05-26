<template>
  <view>
    <nut-popup
      :style="{
        padding: '32px 24px 28px 24px',
        borderRadius: '12px',
        textAlign: 'center'
      }"
      v-model:visible="show"
      :closeable="true"
      @click-close-icon="closeIcon"
      :close-on-click-overlay="closeOnClickOverlay"
      @click-overlay="close"
    >
      <view class="nut-shortpsd-title">{{ title }}</view>
      <view class="nut-shortpsd-subtitle">{{ desc }}</view>
      <view class="nut-input-w">
        <input
          ref="realpwd"
          class="nut-input-real"
          type="number"
          maxlength="6"
          v-model="realInput"
          @input="changeValue"
        />
        <view class="nut-shortpsd-fake" @click="focus">
          <view
            class="nut-shortpsd-li"
            v-for="(sublen, index) in new Array(comLen)"
            v-bind:key="index"
          >
            <view
              class="nut-shortpsd-icon"
              v-if="realInput.length > index"
            ></view>
          </view>
        </view>
      </view>
      <view class="nut-shortpsd-message">
        <view class="nut-shortpsd-error">{{ errorMsg }}</view>
        <view class="nut-shortpsd-forget" v-if="tips">
          <nut-icon class="icon" size="11px" name="tips"></nut-icon>
          <view @click="onTips">{{ tips }}</view>
        </view>
      </view>
      <view v-if="!noButton" class="nut-shortpsd-footer">
        <view class="nut-shortpsd-cancle" @click="close">取消</view>
        <view class="nut-shortpsd-sure" @click="sureClick">确认</view>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { ref, computed, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('shortpassword');
export default create({
  props: {
    title: {
      type: String,
      default: '请输入密码'
    },
    desc: {
      type: String,
      default: '您使用了虚拟资产，请进行验证'
    },
    tips: {
      type: String,
      default: '忘记密码'
    },
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    errorMsg: {
      type: String,
      default: ''
    },
    noButton: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    length: {
      type: [String, Number], //4～6
      default: 6
    }
  },
  emits: [
    'update:value',
    'update:visible',
    'complete',
    'change',
    'ok',
    'tips',
    'close',
    'cancel'
  ],
  setup(props, { emit }) {
    const realInput = ref(props.value);
    const realpwd = ref();
    const comLen = computed(() => range(Number(props.length)));
    const show = ref(props.visible);
    // 方法
    function sureClick() {
      emit('ok', realInput.value);
    }
    function focus() {
      realpwd.value.focus();
    }
    watch(
      () => props.visible,
      value => {
        show.value = value;
      }
    );
    function changeValue(e: Event) {
      const input = e.target as HTMLInputElement;
      let val = input.value;
      if (val.length > comLen.value) {
        val = val.slice(0, comLen.value);
        realInput.value = val;
      }
      if (realInput.value.length === comLen.value) {
        emit('complete', val);
      }
      emit('change', val);
      emit('update:value', val);
    }
    function close() {
      emit('update:visible', false);
      emit('cancel');
    }
    function closeIcon() {
      emit('update:visible', false);
      emit('close');
    }
    function range(val: number) {
      return Math.min(Math.max(4, val), 6);
    }
    function onTips() {
      emit('tips');
    }
    return {
      comLen,
      sureClick,
      realInput,
      realpwd,
      focus,
      range,
      changeValue,
      close,
      onTips,
      show,
      closeIcon
    };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
