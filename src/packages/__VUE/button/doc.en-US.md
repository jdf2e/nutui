# Button

### Intro

Buttons are used to trigger an action, such as submitting a form.

### Install

```javascript
import { createApp } from 'vue';
import { Button } from '@nutui/nutui';

const app = createApp();
app.use(Button);
```


### Type

The button supports six types: `default`, `primary`, `info`, `warning`, `danger`, `success`, the default is `default`.

:::demo

```html
<template>
  <nut-button type="primary">Primary</nut-button>
  <nut-button type="info">Info</nut-button>
  <nut-button type="default">Default</nut-button>
  <nut-button type="danger">Danger</nut-button>
  <nut-button type="warning">Warning</nut-button>
  <nut-button type="success">Success</nut-button>
</template>
```

:::

### Plain

The button is set as a plain button through the `plain` property, the text of the plain button is the button color, and the background is white.

:::demo

```html
<template>
  <nut-button plain type="primary">Plain</nut-button>
  <nut-button plain type="info">Plain</nut-button>
</template>
```

:::

### Disabled

The button is disabled through the `disabled` property, and the button cannot be clicked in the disabled state.

:::demo

```html
<template>
  <nut-button disabled type="primary">Disabled</nut-button>
  <nut-button plain disabled type="info">Disabled</nut-button>
  <nut-button plain disabled type="primary">Disabled</nut-button>
</template>
```

:::

### Shape

Set the button shape through the `shape` property, support circle and square buttons, the default is circle.

:::demo

```html
<template>
  <nut-button shape="square" type="primary">Square</nut-button>
  <nut-button type="info">Round</nut-button>
</template>
```

:::

### Loading

:::demo

```html
<template>
  <nut-button loading type="info"></nut-button>
  <nut-button loading type="warning">Loading...</nut-button>
  <nut-button :loading="isLoading" type="success" @click="changeLoading">Click me!</nut-button>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      let isLoading = ref(false);
      const changeLoading = () => {
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 3000);
      };
      return {
        isLoading,
        changeLoading
      };
    }
  };
</script>
```

:::

### Icon

:::demo

```html
<template>
  <nut-button shape="square" plain type="primary">
    <template #icon>
      <StarFill />
    </template>
  </nut-button>
  <nut-button shape="square" type="primary">
    <template #icon>
      <Star />
    </template>
    Star
  </nut-button>
</template>
<script lang="ts">
  import { StarFill, Star } from '@nutui/icons-vue';
  export default {
    components: { StarFill, Star }
  }
</script>
```

:::

### Size

Support `large`, `normal`, `small`, `mini` four sizes, the default is `normal`.

:::demo

```html
<template>
  <nut-button size="large" type="primary">Large</nut-button>
  <nut-button type="primary">Normal</nut-button>
  <nut-button size="small" type="primary">Small</nut-button>
  <nut-button size="mini" type="primary">Mini</nut-button>
</template>
```

:::

### Block

By default, the button is an inline block-level element. The `block` attribute can set the element type of the button to a block-level element, which is often used to implement banner buttons.

:::demo

```html
<template>
  <nut-button block type="primary">Block Element</nut-button>
</template>
```

:::

### Custom Color

The color of the button can be customized through the color property.

:::demo

```html
<template>
  <nut-button color="#7232dd">Pure</nut-button>
  <nut-button color="#7232dd" plain>Pure</nut-button>
  <nut-button color="linear-gradient(to right, #ff6034, #ee0a24)"> Gradient </nut-button>
</template>
```

:::

## API

### Props

| Attribute     | Description                                                         | Type    | Default    |
| -------- | ------------------------------------------------------------ | ------- | --------- |
| type     | Can be set to  `primary` `info` `warning` `danger` `success` | String  | `default` |
| size     | 	Can be set to `large` `small` `mini`                        | String  | `normal`  |
| shape    | Can be set to `square`                                      | String  | `round`   |
| color    | Button color, support incoming linear-gradient gradient color                    | String  | -         |
| plain    | Whether to be plain button     | Boolean | `false`   |
| disabled | Whether to disable button         | Boolean | `false`   |
| block    | Whether to set display block      | Boolean | `false`   |
| loading  | Whether to show loading status     | Boolean | `false`   |

### Events

| Event | Description           | Arguments          |
| ------ | -------------- | ----------------- |
| click  | Emitted when component is clicked | event: MouseEvent |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --------------------------------------- | -------------------------- | ---- |
| --nut-button-border-radius| _25px_  | - |
| --nut-button-border-width| _1px_  | - |
| --nut-button-icon-width| _16px_  | - |
| --nut-button-default-bg-color| _var(--nut-white)_  | - |
| --nut-button-default-border-color| _rgba(204, 204, 204, 1)_  | - |
| --nut-button-default-color| _rgba(102, 102, 102, 1)_  | - |
| --nut-button-default-padding| _0 18px_  | - |
| --nut-button-mini-padding| _0 12px_  | - |
| --nut-button-small-padding| _0 12px_  | - |
| --nut-button-small-height| _28px_  | - |
| --nut-button-mini-height| _24px_  | - |
| --nut-button-default-height| _38px_  | - |
| --nut-button-large-height| _48px_  | - |
| --nut-button-large-line-height| _46px_  | - |
| --nut-button-small-line-height| _26px_  | - |
| --nut-button-block-height| _48px_  | - |
| --nut-button-default-line-height| _36px_  | - |
| --nut-button-block-line-height| _46px_  | - |
| --nut-button-default-font-size| _var(--nut-font-size-2)_  | - |
| --nut-button-large-font-size| _var(--nut-button-default-font-size)_  | - |
| --nut-button-small-font-size| _var(--nut-font-size-1)_  | - |
| --nut-button-mini-font-size| _var(--nut-font-size-1)_  | - |
| --nut-button-mini-line-height| _1.2_  | - |
| --nut-button-disabled-opacity| _0.68_  | - |
| --nut-button-primary-color| _var(--nut-white)_  | - |
| --nut-button-primary-border-color| _var(--nut-primary-color)_  | - |
| --nut-button-primary-background-color| _linear-gradient(135deg,var(--nut-primary-color) 0%,var(--nut-primary-color-end) 100%)_  | - |
| --nut-button-info-color| _var(--nut-white)_  | - |
| --nut-button-info-border-color| _rgba(73, 106, 242, 1)_  | - |
| --nut-button-info-background-color| _linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)_  | - |
| --nut-button-success-color| _var(--nut-white)_  | - |
| --nut-button-success-border-color| _rgba(38, 191, 38, 1)_  | - |
| --nut-button-success-background-color| _linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)_  | - |
| --nut-button-danger-color| _var(--nut-white)_  | - |
| --nut-button-danger-border-color| _rgba(250, 44, 25, 1)_  | - |
| --nut-button-danger-background-color| _rgba(250, 44, 25, 1)_  | - |
| --nut-button-warning-color| _var(--nut-white)_  | - |
| --nut-button-warning-border-color| _rgba(255, 158, 13, 1)_  | - |
| --nut-button-warning-background-color| _linear-gradient(135deg,rgba(255, 158, 13, 1) 0%,rgba(255, 167, 13, 1) 45%,rgba(255, 182, 13, 1) 83%,rgba(255, 190, 13, 1) 100%)_  | - |
| --nut-button-plain-background-color| _var(--nut-white)_  | - |
| --nut-button-small-round-border-radius| _var(--nut-button-border-radius)_  | - |