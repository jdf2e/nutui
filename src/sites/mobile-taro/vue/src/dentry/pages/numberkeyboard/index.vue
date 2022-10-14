<template>
  <div class="demo">
    <nut-cell :isLink="true" @click="showKeyBoard(1)" :showIcon="true" title="默认键盘"></nut-cell>
    <nut-numberkeyboard v-model:visible="visible1" @input="input" @delete="onDelete" @close="close(1)">
    </nut-numberkeyboard>
    <nut-cell :isLink="true" @click="showKeyBoard(2)" :showIcon="true" title="带右侧栏键盘"></nut-cell>
    <nut-numberkeyboard
      type="rightColumn"
      v-model:visible="visible2"
      :custom-key="customKey1"
      @input="input"
      @close="close(2)"
    >
    </nut-numberkeyboard>
    <nut-cell :isLink="true" @click="showKeyBoard(3)" :showIcon="true" title="随机数键盘"></nut-cell>
    <nut-numberkeyboard
      type="rightColumn"
      v-model:visible="visible3"
      :randomKeys="true"
      :custom-key="customKey1"
      @input="input"
      @close="close(3)"
    >
    </nut-numberkeyboard>

    <nut-cell :isLink="true" @click="showKeyBoard(4)" :showIcon="true" title="带标题栏键盘"></nut-cell>
    <nut-numberkeyboard
      title="默认键盘"
      v-model:visible="visible4"
      :custom-key="customKey2"
      @input="input"
      @close="close(4)"
    >
    </nut-numberkeyboard>
    <nut-cell :isLink="true" @click="showKeyBoard(6)" :showIcon="true" title="身份证键盘"></nut-cell>
    <nut-numberkeyboard v-model:visible="visible6" :custom-key="customKey3" @input="input" @close="close(6)">
    </nut-numberkeyboard>
    <div class="boardValue" @click="showKeyBoard(5)">
      <div class="value">
        <nut-input v-model="value" readonly label="双向绑定：" />
      </div>
    </div>
    <nut-numberkeyboard v-model:visible="visible5" v-model:value="value" maxlength="6" @close="close(5)">
    </nut-numberkeyboard>
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance, reactive } from 'vue';
export default {
  props: {},
  setup() {
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
    function input(number: any) {}
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
      value
    };
  }
};
</script>

<style lang="scss" scoped>
.nut-button {
  margin-right: 10px;
}
</style>
