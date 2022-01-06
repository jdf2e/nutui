#  Swipe 滑动手势

### 介绍

常用于单元格左滑删除等手势操作

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Swipe } from '@nutui/nutui';
//taro
import { Swipe } from '@nutui/nutui-taro';

const app = createApp();
app.use(Swipe);
```

## 代码演示

### 基础用法

``` html
<nut-swipe>
    <nut-cell round-radius="0" desc="左滑删除" />
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
    </template>
</nut-swipe>
```


### 禁止滑动

``` html
<nut-swipe disabled>
    <nut-cell round-radius="0" desc="禁止滑动" />
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
    </template>
</nut-swipe>
```


### 左右滑动

``` html
<nut-swipe>
    <template #left>
        <nut-button shape="square" style="height:100%" type="success">选择</nut-button>
    </template>
    <nut-cell round-radius="0" desc="左滑右滑都可以哦" />
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
        <nut-button shape="square" style="height:100%" type="info">收藏</nut-button>
    </template>
</nut-swipe>
```


### 异步控制

``` html
<nut-swipe ref="refSwipe" @open="open" @close="close">
    <nut-cell title="异步打开关闭">
    <template v-slot:link>
        <nut-switch v-model="checked" @change="changSwitch" active-text="开" inactive-text="关" />
    </template>
    </nut-cell>
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
    </template>
</nut-swipe>
```
``` typescript
    setup() {
        const refSwipe = ref<HTMLElement>();
        const checked = ref(false);
        const changSwitch = (value: boolean) => {
            if (value) {
                refSwipe.value?.open('left');
            } else {
                refSwipe.value?.close();
            }
        };
         const open = (obj: any) => {
            console.log(obj);
            checked.value = true;
        };
        const close = () => {
            checked.value = false;
        };
        return { checked, changSwitch, refSwipe, open, close };
    }
```

### 自定义

``` html
<nut-swipe>
    <template #left>
        <nut-button shape="square" style="height:100%" type="success">选择</nut-button>
    </template>
    <nut-cell title="商品描述">
    <template v-slot:link>
        <nut-inputnumber v-model="number" />
    </template>
    </nut-cell>
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">删除</nut-button>
        <nut-button shape="square" style="height:100%" type="info">收藏</nut-button>
    </template>
</nut-swipe>
```

``` typescript
    setup() {
        const number = ref(0);
        return { number };
    }
```



### Props

| 参数                     | 说明                 | 类型    | 默认值 |
|--------------------------|----------------------|---------|--------|
| name                     | 唯一标识             | String  | -      |
| disabled                 | 是否禁用滑动         | String  | false  |
| touch-move-prevent-default  | 是否阻止滑动事件行为 | boolean | false  |
| touch-move-stop-propagation | 是否阻止滑动事件冒泡 | boolean | false  |
### Events

| 事件名 | 说明       | 回调参数               |
|--------|------------|------------------------|
| open   | 打开时触发 | {type:'left or right'} |
| close  | 关闭时触发 | {type:'left or right'} |
    

### Slots
| 名称    | 说明         |
|---------|--------------|
| left    | 左侧滑动内容 |
| default | 自定义内容   |
| right   | 右侧滑动内容 |

### 方法
通过 ref 可以获取到 Swipe 实例并调用实例方法。

| 方法名 | 说明             | 参数          |
|--------|------------------|---------------|
| open   | 打开单元格侧边栏 | left or right |
| close  | 收起单元格侧边栏 |               |