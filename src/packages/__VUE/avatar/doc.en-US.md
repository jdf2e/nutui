# Avatar

### Intro

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

### Install

```js
import { createApp } from 'vue'
import { Avatar } from '@nutui/nutui'

const app = createApp()
app.use(Avatar)
```

### Basic Usage

> demo: avatar basic

### Size

size: `small`, `normal`, `large`

> demo: avatar size

### Shape

shape: `square`, `round`

> demo: avatar shape

### Color

> demo: avatar color

### Avatar with badge

> demo: avatar badge

### AvatarGroup

> demo: avatar group

### AvatarGroup Direction

> demo: avatar zindex

### Click Event

> demo: avatar click

### Dynamically change count

> demo: avatar count

## API

### Avatar Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| size | The size of the avatar，eg `large`、`normal`、`small`，and numbers | string \| number | `normal` |
| shape | shape of avatar，eg `square`、`round ` | string | `round` |
| color | color of text | string | `#666` |
| bg-color | background color | string | `#eee` |

### AvatarGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| max-count | Max avatars to show | string \| number | - |
| max-content | When the number of avatars exceeds, a avatar folding element will appear，<br />The content of this element can be `...`、`more`、`+N` | string | `+N` |
| size | The size of the avatar，eg `large`、`normal`、`small`，支持直接输入数字 | string \| number | `normal` |
| shape | The shape of avatar，eg `square`、`round` | string | `round` |
| max-color | color of text | string | `#666` |
| max-bg-color | background color | string | `#eee` |
| span | Distance between avatars | string | `-8` |
| zIndex | Hierarchy direction between avatar group，eg `left`、`right` | string | `left` |

### Avatar Slots

| Name | Description |
| --- | --- |
| default | default slot for img, icon or text |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-actionsheet-light-color | _#f6f6f6_ |
| --nut-avatar-square | _5px_ |
| --nut-avatar-large-width | _60px_ |
| --nut-avatar-large-height | _60px_ |
| --nut-avatar-small-width | _32px_ |
| --nut-avatar-small-height | _32px_ |
| --nut-avatar-normal-width | _40px_ |
| --nut-avatar-normal-height | _40px_ |
