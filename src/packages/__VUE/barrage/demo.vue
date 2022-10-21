<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-barrage ref="danmu" :danmu="list"></nut-barrage>
    </nut-cell>
    <h2>{{ translate('slotTitle') }}</h2>
    <nut-cell>
      <nut-barrage>
        <span>aaa</span>
        <span>bbb</span>
        <span>ccc</span>
        <span>ddd</span>
      </nut-barrage>
    </nut-cell>
    <div class="test">
      <button @click="addDanmu" class="add nut-button--primary">{{ translate('btn1') }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('barrage');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      slotTitle: 'slot 用法',
      btn1: '随机添加'
    },
    'en-US': {
      basic: 'Basic Usage',
      slotTitle: 'slot usage',
      btn1: 'Random addition'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const inputVal = ref('');
    const danmu = ref();
    let list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结']);
    function addDanmu() {
      let n = Math.random();
      danmu.value.add('随机——' + String(n).substr(2, 10));
    }
    return {
      inputVal,
      danmu,
      list,
      addDanmu,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.nut-cell,
.nut-barrage {
  padding: 20px 0;
  height: 150px;
}

.test {
  .add {
    display: block;
    padding: 5px 30px;
    margin: 20px auto;
    border-radius: 15px;
    font-size: 12px;
  }
}
</style>
