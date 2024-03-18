# Swipe

## Intro

Used for cell components that can slide left and right to display operation buttons.

## Install

```js
import { createApp } from 'vue';
import { Swipe } from '@nutui/nutui';

const app = createApp();
app.use(Swipe);
```

## Demo

### Basic usage

> demo: swipe basic

### Disabled

> demo: swipe disabled

### Swipe left or right

> demo: swipe direction

### Ref methods

> demo: swipe methods

### Custom content

> demo: swipe content

### Use SwipeGroup to make swipe exclusive

The prop `name` of Swipe is required.

> demo: swipe lock

## Swipe

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | identifies | string | - |
| disabled | Whether to disabled swipe | string | `false` |
| touch-move-prevent-default | Whether to stop touchmove event preventdefault | boolean | `false` |
| touch-move-stop-propagation | Whether to stop touchmove event propagation | boolean | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | click event | `name, position: 'left' \| 'content' \| 'right'` |
| open | Emitted when Swipe is opened, swipe left/swipe right | `name, position: 'left' \| 'right' ` |
| close | Emitted when Swipe is closed, swipe left/swipe right | `name, position: 'left' \| 'right' ` |

### Slots

| Name | Description |
| --- | --- |
| left | Custom left |
| default | Custom default |
| right | Custom right |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Swipe instance and call instance methods.

| Name | Description | Arguments |
| --- | --- | --- |
| open | open swipe, swipe left/swipe right | `name, position: 'left' \| 'right' ` |
| close | close swipe, swipe left/swipe right | `name, position: 'left' \| 'right' ` |

## SwipeGroup

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| lock`v4.1.1` | When a child Swipe opens, others will close. | boolean | `false` |

### Types version

The component exports the following type definitions:

```ts
import type { SwipePosition, SwipeProps, SwipeInstance, SwipeGroupProps, SwipeGroupInstance } from '@nutui/nutui';
```
