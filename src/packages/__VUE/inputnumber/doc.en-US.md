# InputNumber

### Intro

Control the number increase or decrease by clicking the button.

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { InputNumber,Icon } from '@nutui/nutui';
// taro
import { InputNumber,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(InputNumber);
app.use(Icon);

```


### Basic Usage

Initialize a default value

:::demo

``` html
<template>
  <nut-inputnumber v-model="value" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
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
  <nut-inputnumber v-model="value" step="5" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
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
  <nut-inputnumber v-model="value" min="10" max="20" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
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
  <nut-inputnumber v-model="value" disabled />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
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
  <nut-inputnumber v-model="value" readonly />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
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
  <nut-inputnumber v-model="value" step="0.1" decimal-places="1" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
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
  <nut-inputnumber :model-value="value" @change="onChange" />
</template>
<script lang="ts">
  import { reactive, getCurrentInstance, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      let { proxy } = getCurrentInstance();
      const state = reactive({
        value: 1
      });
      const onChange = (value: number) => {
        proxy.$toast.loading('Asynchronous presentation changes in 2 seconds');
        setTimeout(() => {
          state.value = value;
          proxy.$toast.hide();
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
  <nut-inputnumber v-model="value"  button-size="30" input-width="50" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
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
  <nut-inputnumber icon-left="left" icon-right="right" v-model="value" />
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
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

| Attribute           | Description                       | Type           | Default     |
|----------------|----------------------------|----------------|------------|
| v-model        | Initial value                    | String、Number | -          |
| input-width    | Input box width                 | String         | `40px`     |
| button-size    | Operators +, - Dimensions             | String         | `20px`     |
| min            | Minimum limit                 | String、Number | `1`        |
| max            | Maximum limit                 | String、Number | `9999` |
| step           | step                       | String、Number | `1`        |
| decimal-places | Set reserved decimal places           | String、Number | `0`        |
| disabled       | Disable all features               | Boolean        | false      |
| readonly       | Read only status disables input box operation behavior | Boolean        | false      |
| icon-left`v3.2.2`  | Left icon name             | String         | `minus`     |
| icon-right`v3.2.2` | Right icon name             | String         | `plus`      |
| font-class-name `v3.2.2` | Custom icon font base class name | String   | `nutui-iconfont` |
| class-prefix `v3.2.2` | Custom icon class name prefix for using custom icons | String   | `nut-icon`  |

### Events

| Event    | Description                   | Arguments                       |
|-----------|------------------------|--------------------------------|
| add       | Triggered when the Add button is clicked     | event: Event                   |
| reduce    | Triggered when the decrease button is clicked     | event: Event                   |
| overlimit | Triggered when an unavailable button is clicked | event: Event,type:string (reduce or add)                    |
| change    | Triggered when the value changes           | value:  number , event : Event |
| blur      | Triggered when the input box blur   | event: Event                   |
| focus     | Triggered when the input box focus   | event: Event                   |
