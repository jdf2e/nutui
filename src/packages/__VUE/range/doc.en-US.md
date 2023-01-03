# Range

### Intro
  
Slide the input bar to select a value within a given range.

### Install

```javascript
import { createApp } from 'vue';
import { Range } from '@nutui/nutui';

const app = createApp();
app.use(Range);
```

### Basic Usage
:::demo

```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { Toast } from '@nutui/nutui';
  export default {
    setup() {
      const value = ref(40);
      const onChange = (value) => Toast.text('value：' + value);
      return {
        value,
        onChange,
      };
    },
  };
</script>

```
:::

### Dual thumb
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range range v-model="value" @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref([20, 80]);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### Range
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" :max="10" :min="-10" @change="onChange" />
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(0);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### Step Size
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" :step="5" @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(20);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### Hidden Range
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" hidden-range @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(30);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### Hidden Tag
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" :hidden-tag="true" @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(40);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::

### Disabled
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range v-model="value" disabled @change="onChange"></nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(50);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### Custom Style
:::demo
```html
<template>
  <nut-cell :style="{padding: '40px 18px'}">
    <nut-range
      v-model="value"
      inactive-color="rgba(163,184,255,1)"
      button-color="rgba(52,96,250,1)"
      active-color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%"
      @change="onChange">
    </nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(40);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::

### Custom Button
:::demo
```html
<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
<template>
  <nut-cell :style="{padding: '40px 18px'}">
   <nut-range v-model="value" @change="onChange">
      <template #button>
        <div class="custom-button">{{ value }}</div>
      </template>
    </nut-range>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value = ref(60);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::
### Vertical
:::demo
```html
<style>

.vertical_div {
  height: 180px;
  padding: 10px;
  .div {
    width: 150px;
  }
}
</style>
<template>
  <nut-cell class="vertical_div">
    <div class="div">
      <nut-range v-model="value10" @change="onChange" :vertical="true"></nut-range>
    </div>
    <div class="div">
      <nut-range range v-model="value11" @change="onChange" :vertical="true"></nut-range>
    </div>
  </nut-cell>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value10 = ref(20);
    const value11 = ref([20,80]);
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::

### Marks
:::demo
```html
<style>
.vertical_div {
  height: 180px;
  padding: 10px;
  .div {
    width: 150px;
  }
}
</style>
<template>
  <div >
    <nut-cell class="cell">
      <nut-range v-model="value12" @change="onChange" :marks="marks" :hiddenRange="true"></nut-range>
    </nut-cell>
    <nut-cell class="cell">
      <nut-range range v-model="value13" @change="onChange" :marks="marks" :hiddenRange="true"></nut-range>
    </nut-cell>
    <nut-cell class="vertical_div">
      <div class="div">
        <nut-range v-model="value14" @change="onChange" :vertical="true" :marks="marks" :hiddenRange="true"></nut-range>
      </div>
      <div class="div">
        <nut-range
          range
          v-model="value15"
          @change="onChange"
          :vertical="true"
          :marks="marks"
          :hiddenRange="true"
        ></nut-range>
      </div>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
    const value12 = ref(20);
    const value13 = ref([20,80]);
    const marks=ref({
      0: 0,
      20: 20,
      40: 40,
      60: 60,
      80: 80,
      100: 100
    });
    const onChange = (value) => Toast.text('value：' + value);
    return {
      value,
      onChange,
    };
  },
};
</script>
```
:::


  ## API
  
  ### Props
  
| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | current progress percentage | number、number[] | `0` |
| range | Whether to enable dual slider mode | boolean | `false` |
| max | maximum  | number、string | `100` |
| min | minimum  | number、string | `0` |
| step | step size | number、string | `1` |
| disabled | Whether to disable the slider | boolean | `false` |
| vertical | Whether to display vertically | boolean | `false` |
| hidden-range | whether to hide range values | boolean | `false` |
| hidden-tag | whether to hide the label | boolean | `false` |
| active-color | progress bar active color | string | `rgba(250, 44, 25, 1)` |
| inactive-color | Progress bar inactive color | string | `rgba(255, 163, 154, 1)` |
| button-color | button color | string | `rgba(250, 44, 25, 1)` |
| marks | scale mark | object{key:number} | `{}` |

  
### Events

| Event             | Description                     | Arguments        |
| ------------------ | ------------------------ | --------------- |
| change             | Triggered when the progress changes and the drag is over | `value: number \| number[]` |
| drag-start         | Triggered when dragging starts           | -               |
| drag-end           | Triggered when the drag is over           | -               |

### Slots

| Name   | Description           |
| ------ | -------------- |
| button | custom slide button |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- | 
|  --nut-range-tip-font-color| _#333333_  |
|  --nut-range-bg-color| _var(--nut-active-color)_  |
|  --nut-range-bg-color-tick| _#fa958c_  |
|  --nut-range-bar-bg-color| _linear-gradient(135deg, var(--nut-primary-color) 0%, var(--nut-primary-color-end) 100%)_  |
|  --nut-range-bar-btn-bg-color| _var(--nut-white)_  |
|  --nut-range-bar-btn-width| _24px_  |
|  --nut-range-bar-btn-height| _24px_  |
|  --nut-range-bar-btn-border| _1px solid var(--nut-primary-color)_  |

