# SearchBar

### Intro

Search bar
    
### Install
    
```javascript
import { createApp } from 'vue';

// vue
import { SearchBar, Icon } from '@nutui/nutui';
// taro
import { SearchBar, Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(SearchBar);
app.use(Icon);

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
  import { Toast } from '@nutui/nutui';
  export default {
    setup() {
      const state = reactive({
        searchValue: ""
      });

      const search = function () {
        Toast.text('Search trigger');
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
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftin>
      <nut-icon size="14" name="search2"></nut-icon>
    </template>
  </nut-searchbar>
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  import { Icon } from '@nutui/nutui';
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

### Add search text to the right
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:rightout>
      搜索
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
  <nut-searchbar v-model="searchValue4" background="linear-gradient(to right, #9866F0, #EB4D50)" input-background="#fff"> </nut-searchbar>
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
### Show all icons
:::demo
```html
<template>
  <nut-searchbar v-model="searchValue">
    <template v-slot:leftout>
      <nut-icon @click="clickLeft" size="20" name="left"></nut-icon>
    </template>
    <template v-slot:leftin>
      <nut-icon size="14" name="search2"></nut-icon>
    </template>
    <template v-slot:rightin>
      <nut-icon size="20" name="photograph"></nut-icon>
    </template>
    <template v-slot:rightout>
      <nut-icon size="20" name="message"></nut-icon>
    </template>
  </nut-searchbar> 
</template>
<script lang="ts">
  import { toRefs, reactive } from 'vue';
  import { Icon } from '@nutui/nutui';
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
## API
### Props

| Attribute | Description | Type   | Default |
|--------------|----------------------------------|--------|------------------|
| v-model | Currently entered value | number / string | ''|
|label `v3.1.21`| left text of search box | string | ''|
|shape | search box shape. The optional value is round | string | square|
|max-length | maximum input length | [number, string] | '9999'|
|input-type | input box type | string | 'text'|
|placeholder | input box default dark grain | string | 'please enter'|
|clear | whether to display the clear button | Boolean | true|
|background | input box external background | string | '#fff'|
|confirm-type | the text of the button at the bottom right corner of the keyboard (` only applet supported ') takes effect only when' type='text ''. The optional values `send`: send, `search`: search, `next`: next, `go`: go, `done`: finish | string | `done`|
|input-background | internal background of input box | string | '#f7f7f7'|
|autofocus `v3.1.21` | Auto focus | boolean | false |
|disabled `v3.1.21`| disable input box | Boolean | false|
|readonly `v3.1.21`| input box read only | Boolean | false|
|input-align `v3.1.21`| alignment, optional ` center ` ` right ` | string | left |


### Events


| Event | Description                  | Arguments   |
|--------|----------------|--------------|
|change | Triggered when content is entered | val, event |
|focus | Triggered when focusing | val, event|
|blur | Triggered when out of focus | val, event|
|clear | Triggered when clicking empty | val|
|search | Triggered when the Enter key is pressed | val, event|
| click-input `v3.1.21`| Triggered when the input field is clicked| event |
| click-left-icon `v3.1.21`| Triggered when the icon on the left is clicked| val, event |
| click-right-icon `v3.1.21`| Triggered when the icon on the right is clicked| val, event |


### Slots

| Name          | Description        |
|---------------|----------------------|
|leftIn | left icon in the input box|
|leftout | left Icon outside the input box|
|rightin | right icon in the input box|
|rightout | right icon outside the input box|