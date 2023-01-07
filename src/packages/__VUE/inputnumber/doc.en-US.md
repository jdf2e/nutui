# InputNumber

### Intro

Control the number increase or decrease by clicking the button.

### Install

``` javascript
import { createApp } from 'vue';
import { InputNumber } from '@nutui/nutui';

const app = createApp();
app.use(InputNumber);
```


### Basic Usage

Initialize a default value

:::demo

``` html
<template>
  <nut-input-number v-model="value" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

### Step size setting

Set step `step` 5

:::demo

```html
<template>
  <nut-input-number v-model="value" step="5" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

### Limit input range

`min` and `max` attributes represent the minimum and maximum values respectively

:::demo

```html
<template>
  <nut-input-number v-model="value" min="10" max="20" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(10);
      return { value };
    },
  };
</script>
```

:::

### Disabled state

`disabled` When disabled, you cannot click the button or modify the input box.

:::demo

```html
<template>
  <nut-input-number v-model="value" disabled />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

### Read only disable input box

`readonly` Set read-only disable input box input behavior

:::demo

```html
<template>
  <nut-input-number v-model="value" readonly />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

### Support decimal point

Set step size `step` 0.1 `decimal places` keep 1 decimal place

:::demo

```html
<template>
  <nut-input-number v-model="value" step="0.1" decimal-places="1" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::
### Support asynchronous modification

Asynchronous modification through `change` event and `model-value`

:::demo

```html
<template>
  <nut-input-number :model-value="value" @change="onChange" />
</template>
<script lang="ts">
  import { reactive, getCurrentInstance, toRefs } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style';
  export default {
    setup() {
      let { proxy } = getCurrentInstance();
      const state = reactive({
        value: 1
      });
      const onChange = (value: number) => {
        showToast.loading('Asynchronous presentation changes in 2 seconds');
        setTimeout(() => {
          state.value = value;
          showToast.hide();
        }, 2000);
      };
      return { ...toRefs(state), onChange };
    },
  };
</script>
```

:::
### Custom button size

:::demo

```html
<template>
  <nut-input-number v-model="value"  button-size="30" input-width="50" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::
### Custsom icon name 

:::demo

```html
<template>
  <nut-input-number v-model="value">
    <template #leftIcon>
      <Left />
    </template>
    <template #rightIcon>
      <Right />
    </template>
  </nut-input-number>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { Left, Right } from '@nutui/icons-vue';
  export default {
    components: { Left, Right },
    setup() {
      const value = ref(1);
      return { value };
    },
  };
</script>
```

:::

## API

### Props

| Attribute      | Description                                            | Type             | Default |
|----------------|--------------------------------------------------------|------------------|---------|
| v-model        | Initial value                                          | string \| number | -       |
| input-width    | Input box width                                        | string           | `40px`  |
| button-size    | Operators +, - Dimensions                              | string           | `20px`  |
| min            | Minimum limit                                          | string \| number | `1`     |
| max            | Maximum limit                                          | string \| number | `9999`  |
| step           | step                                                   | string \| number | `1`     |
| decimal-places | Set reserved decimal places                            | string \| number | `0`     |
| disabled       | Disable all features                                   | boolean          | `false` |
| readonly       | Read only status disables input box operation behavior | boolean          | `false` |

### Slots

| Name      | Description       |
|-----------|-------------------|
| leftIcon  | Custom left icon  |
| rightIcon | Custom right icon |

### Events

| Event     | Description                                     | Arguments                                |
|-----------|-------------------------------------------------|------------------------------------------|
| add       | Triggered when the Add button is clicked        | event: Event                             |
| reduce    | Triggered when the decrease button is clicked   | event: Event                             |
| overlimit | Triggered when an unavailable button is clicked | event: Event,type:string (reduce or add) |
| change    | Triggered when the value changes                | value:  number , event : Event           |
| blur      | Triggered when the input box blur               | event: Event                             |
| focus     | Triggered when the input box focus              | event: Event                             |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                     | Default Value              |
|------------------------------------------|----------------------------|
| --nut-inputnumber-icon-color             | _var(--nut-title-color)_   |
| --nut-inputnumber-icon-void-color        | _var(--nut-disable-color)_ |
| --nut-inputnumber-icon-size              | _20px_                     |
| --nut-inputnumber-input-font-size        | _12px_                     |
| --nut-inputnumber-input-font-color       | _var(--nut-title-color)_   |
| --nut-inputnumber-input-background-color | _var(--nut-help-color)_    |
| --nut-inputnumber-input-border-radius    | _4px_                      |
| --nut-inputnumber-input-width            | _40px_                     |
| --nut-inputnumber-input-margin           | _0 6px_                    |
| --nut-inputnumber-input-border           | _0_                        |
| --nut-inputnumber-border                 | _0_                        |
| --nut-inputnumber-border-radius          | _0_                        |
| --nut-inputnumber-height                 | _auto_                     |
| --nut-inputnumber-line-height            | _normal_                   |
| --nut-inputnumber-border-box             | _content-box_              |
| --nut-inputnumber-display                | _flex_                     |
