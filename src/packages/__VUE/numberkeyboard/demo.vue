<template>
  <div class="demo">
    <nut-cell :isLink="true" @click="showKeyBoard(1)" :showIcon="true" :title="translate('basic')"></nut-cell>
    <nut-numberkeyboard v-model:visible="visible1" @input="input" @delete="onDelete" @close="close(1)">
    </nut-numberkeyboard>
    <nut-cell :isLink="true" @click="showKeyBoard(2)" :showIcon="true" :title="translate('sidebar')"></nut-cell>
    <nut-numberkeyboard
      type="rightColumn"
      v-model:visible="visible2"
      :custom-key="customKey1"
      :confirm-text="translate('confirmText')"
      @input="input"
      @close="close(2)"
    >
    </nut-numberkeyboard>
    <nut-cell :isLink="true" @click="showKeyBoard(3)" :showIcon="true" :title="translate('randomKeyOrder')"></nut-cell>
    <nut-numberkeyboard
      type="rightColumn"
      v-model:visible="visible3"
      :randomKeys="true"
      :custom-key="customKey1"
      @input="input"
      @close="close(3)"
    >
    </nut-numberkeyboard>

    <nut-cell :isLink="true" @click="showKeyBoard(4)" :showIcon="true" :title="translate('withTitle')"></nut-cell>
    <nut-numberkeyboard
      :title="translate('title')"
      v-model:visible="visible4"
      :custom-key="customKey2"
      @input="input"
      @close="close(4)"
    >
    </nut-numberkeyboard>

    <nut-cell
      :isLink="true"
      @click="showKeyBoard(6)"
      :showIcon="true"
      :title="translate('idNumberKeyboard')"
    ></nut-cell>
    <nut-numberkeyboard v-model:visible="visible6" :custom-key="customKey3" @input="input" @close="close(6)">
    </nut-numberkeyboard>
    <nut-cell
      :isLink="true"
      desc-text-align="left"
      @click="showKeyBoard(5)"
      :desc="value"
      :showIcon="true"
      :title="translate('bindValue')"
    ></nut-cell>
    <nut-numberkeyboard v-model:visible="visible5" v-model:value="value" maxlength="6" @close="close(5)">
    </nut-numberkeyboard>
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('numberkeyboard');
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
