# NoticeBar

### Intro

Used to display a group of message notifications in a continuons loop.

### Install

```javascript

import { createApp } from 'vue';
// vue
import { NoticeBar } from '@nutui/nutui';
// taro
import { NoticeBar } from '@nutui/nutui-taro';

const app = createApp();
app.use(NoticeBar);

```

### Basic Usage

:::demo

```html
<template>
  <nut-noticebar
      text="Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience."
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
</template>

```

:::

### Scrollable

Scrolling is automatically enabled when the content length of the notification bar overflows, which can be controlled through the scrollable property.

:::demo

```html
<template>
  <nut-noticebar text="Nutui is a mobile terminal component library." :scrollable="true" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`"></nut-noticebar>

  <nut-noticebar
      text="Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience."
      :scrollable="false"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
</template>

```

:::

### Mode

:::demo

```html
<template>
  <nut-noticebar :closeMode="true" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
    Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.
  </nut-noticebar>
 
  <nut-noticebar
      :closeMode="true"
      right-icon="circle-close"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
      >
      Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.
  </nut-noticebar>

  <nut-noticebar
      left-icon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
      :scrollable="false"
    >
      <a href="https://www.jd.com">Jingdong</a>
    </nut-noticebar>
</template>

```
:::

### Wrapable

When text is long, you can enable multi-line display by setting the wrapable property.

:::demo

```html
<template>
  <nut-noticebar
      text="Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience."
      wrapable
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
</template>
```

:::

### Vertical Scroll

:::demo

```html
<template>
  <nut-noticebar 
      direction='vertical' 
      :list="horseLamp1" 
      :speed='10' 
      :standTime='1000' 
      @click='go' 
      :closeMode="true" 
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`">
  </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp1 = ref(['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']);
      const go = (item) => {
        console.log(item)
      }
      return { horseLamp1 };
    }
  }
</script>
```

:::

### Vertical Scroll Complex Animation

:::demo

```html
<template>
  <nut-noticebar direction='vertical' :list="horseLamp2" :speed='10' :standTime='2000' :complexAm='true' :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`"></nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp2 = ref(['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']);
      return { horseLamp2 };
    }
  }
</script>
```

:::

### Vertical Scroll Custom Style

:::demo

```html
<template>
    <nut-noticebar direction='vertical' :height='50' :speed='10' :standTime='1000' :list="[]"  @close='go' :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
      <div class="custom-item" :data-index='index' v-for="(item,index) in horseLamp3" :key="index">{{item}}</div>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp3 = ref(['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']);
      return { horseLamp3 };
    }
  }
</script>
```

:::

### Vertical Scroll Custom Right Icon

:::demo

```html
<template>
    <nut-noticebar direction='vertical' :list="horseLamp1" :speed='10' :standTime='1000' :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
      <template v-slot:rightIcon>
        <nut-icon name="fabulous" color="#f0250f"></nut-icon>
      </template>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp1 = ref(['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox']);
      return { horseLamp1 };
    }
  }
</script>
```

:::
## API
### Props

| Attribute  | Description                                        | Type          | Default |
| ---------- | ---------------------------------------------------| ------------- | ------- |
| direction  | Rolling direction                                  | String        | across  |
| text       | Notice text content                                | String        |  -      |
| close-mode  | Whether to enable the off mode                     | Boolean       | false   |
| left-icon   | Left Icon                                          | String        | -       |
| right-icon  | Right Icon                                         | String        | -       |
| color      | Text Color                                         | String        | -       |
| background | Background                                         | String        | -       |
| delay      | Delay time                                         | String/Number | 1       |
| scrollable | Whether to scroll content                          | Boolean       | true    |
| speed      | Scrolling speed (px/s)                             | Number         | 50      |
| wrapable`v3.1.18` | Whether to enable text wrap                        | Boolean       | false    |

### Props（direction=vertical）

| Attribute    | Description                             | Type     | Default          |
|--------------|-----------------------------------------|----------|------------------|
| list         | List                                    | Array    | []               |
| speed        | Scrolling speed                         | Number   | 50               |
| stand-time    | Show time(millisecond)                  | Number   | 1000             |
| complex-am    | Complex animation                       | Boolean  | false            |
| height       | height                                  | Number   | 40               |
| close-mode    | Whether to enable the off mode          | Boolean  | false            |

### Slots

| Attribute         | Description                      |
|-------------------|----------------------------------|
| default           | Notice text content              |
| right-icon        | Custom right icon                |
| left-icon         | Custom left icon                 |

### Events

| Attribute  | Description                             | Arguments     |
| ---------- | --------------------------------------- | ------------ |
| click      | Emitted when NoticeBar is clicked       | event: Event |
| close      | Emitted when NoticeBar is closed        | event: Event |
