# Progress

### Intro

Used to show the current progress of the operation.

### Install

``` javascript
import { createApp } from 'vue';
//vue
import { Progress,Icon } from '@nutui/nutui';
//taro
import { Progress,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Progress);
app.use(Icon);

```


### Basic Usage
:::demo
```html
<template>
  <nut-cell>
     <nut-progress percentage="30" />
  </nut-cell>
</template>
```
:::
### Custom Style

:::demo
```html
<template>
  <nut-cell>
    <nut-progress percentage="30" stroke-color=" rgba(250,44,25,0.47)" stroke-width="20" text-color="red" />
   </nut-cell>
</template>
```
:::
### Don't  Show Percentage
:::demo
```html
<template>
  <nut-cell>
     <nut-progress percentage="50" :show-text="false" stroke-height="24" />
  </nut-cell>
</template>
```
:::
### Show Percentage

:::demo
```html
<template>
  <nut-cell>
     <nut-progress percentage="30" />
  </nut-cell>
</template>
```
:::

### Text Inside
:::demo
```html
<template>
     <nut-cell>
        <nut-progress percentage="60" :text-inside="true" />
      </nut-cell>
</template>
```
:::
### Custom Content
:::demo
```html
<template>
     <nut-cell>
        <nut-progress percentage="60" :text-inside="true">
          <nut-icon
            style="display: block"
            size="30"
            name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          ></nut-icon>
        </nut-progress>
      </nut-cell>
</template>
```
:::

### Custom Size

 **small**，**base**，**large** .
:::demo
```html
<template>
  <nut-cell>
        <nut-progress percentage="30" :text-inside="true" size="small"> </nut-progress>
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="50" :text-inside="true" size="base"> </nut-progress>
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="70" :text-inside="true" size="large"> </nut-progress>
      </nut-cell>
</template>
```
:::
### Status Display
:::demo
```html
<template>
   <div>
      <nut-cell>
        <nut-progress
          percentage="30"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="active"
        />
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="50" :stroke-width="strokeWidth" status="icon" />
      </nut-cell>
      <nut-cell>
        <nut-progress
          percentage="100"
          stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          stroke-width="15"
          status="icon"
          icon-name="issue"
          icon-color="red"
        />
      </nut-cell>
    </div>
</template>
```
:::
## API
### Props

| Attribute | Description | Type | Default
|----- | ----- | ----- | -----
| percentage | percentage | Number | 0
| is-show-percentage | Whether to display the percent sign | Boolean | true
| stroke-color |Stroke color | String | #f30
| stroke-width |Stroke width | String | ''
| size | Progress bar and text size, small/base/large | String | -
| show-text | Whether to show text | Boolean | true
| text-inside | Progress bar text display position(false:outside，true:Inside) | Boolean | false
| text-color | Progress bar text color setting | String | #333
| text-background | Progress bar text background color setting | String | Same progress bar color
| status | The current state of the progress bar,active(show animation)/icon(show icon) | String | text
| icon-name | Icon Name | String | checked
| icon-color | Icon Color | String | #439422
