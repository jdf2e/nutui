<template>
  <div class="demo">
    <nut-cell-group :title="translate('title1')">
      <nut-cell>
        <nut-price :price="0" size="small" :need-symbol="true" :thousands="true" />
      </nut-cell>
      <nut-cell>
        <nut-price :price="0" size="normal" :need-symbol="true" :thousands="true" />
      </nut-cell>
      <nut-cell>
        <nut-price :price="0" size="large" :need-symbol="true" :thousands="true" />
      </nut-cell>
    </nut-cell-group>
    <h2>{{ translate('title2') }}</h2>
    <nut-cell>
      <nut-price :price="8888" decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" />
    </nut-cell>
    <h2>{{ translate('title3') }}</h2>
    <nut-cell>
      <nut-price :price="10010.01" size="normal" :need-symbol="true" :thousands="false" />
    </nut-cell>
    <h2>{{ translate('title4') }}</h2>
    <nut-cell>
      <nut-price :price="15213.1221" size="normal" :decimal-digits="3" :need-symbol="true" :thousands="true" />
    </nut-cell>
    <h2>{{ translate('title5') }}</h2>
    <nut-cell>
      <nut-price :price="8888.01" position="after" symbol="元" size="normal" :need-symbol="true" :thousands="true" />
    </nut-cell>
    <h2>{{ translate('title6') }}</h2>
    <nut-cell>
      <nut-price :price="price" size="normal" :decimal-digits="3" :need-symbol="true" :thousands="true" />
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { ref } from 'vue';
const { createDemo, translate } = createComponent('price');
import { useTranslate } from '@/sites/assets/util/useTranslate';
useTranslate({
  'zh-CN': {
    title1: '支持三种尺寸：small、normal、large',
    title2: '不保留小数',
    title3: '有人民币符号，无千位分隔',
    title4: '有人民币符号，有千位分隔，保留小数点后三位',
    title5: '调整 symbol 符号位置',
    title6: '异步随机变更'
  },
  'en-US': {
    title1: 'Support three sizes：small、normal、large',
    title2: 'No decimal',
    title3: 'There is a RMB symbol without thousands separation',
    title4: 'There is a RMB symbol, separated by thousands, and three decimal places are reserved',
    title5: 'Adjust symbol position',
    title6: 'Asynchronous random change'
  }
});
export default createDemo({
  setup() {
    const price = ref(0);
    setInterval(() => {
      price.value = Math.random() * 10000000;
    }, 1000);
    return {
      price,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
