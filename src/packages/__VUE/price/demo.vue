<template>
  <div class="demo">
    <nut-cell-group :title="translate('title1')">
      <nut-cell>
        <nut-price :price="0" size="small" :need-symbol="false" />
      </nut-cell>
      <nut-cell>
        <nut-price :price="0" size="normal" :need-symbol="false" />
      </nut-cell>
      <nut-cell>
        <nut-price :price="0" size="large" :need-symbol="false" />
      </nut-cell>
    </nut-cell-group>
    <h2>{{ translate('title2') }}</h2>
    <nut-cell>
      <nut-price :price="8888" :decimal-digits="0" />
    </nut-cell>
    <h2>{{ translate('titleStrike') }}</h2>
    <nut-cell>
      <nut-price :price="8888" decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" strike-through />
    </nut-cell>
    <h2>{{ translate('title3') }}</h2>
    <nut-cell>
      <nut-price :price="10010.01" symbol="¥" />
    </nut-cell>
    <h2>{{ translate('title4') }}</h2>
    <nut-cell>
      <nut-price :price="8888.01" position="after" symbol="元" />
    </nut-cell>
    <h2>{{ translate('title5') }}</h2>
    <nut-cell>
      <nut-price :price="15213.1221" :decimal-digits="3" :thousands="true" />
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
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title1: '支持三种尺寸：small、normal、large',
      title2: '不保留小数',
      titleStrike: '划线价',
      title3: '货币符号',
      title4: '货币符号位置',
      title5: '千位分隔',
      title6: '异步随机变更'
    },
    'en-US': {
      title1: 'Support three sizes：small、normal、large',
      title2: 'No decimals',
      titleStrike: 'Strike Through',
      title3: 'Currency symbol',
      title4: 'Currency symbol position',
      title5: 'Separated by thousands',
      title6: 'Asynchronous random changes'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
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
