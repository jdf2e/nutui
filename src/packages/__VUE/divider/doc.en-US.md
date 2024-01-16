# Divider

### Intro

Separate content into multiple areas.

### Install

```js
import { createApp } from 'vue';
import { Divider } from '@nutui/nutui';

const app = createApp();
app.use(Divider);
```

### Basic Usage

Default render one horizontal divider line.

> demo: divider basic

### With Text

Insert text into divider with default slot.

> demo: divider text

### Content Position

Set Content Position with content-position attribute.

> demo: divider position

### Dashed

Render dashed divider line with dashed attribute.

> demo: divider dashed

### Custom Style

User can custom divider style with style attribute.

> demo: divider custom

### Vertical Divider

> demo: divider vertical

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| dashed | Whether to use dashed border | boolean | `false` |
| hairline | Whether to use hairline | boolean | `true` |
| content-position | Content position, can be set to `left` or `right` | string | `center` |
| direction | The direction of divider, can to set to `vertical` | string | `horizontal` |

### Slots

| Name | Description |
| --- | --- |
| default | Default slot, when `direction` = `horizontal` |

### Types

The component exports the following type definitions:

```js
import type {
  DividerPosition,
  DividerDirection,
  DividerInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-divider-margin | _16px 0_ |
| --nut-divider-text-font-size | _var(--nut-font-size-2)_ |
| --nut-divider-text-color | _#909ca4_ |
| --nut-divider-line-height | _2px_ |
| --nut-divider-before-margin-right | _16px_ |
| --nut-divider-after-margin-left | _16px_ |
| --nut-divider-vertical-height | _12px_ |
| --nut-divider-vertical-top | _2px_ |
| --nut-divider-vertical-border-left | _rgba(0, 0, 0, 0.06)_ |
| --nut-divider-vertical-margin | _0 8px_ |
