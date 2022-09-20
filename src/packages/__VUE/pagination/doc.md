#  Pagination 分页

### 介绍
    
当数据量较多时，采用分页的形式分隔长列表。
    
### 安装
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
    
### 基础用法
通过 v-model 来绑定当前页码。
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
### 简单模式
将 mode 设置为 simple 来切换到简单模式，此时分页器不会展示具体的页码按钮。
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
### 显示省略号
设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。
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
### 自定义按钮
设置 force-ellipses 后会展示省略号按钮，点击后可以快速跳转。
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
    
| 参数           | 说明                     | 类型          | 默认值            |
|----------------|--------------------------|---------------|-------------------|
| v-model        | 当前页码                 | Number        | 1                 |
| mode           | 显示模式,可选值为 simple | String        | multi             |
| prev-text      | 上一页按钮文字           | String        | 上一页            |
| next-text      | 下一页按钮文字           | String        | 下一页            |
| page-count     | 总页数                   | String,Number | 传入/根据页数计算 |
| total-items    | 总记录数                 | String,Number | 0                 |
| items-per-page | 每页记录数               | String,Number | 10                |
| show-page-size | 显示的页码个数           | String,Number | 5                 |
| force-ellipses | 是否显示省略号           | Boolean       | false             |
    
### Events
    
| 事件名 | 说明           | 回调参数 |
|--------|----------------|----------|
| change | 页码改变时触发 | value    |

### Slots
    
| 名称      | 描述                 | 参数 |
|-----------|----------------------|------|
| prev-text | 自定义上一页按钮内容 | -    |
| next-text | 自定义下一页按钮内容 | -    |
| page      | 自定义页码           | -    |