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

> demo: progress basic

### Custom Style

> demo: progress color

### Don't Show Percentage

> demo: progress text

### Text Inside

> demo: progress inside

### Custom Content

> demo: progress content

### Custom Size

size: `small`, `base`, `large` .

> demo: progress size

### Status Display

> demo: progress status

### Dynamic Change

> demo: progress change

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

### Types version

The component exports the following type definitions:

```js
import type {
  ProgressSize,
  ProgressStatus,
  ProgressProps,
  ProgressInstance
} from '@nutui/nutui';
```

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
