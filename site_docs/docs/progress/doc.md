# Progress 进度条

### 介绍

展示操作或任务的当前进度，比如上传文件。

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Progress,Icon } from '@nutui/nutui';
//taro
import { Progress,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Progress);
app.use(Icon);

```


### 基础用法

```html
<nut-progress percentage="30"></nut-progress>
```
### 设置高度和颜色

```html
<nut-progress percentage="30" stroke-color="pink" stroke-width="20"></nut-progress>
```
### 设置百分比不显示

```html
<nut-progress percentage="50" :show-text="false"></nut-progress>
```
### 设置百分比外显

```html
<nut-progress percentage="60" :text-inside="false" stroke-height="24"></nut-progress>
```

### 设置百分比内显

```html
<nut-progress percentage="60" :text-inside="true" stroke-width="24"></nut-progress>
```

## 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。
```html
<nut-progress size="small" percentage="30" text-inside="true" ></nut-progress>
<nut-progress size="base" percentage="50" text-inside="true"></nut-progress>
<nut-progress size="large" percentage="70"  text-inside="true"></nut-progress>
```
### 设置状态显示

```html
//动态展示
<nut-progress 
   percentage="30" 
   stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)" 
   status="active">
</nut-progress>
// 展示icon
<nut-progress percentage="50" stroke-color="#f30" stroke-width="15" ></nut-progress>
<nut-progress percentage="100" stroke-color="#1890ff" stroke-width="15" status="success"></nut-progress>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| percentage | 百分比 | Number | 0
| stroke-color | 进度条背景色 | String | #f30
| stroke-width | 进度条宽度 | String | ''
| size | 进度条及文字尺寸，可选值small/base/large | String | -
| show-text | 是否显示进度条文字内容 | Boolean | true
| text-inside | 进度条文字显示位置(false:外显，true:内显) | Boolean | false
| text-color | 进度条文字颜色设置 | String | #333
| status | 进度条当前状态,active(展示动画效果)/icon(展示icon标签) | String | text
| icon-name | icon名称 | String | checked
| icon-color | icon颜色 | String | #439422
