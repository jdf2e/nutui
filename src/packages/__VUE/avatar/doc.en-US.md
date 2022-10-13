# Avatar

### Intro

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

### Install

```javascript
import { createApp } from 'vue';
// vue
import { Avatar, Icon } from '@nutui/nutui';
// taro
import { Avatar, Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Avatar);
app.use(Icon);
```

### Size

Support three sizes：small、normal、large

:::demo

```html
<template>
  <nut-avatar
    size="large"
    icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
  ></nut-avatar>
  <nut-avatar
    size="normal"
    icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
  ></nut-avatar>
  <nut-avatar
    size="small"
    icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
  ></nut-avatar>
</template>
```

:::

### Shape

Support two shapes：square、round

:::demo

```html
<template>
  <nut-avatar icon="my" shape="square"></nut-avatar>
  <nut-avatar icon="my" shape="round"></nut-avatar>
</template>
```

:::

### Type

Support three types：picture、icon、letter

:::demo

```html
<template>
  <nut-avatar
    url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
  >
  </nut-avatar>
  <nut-avatar icon="my"></nut-avatar>
  <nut-avatar>N</nut-avatar>
</template>
```

:::

### Custom colors and background colors

Icon and letter types can have custom colors and background colors

:::demo

```html
<template>
  <nut-avatar class="demo-avatar" icon="my" color="#fff" bg-color="#FA2C19"></nut-avatar>
  <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
</template>
```

:::

### Avatar with badge

:::demo

```html
<template>
  <nut-badge value="8">
    <nut-avatar icon="my" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge dot>
    <nut-avatar icon="my" shape="square"></nut-avatar>
  </nut-badge>
</template>
```

:::

### Avatar group display

:::demo

```html
<template>
  <nut-avatar-group span="-4">
    <nut-avatar
      url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    >
    </nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
  </nut-avatar-group>
  <nut-avatar-group
    max-count="3"
    max-color="#fff"
    max-bgColor="#498ff2"
  >
    <nut-avatar
      url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    >
    </nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
  </nut-avatar-group>
</template>
```

:::

### Avatar group to control hierarchy direction

:::demo

```html
<template>
  <nut-avatar-group
    max-count="3"
    zIndex="right"
    max-content="..."
  >
    <nut-avatar
      url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    >
    </nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
  </nut-avatar-group>
</template>
```

:::

### Click on the avatar to trigger the event

:::demo

```html
<template>
  <nut-cell>
    <nut-avatar icon="my" @active-avatar="handleClick"></nut-avatar>
  </nut-cell>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const handleClick = () => {
        console.log('触发点击头像');
      };

      return {
        handleClick
      };
    }
  }
</script>
```

:::

## API
### Avatar Props

| Attribute | Description                                                        | Type   | Default |
| -------- | ------------------------------------------------------------------- | ------ | ------ |
| size     | The size of the avatar，eg `large`、`normal`、`small`，and numbers   | String ｜ Number | normal |
| shape    | The shape of avatar，eg `square`、`round `    | String | round  |
| color    | The colors of Icon and letter types        | String | #666   |
| bg-color | The background colors of Icon and letter types      | String | #eee   |
| url      | The address of the image for an image avatar or image element     | String | -   |
| alt      | This attribute defines the alternative text describing the image     | String | -   |
| icon     | Custom icon type for an icon avatar, Refer to the name attribute of Icon component  | String | -     |

### AvatarGroup Props

| Attribute     | Description                               | Type   | Default |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| max-count     | Max avatars to show   | String ｜ Number | - |
| max-content  | When the number of avatars exceeds, a avatar folding element will appear，The content of this element can be `...`、`more`、`+N` | String | +N |
| size         | The size of the avatar，eg `large`、`normal`、`small`，支持直接输入数字   | String ｜ Number | normal  |
| shape        | The shape of avatar，eg `square`、`round`            | String | round  |
| max-color    | The colors of Icon and letter types     | String | #666 |
| max-bgColor  | The background colors of Icon and letter types        | String | #eee   |
| span         | Distance between avatars            | String | -8   |
| zIndex       | Hierarchy direction between avatar group，eg `left`、`right`  | String | left     |

### Avatar Events

| Event         | Description                   | Arguments |
| ------------- | ----------------------------- | --------- |
| active-avatar | Emitted when cell is clicked  |  event    |
| onError       | Handler when img load error   |  event    |
