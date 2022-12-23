# Menu

### Intro

The menu list that pops down downwards.

### Install

``` javascript
import { createApp } from 'vue';
import { Menu, MenuItem,Overlay, Popup } from '@nutui/nutui';

const app = createApp();
app.use(Menu);
app.use(MenuItem);
app.use(Overlay);
app.use(Popup);

```

### Basic Usage

:::demo

```html
<template>
  <nut-menu>
    <nut-menu-item v-model="state.value1" :options="state.options1" />
    <nut-menu-item v-model="state.value2" @change="handleChange" :options="state.options2" />
  </nut-menu>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const state = reactive({
      options1: [
        { text: 'All Products', value: 0 },
        { text: 'New Products', value: 1 },
        { text: 'Activity Products', value: 2 }
      ],
      options2: [
        { text: 'Default Sort', value: 'a' },
        { text: 'Praise Sort', value: 'b' },
        { text: 'Sales Volume Sort', value: 'c' }
      ],
      value1: 0,
      value2: 'a'
    });

    const handleChange = val => {
      console.log('val', val);
    }

    return {
      state,
      handleChange
    };
  }
}
</script>
```

:::

### Custom Menu Content
Popup can be closed with toggle method in menu instance.

:::demo

```html
<template>
  <nut-menu>
    <nut-menu-item v-model="state.value1" :options="state.options1" />
    <nut-menu-item title="Screen" ref="item">
      <div :style="{display: 'flex', flex: 1, 'justify-content': 'space-between', 'align-items': 'center'}">
        <div :style="{ marginRight: '10px'}">Custom content</div>
        <nut-button @click="onConfirm">Confirm</nut-button>
      </div>
    </nut-menu-item>
  </nut-menu>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const state = reactive({
      options1: [
        { text: 'All Products', value: 0 },
        { text: 'New Products', value: 1 },
        { text: 'Activity Products', value: 2 }
      ],
      value1: 0
    });

    const item = ref('');

    const onConfirm = () => {
      item.value.toggle();
    }

    return {
      state,
      item,
      onConfirm
    };
  }
}
</script>
```

:::

### Two Cols In One Line

:::demo

```html
<template>
  <nut-menu>
    <nut-menu-item v-model="state.value3" :cols="2" :options="state.options3" />
  </nut-menu>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const state = reactive({
      options3: [
        { text: 'All Products', value: 0 },
        { text: 'Product1', value: 1 },
        { text: 'Product2', value: 2 },
        { text: 'Product3', value: 3 },
        { text: 'Product4', value: 4 },
        { text: 'Product5', value: 5 },
        { text: 'Product6', value: 6 },
        { text: 'Product7', value: 7 },
        { text: 'Product8', value: 8 },
        { text: 'Product9', value: 9 },
        { text: 'Product10', value: 10 },
        { text: 'Product11', value: 11 },
        { text: 'Product12', value: 12 },
        { text: 'Product13', value: 13 },
        { text: 'Product14', value: 14 },
        { text: 'Product15', value: 15 },
        { text: 'Product16', value: 16 },
        { text: 'Product17', value: 17 }
      ],
      value3: 0
    });

    return {
      state
    };
  }
}
</script>
```

:::

### Custom Active Color

:::demo

```html
<template>
  <nut-menu active-color="green">
    <nut-menu-item v-model="state.value1" :options="state.options1" />
    <nut-menu-item v-model="state.value2" @change="handleChange" :options="state.options2" />
  </nut-menu>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const state = reactive({
      options1: [
        { text: 'All Products', value: 0 },
        { text: 'New Products', value: 1 },
        { text: 'Activity Products', value: 2 }
      ],
      options2: [
        { text: 'Default Sort', value: 'a' },
        { text: 'Praise Sort', value: 'b' },
        { text: 'Sales Volume Sort', value: 'c' }
      ],
      value1: 0,
      value2: 'a'
    });

    const handleChange = val => {
      console.log('val', val);
    }

    return {
      state,
      handleChange
    };
  }
}
</script>
```

:::

### Custom Icons

:::demo

```html
<template>
  <nut-menu>
    <nut-menu-item v-model="state.value1" :options="state.options1" titleIcon="joy-smile" />
    <nut-menu-item v-model="state.value2" @change="handleChange" :options="state.options2" optionIcon="checklist" />
  </nut-menu>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const state = reactive({
      options1: [
        { text: 'All Products', value: 0 },
        { text: 'New Products', value: 1 },
        { text: 'Activity Products', value: 2 }
      ],
      options2: [
        { text: 'Default Sort', value: 'a' },
        { text: 'Praise Sort', value: 'b' },
        { text: 'Sales Volume Sort', value: 'c' }
      ],
      value1: 0,
      value2: 'a'
    });

    const handleChange = val => {
      console.log('val', val);
    }

    return {
      state,
      handleChange
    };
  }
}
</script>
```

:::

### Expand Directions

:::demo

```html
<template>
  <div class="blank"></div>
  <nut-menu direction="up">
    <nut-menu-item v-model="state.value1" :options="state.options1" />
    <nut-menu-item v-model="state.value2" @change="handleChange" :options="state.options2" />
  </nut-menu>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const state = reactive({
      options1: [
        { text: 'All Products', value: 0 },
        { text: 'New Products', value: 1 },
        { text: 'Activity Products', value: 2 }
      ],
      options2: [
        { text: 'Default Sort', value: 'a' },
        { text: 'Praise Sort', value: 'b' },
        { text: 'Sales Volume Sort', value: 'c' }
      ],
      value1: 0,
      value2: 'a'
    });

    const handleChange = val => {
      console.log('val', val);
    }

    return {
      state,
      handleChange
    };
  }
}
</script>
<style>
.blank {
  width: 200px;
  height: 200px;
}
</style>
```

:::

### Disable Menu

:::demo

```html
<template>
  <nut-menu>
    <nut-menu-item disabled v-model="state.value1" :options="state.options1" />
    <nut-menu-item disabled v-model="state.value2" :options="state.options2" />
  </nut-menu>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      options1: [
        { text: 'All Products', value: 0 },
        { text: 'New Products', value: 1 },
        { text: 'Activity Products', value: 2 }
      ],
      options2: [
        { text: 'Default Sort', value: 'a' },
        { text: 'Praise Sort', value: 'b' },
        { text: 'Sales Volume Sort', value: 'c' }
      ],
      options3: [
        { text: 'All Products', value: 0 },
        { text: 'Product1', value: 1 },
        { text: 'Product2', value: 2 },
        { text: 'Product3', value: 3 },
        { text: 'Product4', value: 4 },
        { text: 'Product5', value: 5 },
        { text: 'Product6', value: 6 },
        { text: 'Product7', value: 7 },
        { text: 'Product8', value: 8 },
        { text: 'Product9', value: 9 },
        { text: 'Product10', value: 10 },
        { text: 'Product11', value: 11 },
        { text: 'Product12', value: 12 },
        { text: 'Product13', value: 13 },
        { text: 'Product14', value: 14 },
        { text: 'Product15', value: 15 },
        { text: 'Product16', value: 16 },
        { text: 'Product17', value: 17 }
      ],
      value1: 0,
      value2: 'a',
      value3: 0
    });

    return {
      state
    };
  }
}
</script>
```

:::

## API

### Menu Props

| Attribute                        | Description                                                         | Type                    | Default |
|----------------------------------|---------------------------------------------------------------------|-------------------------|---------|
| active-color                     | Active color of title and option                                    | String                  | #F2270C |
| close-on-click-overlay | Whether to close when overlay is clicked                            | Boolean                 | true    |
| scroll-fixed           | Whether to fixed when window is scrolled, fixed position can be set | Boolean、String、Number | false   |
| title-class            | Custome title class                                                 | String                  | -       |
| lock-scroll            | Whether the background is locked                                    | Boolean                 | true    |
| title-icon               | Custome title icon                                                  | String                  | -       |

### MenuItem Props

| Attribute | Description                          | Type    | Default        |
|-----------|--------------------------------------|---------|----------------|
| title     | Item title                           | String  | 当前选中项文字 |
| options   | Options                              | Array   | -              |
| disabled  | Whether to disable dropdown item     | Boolean | false          |
| cols      | Display how many options in one line | Number  | 1              |

| option-icon         | Custome option icon                  | String  | 'Check'        |
| direction           | Expand direction, can be set to up   | String  | 'down'         |
| active-title-class   | Active custome title class           | String  | -              |
| inactive-title-class | Inactive custome title class         | String  | -              |
| font-class-name | Custom icon font base class name                                                                         | String           | `nutui-iconfont` |
| class-prefix    | Custom icon class name prefix for using custom icons                                                     | String           | `nut-icon`       |



### MenuItem Events

| Event  | Description                   | Arguments      |
|--------|-------------------------------|----------------|
| change | Emitted select option changed | Selected value |
| toggle | Toggle menu display status, `true` to show，`false` to hide, no param is negated | show?: boolean |
| open  | Emitted when opening menu | - |
| close | Emitted when closing menu | - |
## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | Description |
| --------------------------------------- | -------------------------- | ---- |
|  --nut-menu-bar-line-height| _48px_ | -  |
|  --nut-menu-item-font-size| _var(--nut-font-size-2)_ | -  |
|  --nut-menu-item-text-color| _var(--nut-title-color)_ | -  |
|  --nut-menu-item-active-text-color| _var(--nut-primary-color)_ | -  |
|  --nut-menu-bar-border-bottom-color| _#eaf0fb_ | -  |
|  --nut-menu-bar-opened-z-index| _2001_ | -  |
|  --nut-menu-item-disabled-color| _#969799_ | -  |
|  --nut-menu-title-text-padding-left| _8px_ | -  |
|  --nut-menu-title-text-padding-right| _8px_ | -  |
|  --nut-menu-item-content-padding| _12px 24px_ | -  |
|  --nut-menu-item-content-max-height| _214px_ | -  |
|  --nut-menu-item-option-padding-top| _12px_ | -  |
|  --nut-menu-item-option-padding-bottom| _12px_ | -  |
|  --nut-menu-item-option-i-margin-right| _6px_ | -  |
|  --nut-menu-bar-box-shadow| _0 2px 12px rgba(89, 89, 89, 0.12)_ | -  |
|  --nut-menu-scroll-fixed-top| _0_ | -  |
|  --nut-menu-scroll-fixed-z-index| _1000_ | -  |
|  --nut-menu-active-item-font-weight| _500_ | -  |