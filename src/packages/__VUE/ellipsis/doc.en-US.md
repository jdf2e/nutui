# ellipsis

### Intro

Display space is insufficient, hidden part of the content and "..." Alternative.

### Install

```js
import { createApp } from 'vue'
import { Ellipsis } from '@nutui/nutui'

const app = createApp()
app.use(Ellipsis)
```

### Start

> demo: ellipsis start

### End

> demo: ellipsis end

### Middle

> demo: ellipsis middle

### Multi-line

> demo: ellipsis row

### Expand & Collapse

> demo: ellipsis expand

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| content | Content | string | - |
| direction | Direction, `start` \| `end` \| `middle` | string | `end` |
| rows | Rows | number | `1` |
| expand-text | Expand text | string | `''` |
| collapse-text | Collapse text | string | `''` |
| symbol | Symbol | string | `...` |
| line-height | the row height of the container | string \| number | `20` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when the content is clicked | - |
| change | Emitted when expand or collapse is clicked | `expand` or `collapse` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-ellipsis-expand-collapse-color | _#3460fa_ |
