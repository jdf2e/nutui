# Input

### Intro

The user can enter content in the text box.

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { Input,Icon } from '@nutui/nutui';
// taro
import { Input,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Input);
app.use(Icon);

```

### Basic Usage

:::demo

```html
<template>
  <nut-input 
    v-model="state.text" 
    label="Text" 
    placeholder="Text" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        text: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Custom Type

:::demo

```html
<template>
  <nut-input 
    label="Text" 
    placeholder="Text" 
    v-model="state.text" 
  />
  <nut-input 
    label="Password" 
    placeholder="Password" 
    v-model="state.password" 
    type="password" 
  />
  <nut-input 
    label="Number" 
    placeholder="Number" 
    v-model="state.number" 
    type="number" 
  />
  <nut-input 
    label="Digit" 
    placeholder="Digit" 
    v-model="state.digit" 
    type="digit" 
  />
  <nut-input 
    label="Tel" 
    placeholder="Tel" 
    v-model="state.tel" 
    type="tel" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        text: '',
        password: '',
        number: '',
        digit: '',
        tel: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Readonly And Disabled

:::demo

```html
<template>
  <nut-input 
    label="Text" 
    placeholder="Readonly" 
    v-model="state.readonly" 
    readonly 
  />
  <nut-input 
    label="Text" 
    placeholder="Disabled" 
    v-model="state.disabled" 
    disabled 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        readonly: '',
        disabled: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Show Icon

The user can enter content in the text box. Configure the icons on both sides of the input box through `left-icon` and `right-icon`, and display the clear icon during the input process by setting `clearable`. Need to reference the `Icon` component

:::demo

```html
<template>
  <nut-input 
    v-model="state.showIcon" 
    label="Text" 
    placeholder="Show Icon" 
    left-icon="dongdong" 
    right-icon="ask2" 
  />
  <nut-input 
    v-model="state.clear" 
    label="Text" 
    placeholder="Show Clear Icon" 
    clearable
    clearSize="14" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        showIcon: '',
        required: '',
      });
      return {
        state
      };
    }
  }
</script>
```

:::
### Error Info

:::demo

```html
<template>
  <nut-input 
    v-model="state.required" 
    label="Text" 
    placeholder="Required" 
    required 
  />
  <nut-input 
    v-model="state.error1" 
    label="Text" 
    placeholder="Error" 
    error 
  />
  <nut-input 
    v-model="state.error2" 
    label="Text" 
    placeholder="Error Message" 
    error-message="Error Message" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        required: '',
        error1: '',
        error2: '',
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Insert Button

:::demo

```html
<template>
  <nut-input 
    v-model="state.buttonVal" 
    label="Code"
    placeholder="Please enter code"
    clearable 
    center 
  >
    <template #button>
      <nut-button size="small" type="primary">Send</nut-button>
    </template>
  </nut-input>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        buttonVal: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Format Value

:::demo

```html
<template>
  <nut-input 
    v-model="state.format1" 
    label="Text" 
    placeholder="Format On Change" 
    :formatter="formatter" 
  />
  <nut-input
    v-model="state.format2"
    label="Text"
    placeholder="Format On Blur"
    :formatter="formatter"
    format-trigger="onBlur"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        format1: '',
        format2: ''
      });
      const formatter = (value: string) => value.replace(/\d/g, '');
      return {
        state,
        formatter
      };
    }
  }
</script>
```

:::

### Show Word Limit

:::demo

```html
<template>
  <nut-input
    v-model="state.textarea"
    label="Message"
    type="textarea"
    show-word-limit
    rows="2"
    max-length="50"
    placeholder="Message"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        textarea: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### Input Align

:::demo

```html
<template>
  <nut-input 
    v-model="state.align1" 
    label="Text" 
    label-align="right" 
    placeholder="Label Align" 
  />
  <nut-input 
    v-model="state.align2" 
    label="Text" 
    input-align="right" 
    placeholder="Input Align"
   />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        align1: '',
        align2: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::

### No Border

:::demo

```html
<template>
  <nut-input 
    v-model="state.noBorder1" 
    :border="false" 
    label="No Border" 
  />
  <nut-input 
    v-model="state.noBorder2" 
    :border="false" 
    label="No Border" 
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        noBorder1: '',
        noBorder2: ''
      });
      return {
        state
      };
    }
  }
</script>
```

:::
### Click Event

:::demo

```html
<template>
  <nut-input
    v-model="state.event"
    label="click"
    left-icon="dongdong"
    right-icon="ask2"
    clearable
    placeholder="click"
    @update:model-value="change"
    @focus="focus"
    @blur="blur"
    @clear="clear"
    @click="click"
    @click-input="clickInput"
    @click-left-icon="clickLeftIcon"
    @click-right-icon="clickRightIcon"
  />
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        event: ''
      });
      const change = (value: string | number) => {
        console.log('change: ', value);
      };
      const focus = (value: string | number, event: Event) => {
        console.log('focus:', value, event);
      };
      const blur = (value: string | number, event: Event) => {
        console.log('blur:', value, event);
      };
      const clear = (value: string | number, event: Event) => {
        console.log('clear:', value, event);
      };
      const click = (value: string | number) => {
        console.log('click:', value);
      };
      const clickInput = (value: string | number) => {
        console.log('clickInput:', value);
      };
      const clickLeftIcon = (value: string | number) => {
        console.log('clickLeftIcon:', value);
      };
      const clickRightIcon = (value: string | number) => {
        console.log('clickRightIcon:', value);
      };

      return {
        state,
        change,
        blur,
        clear,
        focus,
        click,
        clickInput,
        clickLeftIcon,
        clickRightIcon
      };
    }
  }
</script>
```

:::
## API
### Props

| Attribute   | Description               | Type       | Default  |
|--------------|----------------------------------------|----------------|---------|
| v-model      | Input value, two-way binding           | String         | -       |
| type         | Input type, support all native types and `textarea` `number` `digit` type    | String         | `text`  |
| placeholder  | Placeholder when the input box is empty  | String         | -       |
| label        | Left text                                | String         | -       |
| label-class  | Left text extra class name               | String | -  |
| label-width  | Label width, default unit is `px`        | String、Number | `80`    |
| label-align  | Label align,  eg `left`、`center`、`right` | String | `left` |
| input-align  | Input align, eg `left`、`center`、`right` | String | `left` |
| colon        | Whether to display colon after label     | Boolean        | `false` |
| required     | Whether to show required mark            | Boolean        | `false` |
| border       | Whether to show inner borde         | Boolean        | `true` |
| disabled     | Whether to disable field            | Boolean        | `false` |
| readonly     | Whether to be readonly              | Boolean        | `false` |
| autofocus    | Whether to auto focus, unsupported in iOS     | Boolean        | `false` |
| max-length   | Max length of value                  | String、Number  | -       |
| clearable    | Whether to be clearable              | Boolean        | `false`  |
| clear-icon   | Clear Icon name, [name of icon](#/icon)           | String        | `mask-close`  |
| clear-size   | Clear Icon `font-size`               | String        | `14`  |
| left-icon    | Left side Icon name, [name of icon](#/icon) | String        | - |
| right-icon   | Right side Icon name, [name of icon](#/icon) | String        | - |
| left-icon-size    | Left side Icon `font-size`    | String        | `14`  |
| right-icon-size   | Right side Icon `font-size`   | String        | `14`  |
| show-word-limit | Whether to show word limit, need to set the `max-length` prop | Boolean | `false`  |
| error         | Whether to mark the input content in red   | Boolean | `false`  |
| error-message | Error message            | String、Number | - |
| error-message-align | Error message align, eg `left`、`center`、`right`          | String | - |
| formatter      | Input value formatter    | `(val: string) => string` | - |
| format-trigger | When to format value, eg `onChange`、`onBlur` | String | - |
| confirm-type   | The text of the button in the lower right corner of the keyboard (`applets only`), only valid when `type='text'`, eg `send`, `search`, `next`, ` go`, `done` | String |   `done`   |
| adjust-position| Whether to automatically push the page up when the keyboard pops up, only native     | Boolean | `true` |

### Events

| Event   | Description      | Arguments    |
|--------|----------------|-------------|
| update:model-value | Emitted when input value changed | val  |
| focus  | Emitted when input is focused     | val  ,event |
| blur   | Emitted when input is blurred     | val ,event  |
| clear  | Emitted when the clear icon is clicked   | val ,event  |
| click  | Emitted when component is clicked	      | val ,event  |
| click-input      | Emitted when the input is clicked      | val ,event  |
| click-left-icon  | Emitted when the left icon is clicked      | val ,event  |
| click-right-icon | Emitted when the right icon is clicked      | val ,event  |

### Slots

| Name  | Description     | 
|-------|----------|
| button | Insert button |
| input `v3.1.22` | Custom input |








