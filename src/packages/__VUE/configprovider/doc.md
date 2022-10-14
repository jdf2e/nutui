# ConfigProvider 全局配置

### 介绍

用于全局配置 NutUI 组件，提供暗黑模式。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { ConfigProvider } from '@nutui/nutui';
// taro
import { ConfigProvider } from '@nutui/nutui-taro';

const app = createApp();
app.use(ConfigProvider);

```

### 深色模式

将 ConfigProvider 组件的 `theme` 属性设置为 `dark`，可以开启深色模式。

深色模式会全局生效，使页面上的所有 NutUI 组件变为深色风格。

:::demo

```html
<template>
  <nut-config-provider :theme="theme">
      <nut-cell title="切换暗黑">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" @change="switchChange" />
        </template>
      </nut-cell>
      <nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
  </nut-config-provider>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const switchChecked = ref(false);
      const theme = ref('');
      const switchChange = (v: boolean) => {
        theme.value = v ? 'dark' : '';
      };

      return { translate, switchChecked, switchChange, theme };
    }
  };
</script>
```

:::

## API

### Props

| 参数  | 说明                                             | 类型   | 默认值 |
|-------|--------------------------------------------------|--------|--------|
| theme | 主题风格，设置为 `dark` 来开启深色模式，全局生效 | String | -      |
| tag   | 根节点对应的 HTML 标签名                         | String | div    |


### 暗黑模式适配进度

目前，只有以下组件支持了暗黑模式，其他组件还在持续完善中，请关注后续的发布 欢迎 PR 共建：

- Button  
- Cell  
- Icon  
- OverLay  
- Popup  
- Layout  
- Sticky  
- Divider  
- Grid  
- Navbar  
- FixedNav  
- Menu  
- Tabbar  
- Elevator  
- Pagination  
- Tabs  
- Form...