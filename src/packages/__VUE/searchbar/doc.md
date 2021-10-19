# Searchbar组件

### 介绍

搜索栏
    
### 安装
    
```javascript
import { createApp, reactive, toRefs } from 'vue';

// vue
import { SearchBar } from '@nutui/nutui';
// taro
import { SearchBar } from '@nutui/nutui-taro';


const app = createApp();
app.use(SearchBar);
```    
    
### 基础用法

```html
<nut-searchbar class="wrap" v-model="searchValue" @search="search">
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
```

```javascript
 setup() {
    const state = reactive({
      searchValue: ""
    });

    const search = function () {
      console.log('ENTER clicked');
    }

    const clickLeft = function () {
      console.log('left clicked');
    }

    return {
      clickLeft,
      search,
      ...toRefs(state),
    };
}
```
    
### Props
    
| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| max-length         | 最大输入长度   | [Number,String] | '9999'      |
| placeholder        | 输入框默认暗纹  | String | '请输入'   |
| clearable          | 是否展示清除按钮 | Boolean | true     |
| has-left-in     | 是否展示输入框内 左icon     | Boolean | true |
| has-left-out     | 是否展示输入框外 左icon     | Boolean | true |
| has-right-in     | 是否展示输入框内 右icon     | Boolean | true |
| has-right-out     | 是否展示输入框外 右icon     | Boolean | true |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | 输入内容时触发 | val, event |
| focus  | 聚焦时触发 | val, event |
| blur  | 失焦时触发 | val, event |
| clear  | 点击清空时触发 | val |
| search  | 按下 ENTER 键时触发 | val, event |

## Slots

| 名称          | 说明                 |
|---------------|----------------------|
| leftin      | 输入框内 左icon  |
| leftout     | 输入框外 左icon |
| rightin     | 输入框内 右icon |
| rightout    | 输入框外 右icon |