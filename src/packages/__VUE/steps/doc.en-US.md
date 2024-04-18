# Steps

### Intro

Split and display the steps of a process, guide users to complete tasks according to the process, or show users the current status.

### Install

```js
import { createApp } from 'vue'
import { Steps, Step } from '@nutui/nutui'

const app = createApp()
app.use(Steps)
app.use(Step)
```

### Basic Usage

> demo: steps basic

### Dot Style

> demo: steps dot

### Title and Description

> demo: steps desc

### Custom icon

> demo: steps custom

### Vertical step bar

> demo: steps vertical

### Point step and vertical direction

> demo: steps vertical-dot

## API

### Steps Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| direction | Show direction，`horizontal`,`vertical` | string | `horizontal` |
| current | Current step | number \| string | `0` |
| progress-dot | Dot step bar | boolean | `false` |

### Steps Events

| Event | Description | Arguments |
| --- | --- | --- |
| click-step | Triggered when the title or icon of the step is clicked | index: number |

### Step Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title of the process step | string | `Step` |
| content | Descriptive text of process steps (supporting HTML structure) | String | `Step description` |

### Step Slots

| Name | Description |
| --- | --- |
| title | Step title |
| content | Step content |
| icon | Step icon |

### Types version

The component exports the following type definitions:

```js
import type {
  StepsProps,
  StepsInstance,
  StepsDirection,
  StepProps,
  StepInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-steps-base-icon-width | _25px_ |
| --nut-steps-base-icon-height | _25px_ |
| --nut-steps-base-icon-line-height | _25px_ |
| --nut-steps-base-icon-font-size | _13px_ |
| --nut-steps-base-title-font-size | _14px_ |
| --nut-steps-base-line-color | _#909ca4_ |
| --nut-steps-base-title-color | _#909ca4_ |
| --nut-steps-base-title-margin-bottom | _10px_ |
| --nut-steps-base-content-font-size | _14px_ |
| --nut-steps-base-content-color | _#666_ |
| --nut-steps-wait-icon-bg-color | _#959fb1_ |
| --nut-steps-wait-icon-text-color | _var(--nut-white)_ |
| --nut-steps-wait-icon-color | _var(--nut-white)_ |
| --nut-steps-wait-head-color | _#909ca4_ |
| --nut-steps-wait-head-border-color | _#909ca4_ |
| --nut-steps-wait-content-color | _#909ca4_ |
| --nut-steps-finish-head-color | _var(--nut-primary-color)_ |
| --nut-steps-finish-head-border-color | _var(--nut-primary-color)_ |
| --nut-steps-finish-title-color | _var(--nut-primary-color)_ |
| --nut-steps-finish-line-background | _var(--nut-primary-color)_ |
| --nut-steps-finish-icon-text-color | _var(--nut-white)_ |
| --nut-steps-process-head-color | _var(--nut-white)_ |
| --nut-steps-process-head-border-color | _var(--nut-primary-color)_ |
| --nut-steps-process-title-color | _var(--nut-primary-color)_ |
| --nut-steps-process-icon-text-color | _var(--nut-primary-color)_ |
