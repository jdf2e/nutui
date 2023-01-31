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
      :teleportDisable="teleportDisable"
    >
      <view class="nut-shortpsd-title">{{ title || translate('title') }}</view>
      <view class="nut-shortpsd-subtitle">{{ desc || translate('desc') }}</view>

      <div class="nut-input-normalw">
        <input
          ref="realpwd"
          class="nut-input-real"
          type="number"
          maxlength="6"
          :style="systemStyle()"
          v-model="realInput"
          @input="changeValue"
        />
        <div class="nut-input-site"></div>
        <view class="nut-shortpsd-fake" @click="focus">
          <view class="nut-shortpsd-li" v-for="(sublen, index) in new Array(comLen)" v-bind:key="index">
            <view class="nut-shortpsd-icon" v-if="String(realInput).length > index"></view>
          </view>
        </view>
      </div>
      <view class="nut-shortpsd-message">
        <view class="nut-shortpsd-error">{{ errorMsg }}</view>
        <view class="nut-shortpsd-forget" v-if="tips || translate('tips')">
          <nut-icon class="icon" size="11px" name="tips"></nut-icon>
          <view @click="onTips">{{ tips || translate('tips') }}</view>
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
    },
    teleportDisable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue', 'update:visible', 'complete', 'change', 'ok', 'tips', 'close', 'cancel'],
  setup(props, { emit }) {
    const realInput = ref(props.modelValue);
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
      (value) => {
        show.value = value;
      }
    );
    watch(
      () => props.modelValue,
      (value) => {
        realInput.value = value;
        emit('update:modelValue', value);
      },
      {
        deep: true,
        immediate: true
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
    function systemStyle() {
      let u = navigator.userAgent;
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
      let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isIOS) {
        return {
          paddingRight: '1200px'
        };
      }
      if (isAndroid) {
        return {
          opacity: 0,
          zindex: 10
        };
      }
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
      systemStyle,
      closeIcon,
      translate
    };
  }
});
</script>
