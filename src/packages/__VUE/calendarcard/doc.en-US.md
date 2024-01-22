# CalendarCard

### Intro

CalendarCard. Available in `NutUI` >= 4.3.0.

### Install

```js
import { createApp } from 'vue';
import { CalendarCard } from '@nutui/nutui';

const app = createApp();
app.use(CalendarCard);
```

### Select a single date

> demo: calendarcard single

### Select multiple dates

> demo: calendarcard multiple

### Select a range

> demo: calendarcard range

### Select a week

> demo: calendarcard week

### Custom day info(slot)

> demo: calendarcard info

### Custom week start day

> demo: calendarcard first

### Custom selection range

> demo: calendarcard custom-range

### Custom prohibition date selection

> demo: calendarcard disable

### Use with Popup

> demo: calendarcard popup

### Use Ref

> demo: calendarcard ref

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, single date `single`, multiple dates `multiple`, date range `range`, week selection `week` | `string` | `single` |
| v-model | Current value, choose string format for date, choose Array format for interval | `Date \| Date[]` | `-` |
| startDate | Limit range start date | `Date` | `-` |
| endDate | Limit range end date | `Date` | `-` |
| firstDayOfWeek | Set the starting day of the week, 0 is Sunday, 1 is Monday | `0-6` | `1` |
| disableDay | Set disable date | `(day: CalendarCardDay) => boolean` | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when value update | `(val: Date | Date[]) => void` | `-` |
| day-click | Triggered after click | `(day: CalendarCardDay) => void` | `-` |
| page-change | Triggered when switching months | `(val: { year, month }) => void` | `-` |

### Slots

| Name | Description | Props |
| --- | --- | --- |
| default | Date information | `{ day: CalendarCardDay }` |
| top | Date top information | `{ day: CalendarCardDay }` |
| bottom | Date bottom information | `{ day: CalendarCardDay }` |

### Methods

Through [ref](https://vuejs.org/guide/essentials/template-refs.html), you can get the Calendar instance and call the instance method.

| Name | Description | Arguments |
| --- | --- | --- |
| jump | Advance or retreat months from the current basis, positive forward, negative rigid | `step: number` |
| jumpTo | Jump to a specific year and month | `year: number, month: number` |

### Types

The component exports the following type definitions:

```js
import type {
  CalendarCardType,
  CalendarCardDay,
  CalendarCardMonth,
  CalendarCardValue,
  CalendarCardInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-calendar-choose-background-color | _rgba(#fa2c19, 0.09)_ |
| --nut-calendar-choose-color | _var(--nut-primary-color)_ |
| --nut-calendar-disable-color | _#d1d0d0_ |
| --nut-calendar-base-font | _var(--nut-font-size-3)_ |
