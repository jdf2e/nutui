# TabBar

### Intro

Bottom navigation bar

### Install

```js
import { createApp } from 'vue'
import { Tabbar, TabbarItem } from '@nutui/nutui'

const app = createApp()
app.use(Tabbar)
app.use(TabbarItem)
```

### Basic Usage

> demo: tabbar basic

### Match by name

> demo: tabbar name

### Custom Icon

Use icon slot to custom icon.

> demo: tabbar icon

### Custom Check

> demo: tabbar check

### Show Badge

After setting the dot property, a small red dot appears in the upper right corner of the icon; When the value property is set, the corresponding logo is displayed in the upper right corner of the icon.

The bardge logo component is used internally and its properties can be applied directly to the TabbarItem props.

> demo: tabbar badge

### Custom Color

> demo: tabbar color

### Custom Quantity

> demo: tabbar quantity

### Before Switch version

> demo: tabbar before-switch

### Fixed Bottom

> demo: tabbar fixed

## API

### Tabbar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model:visible | The index value of the selected label | string \| number | `0` |
| bottom | Whether to fix the bottom | boolean | `false` |
| unactive-color | Color of unactive tab item | string | `#7d7e80` |
| active-color | Color of active tab item | string | `#1989fa` |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | boolean | `false` |
| placeholder | Whether to generate a placeholder element when fixed | boolean | `false` |
| before-switch `version` | hook before switch event | `(data, value) => boolean \| Promise<boolean>` | `() => true` |

### TabbarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| tab-title | title | string | -- |
| name | Identifier | string | `Item index` |
| icon | icon name | string | -- |
| href `deprecated` | Jump links for tabs | string | -- |
| to `deprecated` | Target route of the link, same as to of vue-router | string \| object | -- |

### TabbarItem Slots

| Name | Description | SlotProps |
| --- | --- | --- |
| icon | Custom Icon | active: boolean |

### Tabbar Events

| Event | Description | Arguments |
| --- | --- | --- |
| tab-switch | Emitted when changing active tab | item,index |

### Types v4.3.4

The component exports the following type definitions:

```js
import type {
  TabbarProps,
  TabbarInstance,
  TabbarItemProps,
  TabbarItemInstance
} from '@nutui/nutui';
```

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-tabbar-active-color | _var(--nut-primary-color)_ |
| --nut-tabbar-unactive-color | _var(--nut-primary-color)_ |
| --nut-tabbar-border-top | _1px solid #eee_ |
| --nut-tabbar-border-bottom | _1px solid #eee_ |
| --nut-tabbar-box-shadow | _none_ |
| --nut-tabbar-item-text-font-size | _var(--nut-font-size-0)_ |
| --nut-tabbar-item-text-line-height | _initial_ |
| --nut-tabbar-height | _50px_ |
| --nut-tabbar-word-margin-top | _auto_ |
