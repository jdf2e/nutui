# ActionSheet

### Intro

Action menu panel that pops up from the bottom.

### Install

```js
import { createApp } from 'vue'
import { ActionSheet } from '@nutui/nutui'

const app = createApp()
app.use(ActionSheet)
```

### Basic Usage

> demo: actionsheet basic

### Custom Info

> demo: actionsheet custom

### Option Status

> demo: actionsheet status

### Custom Content

> demo: actionsheet content

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:visible | Whether to show ActionSheet | boolean | `false` |
| menu-items | Options | MenuItems[] | `[ ]` |
| option-tag | Custom Options tag key | string | `'name'` |
| option-sub-tag | Custom Options subtag key | string | `'subname'` |
| choose-tag-value | Set the value of the selected item | string | '' |
| color | selected item color，when `choose-tag-value == option-tag` | string | `'#ee0a24'` |
| title | set list item title | string | `''` |
| description | set list item description | string | `''` |
| cancel-txt | Text of cancel button | string | `'cancel'` |
| close-abled | Whether the mask layer can be closed | boolean | `true` |

### MenuItems

| Key | Description | Type |
| --- | --- | --- |
| name | Title | string |
| subname | Subtitle | string |
| color | Text color（Check Item Color Hierarchy > Option Font Color） | string |
| loading | Whether to be loading status | boolean |
| disable | Whether to be disabled | boolean |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| choose | Triggered after selection | item, index |
| cancel | Triggered when cancel copy is clicked | - |
| close | Triggered when the mask layer is clicked | event: Event |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component]()。

| Name | Default Value |
| --- | --- |
| --nut-actionsheet-light-color | _#f6f6f6_ |
| --nut-actionsheet-item-border-bottom | _none_ |
| --nut-actionsheet-item-font-size | _var(--nut-font-size-2)_ |
| --nut-actionsheet-item-subdesc-font-size | _var(--nut-font-size-1)_ |
| --nut-actionsheet-item-cancel-border-top | _1px solid var(--nut-actionsheet-light-color)_ |
| --nut-actionsheet-item-line-height | _24px_ |
| --nut-actionsheet-item-font-color | _var(--nut-title-color)_ |
