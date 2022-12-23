<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-grid>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
    </nut-grid>

    <nut-grid :column-num="3">
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
    </nut-grid>

    <h2>{{ translate('square') }}</h2>
    <nut-grid :column-num="3" square>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
    </nut-grid>

    <h2>{{ translate('gutter') }}</h2>
    <nut-grid :gutter="10">
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
    </nut-grid>

    <h2>{{ translate('reverse') }}</h2>
    <nut-grid reverse>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
    </nut-grid>

    <h2>{{ translate('Horizontal') }}</h2>
    <nut-grid direction="horizontal">
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
    </nut-grid>

    <h2>{{ translate('iconStyle') }}</h2>
    <nut-grid :column-num="3">
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
      <nut-grid-item :text="translate('text')">
        <Dongdong height="40px" width="40px" color="#478EF2" />
      </nut-grid-item>
      <nut-grid-item :text="translate('text')"><Dongdong /></nut-grid-item>
    </nut-grid>

    <h2>{{ translate('route') }}</h2>
    <nut-grid :column-num="2">
      <nut-grid-item :text="translate('vueRouter')" to="/">
        <Home />
      </nut-grid-item>
      <nut-grid-item :text="translate('url')" url="https://jd.com">
        <Search />
      </nut-grid-item>
    </nut-grid>

    <h2>{{ translate('customContent') }}</h2>
    <nut-grid :border="false">
      <nut-grid-item v-for="i in 4" :key="i">
        <nut-avatar size="large">
          <img
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
        </nut-avatar>
      </nut-grid-item>
    </nut-grid>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('grid');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Dongdong, Home, Search } from '@nutui/icons-vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      text: '文字',
      columnNum: '自定义列数',
      square: '正方形格子',
      gutter: '格子间距',
      reverse: '内容翻转',
      Horizontal: '内容横向',
      iconStyle: '图标颜色/大小',
      route: '页面导航',
      customContent: '自定义内容',
      vueRouter: '路由跳转',
      url: '链接跳转'
    },
    'en-US': {
      basic: 'Basic Usage',
      text: 'text',
      columnNum: 'Column Num',
      square: 'Square',
      gutter: 'Gutter',
      reverse: 'Reverse',
      horizontal: 'Horizontal',
      iconStyle: 'Icon Style',
      route: 'Route',
      customContent: 'Custom Content',
      vueRouter: 'Vue Router',
      url: 'Url'
    }
  });
export default createDemo({
  components: { Dongdong, Home, Search },
  props: {},
  setup() {
    initTranslate();
    let a = new Map([
      ['Michael', 95],
      ['Bob', 75],
      ['Tracy', 85]
    ]);
    a.set('Adam', 67);
    console.log(a);

    return {
      translate
    };
  }
});
</script>
