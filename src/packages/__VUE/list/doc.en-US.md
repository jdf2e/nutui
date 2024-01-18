# List

### Intro

It is recommended to use the [Scrolling Loading](#/zh-CN/component/infiniteloading) component provided by `NutUI` first.

This component is a **virtual list** component, which can only render the current visible area, and other parts will be rendered after the user scrolls into the visible area.

In most scenarios, you don't need to use this component. It may have problems such as sliding white screen, inaccurate calculation position, etc.

### Install

```js
import { createApp } from 'vue';
import { List } from '@nutui/nutui';

const app = createApp();
app.use();
```

### Basic Usage

> demo: list basic

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| height | The height/estimated height of the list item, supports unfixed height | Number | `80` |
| list-data | List data | any[] | `[]` |
| container-height | Container height(The maximum value cannot exceed the viewable area) | Number | `Visual area height` |
| buffer-size | data buffer length | Number | `5` |
| margin | The gap between the lists is consistent with the custom style | Number | `10` |

### Slots

| Attribute | Description | Type |
| --- | --- | --- |
| item | List item data | Object |
| index | Indexes | Number |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| scroll-bottom | Triggered when scrolling to the bottom | - |
| scroll-up | scroll up | - |
| scroll-down | scroll down | - |
