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

| Attribute | Description | Type   | Default |
|--------------|----------------------------------|--------|------------------|
| v-model | Currently entered value | number / string | ''|
|label| left text of search box | string | ''|
|shape | search box shape. The optional value is round | string | square|
|max-length | maximum input length | [number, string] | '9999'|
|input-type | input box type | string | 'text'|
|placeholder | input box default dark grain | string | 'please enter'|
|clear | whether to display the clear button | Boolean | true|
|background | input box external background | string | '#fff'|
|input-background | internal background of input box | string | '#f7f7f7'|
|autofocus | Auto focus | boolean | false |
|disabled| disable input box | Boolean | false|
|readonly| input box read only | Boolean | false|
|input-align| alignment, optional ` center ` ` right ` | string | left |


### Events


| Event | Description                  | Arguments   |
|--------|----------------|--------------|
|change | Triggered when content is entered | val, event |
|focus | Triggered when focusing | val, event|
|blur | Triggered when out of focus | val, event|
|clear | Triggered when clicking empty | val|
|search | Triggered when the Enter key is pressed | val, event|
| click-input| Triggered when the input field is clicked| event |
| click-left-icon| Triggered when the icon on the left is clicked| val, event |
| click-right-icon| Triggered when the icon on the right is clicked| val, event |


### Slots

| Name          | Description        |
|---------------|----------------------|
|leftIn | left icon in the input box|
|leftout | left Icon outside the input box|
|rightin | right icon in the input box|
|rightout | right icon outside the input box|