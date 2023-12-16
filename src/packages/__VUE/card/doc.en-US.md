# Card

### Intro

Used to display product pictures, prices and other information.

### Install

```js
import { createApp } from 'vue';
import { Card } from '@nutui/nutui';

const app = createApp();
app.use(Card);
```

### Usage

### Basic Usage

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
  </nut-card>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: 'title',
  price: '388',
  vipPrice: '378',
  shopDesc: 'desc',
  delivery: 'delivery',
  shopName: 'shopName>'
});
</script>
```

:::

### Custom prolist

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
        <span class="word">tag</span>
        <span class="word">tag</span>
        <span class="word">tag</span>
      </div>
    </template>
  </nut-card>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: 'title',
  price: '388',
  vipPrice: '378',
  shopDesc: 'desc',
  delivery: 'delivery',
  shopName: 'shopName>'
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

### Custom Content

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
      <div>Custom Content</div>
    </template>
    <template #price>
      <span>inquiry</span>
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
  title: 'title',
  shopName: 'shopName>'
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

### Customize bottom right content

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
      <div class="customize">custom</div>
    </template>
  </nut-card>
</template>
<script setup>
import { reactive } from 'vue';
const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: 'title',
  price: '388',
  vipPrice: '378',
  shopDesc: 'desc',
  delivery: 'delivery',
  shopName: 'shopName>'
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| img-url | Left thumb image `URL` | string | - |
| title | Title | string | - |
| price | Price | string | - |
| vip-price | vip-price | string | - |
| shop-desc | shop-desc | string | - |
| delivery | delivery | string | - |
| shop-name | shop-name | string | - |
| is-need-price | Whether price display is required | Boolean | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | click event | event: MouseEvent |

### Slots

| Name | Description |
| --- | --- |
| prolist | Custom product introduction |
| price | Custom price |
| origin | Custom content behind the price |
| shop-tag | Custom shop introduction |
| footer | Customize bottom right content |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-card-font-size-0 | _var(--nut-font-size-0)_ |
| --nut-card-font-size-1 | _var(--nut-font-size-1)_ |
| --nut-card-font-size-2 | _var(--nut-font-size-2)_ |
| --nut-card-font-size-3 | _var(--nut-font-size-3)_ |
| --nut-card-left-border-radius | _0_ |
| --nut-card-left-background-color | _inherit_ |
