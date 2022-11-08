# TextArea 

### Intro

Enter or edit text in the text box, and limit the number of entries is supported.

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { TextArea } from '@nutui/nutui';
//taro
import { TextArea } from '@nutui/nutui-taro';

const app = createApp();
app.use(TextArea);

```

### Basic usage
:::demo

```html
<template>
  <nut-textarea v-model="value" />
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
```
:::

### Display word count

:::demo

```html
<template>
  <nut-textarea v-model="value" limit-show max-length="20" />
</template>
```
:::

### Height customization, stretching
:::demo

```html
<template>
  <nut-textarea v-model="value" rows="10" autosize />
</template>
```
:::
### read-only，disabled

:::demo

```html
<template>
  <nut-textarea readonly model-value="Textarea read only status" />
  <nut-textarea disabled model-value="Textarea disabled" limit-show max-length="20" />
</template>
```
:::

## API
### Props

| Attribute | Description | Type   | Default |
|-------------|--------------------------------------------------|----------------|----------------|
|v-model | input value, support two-way binding | string | -|
|placeholder | set placeholder prompt text | string | ` 'please enter content' `|
|max-length | limit the maximum input characters | string, number | -|
|rows | height of textarea, with priority higher than autosize attribute `Only H5 is supported`| string and number | ` 2 `|
|limit-show | whether textarea displays the input characters. Use | Boolean | ` false` |
|autosize | whether to adapt the content height. You can also pass in objects, such as {maxheight: 200, minheight: 100}. The unit is PX | Boolean, {maxheight?: number; minheight?: number} | ` false `|
|text-align | text position, optional values ` left ,  center,  right `| string |  `left`|
|readonly | read only attribute | Boolean | ` false `|
|disabled | disable attribute | Boolean | ` false `|
|autofocus | get focus automatically | Boolean | ` false `|


### Events

| Event | Description                  | Arguments   |
|--------|----------------|-------------|
| change | Triggered when the value of the input box changes | value       |
| focus  | Triggered when focusing     | event       |
| blur   | Triggered when out of focus     | {value,event} |








