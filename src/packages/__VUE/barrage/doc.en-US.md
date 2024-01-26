# Barrage bullet chat

### Intro

It is used for the rotation display of words and phrases, which is suitable for video or other similar needs.

### Install

```js
import { createApp } from 'vue';
import { Barrage } from '@nutui/nutui';

const app = createApp();
app.use(Barrage);
```

### Basic usage

> demo: barrage basic

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| danmu | Danmaku list data | Array | `[]` |
| frequency | the time interval of each barrage in the visible area | number | `500` |
| speeds | scrolling time of each barrage | number | `5000` |
| rows | Number of bullet chatting lines, displayed in several lines | number | `3` |
| top | vertical distance of the barrage | number | `10` |
| loop | Whether to play in a loop | boolean | `true` |

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| add | add data(used via ref instance) | - |
