# Swiper

### Intro

Often used in a group of pictures or card rotation.

### Install

```js
import { createApp } from 'vue'
import { Swiper, SwiperItem } from '@nutui/nutui'

const app = createApp()
app.use(Swiper)
app.use(SwiperItem)
```

### Basic Usage

`auto-play` Duration of automatic rotation
`init-page` Initial index value
`pagination-visible` Show paging indicator
`pagination-color` Indicator color customization

> demo: swiper basic

### Asynchronous Loading

> demo: swiper async

### Dynamic Loading

Support dynamic addition / deletion of pictures

> demo: swiper dynamic

### Custom Width

> demo: swiper width

### Page Slot

> demo: swiper page

### Ref Methods

> demo: swiper methods

### Vertical Direction

> demo: swiper vertical

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| width | Width of rotation card | number \| string | - |
| height | Height of rotation card | number \| string | - |
| direction | Rotation direction, optional value：`horizontal`,`vertical` | string | `'horizontal'` |
| pagination-visible | Is the paging indicator displayed | boolean | `false` |
| pagination-color | The color selected by the pagination indicator | string | `'#fff'` |
| pagination-unselected-color | The color unselected by the pagination indicator | string | `'#ddd'` |
| loop | Whether to rotate | boolean | `true` |
| duration | Animation duration（Unit ms） | number \| string | `500` |
| auto-play | Automatic rotation duration, 0 means no automatic rotation | number \| string | `0` |
| init-page | Initialize index value | number \| string | `0` |
| touchable | if touchable to slide | boolean | `true` |
| is-prevent-default | Disable default events during sliding | boolean | `true` |
| is-stop-propagation | Is bubbling prohibited during sliding | boolean | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Callback after sliding | Current index value |

### Slots

| Name | Description |
| --- | --- |
| page | Custom Indicator |

### Methods

| Event | Description | Arguments |
| --- | --- | --- |
| prev | Switch to previous page | - |
| next | Switch to next page | - |
| to | Switch to the specified rotation | `index:number` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-swiper-pagination-item-width | _8px_ |
| --nut-swiper-pagination-item-height | _3px_ |
| --nut-swiper-pagination-item-margin-right | _7px_ |
| --nut-swiper-pagination-item-border-radius | _2px_ |
