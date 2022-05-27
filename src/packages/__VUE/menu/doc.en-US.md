# Menu

### Intro

The menu list that pops down downwards.

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { Menu, MenuItem } from '@nutui/nutui';
// taro
import { Menu, MenuItem } from '@nutui/nutui-taro';
const app = createApp();
app.use(Menu);

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
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
      ],
      options2: [
        { text: 'Option A', value: 'a' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c' },
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
        <div>Custom content</div>
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
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
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
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 },
        { text: 'Option4', value: 3 },
        { text: 'Option5', value: 4 },
        { text: 'Option6', value: 5 },
        { text: 'Option7', value: 6 },
        { text: 'Option8', value: 7 },
        { text: 'Option9', value: 8 },
        { text: 'Option10', value: 9 },
        { text: 'Option11', value: 10 },
        { text: 'Option12', value: 11 },
        { text: 'Option13', value: 12 },
        { text: 'Option14', value: 13 },
        { text: 'Option15', value: 14 },
        { text: 'Option16', value: 15 },
        { text: 'Option17', value: 16 },
        { text: 'Option18', value: 17 },
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
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
      ],
      options2: [
        { text: 'Option A', value: 'a' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c' },
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

### Disable Menu

:::demo

```html
<template>
  <nut-menu>
    <nut-menu-item disabled v-model="state.value1" :options="state.options1" />
    <nut-menu-item disabled v-model="state.value2" @change="handleChange" :options="state.options2" />
  </nut-menu>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup() {
    const state = reactive({
      options1: [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 }
      ],
      options2: [
        { text: 'Option A', value: 'a' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c' },
      ],
      options3: [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 },
        { text: 'Option4', value: 3 },
        { text: 'Option5', value: 4 },
        { text: 'Option6', value: 5 },
        { text: 'Option7', value: 6 },
        { text: 'Option8', value: 7 },
        { text: 'Option9', value: 8 },
        { text: 'Option10', value: 9 },
        { text: 'Option11', value: 10 },
        { text: 'Option12', value: 11 },
        { text: 'Option13', value: 12 },
        { text: 'Option14', value: 13 },
        { text: 'Option15', value: 14 },
        { text: 'Option16', value: 15 },
        { text: 'Option17', value: 16 },
        { text: 'Option18', value: 17 },
      ],
      value1: 0,
      value2: 'a',
      value3: 0
    });

    const item = ref('');

    const onConfirm = () => {
      item.value.toggle();
    }

    const handleChange = val => {
      console.log('val', val);
    }

    return {
      state,
      item,
      onConfirm,
      handleChange
    };
  }
}
</script>
```

:::

## API

### Menu Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| active-color         | Active color of title and option     | String | #F2270C               |
| close-on-click-overlay        | Whether to close when overlay is clicked     | Boolean | true               |

### MenuItem Props

| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| title         | Item title     | String | 当前选中项文字               |
| options         | Options     | Array | -                |
| disabled         | Whether to disable dropdown item     | Boolean | false                |
| cols         | Display how many options in one line     | Number | 1                |
| title-icon         | Custome title icon     | String | 'down-arrow'                |

### MenuItem Events

| Event | Description           | Arguments     |
|--------|----------------|--------------|
| change  | Emitted select option changed | Selected value |