# Empty

### Intro

Occupation reminder when empty.

### Install
```javascript
import { createApp } from 'vue';
// vue
import { Empty } from '@nutui/nutui';

// taro
import { Empty } from '@nutui/nutui-taro';

const app = createApp();
app.use(Empty);
```

### Basic Usage
:::demo
```html
<template>
    <nut-empty description="no data"></nut-empty>
</template>
```
:::

### Image Type
:::demo
```html
<template>
    <nut-empty image="empty" description="no content"></nut-empty>
    <nut-empty image="error" description="error"></nut-empty>
    <nut-empty image="network" description="no network"></nut-empty>
</template>
```
:::
### Custom Image
:::demo
```html
<template>
    <nut-empty description="Description">
        <template #image>
            <img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" />
        </template>
    </nut-empty>
</template>
```
:::

### Bottom Content
:::demo
```html
<template>
    <nut-empty image="error" description="Failed to load">
        <div style="margin-top: 10px">
            <nut-button icon="refresh" type="primary">Retry</nut-button>
        </div>
    </nut-empty>
</template>
```
:::

## API

### Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| image         | 	Image type, can be set to error network search or image URL              | String | empty        |
| image-size        | Image size                      | Number \| String | -       |
| description         | Description | String | No Data                |

### Slots

| Name | Description           | 
|--------|----------------|
| default  | 		Custom bottom content | 
| image  | 	Custom image | 
| description  | 	Custom description | 
    