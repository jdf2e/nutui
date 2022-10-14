# SideNavBar 侧边栏导航

### 介绍

用于内容选择和切换

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { SideNavBar, SubSideNavBar, SideNavBarItem } from '@nutui/nutui';
// taro
import { SideNavBar, SubSideNavBar, SideNavBarItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(SideNavBar);
app.use(SubSideNavBar);
app.use(SideNavBarItem);
```

### 基础用法

:::demo

``` html
<template>
  <nut-cell @click="handleClick1">
    <span><label>右侧</label></span>
  </nut-cell>
  <nut-popup position="right" v-model:visible="show1" :style="{ width, height }">
    <nut-sidenavbar>
      <nut-subsidenavbar title="智能城市AI" ikey="6">
        <nut-subsidenavbar title="人体识别1" ikey="9">
          <nut-sidenavbaritem ikey="10" title="人体检测1"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="11" title="细粒度人像分割1"></nut-sidenavbaritem>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="人体识别2" ikey="12">
          <nut-sidenavbaritem ikey="13" title="人体检测2"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="14" title="细粒度人像分割2"></nut-sidenavbaritem>
        </nut-subsidenavbar>
      </nut-subsidenavbar>
    </nut-sidenavbar>
  </nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show1: false,
        width: '80%',
        height: '100%',
      });

      const handleClick1 = () => {
        state.show1 = true;
      };

      return {
        ...toRefs(state),
        handleClick1
      };
    }
  }
</script>
```

:::

### 嵌套（建议最多三层）
> 小程序暂不支持异步加载

:::demo

``` html
<template>
  <nut-cell @click="handleClick3">
    <span><label>显示</label></span>
  </nut-cell>
  <nut-popup position="right" v-model:visible="show3" :style="{ width, height }">
    <nut-sidenavbar :show="show3">
      <nut-sidenavbaritem ikey="1" title="人脸识别" @click="handleClick4('人脸识别')"></nut-sidenavbaritem>
      <nut-sidenavbaritem ikey="2" title="自然语言处理"></nut-sidenavbaritem>
      <nut-subsidenavbar title="图像理解" ikey="3" :open="false">
        <nut-sidenavbaritem ikey="4" title="菜品识别"></nut-sidenavbaritem>
        <nut-sidenavbaritem ikey="5" title="拍照购"></nut-sidenavbaritem>
      </nut-subsidenavbar>
      <nut-subsidenavbar title="智能城市AI" ikey="6">
        <nut-sidenavbaritem ikey="7" title="企业风险预警模型"></nut-sidenavbaritem>
        <nut-sidenavbaritem ikey="8" title="水质量检测"></nut-sidenavbaritem>
        <nut-subsidenavbar title="人体识别" ikey="9">
          <nut-sidenavbaritem ikey="10" title="人体检测"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="11" title="细粒度人像分割"></nut-sidenavbaritem>
        </nut-subsidenavbar>
      </nut-subsidenavbar>
      <nut-subsidenavbar title="自然语言处理" ikey="12">
        <nut-sidenavbaritem ikey="13" title="词法分析"></nut-sidenavbaritem>
        <nut-sidenavbaritem ikey="14" title="句法分析"></nut-sidenavbaritem>
      </nut-subsidenavbar>
      <nut-subsidenavbar v-for="item in navs" :key="item.id" :title="item.name" :ikey="item.id">
        <nut-sidenavbaritem v-for="citem in item.arr" :key="citem.id" :title="citem.name"></nut-sidenavbaritem>
      </nut-subsidenavbar>
    </nut-sidenavbar>
  </nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        show3: false,
        width: '80%',
        height: '100%',
        navs: [] as any[]
      });

      const handleClick3 = () => {
        state.show3 = true;
        setTimeout(() => {
          state.navs = [
            {
              id: 16,
              name: 'asyc abc16',
              arr: [{ pid: 16, id: 17, name: 'abc16-id17' }]
            },
            {
              id: 17,
              name: 'asyc abc17',
              arr: [{ pid: 17, id: 18, name: 'abc17-id18' }]
            }
          ];
        }, 2000);
      };

      const handleClick4 = (msg: string) => {
        
      }

      return {
        ...toRefs(state),
        handleClick3,
        handleClick4
      };
    }
  }
</script>
```

:::

## API

### SideNavBar Props

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| offset                 | 导航缩进宽度                                                    | Number、String  | `15`

### SubSideNavBar Props

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| title                 | 导航标题                                                    | String  | ``
| ikey                 | 导航唯一标识                                                    | String、Number  | ``
| open                 | 导航是否默认展开                                                    | Boolean  | `true`

### SideNavBarItem Props

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| title                 | 导航标题                                                    | String  | `15`
| ikey                 | 导航唯一标识                                                    | String、Number  | ``


### SubSideNavBar Events

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| title-click | 导航点击 | - |

### SideNavBarItem Events

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 导航点击 | - |


