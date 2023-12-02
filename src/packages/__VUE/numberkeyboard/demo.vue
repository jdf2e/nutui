<template>
  <div class="demo">
    <nut-cell :is-link="true" :title="translate('basic')" @touchstart.stop="showKeyBoard(1)"></nut-cell>
    <nut-number-keyboard v-model:visible="visible1" @blur="onBlur(1)" @input="input" @delete="onDelete">
    </nut-number-keyboard>
    <nut-cell :is-link="true" :title="translate('sidebar')" @touchstart.stop="showKeyBoard(2)"></nut-cell>
    <nut-number-keyboard
      v-model:visible="visible2"
      type="rightColumn"
      :custom-key="customKey1"
      :confirm-text="translate('confirmText')"
      @input="input"
      @close="close"
      @blur="onBlur(2)"
    >
    </nut-number-keyboard>
    <nut-cell :is-link="true" :title="translate('randomKeyOrder')" @touchstart.stop="showKeyBoard(3)"></nut-cell>
    <nut-number-keyboard
      v-model:visible="visible3"
      type="rightColumn"
      :random-keys="true"
      :custom-key="customKey1"
      @input="input"
      @close="close"
      @blur="onBlur(3)"
    >
    </nut-number-keyboard>

    <nut-cell :is-link="true" :title="translate('withTitle')" @touchstart.stop="showKeyBoard(4)"></nut-cell>
    <nut-number-keyboard
      v-model:visible="visible4"
      :title="translate('title')"
      :custom-key="customKey2"
      @input="input"
      @close="close"
      @blur="onBlur(4)"
    >
    </nut-number-keyboard>

    <nut-cell :is-link="true" :title="translate('idNumberKeyboard')" @touchstart.stop="showKeyBoard(6)"></nut-cell>
    <nut-number-keyboard
      v-model:visible="visible6"
      :custom-key="customKey3"
      @input="input"
      @blur="onBlur(6)"
      @close="close"
    >
    </nut-number-keyboard>
    <nut-cell
      :is-link="true"
      desc-text-align="left"
      :desc="value"
      :title="translate('bindValue')"
      @touchstart.stop="showKeyBoard(5)"
    ></nut-cell>
    <nut-number-keyboard v-model:visible="visible5" v-model="value" maxlength="6" @blur="onBlur(5)" @close="close">
    </nut-number-keyboard>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { showToast } from '@/packages/nutui.vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const translate = useTranslate({
  'zh-CN': {
    basic: '默认键盘',
    sidebar: '带右侧栏键盘',
    confirmText: '支付',
    randomKeyOrder: '随机数键盘',
    title: '标题',
    withTitle: '带标题栏键盘',
    idNumberKeyboard: '身份证键盘',
    bindValue: '双向绑定：'
  },
  'en-US': {
    basic: 'Default Keyboard',
    sidebar: 'Keyboard With Sidebar',
    confirmText: 'pay',
    randomKeyOrder: 'Random Key Order',
    title: 'title',
    withTitle: 'Show Keyboard With Title',
    idNumberKeyboard: 'Show IdNumber Keyboard',
    bindValue: 'Bind Value：'
  }
});
const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);
const visible6 = ref(false);
const visible5 = ref(false);
const value = ref('');
const customKey1 = reactive(['.']);
const customKey2 = reactive(['.']);
const customKey3 = reactive(['X']);
const visibleArr = [visible1, visible2, visible3, visible4, visible5, visible6];
function input(number: any) {
  showToast.text(`输入：${number}`);
}
function showKeyBoard(index: number) {
  visibleArr[index - 1].value = true;
}
function onDelete() {
  showToast.text('删除');
}
function close() {
  console.log('关闭');
}
function onBlur(index: number) {
  visibleArr[index - 1].value = false;
}
</script>

<style lang="scss" scoped>
.nut-button {
  margin-right: 10px;
}
</style>
