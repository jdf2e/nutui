# TimeSelect

### Intro

For delivery time selection

### Install

```js
import { createApp } from 'vue';
import { TimeSelect, TimePannel, TimeDetail } from '@nutui/nutui';

const app = createApp();
app.use(TimeSelect);
app.use(TimePannel);
app.use(TimeDetail);
```

### Basic Usage

> demo: timeselect basic

### Multiple dates and times can be selected

> demo: timeselect multiple

### Change Title

> demo: timeselect title

## API

### TimeSelect Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to display elastic layer | boolean | `false` |
| height | Height of bomb layer | string | `20%` |
| title | Bomb layer title | string | `Pickup Time` |
| current-key | Unique identification | string \| number | `0` |
| current-time | The currently selected time, the array element contains:key: string; list: string[] | Array | `[]` |
| lock-scroll | Whether the background is locked | boolean | `true` |
| teleport-disable | Whether the node is allowed to be mounted | boolean | `false` |

### Slots

| Name | Description |
| --- | --- |
| title | Change Title |
| pannel | List for left |
| detail | Detail Content for right |

### TimePannel Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Name of display | string | `` |
| pannel-key | Unique ID, which identifies the currently selected day together with `current-key` | string \| number | `0` |

### TimeDetail Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| times | Selectable time, the same as array elements `current-time` | Array | `[]` |

### TimeSelect Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Callback after closing mask | `key: string \| number, list: []` |

### TimePannel Event

| Event | Description | Arguments |
| --- | --- | --- |
| change | Click the callback of the content | `pannelKey: string ｜ number` |

### TimeDetail Event

| Event | Description | Arguments |
| --- | --- | --- |
| select | Callback of click time | `time: string` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-timeselect-title-font-size | _var(--nut-font-size-2)_ |
| --nut-timeselect-title-color | _var(--nut-title-color)_ |
| --nut-timeselect-title-width | _100%_ |
| --nut-timeselect-title-height | _50px_ |
| --nut-timeselect-title-line-height | _50px_ |
| --nut-timeselect-pannel-bg-color | _#f6f7f9_ |
| --nut-timeselect-timepannel-text-color | _var(--nut-title-color2)_ |
| --nut-timeselect-timepannel-font-size | _var(--nut-font-size-2)_ |
| --nut-timeselect-timepannel-cur-bg-color | _var(--nut-white)_ |
| --nut-timeselect-timepannel-cur-text-color | _#333333_ |
| --nut-timeselect-timepannel-width | _140px_ |
| --nut-timeselect-timepannel-height | _40px_ |
| --nut-timeselect-timepannel-padding | _15px_ |
| --nut-timeselect-timedetail-padding | _0 5px 50px 13px_ |
| --nut-timeselect-timedetail-item-width | _100px_ |
| --nut-timeselect-timedetail-item-height | _50px_ |
| --nut-timeselect-timedetail-item-line-height | _50px_ |
| --nut-timeselect-timedetail-item-bg-color | _#f6f7f9_ |
| --nut-timeselect-timedetail-item-border-radius | _5px_ |
| --nut-timeselect-timedetail-item-text-color | _#333333_ |
| --nut-timeselect-timedetail-item-text-font-size | _var(--nut-font-size-2)_ |
| --nut-timeselect-timedetail-item-cur-bg-color | _var(--nut-primary-color)_ |
| --nut-timeselect-timedetail-item-cur-border | _var(--nut-primary-color)_ |
| --nut-timeselect-timedetail-item-cur-text-color | _var(--nut-primary-color)_ |
