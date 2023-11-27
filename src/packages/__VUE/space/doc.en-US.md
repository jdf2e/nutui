# Space

### Intro

Sets the spacing between elements. Available in `NutUI` >= 4.2.0.

### Install

```js
import { createApp } from 'vue';
import { Space } from '@nutui/nutui';

const app = createApp();
app.use(Space);
```

### Basic Usage

The Space component sets a certain spacing between the subcomponents, the default spacing is 8px.

:::demo

```vue
<template>
  <nut-space>
    <nut-button type="primary">Button</nut-button>
    <nut-button type="primary">Button</nut-button>
    <nut-button type="primary">Button</nut-button>
    <nut-button type="primary">Button</nut-button>
  </nut-space>
</template>
```

:::

### Direction

By setting the direction property to vertical, you can set the spacing of the vertical alignment.

:::demo

```vue
<template>
  <nut-space direction="vertical" fill>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
  </nut-space>
</template>
```

:::

### Custom Spacing

Control the size of the spacing by adjusting the gutter value. When the number type is passed, px units are used by default; You can also pass in a string, such as a value with units like 2rem or 5vw.
You can also set css variables -nut-space-gap control, priority: gutter>css Variables > Default Style.

:::demo

```vue
<template>
  <!-- gutter -->
  <nut-space :gutter="20">
    <nut-button type="primary">Button</nut-button>
    <nut-button type="primary">Button</nut-button>
    <nut-button type="primary">Button</nut-button>
    <nut-button type="primary">Button</nut-button>
  </nut-space>
  <!-- css variables -->
  <nut-cell :style="{ '--nut-space-gap': '30px' }">
    <nut-space>
      <nut-button type="primary">Button</nut-button>
      <nut-button type="primary">Button</nut-button>
      <nut-button type="primary">Button</nut-button>
      <nut-button type="primary">Button</nut-button>
    </nut-space>
  </nut-cell>
</template>
```

:::

### word wrap

In horizontal mode, the wrap property controls whether child elements are wrapped automatically.

:::demo

```vue
<template>
  <nut-space wrap>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
    <nut-button type="primary" block>Button</nut-button>
  </nut-space>
</template>
```

:::

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Spacing direction, `vertical` `horizontal` | string | `horizontal` |
| align | Cross axis alignment, `start` `end` `center` `baseline` | string | `-` |
| justify | Spindle alignment, `start` `end` `center` `between` `around` `evenly` `stretch` | string | `-` |
| wrap | Whether to wrap lines automatically. This parameter is valid only when horizontal | boolean | `false` |
| fill | Whether to make Space a block-level element and fill the entire parent element | boolean | `false` |
| gutter | Spacing size, such as 20px 2em, the default unit is px, and supports array form to set horizontal and vertical spacing respectively | number \| string \| number[] \| string[] | `-` |

### Slots

| Name | Description |
| --- | --- |
| default | Default slot |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer
to [ConfigProvider component](#/en-US/component/configprovider)。

| Name | Default | Description |
| --- | --- | --- |
| \--nut-space-gap | `8px` | Spacing size |
