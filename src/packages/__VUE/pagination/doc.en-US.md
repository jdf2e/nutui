#  Pagination

### Intro
    
When the amount of data is too much, use pagination to separate the data.
    
### Install
```javascript
import { createApp } from 'vue';
//vue
import { Pagination,Icon } from '@nutui/nutui';
//taro
import { Pagination,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Pagination);
app.use(Icon);
```    
    
### Basic Usage
Bind current page with v-model.
:::demo
```html
<template>
  <nut-pagination v-model="currentPage" :total-items="25" :items-per-page="5" @change="pageChange" />
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      currentPage: 1,
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
</script>
<style lang="scss" scoped>
  .nut-pagination {
    margin-left:20px;
  }
</style>
```  
:::
### Simple mode
Pagination can be switched to simple mode with simple mode attribute, and pagination cann't display specific page buttons.
:::demo
```html
<template>
  <nut-pagination v-model="currentPage1" :page-count="12" mode="simple" @change="pageChange" />
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      currentPage1: 1,
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
</script>
<style lang="scss" scoped>
  .nut-pagination {
    margin-left:20px;
  }
</style>
```
:::
### Show ellipses 
The ellipses button will display after with force-ellipses attribute, click it can jump quickly.
:::demo
```html
<template>
  <nut-pagination v-model="currentPage2" :total-items="125" :show-page-size="3"  @change="pageChange"  force-ellipses/>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      currentPage2: 1,
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
</script>
<style lang="scss" scoped>
  .nut-pagination {
    margin-left:20px;
  }
</style>
```
:::
### Custom Button
Custom pagination button content with pre-text slot、next-text slot and so on.
:::demo
```html
<template>
  <nut-pagination v-model="currentPage3" :total-items="500"  @change="pageChange"  :show-page-size="5">
      <template #prev-text>
          <nut-icon name="left" size="10px" />
      </template>
      <template #next-text>
          <nut-icon name="right" size="10px" />
      </template>
      <template #page="{ item }">
          {{ item.number == 3 ? 'hot' : item.text }}
      </template>
  </nut-pagination>
</template>
<script lang="ts">
import { ref, reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      currentPage3: 1,
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
};
</script>
<style lang="scss" scoped>
  .nut-pagination {
    margin-left:20px;
  }
</style>
``` 
:::

    
## API
    
### Props
    
| Attribute           | Description                     | Type          | Default            |
|----------------|--------------------------|---------------|-------------------|
| v-model        | Current page number                 | Number        | 1                 |
| mode           | Mode, can be set to simple or multi | String        | multi             |
| prev-text      | Previous text           | String        | Previous            |
| next-text      | Next text           | String        | Next            |
| page-count     | The total number of pages                   | String,Number | '' |
| total-items    | Total items                 | String,Number | 0                 |
| items-per-page | Item number per page               | String,Number | 10                |
| show-page-size | Count of page size to show           | String,Number | 5                 |
| force-ellipses | Whether to show ellipses           | Boolean       | false             |
    
### Events
    
| Event | Description           | Arguments |
|--------|----------------|----------|
| change | Emitted when current page changed | value    |

### Slots
    
| Name      | Description                 | Arguments |
|-----------|----------------------|------|
| prev-text | Custom prev text | -    |
| next-text | Custom next text | -    |
| page      | Custom pagination item           | -    |