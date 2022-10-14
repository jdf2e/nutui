# Button

### Intro

Buttons are used to trigger an action, such as submitting a form.

### Install

```javascript
import { createApp } from 'vue';
// vue
import { Button } from '@nutui/nutui';
// taro
import { Button } from '@nutui/nutui-taro';

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
  <nut-button shape="square" plain type="primary" icon="star-fill"></nut-button>
  <nut-button shape="square" type="primary" icon="star">Star</nut-button>
</template>
```

:::

### Custom Icon

Refer to the custom icon in the `Icon` component description, where `icon-font-class-name` corresponds to the `font-class-name` of the Icon component, and `icon-class-prefix` corresponds to the `class-prefix` of the Icon component .

```html
<template>
  <nut-button shape="square" plain type="primary" icon-font-class-name="iconfont" icon-class-prefix="icon" icon="close"></nut-button>
</template>
```

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
| icon     | Left Icon                     | String  | -         |
| icon-font-class-name`v3.1.17` | Custom icon font base class name    | String | `nutui-iconfont` |
| icon-class-prefix `v3.1.17`   | Custom icon class name prefix for using custom icons           | String | `nut-icon`       |
| loading  | Whether to show loading status     | Boolean | `false`   |

### Events

| Event | Description           | Arguments          |
| ------ | -------------- | ----------------- |
| click  | Emitted when component is clicked | event: MouseEvent |
