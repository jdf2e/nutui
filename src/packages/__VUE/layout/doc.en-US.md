# Layout

### Intro

For quick layout

### Install

```js
import { createApp } from 'vue';
import { Row, Col } from '@nutui/nutui';

const app = createApp();
app.use(Row);
app.use(Col);
```

### Basic Usage

The Layout component provides a 24-column grid, by adding the span attribute on Col to set the percentage of the width of the column. The offset attribute can set the offset width of the column, and the calculation method is the same as span.

> demo: layout basic

### Column spacing

> demo: layout gap

### Flex layout

> demo: layout flex

## API

### Row Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | layout method, optional value is `flex` | string | `-` |
| gutter | spacing between column elements (`px`) | string \| number | `-` |
| justify | Flex main axis alignment, optional values are `start` `end` `center` `space-around` `space-between` `space-evenly` | string | `start` |
| align | Flex cross axis alignment, optional values are `flex-start` `center` `flex-end` | string | `flex-start` |
| flex-wrap | Whether flex wraps, optional values are `nowrap` `wrap` `reverse` | string | `nowrap` |

### Col Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| span | column element width (divided into 24 parts in total, for example, if there are 3 in a row, then the span value is 8) | string \| number | `24` |
| offset | column element offset distance | string \| number | `0` |

### Row Events

| Event | Description | callback parameter |
| --- | --- | --- |
| click | Triggered when clicked | `event: MouseEvent` |

### Col Events

| Event | Description | callback parameter |
| --- | --- | --- |
| click | Triggered when clicked | `event: MouseEvent` |

### Types 4.3.2

The component exports the following type definitions:

```js
import type {
  RowProps,
  RowInstance,
  ColProps,
  ColInstance
} from '@nutui/nutui';
```
