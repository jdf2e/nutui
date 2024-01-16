# Calendar

### Intro

Calendar, tileable/pop-up display

### Install

```js
import { createApp } from 'vue';
import { Calendar } from '@nutui/nutui';

const app = createApp();
app.use(Calendar);
```

### Select Single Date

> demo: calendar single

### Select Date Range

> demo: calendar range

### Select Multiple Date

> demo: calendar multiple

### Select Week

When set to week selection, the start and end dates of the week will be determined according to `first-day-of-week`. For example, when `first-day-of-week` is 0, the start date of a week is Sunday. In other cases, the start date of the week is Monday.

> demo: calendar week

### Customize the disable date

By configuring the `disabled-date` function callback, you can customize to disable certain dates from being selected.
When the type is `range`, if this function is set, you need to filter out the disabled date after selecting the result

> demo: calendar disabled

### Quick Select Single

> demo: calendar single-quick

### Quick Select Range

> demo: calendar range-quick

### Custom Button

> demo: calendar custom

### Tiled Display

> demo: calendar tiled

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:visible | whether to show | boolean | `false` |
| type | Calendar type ：`one` `range` `multiple` `week(V4.0.1)` | string | `one` |
| poppable | Whether to display the pop-up window | boolean | `true` |
| is-auto-back-fill | Automatic backfill | boolean | `false` |
| title | whether to show title | string | `Calendar` |
| default-value | Default value, select single date : `string`，other: `string[]` | string \| string[] | `null` |
| start-date | The start date | string | `Today` |
| end-date | The end date | string | `365 days from today` |
| show-today | Whether to show today's mark | boolean | `true` |
| start-text | Range selection, start part of the text | string | `Start` |
| end-text | Range selection, end part of the text | string | `End` |
| confirm-text | Bottom confirm button text | string | `Confirm` |
| show-title | Whether to show the calendar title | boolean | `true` |
| show-sub-title | Whether to display the date title | boolean | `true` |
| to-date-animation | Whether to use scroll animation | boolean | `true` |
| first-day-of-week | Set the start day of week | 0-6 | `0` |
| disabled-date | A function that determines whether the date is disabled takes a `year - month - day` as an argument. A Boolean value should be returned. | function | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| choose | Triggered after selection or by clicking the confirm button,Array of dates (including year, month, day and week) | `(string \| string[])[]` |
| close | Triggered when closed | - |
| select | Triggered after click/select | `(string \| string[])[]` |

### Slots

| Name | Description |
| --- | --- |
| btn | Below the custom calendar header, you can add custom actions |
| day | Date information |
| top-info | Date top information |
| bottom-info | Date bottom information |
| footer-info`v4.1.6` | Custom calendar Footer, replace confirm btn |

### Methods

Through [ref](https://vuejs.org/guide/essentials/template-refs.html), you can get the Calendar instance and call the instance method.

| Name | Description | Arguments |
| --- | --- | --- |
| scrollToDate | Scroll to the month of the specified date:'2021-12-30' | `string` |
| initPosition `v4.0.1` | Initialize scroll position |  |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-calendar-primary-color | _var(--nut-primary-color)_ |
| --nut-calendar-choose-color | _var(--nut-primary-color)_ |
| --nut-calendar-choose-font-color | _var(--nut-primary-color)_ |
| --nut-calendar-base-color | _#333333_ |
| --nut-calendar-disable-color | _#d1d0d0_ |
| --nut-calendar-base-font | _var(--nut-font-size-3)_ |
| --nut-calendar-title-font | _var(--nut-font-size-4)_ |
| --nut-calendar-title-font-weight | _500_ |
| --nut-calendar-sub-title-font | _var(--nut-font-size-2)_ |
| --nut-calendar-text-font | _var(--nut-font-size-1)_ |
| --nut-calendar-day-font | _16px_ |
| --nut-calendar-day-active-border-radius | _0px_ |
| --nut-calendar-day-font-weight | _500_ |
| --nut-calendar-day67-font-color | _var(--nut-primary-color)_ |
| --nut-calendar-month-title-font-size | _inherit_ |
