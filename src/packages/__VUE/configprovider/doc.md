# ConfigProvider 全局配置

### 介绍

用于全局配置 NutUI 组件，提供暗黑模式，动态主题。

### 安装

```javascript

import { createApp } from 'vue';
import { ConfigProvider } from '@nutui/nutui';

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

### 主题定制

NutUI组件可以通过 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果。

#### 示例

这些变量的默认值被定义在 `:root` 节点上，HTML 里的所有子节点都可以访问到这些变量：

```css
:root {
    --nut-primary-color: #fa2c19;
    --nut-primary-color-end: #fa6419;
    --nut-help-color: #f5f5f5;
    --nut-active-color: rgba(250, 44, 25, 0.15);
}
```

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

```css
/* 添加这段样式后，Primary Button 会变成绿色 */
:root {
  --nut-button-primary-background-color: green;
}
```

#### 通过 ConfigProvider 覆盖
ConfigProvider 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 ConfigProvider 组件，并通过 theme-vars 属性来配置一些主题变量
:::demo

```html
<template>
    <nut-config-provider :theme-vars="themeVars">
      <nut-form>
        <nut-form-item :label="滑块">
          <nut-range hidden-tag v-model="range"></nut-range>
        </nut-form-item>
      </nut-form>
    </nut-config-provider>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const range = ref(30);
      const themeVars = {
          primaryColor:'green',
          primaryColorEnd:'green',
          activeColor:'rgba(0,128,0,0.15)'
      };
      // 当然，你也可以选择使用组件变量去替换，如果同时设置了基础变量和组件变量，组件变量会覆盖基础变量。
      //  const themeVars = {
      //   rangeBgColor: 'rgba(25,137,250,0.15)',
      //   rangeBarBgColor: '#0289fa',
      //   rangeBarBtnBorder: '1px solid #0289fa'
      // };

      return { range, themeVars };
    }
  };
</script>
```

:::


### 主题变量
#### 基础变量

NutUI 中的 CSS 变量分为 **基础变量** 和 **组件变量**。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件。

#### 变量列表

下面是所有的基础变量：
```less
  // 主色调
  --nut-primary-color: #fa2c19;
  --nut-primary-color-end: #fa6419;
  --nut-primary-color-active: rgba(250, 44, 25, 0.15);
  // 辅助色
  --nut-help-color: #f5f5f5;
  // 标题常规文字
  --nut-title-color: #1a1a1a;
  // 副标题
  --nut-title-color2: #666666;
  // 次内容
  --nut-text-color: #808080;
  // 特殊禁用色
  --nut-disable-color: #cccccc;
  --nut-white: #fff;
  --nut-black: #000;
  --nut-required-color: #fa2c19;
  // 暗黑模式下颜色
  --nut-dark-background: #131313;
  --nut-dark-background2: #1b1b1b;
  --nut-nut-dark-background3: #141414;
  --nut-nut-dark-background4: #323233;
  --nut-dark-background5: #646566;
  --nut-dark-background6: #380e08;
  --nut-dark-background7: #707070;
  --nut-dark-color: var(--nut-white);
  --nut-dark-color2: #f2270c;
  --nut-dark-color3: rgba(232, 230, 227, 0.8);
  --nut-dark-color-gray: var(--nut-text-color);
  --nut-dark-calendar-choose-color: rgba(227, 227, 227, 0.2);
  // 字体
  --nut-font-family: PingFang SC, Microsoft YaHei, Helvetica, Hiragino Sans GB, SimSun, sans-serif;

  // Font
  --nut-font-size-0: 10px;
  --nut-font-size-1: 12px;
  --nut-font-size-2: 14px;
  --nut-font-size-3: 16px;
  --nut-font-size-4: 18px;
  --nut-font-weight-bold: 400;
  --nut-font-size-small: var(--nut-font-size-1);
  --nut-font-size-base: var(--nut-font-size-2);
  --nut-font-size-large: var(--nut-font-size-3);
  --nut-line-height-base: 1.5;

```


## API

### Props

| 参数  | 说明                                             | 类型   | 默认值 |
|-------|--------------------------------------------------|--------|--------|
| theme | 主题风格，设置为 `dark` 来开启深色模式，全局生效 | String | -      |
| theme-vars | 自定义主题变量，局部生效 | Object | -      |
| tag   | 根节点对应的 HTML 标签名                         | String | div    |