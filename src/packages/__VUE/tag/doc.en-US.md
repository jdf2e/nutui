# Tag

### Intro

Labels for tagging and classification.

### Install

```js
import { createApp } from 'vue';
import { Tag } from '@nutui/nutui';

const app = createApp();
app.use(Tag);
```

### Basic Usage

> demo: tag basic

### Style

> demo: tag custom

### Custom Color

> demo: tag color

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Label type，can be set `primary` `success` `danger` `warning`、`default` | string | `default` |
| color | Label color | string | - |
| text-color | Text color, which takes precedence over the `color` attribute | string | `white` |
| plain | Whether it is plain | boolean | `false` |
| round | Whether it is round | boolean | `false` |
| mark | Whether it is mark | boolean | `false` |
| closeable | Whether it is a closeable tag | boolean | `false` |

### Slots

| Name | Description |
| --- | --- |
| default | Label display content |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | click event | `event` |
| close | close event | `event` |

### Types v4.3.3

The component exports the following type definitions:

```js
import type { TagType, TagProps, TagInstance } from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-tag-font-size | _12px_ |
| --nut-tag-default-border-radius | _4px_ |
| --nut-tag-round-border-radius | _8px_ |
| --nut-tag-default-background-color | _#000000_ |
| --nut-tag-primary-background-color | _#3460fa_ |
| --nut-tag-success-background-color | _#4fc08d_ |
| --nut-tag-danger-background-color | _linear-gradient(135deg,rgba(242, 20, 12, 1) 0%,rgba(232, 34, 14, 1) 70%,rgba(242, 77, 12, 1) 100%)_ |
| --nut-tag-danger-background-color-plain | _#df3526_ |
| --nut-tag-warning-background-color | _#f3812e_ |
| --nut-tag-default-color | _#ffffff_ |
| --nut-tag-border-width | _1px_ |
| --nut-tag-plain-background-color | _#fff_ |
| --nut-tag-height | _auto_ |
