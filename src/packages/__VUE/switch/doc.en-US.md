# Switch

### Intro

Used to turn options on or off.

### Install

```js
import { createApp } from 'vue';
import { Switch } from '@nutui/nutui';

const app = createApp();
app.use(Switch);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-switch v-model="checked" />
</template>
<script setup>
import { ref } from 'vue';
const checked = ref(true);
</script>
```

:::

### Disable State

:::demo

```vue
<template>
  <nut-switch v-model="checked" disable />
</template>
<script setup>
import { ref } from 'vue';
const checked = ref(true);
</script>
```

:::

### Loading State

:::demo

```vue
<template>
  <nut-switch v-model="checked" loading active-color="red" />
</template>
<script setup>
import { ref } from 'vue';
const checked = ref(true);
</script>
```

:::

### Change event

:::demo

```vue
<template>
  <nut-switch v-model="checked" @change="change" />
</template>
<script setup>
import { ref } from 'vue';
const checked = ref(true);
const change = (value, event) => {
  console.log(`value：${value}`);
};
</script>
```

:::

### Change Async

:::demo

```vue
<template>
  <nut-switch :model-value="checkedAsync" @change="changeAsync" />
</template>
<script setup>
import { ref } from 'vue';
const checkedAsync = ref(true);
const changeAsync = (value, event) => {
  console.log(`2s ${value}`);
  setTimeout(() => {
    checkedAsync.value = value;
  }, 2000);
};
</script>
```

:::

### Custom Color

:::demo

```vue
<template>
  <nut-switch v-model="checked" active-color="blue" />
</template>
<script setup>
import { ref } from 'vue';
const checked = ref(true);
</script>
```

:::

### Use Text

:::demo

```vue
<template>
  <nut-switch v-model="checked" active-text="open" inactive-text="close" />
</template>
<script setup>
import { ref } from 'vue';
const checked = ref(true);
</script>
```

:::

### Custom loading icon

:::demo

```vue
<template>
  <nut-switch v-model="checked" loading>
    <template #icon><Loading name="loading" /></template>
  </nut-switch>
</template>
<script setup>
import { ref } from 'vue';
import { Loading } from '@nutui/icons-vue';
const checked = ref(true);
</script>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
|  ---  |  ---  |  ---  |  ---  |
| v-model | Status of Switch | boolean \| string \| number | `false` |
| disable | Disable status | boolean | `false` |
| loading | Loading status | boolean | `false` |
| active-color | Background color when active | string | `#fa2c19` |
| inactive-color | Background color when inactive | string | `#ebebeb` |
| active-text | Word description when active | string | - |
| inactive-text | Word description when inactive | string | - |
| active-value | Value when active | boolean ｜ string ｜ number | `true` |
| inactive-value | Value when inactive | boolean ｜ string ｜ number | `false` |

### Slots

| Name | Description |
|  ---  |  ---  |
| icon | loading icon slot |

### Events

| Event | Description | Arguments |
|  ---  |  ---  |  ---  |
| change | Emitted when check status changed | (value: boolean,event: Event) |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
|  ---  |  ---  |
| --nut-switch-close-bg-color | _#ebebeb_ |
| --nut-switch-close-cline-bg-color | _#f0f0f0_ |
| --nut-switch-width | _36px_ |
| --nut-switch-height | _21px_ |
| --nut-switch-line-height | _21px_ |
| --nut-switch-border-radius | _21px_ |
| --nut-switch-inside-width | _13px_ |
| --nut-switch-inside-height | _13px_ |
| --nut-switch-inside-open-transform | _translateX(146%)_ |
| --nut-switch-inside-close-transform | _translateX(30%)_ |
