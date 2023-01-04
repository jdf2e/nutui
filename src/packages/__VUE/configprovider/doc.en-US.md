# ConfigProvider

### Intro
Used to configure NutUI components globally, provide dark mode and dynamic theme.
### Install

```javascript

import { createApp } from 'vue';
import { ConfigProvider } from '@nutui/nutui';

const app = createApp();
app.use(ConfigProvider);

```

### dark mode

Dark mode can be enabled by setting the `theme` property of the ConfigProvider component to `dark`.

Dark mode takes effect globally, making all NutUI components on the page dark.

:::demo

```html
<template>
  <nut-config-provider :theme="theme">
      <nut-cell title="Switch Dark Mode">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" @change="switchChange" />
        </template>
      </nut-cell>
      <nut-cell title="Title" sub-title="Subtitle Description" desc="Description"></nut-cell>
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

### Dynamic Theme

NutUI components can organize styles through [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) , and cover these CSS variables through the shell to determine themes in real time, dynamically switch themes and other effects.

#### Intro

Default values ​​for these variables are defined on the `:root` node, and all child nodes in the HTML can access these variables:

```css
:root {
    --nut-primary-color: #fa2c19;
    --nut-primary-color-end: #fa6419;
    --nut-help-color: #f5f5f5;
    --nut-active-color: rgba(250, 44, 25, 0.15);
}
```

#### Override by CSS

You can directly override these CSS variables in the code, and the style of the Button component will change accordingly:

```css
/* the Primary Button will turn red */
:root {
  --nut-button-primary-background-color: green;
}
```

#### Override by ConfigProvider
The ConfigProvider component provides the ability to override CSS variables. You need to wrap a ConfigProvider component at the root node and configure some CSS variables through the theme-vars property.
:::demo

```html
<template>
    <nut-config-provider :theme-vars="themeVars">
      <nut-form>
        <nut-form-item :label="Range">
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
      // Of course, you can also choose to use component variables to replace. If both basic variables and component variables are set, the component variables will overwrite the basic variables
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



## Style Variables
### basic variable

CSS variables in NutUI are divided into **basic variable** and **component variable**. Component variables inherit the base variable, so after modifying the base variable, it will affect all related components.


### variable list

Here are all the base variables:
```scss
  --nut-primary-color: #fa2c19;
  --nut-primary-color-end: #fa6419;
  --nut-help-color: #f5f5f5;
  --nut-active-color: rgba(250, 44, 25, 0.15);
  --nut-title-color: #1a1a1a;
  --nut-title-color2: #666666;
  --nut-text-color: #808080;
  --nut-disable-color: #cccccc;
  --nut-white: #fff;
  --nut-black: #000;
  --nut-required-color: #fa2c19;
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

| Attribute  | Description                                                          | Type   | Default |
|------------|----------------------------------------------------------------------|--------|---------|
| theme      | Theme style, set to `dark` to enable dark mode, take effect globally | string | -       |
| theme-vars | Customized theme variable                     | object | -       |
| tag        | HTML Tag of root element                                             | string | `div`     |