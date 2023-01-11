<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <nut-cell :isLink="true" @click="showKeyBoard(1)" title="默认键盘"></nut-cell>
    <nut-number-keyboard overlay v-model:visible="visible1" @input="input" @delete="onDelete" @close="close(1)">
    </nut-number-keyboard>
    <nut-cell :isLink="true" @click="showKeyBoard(2)" title="带右侧栏键盘"></nut-cell>
    <nut-number-keyboard
      type="rightColumn"
      overlay
      v-model:visible="visible2"
      :custom-key="customKey1"
      @input="input"
      @close="close(2)"
    >
    </nut-number-keyboard>
    <nut-cell :isLink="true" @click="showKeyBoard(3)" title="随机数键盘"></nut-cell>
    <nut-number-keyboard
      type="rightColumn"
      overlay
      v-model:visible="visible3"
      :randomKeys="true"
      :custom-key="customKey1"
      @input="input"
      @close="close(3)"
    >
    </nut-number-keyboard>

    <nut-cell :isLink="true" @click="showKeyBoard(4)" title="带标题栏键盘"></nut-cell>
    <nut-number-keyboard
      title="默认键盘"
      overlay
      v-model:visible="visible4"
      :custom-key="customKey2"
      @input="input"
      @close="close(4)"
    >
    </nut-number-keyboard>
    <nut-cell :isLink="true" @click="showKeyBoard(6)" title="身份证键盘"></nut-cell>
    <nut-number-keyboard overlay v-model:visible="visible6" :custom-key="customKey3" @input="input" @close="close(6)">
    </nut-number-keyboard>
    <nut-cell :isLink="true" :desc="value" @click="showKeyBoard(5)" title="双向绑定"></nut-cell>
    <nut-number-keyboard overlay v-model:visible="visible5" v-model="value" maxlength="6" @close="close(5)">
    </nut-number-keyboard>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default {
  props: {},
  components: {
    Header
  },
  setup() {
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

    return {
      input,
      onDelete,
      close,
      showKeyBoard,
      customKey1,
      customKey2,
      customKey3,
      visible1,
      visible2,
      visible3,
      visible4,
      visible5,
      visible6,
      value,
      env
    };
  }
};
</script>

<style lang="scss" scoped>
.nut-button {
  margin-right: 10px;
}
</style>
