# Noticebar

### Intro

Used to display a group of message notifications in a continuons loop.

### Install

```javascript

import { createApp } from 'vue';
import { Noticebar } from '@nutui/nutui';

const app = createApp();
app.use(Noticebar);

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
  <nut-noticebar :close-mode="true" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
    Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.
  </nut-noticebar>
 
  <nut-noticebar
      :close-mode="true"
      right-icon="circle-close"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
      >
      Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.
  </nut-noticebar>

  <nut-noticebar
      :scrollable="false"
    >
      <template v-slot:left-icon>
        <img
          src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
          style="width: 20px; height: 20px"
        />
      </template>
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
      :close-mode="true" 
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`">
  </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp1 = ref(['Noticebar', 'Cascader', 'DatePicker', 'CheckBox']);
      const go = (item) => {
        console.log(item)
      }
      return { horseLamp1,go };
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
      const horseLamp2 = ref(['Noticebar', 'Cascader', 'DatePicker', 'CheckBox']);
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
    <nut-noticebar direction='vertical' :height='50' :speed='10' :standTime='1000' :list="[]"  :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
      <div class="custom-item" :data-index='index' v-for="(item,index) in horseLamp3" :key="index">{{item}}</div>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp3 = ref(['Noticebar', 'Cascader', 'DatePicker', 'CheckBox']);
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
        <Fabulous />
      </template>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  import { Fabulous } from '@nutui/icons-vue';
  export default {
    components: { Fabulous },
    setup(props) {
      const horseLamp1 = ref(['Noticebar', 'Cascader', 'DatePicker', 'CheckBox']);
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
| direction  | Rolling direction                                  | string        | `across`  |
| text       | Notice text content                                | string        |  -      |
| close-mode  | Whether to enable the off mode                     | boolean       | `false`   |
| left-icon   | Left Icon                                          | string        | -       |
| color      | Text Color                                         | string        | -       |
| background | Background                                         | string        | -       |
| delay      | Delay time                                         | string \| number | `1`       |
| scrollable | Whether to scroll content                          | boolean       | `true`    |
| speed      | Scrolling speed (px/s)                             | number         | `50`     |
| wrapable | Whether to enable text wrap,`scrollable` set `false`                        | boolean       | `false`    |

### Props（direction=vertical）

| Attribute    | Description                             | Type     | Default          |
|--------------|-----------------------------------------|----------|------------------|
| list         | List                                    | array    | `[]`               |
| speed        | Scrolling speed                         | number   | `50`               |
| stand-time    | Show time(millisecond)                  | number   | `1000`             |
| complex-am    | Complex animation                       | boolean  | `false`            |
| height       | height                                  | number   | `40`               |
| close-mode    | Whether to enable the off mode          | boolean  | `false`            |

### Slots

| Name         | Description                      |
|-------------------|----------------------------------|
| default           | Notice text content              |
| right-icon        | Custom right icon                |
| left-icon         | Custom left icon                 |

### Events

| Attribute  | Description                             | Arguments     |
| ---------- | --------------------------------------- | ------------ |
| click      | Emitted when Noticebar is clicked       | event: Event |
| close      | Emitted when Noticebar is closed        | event: Event |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- | 
| --nut-noticebar-background| _rgba(251, 248, 220, 1)_ |
| --nut-noticebar-color| _#d9500b_ |
| --nut-noticebar-font-size| _14px_ |
| --nut-noticebar-height| _40px_ |
| --nut-noticebar-line-height| _24px_ |
| --nut-noticebar-left-icon-width| _16px_ |
| --nut-noticebar-right-icon-width| _16px_ |
| --nut-noticebar-box-padding| _0 16px_ |
| --nut-noticebar-wrapable-padding| _16px_ |
| --nut-noticebar-lefticon-margin| _0px 10px_ |
| --nut-noticebar-righticon-margin| _0px 10px_ |
