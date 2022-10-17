# Steps

### Intro

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

### Install

```javascript
import { createApp } from 'vue';
//vue
import { Steps, Step } from '@nutui/nutui';
//taro
import { Steps, Step  } from '@nutui/nutui-taro';

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
      <template v-slot:title>Step One</template>
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
    <nut-step title="Completed" icon="service">1</nut-step>
    <nut-step title="In progress" icon="people">2</nut-step>
    <nut-step title="Not started" icon="location2">3</nut-step>
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
      <template v-slot:content>
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
| direction	             | 	Show direction，`horizontal`,`vertical`  | String        | 'horizontal'  | 
| current	               | 	Current step           | Number、String        | '0'      |
| progress-dot            |  Dot step bar     | Boolean | false         |

### Steps Events

| Event | Description                  | Arguments   |
|--------|----------------|--------------|
| click-step  | Triggered when the title or icon of the step is clicked | index: number |

### Step Props

| Attribute       | Description                         | Type             | Default |
| ---------------- | ---------------------- | ------------ | ----------- |
| title            | Title of the process step         | String | Step |
| content          | Descriptive text of process steps (supporting HTML structure)      | String | Step description |
| icon          | Icon       | String | null |
| icon-color          | Icon color       | String | null |

### Step Slots

| Event | Description                  |
| ---------------- | ---------------------- |
| title            | Step title         |
| content          | Step content       |
