# Cascader

### Intro

The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.

### Install

```js
import { createApp } from 'vue';
import { Cascader } from '@nutui/nutui';

const app = createApp();
app.use(Cascader);
```

### Basic Usage

Pass in the `options` list.

> demo: cascader basic

### Custom attribute name

use `textKey`、`valueKey`、`childrenKey`Specify the property name.

> demo: cascader custom

### Async loading

Use `lazy` to identify whether data needs to be obtained dynamically. At this time, not transmitting `options` means that all data needs to be loaded through `lazyload` . The first loading is distinguished by the `root` attribute. When a non leaf node is encountered, the `lazyload` method will be called. The parameters are the current node and the `resolve` method. Note that the `resolve` method must be called. If it is not transmitted to a child node, it will be treated as a leaf node.

> demo: cascader lazy

### Async loading of partial data

> demo: cascader partial

### Automatic data conversion

If your data is a flat structure that can be converted into a tree structure, you can tell the component that automatic conversion is required through `convertConfig`, ` convertConfig` accepts four parameters, `topid` is the parent ID of the top-level node, `idkey` is the unique ID of the node, `pidkey` is the attribute name pointing to the parent node ID, and if there is a `sortkey`, `Array.prototype.sort()` to sort at the same level.

> demo: cascader convert

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Selected value, bidirectional binding | Array | - |
| v-model:visible | selected layer | boolean | `false` |
| options | Cascade data | Array | - |
| lazy | Whether to enable dynamic loading | boolean | - |
| lazy-load | Dynamic loading callback, which takes effect when dynamic loading is enabled | Function | - |
| value-key | Customize the field of `value` in the `options` structure | string | - |
| text-key | Customize the fields of `text` in the `options` structure | string | - |
| children-key | Customize the fields of `children` in the `options` structure | string | - |
| convert-config | When options is a flat structure that can be converted into a tree structure, configure the conversion rules | object | - |
| title | Title | string | `''` |
| close-icon-position | Cancel the button position and inherit the popup component | string | `"top-right"` |
| closeable | Whether to display the close button and inherit the popup component | boolean | `false` |
| poppable | Whether to display the popup（After setting to false, the title is invalid） | boolean | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| change | Triggered when the selected value changes | `(value, pathNodes)` |
| path-change | Triggered when the selected item changes | `(pathNodes) ` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nut-cascader-font-size | _var(--nut-font-size-2)_ |
| --nut-cascader-line-height | _22px_ |
| --nut-cascader-tabs-item-padding | _0 10px_ |
| --nut-cascader-bar-padding | _24px 20px 17px_ |
| --nut-cascader-bar-font-size | _var(--nut-font-size-4)_ |
| --nut-cascader-bar-line-height | _20px_ |
| --nut-cascader-bar-color | _var(--nut-title-color)_ |
| --nut-cascader-item-padding | _10px 20px_ |
| --nut-cascader-item-color | _var(--nut-title-color)_ |
| --nut-cascader-item-font-size | _var(--nut-font-size-2)_ |
| --nut-cascader-item-active-color | _var(--nut-primary-color)_ |
