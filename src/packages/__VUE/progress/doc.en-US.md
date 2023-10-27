# Progress

### Intro

Used to show the current progress of the operation.

### Install

```js
import { createApp } from 'vue';
import { Progress } from '@nutui/nutui';

const app = createApp();
app.use(Progress);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-progress percentage="30" />
</template>
```

:::

### Custom Style

:::demo

```vue
<template>
  <nut-progress percentage="30" stroke-color="rgba(250,44,25,0.47)" stroke-width="20" text-color="red" />
</template>
```

:::

### Don't Show Percentage

:::demo

```vue
<template>
  <nut-progress percentage="50" :show-text="false" stroke-height="24" />
</template>
```

:::

### Text Inside

:::demo

```vue
<template>
  <nut-progress percentage="60" :text-inside="true" />
</template>
```

:::

### Custom Content

:::demo

```vue
<template>
  <nut-progress percentage="60" :text-inside="true">
    <img
      src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      width="30"
      height="30"
    />
  </nut-progress>
</template>
```

:::

### Custom Size

**small**，**base**，**large** .
:::demo

```vue
<template>
  <nut-progress percentage="30" :text-inside="true" size="small"> </nut-progress>
  <nut-progress percentage="50" :text-inside="true" size="base"> </nut-progress>
  <nut-progress percentage="70" :text-inside="true" size="large"> </nut-progress>
</template>
```

:::

### Status Display

:::demo

```vue
<template>
  <nut-progress
    percentage="30"
    stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
    status="active"
  />
  <nut-progress percentage="50" status="icon" />
  <nut-progress
    percentage="100"
    stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
    stroke-width="15"
    status="icon"
  >
    <template #icon-name>
      <Issue color="red" width="15px" height="15px"></Issue>
    </template>
  </nut-progress>
</template>
<script setup>
import { Issue } from '@nutui/icons-vue';
</script>
```

:::

### Dynamic Change

:::demo

```vue
<template>
  <nut-progress :percentage="val" />
  <nut-button type="default" @click="setReduceVal">reduce</nut-button>
  <nut-button type="primary" @click="setAddVal">add</nut-button>
</template>
<script setup>
import { ref } from 'vue';
const val = ref(0);
const setAddVal = () => {
  if (val.value >= 100) {
    return false;
  }
  val.value += 10;
};
const setReduceVal = () => {
  if (val.value <= 0) {
    return false;
  }
  val.value -= 10;
};
</script>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| percentage | percentage | number | `0` |
| is-show-percentage | Whether to display the percent sign | boolean | `true` |
| stroke-color | Stroke color | string | `#f30` |
| stroke-width | Stroke width | string | - |
| size | Progress bar and text size, small/base/large | string | - |
| show-text | Whether to show text | boolean | `true` |
| text-inside | Progress bar text display position(false:outside，true:Inside) | boolean | `false` |
| text-color | Progress bar text color setting | string | `#333` |
| text-background | Progress bar text background color setting | string | - |
| status | The current state of the progress bar，`active(display animation effect)` `icon(display icon label)` | string | `text` |

### Slots

| Name | Description |
| --- | --- |
| icon-name | Right icon content |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Deault Value |
| --- | --- |
| --nut-progress-inner-background-color | _linear-gradient(135deg,var(--nut-primary-color) 0%,var(--nut-primary-color-end) 100%)_ |
| --nut-progress-insidetext-background | _var(--nut-progress-inner-background-color)_ |
| --nut-progress-outer-background-color | _#f3f3f3_ |
| --nut-progress-outer-border-radius | _12px_ |
| --nut-progress-insidetext-border-radius | _5px_ |
| --nut-progress-insidetext-padding | _3px 5px 3px 6px_ |
| --nut-progress-small-height | _5px_ |
| --nut-progress-small-text-font-size | _7px_ |
| --nut-progress-small-text-line-height | _10px_ |
| --nut-progress-small-text-padding | _2px 4px_ |
| --nut-progress-base-height | _10px_ |
| --nut-progress-base-text-font-size | _9px_ |
| --nut-progress-base-text-line-height | _13px_ |
| --nut-progress-base-text-padding | _var(--nut-progress-insidetext-padding)_ |
| --nut-progress-large-height | _15px_ |
| --nut-progress-large-text-font-size | _13px_ |
| --nut-progress-large-text-line-height | _18px_ |
| --nut-progress-large-text-padding | _var(--nut-progress-insidetext-padding)_ |
