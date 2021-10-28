# Popover 气泡弹出框

### 介绍

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Popover } from '@nutui/nutui';
// taro
import { Popover } from '@nutui/nutui-taro';

const app = createApp();
app.use(Popover);

```

### 代码实例

### 基本用法

Popover 支持明朗和暗黑两种风格，默认为明朗风格，将 theme 属性设置为 dark 可切换为暗黑风格。

```html
  <nut-popover
      :visible="visible"
      :list="List"
      @open="open"
      @close="close"
    >
      <template #reference>
        <nut-button type="primary" shape="square">明朗风格</nut-button>
      </template>
    </nut-popover>

  <nut-popover
      :visible="visible"
      theme="dark"
      :list="List"
      @open="open"
      @close="close"
    >
      <template #reference>
        <nut-button type="primary" shape="square">暗黑风格</nut-button>
      </template>
    </nut-popover>
```

```javascript

  setup(){
  const visible = ref(false);
  const List =  [
    {name: '选项一'},
    {name: '选项二'},
    {name: '选项三'}];
  }

  const open = () =>{
      visible.value = true;
  }
  const close = () =>{
      visible.value = false;
  }

```

### 选项配置

```html
  <nut-popover
      :visible="visible"
      theme="dark"
      :list="List"
      @open="open"
      @close="close"
    >
      <template #reference>
        <nut-button type="primary" shape="square">展示图标</nut-button>
      </template>
    </nut-popover>

```


```javascript

  setup(){
    const visible = ref(false);
    const List = [
      {name: '选项一',icon: 'my2'},
      {name: '选项二',icon: 'cart2'},
      {name: '选项三',icon: 'location2'}
    ],

    const open = () =>{
      visible.value =   true;
    }
    const close = () =>{
      visible.value =  false;
    }
  }


```


在 list 数组中，可以通过 disabled 字段来禁用某个选项。

```html
  <nut-popover
      :visible="visible"
      :list="List"
      @open="open"
      @close="close"
    >
      <template #reference>
        <nut-button type="primary" shape="square">禁用选项</nut-button>
      </template>
    </nut-popover>
```


```javascript


  setup(){
    const visible = ref(false);
    const List = [{
              name: '选项一',
              disabled: true
            },
            {
              name: '选项二',
              disabled: true
            },
            {
              name: '选项三'
            }],

    const open = () =>{
      visible.value =   true;
    }
    const close = () =>{
      visible.value =  false;
    }
  }

```

### 自定义内容

在名为 content 插槽中自定义内容。

```html
  <nut-popover 
      :visible="visible"
      @open="open"
      @close="close">
      <template #reference>
        <nut-button type="primary" shape="square">自定义内容</nut-button>
      </template>

      <template #content>
        <div class="self-content">
          <div
                      class="self-content-item"
                      v-for="(item, index) in selfContent"
                      :key="index"
                    >
            <nut-icon :name="item.name" size="15"></nut-icon>
            <div class="self-content-desc">{{ item.desc }}</div>
          </div>
        </div>
      </template>
    </nut-popover>
```

### 位置自定义

支持 bottom, top, left, right 四种弹出位置，默认值为 bottom。

```html
  <nut-popover
      :visible="visible"
      location="top"
      theme="dark"
      :list="List"
      @open="open"
      @close="close"
    >
      <template #reference>
        <nut-button type="primary" shape="square">向上弹出</nut-button>
      </template>
  </nut-popover>

```



### Prop  

| 字段            | 说明                            | 类型     | 默认值      |
|----------------|---------------------------------|---------|------------|
| list          | 选项列表                          | List[]   | []        |
| visible      | 是否展示气泡弹出层                 | boolean  | false     |
| theme          | 主题风格，可选值为 dark            | string   | `light`   |
| location       | 弹出位置，可选值为 top,left,right  | string   | `bottom`  |

### List 数据结构  

List 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名            | 说明                 | 类型      | 默认值  |
|----------------|----------------------|----------|--------|
| name           | 选项文字               | string   | -      |
| icon           | nut-icon 图标名称      | string   | -      |
| disabled       | 是否为禁用状态          | boolean  | false  | 


### Slots

| 名称    | 说明         |
|---------|--------------|
| content | 自定义气泡组件菜单内容 |
| reference | 触发 Popover 显示的元素内容 |

### Events

| 名称    | 说明         |
|---------|--------------|
| choose | 点击选项时触发 |
| open   | 打开菜单时触发 |
| close  | 关闭菜单时触发 |