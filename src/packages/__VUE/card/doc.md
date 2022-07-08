# Card 商品卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Card,Tag,Price} from '@nutui/nutui';
// taro
import { Card ,Tag,Price} from '@nutui/nutui-taro';

const app = createApp();
app.use(Card).use(Tag).use(Price);

```

### 代码实例

### 基本用法

:::demo
```html
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
</nut-card>
</template>
<script>
  import { reactive } from 'vue';
  export default{
    setup() {
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
    return {
      state
    };
  }
}
</script>
```
:::

### 自定义内容
:::demo
```html
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
  <template #tag>
    <img
        class="tag" 
        src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
        alt=""
    />
  </template>
    <template #footer>
      <div class="customize">自定义</div>
    </template>
</nut-card>
</template>
<script>
  import { reactive } from 'vue';
  export default{
    setup() {
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
    return {
      state
    };
  }
}
</script>
<style>
.search_prolist_attr {
  margin: 3px 0 1px;
  height: 15px;
  overflow: hidden;
 
}
.search_prolist_attr > span{
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
.tag {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 2px;
  height: 14px;
}
.customize {
  font-size: 12px;
}
</style>

```
:::
### Prop  

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| img-url   | 左侧图片Url                                 | String  | -         |
| title     | 标题                   | String  | -    |
| price | 商品价格                         | String  | -      |
| vip-price     | 会员价格                               | String | -    |
| shop-desc  | 店铺介绍                                  | String | -    |
| delivery     | 配送方式 | String  | -      |
| shop-name   | 店铺名称| String  | -      |
| is-need-price  | 是否需要价格展示| Boolean  | true   |


### Slots

| 名称    | 说明         |
|---------|--------------|
| prolist | 	自定义商品介绍 |
| price | 	价格自定义内容 |
| origin | 	价格后方自定义内容 |
| shop-tag | 	店铺介绍自定义 |
| footer | 	右下角内容自定义 |
