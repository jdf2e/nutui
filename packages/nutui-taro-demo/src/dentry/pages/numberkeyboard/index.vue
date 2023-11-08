<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <nut-cell :is-link="true" title="默认键盘" @click="showKeyBoard(1)"></nut-cell>
    <nut-number-keyboard v-model:visible="visible1" overlay @input="input" @delete="onDelete" @close="close(1)">
    </nut-number-keyboard>
    <nut-cell :is-link="true" title="带右侧栏键盘" @click="showKeyBoard(2)"></nut-cell>
    <nut-number-keyboard
      v-model:visible="visible2"
      type="rightColumn"
      overlay
      :custom-key="customKey1"
      @input="input"
      @close="close(2)"
    >
    </nut-number-keyboard>
    <nut-cell :is-link="true" title="随机数键盘" @click="showKeyBoard(3)"></nut-cell>
    <nut-number-keyboard
      v-model:visible="visible3"
      type="rightColumn"
      overlay
      :random-keys="true"
      :custom-key="customKey1"
      @input="input"
      @close="close(3)"
    >
    </nut-number-keyboard>

    <nut-cell :is-link="true" title="带标题栏键盘" @click="showKeyBoard(4)"></nut-cell>
    <nut-number-keyboard
      v-model:visible="visible4"
      title="默认键盘"
      overlay
      :custom-key="customKey2"
      @input="input"
      @close="close(4)"
    >
    </nut-number-keyboard>
    <nut-cell :is-link="true" title="身份证键盘" @click="showKeyBoard(6)"></nut-cell>
    <nut-number-keyboard v-model:visible="visible6" overlay :custom-key="customKey3" @input="input" @close="close(6)">
    </nut-number-keyboard>
    <nut-cell :is-link="true" :desc="value" title="双向绑定" @click="showKeyBoard(5)"></nut-cell>
    <nut-number-keyboard v-model:visible="visible5" v-model="value" overlay maxlength="6" @close="close(5)">
    </nut-number-keyboard>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);
const visible5 = ref(false);
const visible6 = ref(false);
const value = ref('');
const customKey1 = reactive(['.']);
const customKey2 = reactive(['.', 'x']);
const customKey3 = reactive(['X']);
const visibleArr = [visible1, visible2, visible3, visible4, visible5, visible6];
function input(number: any) {
  console.log(number);
}
function showKeyBoard(index: number) {
  visibleArr[index - 1].value = true;
}
function onDelete() {}
function close(index: number) {
  visibleArr[index - 1].value = false;
}
</script>

<style lang="scss" scoped>
.nut-button {
  margin-right: 10px;
}
</style>
