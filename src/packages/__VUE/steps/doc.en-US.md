# Steps

### Intro

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

### Install

```javascript
import { createApp } from 'vue';
import { Steps, Step } from '@nutui/nutui';

const app = createApp();
app.use(Steps);
app.use(Step);
```

### Basic Usage

:::demo

```html
<template>
  <nut-steps :current="current1" @click-step="handleClickStep">
    <nut-step title="Step One">
      1
      <template #title>Step One</template>
    </nut-step>
    <nut-step title="Not started">2</nut-step>
    <nut-step title="Not started">3</nut-step>
    <nut-step title="Not started">4</nut-step>
  </nut-steps>
</template>
<script>
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        current1: 1,
      });
      const handleClickStep = (index: number) => {
        console.log(index)
      };
      return { ...toRefs(state), handleClickStep };
    }
  };
</script>
```
:::

### Title and description information

:::demo

```html
<template>
  <nut-steps :current="current2">
    <nut-step title="Completed" content="Step description">1</nut-step>
    <nut-step title="In progress" content="Step description">2</nut-step>
    <nut-step title="Not started" content="Step description">3</nut-step>
  </nut-steps>
</template>
<script>
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        current2: 1,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Custom icon

:::demo

```html
<template>
  <nut-steps current="1">
    <nut-step title="Completed">
      <template #icon><Service /></template>
    </nut-step>
    <nut-step title="In progress">
      <template #icon><People /></template>
    </nut-step>
    <nut-step title="Not started">
      <template #icon><Location2 /></template>
    </nut-step>
  </nut-steps>
</template>
```

:::

### Vertical step bar

:::demo

```html
<template>
  <nut-steps direction="vertical" current="2">
    <nut-step title="Completed" content="Your order has been packaged and the goods have been delivered">1</nut-step>
    <nut-step title="In progress" content="Your order is in transit">2</nut-step>
    <nut-step title="Not started" content="The receiving address is Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone">3</nut-step>
  </nut-steps>
</template>
```

:::

### Point step and vertical direction

:::demo

```html
<template>
  <nut-steps direction="vertical" progress-dot current="2">
    <nut-step title="Completed" content="Your order has been packaged and the goods have been delivered">1</nut-step>
    <nut-step title="In progress" content="Your order is in transit">2</nut-step>
    <nut-step title="Not started">
      3
      <template #content>
        <p>The receiving address is：</p>
        <p>Jingdong building, yard 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone</p>
      </template>
    </nut-step>
  </nut-steps>
</template>
```

:::



## API

### Steps Props

| Attribute       | Description                                         | Type             | Default |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| direction	             | 	Show direction，`horizontal`,`vertical`  | String        | `horizontal`  | 
| current	               | 	Current step           | Number、String        | `0`      |
| progress-dot            |  Dot step bar     | Boolean | `false`         |

### Steps Events

| Event | Description                  | Arguments   |
|--------|----------------|--------------|
| click-step  | Triggered when the title or icon of the step is clicked | index: number |

### Step Props

| Attribute       | Description                         | Type             | Default |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | Title of the process step         | String | `Step` |
| content          | Descriptive text of process steps (supporting HTML structure)      | String | `Step description` |

### Step Slots

| Event | Description                  |
| ---------------- | ---------------------- |
| title            | Step title         |
| content          | Step content       |
| icon             | Step icon          |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --------------------------------------- | -------------------------- | ---- |
| --nut-steps-base-icon-width| _25px_ | -  |
| --nut-steps-base-icon-height| _25px_ | -  |
| --nut-steps-base-icon-line-height| _25px_ | -  |
| --nut-steps-base-icon-font-size| _13px_ | -  |
| --nut-steps-base-title-font-size| _14px_ | -  |
| --nut-steps-base-line-color| _#909ca4_ | -  |
| --nut-steps-base-title-color| _#909ca4_ | -  |
| --nut-steps-base-title-margin-bottom| _10px_ | -  |
| --nut-steps-base-content-font-size| _14px_ | -  |
| --nut-steps-base-content-color| _#666_ | -  |
| --nut-steps-wait-icon-bg-color| _#959fb1_ | -  |
| --nut-steps-wait-icon-color| _var(--nut-white)_ | -  |
| --nut-steps-wait-head-color| _#909ca4_ | -  |
| --nut-steps-wait-head-border-color| _#909ca4_ | -  |
| --nut-steps-wait-content-color| _#909ca4_ | -  |
| --nut-steps-finish-head-color| _var(--nut-primary-color)_ | -  |
| --nut-steps-finish-head-border-color| _var(--nut-primary-color)_ | -  |
| --nut-steps-finish-title-color| _var(--nut-primary-color)_ | -  |
| --nut-steps-finish-line-background| _var(--nut-primary-color)_ | -  |
| --nut-steps-finish-icon-text-color| _var(--nut-white)_ | -  |
| --nut-steps-process-head-color| _var(--nut-white)_ | -  |
| --nut-steps-process-head-border-color| _var(--nut-primary-color)_ | -  |
| --nut-steps-process-title-color| _var(--nut-primary-color)_ | -  |
| --nut-steps-process-icon-text-color| _var(--nut-primary-color)_ | -  |
