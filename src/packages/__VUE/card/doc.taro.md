# Card 商品卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息

### 安装

```js
import { createApp } from 'vue';
import { Card } from '@nutui/nutui-taro';

const app = createApp();
app.use(Card);
```

### 基础用法

:::demo

```vue
<template>
  <nut-card
    :img-url="state.imgUrl"
    :title="state.title"
    :price="state.price"
    :vipPrice="state.vipPrice"
    :shopDesc="state.shopDesc"
    :delivery="state.delivery"
    :shopName="state.shopName"
  ></nut-card>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
});
</script>
```

:::

### 自定义商品标签

:::demo

```vue
<template>
  <nut-card
    :img-url="state.imgUrl"
    :title="state.title"
    :price="state.price"
    :vipPrice="state.vipPrice"
    :shopDesc="state.shopDesc"
    :delivery="state.delivery"
    :shopName="state.shopName"
  >
    <template #prolist>
      <div class="search_prolist_attr">
        <span class="word">活鲜</span>
        <span class="word">礼盒</span>
        <span class="word">国产</span>
      </div>
    </template>
  </nut-card>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
});
</script>
<style>
.search_prolist_attr {
  margin: 3px 0 1px;
  height: 15px;
  overflow: hidden;
}
.search_prolist_attr > span {
  float: left;
  padding: 0 5px;
  border-radius: 1px;
  font-size: 10px;
  height: 15px;
  line-height: 15px;
  color: #999;
  background-color: #f2f2f7;
  margin-right: 5px;
}
</style>
```

:::

### 自定义店铺介绍

:::demo

```vue
<template>
  <nut-card
    :img-url="state.imgUrl"
    :title="state.title"
    :price="state.price"
    :vipPrice="state.vipPrice"
    :shopDesc="state.shopDesc"
    :delivery="state.delivery"
    :shopName="state.shopName"
  >
    <template #shop-tag>
      <div>自定义店铺介绍</div>
    </template>
    <template #price>
      <span>询价</span>
    </template>
    <template #origin>
      <img
        class="tag"
        src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
        alt=""
      />
    </template>
  </nut-card>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
});
</script>
<style>
.tag {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 2px;
  height: 14px;
}
</style>
```

:::

### 自定义右下角内容

:::demo

```vue
<template>
  <nut-card
    :img-url="state.imgUrl"
    :title="state.title"
    :price="state.price"
    :vipPrice="state.vipPrice"
    :shopDesc="state.shopDesc"
    :delivery="state.delivery"
    :shopName="state.shopName"
  >
    <template #footer>
      <div class="customize">自定义右下角内容</div>
    </template>
  </nut-card>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
});
</script>
<style>
.customize {
  font-size: 12px;
}
</style>
```

:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| img-url | 左侧图片 `URL` | string | - |
| title | 标题 | string | - |
| price | 商品价格 | string | - |
| vip-price | 会员价格 | string | - |
| shop-desc | 店铺介绍 | string | - |
| delivery | 配送方式 | string | - |
| shop-name | 店铺名称 | string | - |
| is-need-price | 是否需要价格展示 | boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击事件 | event: MouseEvent |

### Slots

| 名称 | 说明 |
| --- | --- |
| prolist | 自定义商品介绍 |
| price | 价格自定义内容 |
| origin | 价格后方自定义内容 |
| shop-tag | 店铺介绍自定义 |
| footer | 右下角内容自定义 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-card-font-size-0 | _var(--nut-font-size-0)_ |
| --nut-card-font-size-1 | _var(--nut-font-size-1)_ |
| --nut-card-font-size-2 | _var(--nut-font-size-2)_ |
| --nut-card-font-size-3 | _var(--nut-font-size-3)_ |
| --nut-card-left-border-radius | _0_ |
| --nut-card-left-background-color | _inherit_ |
