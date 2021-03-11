<template>
  <view>
    <nut-dialog
      :title="title"
      :visible="isVisible"
      @ok-btn-click="sureClick"
      @cancel-btn-click="close"
      @close="close"
      :no-footer="noButton"
    >
      <view class="nut-shortpsd-subtitle">您使用了虚拟资产，请进行验证</view>
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
        <view class="nut-shortpsd-forget" v-if="showPasswordTips">
          <nut-icon class="icon" size="11px" name="tips"></nut-icon>
          <view @click="link">忘记密码</view>
        </view>
      </view>
    </nut-dialog>
  </view>
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('shortpassword');
import Icon from '@/packages/icon/index.vue';
export default create({
  components: {
    [Icon.name]: Icon
  },
  props: {
    title: {
      type: String,
      default: '请输入密码'
    },
    isVisible: {
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
    length: {
      type: [String, Number], //4～6
      default: 6
    },
    showPasswordTips: {
      type: Boolean,
      default: true
    },
    link: {
      type: String,
      default: ''
    }
  },
  emits: [
    'sure-click',
    'update:value',
    'update:is-visible',
    'complete',
    'input'
  ],
  setup(props, { emit }) {
    const realInput = ref(props.value);
    const realpwd = ref();
    const comLen = computed(() => range(Number(props.length)));

    // 方法
    function sureClick() {
      emit('sure-click', realInput.value);
    }
    function focus() {
      realpwd.value.focus();
    }
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
      emit('input', val);
      emit('update:value', val);
    }
    function close() {
      emit('update:is-visible', false);
    }
    function range(val: number) {
      return Math.min(Math.max(4, val), 6);
    }
    function link() {
      if (props.link) window.location.href = props.link;
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
      link
    };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
