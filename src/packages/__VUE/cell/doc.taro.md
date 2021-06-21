# Cell 列表组件

### 介绍

列表项，可组成列表。

### 安装

``` javascript
import { createApp } from 'vue';
import { Cell,CellGroup } from '@nutui/nutui';

const app = createApp();
app.use(Cell);
app.use(CellGroup);

```

## 代码示例

### 基本用法

``` html
<nut-cell title="我是标题" desc="描述文字"></nut-cell>
<nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
<nut-cell title="点击测试" @click="testClick"></nut-cell>
```

``` javascript
// ...
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
  setup() {
      const switchChecked = ref(true);
      const testClick = (event) => {
        Toast.text('点击事件')
      };
      return { testClick,switchChecked };
  }
}
// ...
```

### 直接使用插槽

``` html
 <nut-cell title="我是标题" desc="描述文字">
  <div>自定义内容</div>
 </nut-cell>  
```

### 链接 | 分组用法

``` html
<nut-cell-group title="链接 | 分组用法">
  <nut-cell title="链接" is-link></nut-cell>
  <nut-cell title="URL 跳转" desc="https://jd.com" is-link url="https://jd.com"></nut-cell>
  <nut-cell title="路由跳转 ’/‘ " to="/"></nut-cell>
</nut-cell-group>
```

### 自定义右侧箭头区域

``` html
<nut-cell-group title="自定义右侧箭头区域">
  <nut-cell title="Switch">
    <template v-slot:link>
      <nut-switch v-model="switchChecked" />
    </template>
  </nut-cell>
</nut-cell-group>
```


### 单元格展示图标

``` html
<nut-cell title="姓名" icon="my" desc="张三"></nut-cell>
```
### 只展示 desc ，可通过 desc-text-align 调整内容位置

``` html
<nut-cell desc-text-align="left" desc="张三"></nut-cell>
```

## API

### Prop

| 字段            | 说明                                                                                           | 类型    | 默认值 |
|-----------------|------------------------------------------------------------------------------------------------|---------|--------|
| title           | 标题名称                                                                                       | String  | -      |
| sub-title       | 左侧副标题                                                                                     | String  | -      |
| desc            | 右侧描述                                                                                       | String  | -      |
| desc-text-align | 右侧描述文本对齐方式 [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp)   | String  | right  |
| is-link         | 是否展示右侧箭头并开启点击反馈                                                                 | Boolean | false  |
| icon            | 左侧 [图标名称](#/icon) 或图片链接                                                             | String  | -      |
| url             | 点击后跳转的链接地址                                                                           | String  | -      |
| to              | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) 属性 | String  | -      |
| replace         | 是否在跳转时替换当前页面历史                                                                   | Boolean | false  |

### Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 点击事件 | event:Event |


