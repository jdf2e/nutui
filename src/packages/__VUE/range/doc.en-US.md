# Range

### Intro

Slide the input bar to select a value within a given range.

### Install

```js
import { createApp } from 'vue'
import { Range } from '@nutui/nutui'

const app = createApp()
app.use(Range)
```

### Basic Usage

> demo: range basic

### Dual thumb

> demo: range range

### Range

> demo: range limit

### Step Size

> demo: range step

### Hidden Range

> demo: range hidden-range

### Hidden Tag

> demo: range hidden-tag

### Disabled

> demo: range disabled

### Custom Style

> demo: range color

### Custom Button

> demo: range button

### Vertical

> demo: range vertical

### Marks

> demo: range marks

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | current progress percentage | number \| number[] | `0` |
| range | Whether to enable dual slider mode | boolean | `false` |
| max | maximum | number \| string | `100` |
| min | minimum | number \| string | `0` |
| step | step size | number \| string | `1` |
| disabled | Whether to disable the slider | boolean | `false` |
| vertical | Whether to display vertically | boolean | `false` |
| hidden-range | whether to hide range values | boolean | `false` |
| hidden-tag | whether to hide the label | boolean | `false` |
| active-color | progress bar active color | string | `rgba(250, 44, 25, 1)` |
| inactive-color | Progress bar inactive color | string | `rgba(255, 163, 154, 1)` |
| button-color | button color | string | `rgba(250, 44, 25, 1)` |
| marks | scale mark | object{key:number} | `{}` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when the progress changes and the drag is over | `value: number \| number[]` |
| drag-start | Triggered when dragging starts | - |
| drag-end | Triggered when the drag is over | - |

### Slots

| Name | Description |
| --- | --- |
| button | custom slide button |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-range-tip-font-color | _#333333_ |
| --nut-range-bg-color | _var(--nut-primary-color)_ |
| --nut-range-bg-color-tick | _#fa958c_ |
| --nut-range-bar-bg-color | _linear-gradient(135deg, var(--nut-primary-color) 0%, var(--nut-primary-color-end) 100%)_ |
| --nut-range-bar-btn-bg-color | _var(--nut-white)_ |
| --nut-range-bar-btn-width | _24px_ |
| --nut-range-bar-btn-height | _24px_ |
| --nut-range-bar-btn-border | _1px solid var(--nut-primary-color)_ |
