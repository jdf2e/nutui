<template>
  <div class="demo">
    <nut-cell :isLink="true" @touchstart.stop="showKeyBoard(1)" :showIcon="true" :title="translate('basic')"></nut-cell>
    <nut-number-keyboard v-model:visible="visible1" @blur="onBlur(1)" @input="input" @delete="onDelete">
    </nut-number-keyboard>
    <nut-cell
      :isLink="true"
      @touchstart.stop="showKeyBoard(2)"
      :showIcon="true"
      :title="translate('sidebar')"
    ></nut-cell>
    <nut-number-keyboard
      type="rightColumn"
      v-model:visible="visible2"
      :custom-key="customKey1"
      :confirm-text="translate('confirmText')"
      @input="input"
      @close="close(2)"
      @blur="onBlur(2)"
    >
    </nut-number-keyboard>
    <nut-cell
      :isLink="true"
      @touchstart.stop="showKeyBoard(3)"
      :showIcon="true"
      :title="translate('randomKeyOrder')"
    ></nut-cell>
    <nut-number-keyboard
      type="rightColumn"
      v-model:visible="visible3"
      :randomKeys="true"
      :custom-key="customKey1"
      @input="input"
      @close="close(3)"
      @blur="onBlur(3)"
    >
    </nut-number-keyboard>

    <nut-cell
      :isLink="true"
      @touchstart.stop="showKeyBoard(4)"
      :showIcon="true"
      :title="translate('withTitle')"
    ></nut-cell>
    <nut-number-keyboard
      :title="translate('title')"
      v-model:visible="visible4"
      :custom-key="customKey2"
      @input="input"
      @close="close(4)"
      @blur="onBlur(4)"
    >
    </nut-number-keyboard>

    <nut-cell
      :isLink="true"
      @touchstart.stop="showKeyBoard(6)"
      :showIcon="true"
      :title="translate('idNumberKeyboard')"
    ></nut-cell>
    <nut-number-keyboard
      v-model:visible="visible6"
      :custom-key="customKey3"
      @input="input"
      @blur="onBlur(6)"
      @close="close(6)"
    >
    </nut-number-keyboard>
    <nut-cell
      :isLink="true"
      desc-text-align="left"
      @touchstart.stop="showKeyBoard(5)"
      :desc="value"
      :showIcon="true"
      :title="translate('bindValue')"
    ></nut-cell>
    <nut-number-keyboard v-model:visible="visible5" v-model="value" maxlength="6" @blur="onBlur(5)" @close="close(5)">
    </nut-number-keyboard>
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('number-keyboard');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
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
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    let { proxy } = getCurrentInstance() as any;
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
      proxy.$toast.text(`输入：${number}`);
    }
    function showKeyBoard(index: number) {
      visibleArr[index - 1].value = true;
    }
    function onDelete() {
      proxy.$toast.text('删除');
    }
    function close(index: number) {
      console.log('关闭');
    }
    function onBlur(index: number) {
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
      onBlur,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.nut-button {
  margin-right: 10px;
}
</style>
