# Indicator

### Intro

Displays the progress of a task or process, which is often used to open a process.

### Install

```js
import { createApp } from 'vue';
import { Indicator } from '@nutui/nutui';

const app = createApp();
app.use(Indicator);
```

### Basic Usage

> demo: indicator basic

### Block usage

> demo: indicator block

### Do not make up 0

> demo: indicator zero

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| current | Current step | number | `1` |
| size | Step length | number | `3` |
| block | Enable block level layout | boolean | `false` |
| align | Alignment, which takes effect only when `block` is `true`. optional value `left`, `right`, `center` | string | `left` |
| fill-zero | Whether to add 0 before singular number | boolean | `true` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-indicator-bg-color | _var(--nut-primary-color)_ |
| --nut-indicator-dot-color | _var(--nut-disable-color)_ |
| --nut-indicator-color | _var(--nut-white)_ |
| --nut-indicator-size | _18px_ |
| --nut-indicator-dot-size | _calc(var(--nut-indicator-size) / 3)_ |
| --nut-indicator-border-size | _calc(var(--nut-indicator-size)+ 2)_ |
| --nut-indicator-number-font-size | _10px_ |
