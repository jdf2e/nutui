# Switch

### Intro

Used to turn options on or off.

### Install

```js
import { createApp } from 'vue'
import { Switch } from '@nutui/nutui'

const app = createApp()
app.use(Switch)
```

### Basic Usage

> demo: switch basic

### Disable State

> demo: switch disabled

### Loading State

> demo: switch loading

### Change event

> demo: switch event

### Change Async

> demo: switch async

### Custom Color

> demo: switch color

### Use Text

> demo: switch text

### Custom loading icon

> demo: switch icon

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Status of Switch | boolean \| string \| number | `false` |
| disabled `v4.3.2` | Disable status | boolean | `false` |
| loading | Loading status | boolean | `false` |
| active-color | Background color when active | string | `#fa2c19` |
| inactive-color | Background color when inactive | string | `#ebebeb` |
| active-text | Word description when active | string | - |
| inactive-text | Word description when inactive | string | - |
| active-value | Value when active | boolean ｜ string ｜ number | `true` |
| inactive-value | Value when inactive | boolean ｜ string ｜ number | `false` |
| disable `deprecated` | Disable status | boolean | `false` |

### Slots

| Name | Description |
| --- | --- |
| icon | loading icon slot |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Emitted when check status changed | (value: boolean,event: Event) |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-switch-close-bg-color | _#ebebeb_ |
| --nut-switch-close-cline-bg-color | _#f0f0f0_ |
| --nut-switch-width | _36px_ |
| --nut-switch-height | _21px_ |
| --nut-switch-line-height | _21px_ |
| --nut-switch-border-radius | _21px_ |
| --nut-switch-inside-width | _13px_ |
| --nut-switch-inside-height | _13px_ |
| --nut-switch-inside-open-transform | _translateX(146%)_ |
| --nut-switch-inside-close-transform | _translateX(30%)_ |
