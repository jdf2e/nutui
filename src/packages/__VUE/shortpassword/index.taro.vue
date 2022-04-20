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
      <view class="nut-shortpsd-title">{{ title || translate('title') }}</view>
      <view class="nut-shortpsd-subtitle">{{ desc || translate('desc') }}</view>
      <input
        v-if="isWx && visible"
        class="nut-input-real-taro"
        :id="'nut-input-real-taro-' + randRef"
        type="number"
        :maxlength="length"
        v-model="realInput"
        @input="changeValue"
      />
      <view class="nut-input-w">
        <input
          v-if="!isWx"
          ref="realpwd"
          class="nut-input-real"
          type="number"
          maxlength="6"
          v-model="realInput"
          @input="changeValue"
        />
        <view class="nut-input-site"></view>
        <view class="nut-shortpsd-fake-taro" @click="focus">
          <view class="nut-shortpsd-li" v-for="(sublen, index) in new Array(comLen)" v-bind:key="index">
            <view class="nut-shortpsd-icon" v-if="String(realInput).length > index"></view>
          </view>
        </view>
      </view>
      <view class="nut-shortpsd-message">
        <view class="nut-shortpsd-error">{{ errorMsg }}</view>
        <view class="nut-shortpsd-forget" @click="onTips" v-if="tips || translate('tips')">
          <nut-icon class="icon" size="11px" name="tips"></nut-icon>
          <view>{{ tips || translate('tips') }}</view>
        </view>
      </view>
      <view v-if="!noButton" class="nut-shortpsd-footer">
        <view class="nut-shortpsd-cancle" @click="close">{{ translate('cancel') }}</view>
        <view class="nut-shortpsd-sure" @click="sureClick">{{ translate('confirm') }}</view>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, translate } = createComponent('shortpassword');
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro';
export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    modelValue: {
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
  emits: ['update:modelValue', 'update:visible', 'complete', 'change', 'ok', 'tips', 'close', 'cancel'],
  setup(props, { emit }) {
    const realInput = ref(props.modelValue);
    const realpwd = ref();
    const comLen = computed(() => range(Number(props.length)));
    const show = ref(props.visible);
    const refRandomId = Math.random().toString(36).slice(-8);
    const randRef = ref(refRandomId);
    const isWx = ref(false); // 判断是否为微信端
    // 方法
    function sureClick() {
      emit('ok', realInput.value);
    }
    function focus() {
      let dom: any = '';
      // console.log(123);

      if (isWx.value) {
        setTimeout(() => {
          if (!document.getElementById('nut-input-real-taro-' + randRef.value)) return;
          dom = document.getElementById('nut-input-real-taro-' + randRef.value) as any;
          if (!dom) return;
          dom.focus();
        }, 150);
      } else {
        dom = document.getElementsByClassName('nut-input-real')[0] as any;
        let h = dom.children[0];
        h.focus();
      }
    }
    watch(
      () => props.visible,
      (value) => {
        show.value = value;
        if (value) {
          randRef.value = Math.random().toString(36).slice(-8);
          if (Taro.getEnv() === 'WEB') {
            isWx.value = false;
          } else {
            isWx.value = true;
          }
        }
      }
    );
    watch(
      () => props.modelValue,
      (value) => {
        realInput.value = value;
      }
    );
    function changeValue(e: Event) {
      const input = e.target as HTMLInputElement;
      let val = input.value;
      if (val.length > comLen.value) {
        val = val.slice(0, comLen.value);
        realInput.value = val;
      }
      if (String(realInput.value).length === comLen.value) {
        emit('complete', val);
      }
      emit('change', val);
      emit('update:modelValue', val);
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
    onMounted(() => {
      eventCenter.once((getCurrentInstance() as any).router.onReady, () => {});
      if (Taro.getEnv() === 'WEB') {
        isWx.value = false;
      } else {
        isWx.value = true;
      }
    });
    return {
      comLen,
      sureClick,
      realInput,
      realpwd,
      range,
      changeValue,
      close,
      onTips,
      focus,
      show,
      closeIcon,
      isWx,
      refRandomId,
      randRef,
      translate
    };
  }
});
</script>
