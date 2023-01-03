# Searchbar

### Intro

Search bar
    
### Install
    
```javascript
import { createApp } from 'vue';
import { Searchbar } from '@nutui/nutui';
const app = createApp();
app.use(Searchbar);
```    
    
### Basic Usage
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue"></nut-searchbar>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::

### Search event listening
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue" @search="search"></nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  import { showToast } from '@nutui/nutui';
  import '@nutui/nutui/dist/packages/toast/style'; 
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      const search = function () {
        showToast.text('Search trigger');
      };

      return {
        ...toRefs(state),
        search,
      };
    }
  };
</script>
```
:::

### Display search Icon
:::demo
````html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftin>
      <Search2 />
    </template>
  </nut-searchbar>
</template>
<script lang="ts">
import { toRefs, reactive } from 'vue';
import { Search2 } from '@nutui/icons-vue';
export default {
  components: { Search2 },
  setup() {
    const state = reactive({
      searchValue: ""
    });

    return {
      ...toRefs(state),
    };
  }
};
</script>
```
:::

### Add search text to the right
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:rightout>
      Search
    </template>
  </nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::

### Change the background style inside and outside the input box
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue" background="linear-gradient(to right, #9866F0, #EB4D50)" input-background="#fff"> </nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::

### Custom Clear Button icon

:::demo
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:clearIcon>
      <img :src="icon" style="width: 10px; height: 10px" />
    </template>
  </nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  export default {
    setup() {
      const icon = 
      'https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png';
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
        icon
      };
    }
  };
</script>
```
:::


### Show all icons
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftout>
      <Left @click="clickLeft" />
    </template>
    <template v-slot:leftin>
      <Search2 />
    </template>
    <template v-slot:rightin>
      <Photograph />
    </template>
    <template v-slot:rightout>
      <Message />
    </template>
  </nut-searchbar> 
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  import { Search2, Left, Photograph, Message } from '@nutui/icons-vue';
  export default {
    components: { Search2, Left, Photograph, Message },
    setup() {
      const state = reactive({
        searchValue: ""
      });

      return {
        ...toRefs(state),
      };
    }
  };
</script>
```
:::
## API

### Props

| Parameter | Description | Type | Default |
|--------------|---------------------------------- |-------|------------------|
| v-model | current input value | number /| string | `''` |
| label| left text of search box | string | `''` |
| shape | search box shape, optional value is `square` `round` | string | `square` |
| max-length | maximum input length | number \| string | `9999` |
| input-type | input box type | string | `text` |
| placeholder | The default dark pattern of the input box | string | `Please enter` |
| clearable | whether to show clear button | boolean | `true` |
| clear-icon | custom clear button icon (default use `@nutui/nutui-icons`) | Object | `CircleClose` |
| background | external background of the input box | string | `#fff` |
| input-background | background of input box | string | `#f7f7f7` |
| autofocus | Whether to automatically focus | boolean | `false` |
| focus-style | search box style when focused | Object | `-` |
| disabled | Whether to disable the input box | boolean | `false` |
| readonly| input field is read only | boolean | `false` |
| input-align| alignment, optional `left` `center` `right` | string | `left` |



### Events

| Event Name | Description | Callback Parameters |
|--------|----------------|--------------|
| change | fires when something is entered | `val, event` |
| focus | fires on focus | `val, event` |
| blur | Triggered when out of focus | `val, event` |
| clear | Triggered when click clear | `val` |
| search | fires when the ENTER key is pressed | `val, event` |
| click-input| Fired when the input field is clicked | `event` |
| click-left-icon| Fires when the left icon is clicked | `val, event` |
| click-right-icon| Fires when the right icon is clicked | `val, event` |

### Slots

| Name          | Description        |
|---------------|----------------------|
|leftIn | left icon in the input box|
|leftout | left Icon outside the input box|
|rightin | right icon in the input box|
|rightout | right icon outside the input box|

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/config-provider).

| Name | Default Value |
| --------------------------------------- | -------------------------- |
| --nut-searchbar-background| _var(--nut-white)_  |
| --nut-searchbar-right-out-color| _var(--nut-black)_  |
| --nut-searchbar-padding| _9px 16px_  |
| --nut-searchbar-width| _100%_  |
| --nut-searchbar-input-background| _#f7f7f7_  |
| --nut-searchbar-input-padding| _0 0 0 13px_  |
| --nut-searchbar-input-height| _32px_  |
| --nut-searchbar-input-width| _100%_  |
| --nut-searchbar-input-border-radius| _16px_  |
| --nut-searchbar-input-box-shadow| _0 0 8px 0 rgba(0, 0, 0, 0.04)_  |
| --nut-searchbar-input-bar-color| _inherit_  |
| --nut-searchbar-input-bar-placeholder-color| _inherit_  |