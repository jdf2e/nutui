# Card 商品卡片

### 介绍

商品卡片，用于展示商品的图片、价格等信息

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Card } from '@nutui/nutui';
// taro
import { Card } from '@nutui/nutui-taro';

const app = createApp();
app.use(Card);

```

### 代码实例

### 基本用法

```html
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
```

### 自定义内容

```html
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
```
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


### Slots

| 名称    | 说明         |
|---------|--------------|
| prolist | 	自定义商品介绍 |
| origin | 	价格后方自定义内容 |
| shop-tag | 	店铺介绍自定义 |
| footer | 	右下角内容自定义 |
