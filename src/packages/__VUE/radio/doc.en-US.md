# Radio

### Intro

Used to make a single selection in a set of alternatives

### Install

``` ts
import { createApp } from 'vue';
//vue
import { Radio,RadioGroup,Icon } from '@nutui/nutui';
//taro
import { Radio,RadioGroup,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Radio);
app.use(RadioGroup);
app.use(Icon);
```
### Basic Usage

Bind the **label** of the current option through **v-model**. And it must be used in combination with **nut-radiogroup** and **nut-radio**

:::demo

```html
<template>
  <nut-cell-group title="Basic">
    <nut-cell>
      <nut-radiogroup v-model="radioVal">
        <nut-radio label="1">Option 1</nut-radio>
        <nut-radio disabled label="2">Option 2</nut-radio>
        <nut-radio label="3">Option 3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell>
      <nut-radiogroup v-model="radioVal" text-position="left">
        <nut-radio label="1">Option 1</nut-radio>
        <nut-radio disabled label="2">Option 2</nut-radio>
        <nut-radio label="3">Option 3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell>
      <nut-radiogroup v-model="radioVal">
        <nut-radio shape="button" label="1">Option 1</nut-radio>
        <nut-radio disabled shape="button" label="2">Option 2</nut-radio>
        <nut-radio shape="button" label="3">Option 3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### Horizontal use

:::demo

```html
<template>
  <nut-cell-group title="Horizontal use">
    <nut-cell>
      <nut-radiogroup v-model="radioVal" direction="horizontal">
        <nut-radio label="1">Option 1</nut-radio>
        <nut-radio label="2">Option 2</nut-radio>
        <nut-radio label="3">Option 3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell>
      <nut-radiogroup v-model="radioVal" text-position="left" direction="horizontal">
        <nut-radio label="1">Option 1</nut-radio>
        <nut-radio label="2">Option 2</nut-radio>
        <nut-radio label="3">Option 3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell>
      <nut-radiogroup v-model="radioVal" direction="horizontal">
        <nut-radio shape="button" label="1">Option 1</nut-radio>
        <nut-radio shape="button" label="2">Option 2</nut-radio>
        <nut-radio shape="button" label="3">Option 3</nut-radio>
      </nut-radiogroup>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::
### Custom size

:::demo

```html
<template>
  <nut-cell-group title="Custom size">
    <nut-cell>
      <nut-radiogroup v-model="radioVal">
        <nut-radio label="1" icon-size="12">Custom size 12</nut-radio>
        <nut-radio label="2" icon-size="12">Custom size 12</nut-radio>
      </nut-radiogroup>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### Custom icon

It is suggested to modify `icon-name` and `icon-active-name`

:::demo

```html
<template>
  <nut-cell-group title="Radio Custom icon">
    <nut-cell>
      <nut-radiogroup v-model="radioVal">
        <nut-radio label="1" icon-name="checklist" icon-active-name="checklist">Custom icon</nut-radio>
        <nut-radio label="2" icon-name="checklist" icon-active-name="checklist">Custom icon</nut-radio>
      </nut-radiogroup>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### Trigger change event

:::demo

```html
<template>
  <nut-cell-group title="Trigger event">
    <nut-cell>
      <nut-radiogroup v-model="radioVal" @change="handleChange">
        <nut-radio label="1">Trigger event</nut-radio>
        <nut-radio label="2">Trigger event</nut-radio>
      </nut-radiogroup>
    </nut-cell>
    <nut-cell title="Currently selected value" :desc="radioVal"></nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      const handleChange = (value: any) => {
        console.log(value);
      };
      return { radioVal, handleChange };
    },
  };
</script>
```
:::

## API

### Radio Props

| Attribute             | Description                                                         | Type                    | Default            |
|------------------|--------------------------------------------------------------|-------------------------|-------------------|
| disabled         | Disable selection                                           | Boolean                 | `false`           |
| icon-size        | [Icon Size](#/en-US/icon)                                           | String、Number          | `18`              |
| icon-name        | [Icon Name](#en-US//icon)，Before selection (it is suggested to modify it together with `icon-active-name`) | String                  | `'check-normal'`  |
| icon-active-name | [Icon Name](#en-US//icon)，After selection (it is suggested to modify it together with `icon-name`)       | String                  | `'check-checked'` |
| icon-class-prefix | Custom icon class name prefix, used to use custom icons        | String                  | `nut-icon` |
| icon-font-class-name | Basic class name of custom icon font        | String                  | `nutui-iconfont` |
| label            | Radio box ID                                                  | String、Number、Boolean | -                 |
| shape            | Shape, optional values are `button`、`round`                                | String                  | round             |

### RadioGroup Props

| Attribute          | Description                                          | Type                    | Default     |
|---------------|-----------------------------------------------|-------------------------|------------|
| v-model       | The identifier of the currently selected item is selected when it is consistent with the `label` value | String、Number、Boolean | -          |
| text-position | The position of the text, optional value：`left`,`right`        | String                  | `right`    |
| direction     | Use horizontal and vertical optional values `horizontal`、`vertical`      | String                  | `vertical` |

### RadioGroup Events

| Event   | Description         | Arguments                                           |
|--------|--------------|----------------------------------------------------|
| change | Triggered when the value changes | Currently selected item value（label）【There is a value after setting `label`, which is empty by default】 |