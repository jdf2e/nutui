# Menu 菜单组件

### 介绍

向下弹出的菜单列表

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Menu } from '@nutui/nutui';
// taro
import { Menu,MenuItem } from '@nutui/nutui-taro';
const app = createApp();
app.use(Menu);
app.use(MenuItem);

```

## 代码演示

### 基础用法

```html
<nut-menu>
  <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
</nut-menu>
```
```js
 setup() {
  const options1 = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
  ]

  const options2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ]
 }
```

### 两列标题

```html
<nut-menu>
  <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
  <nut-menu-item title="默认排序" :options="options2"></nut-menu-item>
</nut-menu>
```

### 获取选择的列表对象

```html
<nut-menu @choose="handleChoose">
  <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
</nut-menu>
```
```js
 setup() {
  const handleChoose = (val, index) => {
    console.log(val, index)
  }
 }
```

### 一行两列列表对象

```html
<nut-menu col="2">
  <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
</nut-menu>
```

### 禁用菜单

```html
<nut-menu>
  <nut-menu-item title="全部商品" disabled="true" :options="options1"></nut-menu-item>
</nut-menu>
```

### 自定义选项的选中态图标颜色

```html
<nut-menu active-color="green">
  <nut-menu-item title="全部商品" :options="options1"></nut-menu-item>
</nut-menu>
```

### 自定义菜单内容

```html
<nut-menu>
  <nut-menu-item title="筛选" ref="item">
    <div class="customer-item-demo">
      <div :style="{'display': 'flex','justify-content': 'space-between', 'align-items': 'center'}">
      <nut-button @click="handleClick">关闭</nut-button>
    </div>
  </nut-menu-item>
</nut-menu>
```
```js
 setup() {
  const item = ref<HTMLElement>()

  const handleClick = () => {
    item.value.toggle()
  }
 }
```

## API

### Props

### nut-menu

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| col         | 显示的列数     | String/Number | 1                |
| active-color         | 选项的选中态图标颜色     | String | #f00               |

### nut-menu-item

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| title         | 标题     | String | -                |
| options         | 列表对象     | Array | -                |
| disabled         | 是否禁用菜单     | Boolean | false                |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| choose  | 单选下，选择之后触发 | 1.选择的列表对象。2.列表索引 |