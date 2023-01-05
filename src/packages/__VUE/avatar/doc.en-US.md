# Avatar

### Intro

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

### Install

```javascript
import { createApp } from 'vue';
import { Avatar } from '@nutui/nutui';

const app = createApp();
app.use(Avatar);
```

### Size

Support three sizes：small、normal、large

:::demo

```html
<template>
  <nut-avatar size="large">
    <img src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
  </nut-avatar>
  <nut-avatar size="normal">
    <img src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
  </nut-avatar>
  <nut-avatar size="small">
    <img src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
  </nut-avatar>
</template>
```

:::

### Shape

Support two shapes：square、round

:::demo

```html
<template>
  <nut-avatar shape="square"><My /></nut-avatar>
  <nut-avatar shape="round"><My /></nut-avatar>
</template>
<script lang="ts">
  import { My } from '@nutui/icons-vue';
  export default {
    components: { My }
  }
</script>
```

:::

### Type

Support three types：picture、icon、letter

:::demo

```html
<template>
  <nut-avatar>
    <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
  </nut-avatar>
  <nut-avatar><My /></nut-avatar>
  <nut-avatar>王</nut-avatar>
</template>
<script lang="ts">
  import { My } from '@nutui/icons-vue';
  export default {
    components: { My }
  }
</script>
```

:::

### Custom colors and background colors

Icon and letter types can have custom colors and background colors

:::demo

```html
<template>
  <nut-avatar class="demo-avatar" bg-color="#FA2C19"><My color="#fff"/></nut-avatar>
  <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
</template>
<script lang="ts">
  import { My } from '@nutui/icons-vue';
  export default {
    components: { My }
  }
</script>
```

:::

### Avatar with badge

:::demo

```html
<template>
  <nut-badge value="8">
    <nut-avatar shape="square"><My /></nut-avatar>
  </nut-badge>
  <nut-badge dot>
    <nut-avatar shape="square"><My /></nut-avatar>
  </nut-badge>
</template>
<script lang="ts">
  import { My } from '@nutui/icons-vue';
  export default {
    components: { My }
  }
</script>
```

:::

### Avatar group display

:::demo

```html
<template>
  <nut-avatar-group span="-4">
    <nut-avatar>
      <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
    </nut-avatar>
    <nut-avatar><My /></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
  </nut-avatar-group>
  <nut-avatar-group
    max-count="3"
    max-color="#fff"
    max-bgColor="#498ff2"
  >
    <nut-avatar>
      <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
    </nut-avatar>
    <nut-avatar><My /></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
    <nut-avatar><My /></nut-avatar>
  </nut-avatar-group>
</template>
<script lang="ts">
  import { My } from '@nutui/icons-vue';
  export default {
    components: { My }
  }
</script>
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
    <nut-avatar>
      <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
    </nut-avatar>
    <nut-avatar><My /></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
    <nut-avatar><My /></nut-avatar>
  </nut-avatar-group>
</template>
<script lang="ts">
  import { My } from '@nutui/icons-vue';
  export default {
    components: { My }
  }
</script>
```

:::

### Click on the avatar to trigger the event

:::demo

```html
<template>
  <nut-cell>
    <nut-avatar @click="handleClick"><My /></nut-avatar>
  </nut-cell>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  import { My } from '@nutui/icons-vue';
  export default {
    components: { My },
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
| size     | The size of the avatar，eg `large`、`normal`、`small`，and numbers   | string \| number | `normal` |
| shape    | shape of avatar，eg `square`、`round `    | string | `round`  |
| color    | color of text        | string | `#666`   |
| bg-color | background color      | string | `#eee`   |

### AvatarGroup Props

| Attribute     | Description                               | Type   | Default |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| max-count     | Max avatars to show   | string \| number | - |
| max-content  | When the number of avatars exceeds, a avatar folding element will appear，<br />The content of this element can be `...`、`more`、`+N` | string | `+N` |
| size         | The size of the avatar，eg `large`、`normal`、`small`，支持直接输入数字   | string \| number | `normal`  |
| shape        | The shape of avatar，eg `square`、`round`            | string | `round`  |
| max-color    | color of text     | string | `#666` |
| max-bg-color  | background color        | string | `#eee`   |
| span         | Distance between avatars            | string | `-8`   |
| zIndex       | Hierarchy direction between avatar group，eg `left`、`right`  | string | `left`     |

### Avatar Slots

| Name         | Description                   |
| ------------- | ----------------------------- |
| default | default slot for img, icon or text  |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --------------------------------------- | -------------------------- | 
| --nut-actionsheet-light-color           | _#f6f6f6_                  | 
| --nut-avatar-square |  _5px_  |
| --nut-avatar-large-width |  _60px_  |
| --nut-avatar-large-height |  _60px_  |
| --nut-avatar-small-width |  _32px_  |
| --nut-avatar-small-height |  _32px_  |
| --nut-avatar-normal-width |  _40px_  |
| --nut-avatar-normal-height |  _40px_  |