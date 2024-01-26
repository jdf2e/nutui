# Popover

### Intro

Click or hover over the element to pop up the bubble card overlay.

### Install

```javascript
import { createApp } from 'vue';
import { Popover } from '@nutui/nutui';

const app = createApp();
app.use(Popover);
```

### Basic Usage

Popover supports both light and dark styles. The default is light style. Set the `theme` property to `dark` to switch to dark style.

> demo: popover basic

### Option Configuration

In the list array, an option can be disabled via the `disabled` field.

> demo: popover option

### Custom Content

Customize the content in the slot named content.

> demo: popover content

### Position

Use the location property to control where the bubble pops up. optional value

```
top           # Top middle
left          # Left middle
right         # Right middle
bottom        # Bottom middle
top-start     # Top left
top-end       # Top right
left-start    # Left top
left-end      # Left bottom
right-start   # Right top
right-end     # Right bottom
bottom-start  # Bottom left
bottom-end    # Bottom right
```

> demo: popover position

### Custom Target

Popover provides the 'targetId' attribute to match the target element by adding the corresponding id value to the target element

> demo: popover target

### Custom Color

> demo: popover color

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| list | list of options | List[] | `[]` |
| visible | whether to show | boolean | `false` |
| theme | Theme style, can be set to `dark` `light` | string | `light` |
| location | pop-up location | string | `bottom` |
| offset | the offset of the occurrence position | [number,number] | `[0, 12]` |
| show-arrow | whether to show small arrows | boolean | `true` |
| custom-class | custom class | string | `''` |
| duration | Transition duration，Unit second | number \| string | `0.3` |
| overlay | Whether to show overlay | boolean | `false` |
| overlay-class | Custom overlay class | string | `''` |
| overlay-style | Custom overlay style | string | `''` |
| close-on-click-overlay | Whether to close when clicking overlay | boolean | `true` |
| close-on-click-action | Whether to close when clicking action | boolean | `true` |
| close-on-click-outside | Whether to close when clicking outside | boolean | `true` |
| bg-color | Custom color | string | `-` |
| target-id | Custom target id | string | `-` |
| arrow-offset | the offset of the arrow | number | `0` |

### List data structure

The List property is an array of objects, each object in the array is configured with a column, and the object can contain the following values:

| Key | Description | Type | Default |
| --- | --- | --- | --- |
| name | option text | string | `-` |
| icon | @nutui/icons-vue name | VNode | `-` |
| disabled | whether to disable | boolean | `false` |
| className | Add extra class names for corresponding options | string \| Array \| object | `-` |

### Slots

| Name | Description |
| --- | --- |
| content | Customize Bubble Component Menu Content |
| reference | The content of the element that triggers the Popover to display |

### Events

| Event | Description |
| --- | --- |
| choose | Triggered when an option is clicked |
| open | Triggered when the menu is opened |
| close | Fired when the menu is closed |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-popover-white-background-color | _rgba(255, 255, 255, 1)_ |
| --nut-popover-dark-background-color | _rgba(75, 76, 77, 1)_ |
| --nut-popover-border-bottom-color | _rgba(229, 229, 229, 1)_ |
| --nut-popover-primary-text-color | _rgba(51, 51, 51, 1)_ |
| --nut-popover-disable-color | _rgba(154, 155, 157, 1)_ |
| --nut-popover-menu-item-padding | _8px 0_ |
| --nut-popover-menu-item-margin | _0 8px_ |
| --nut-popover-menu-name-line-height | _normal_ |
