# NumberKeyboard 数字键盘

### 介绍

虚拟数字键盘，用于输入支付密码的场景。

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { NumberKeyboard } from '@nutui/nutui';
//taro
import { NumberKeyboard } from '@nutui/nutui-taro';

const app = createApp();
app.use(NumberKeyboard);

```

## 代码示例

### 基础用法 默认键盘

```html
<nut-numberkeyboard :visible="true" @input="input" @delete="onDelete" @close="close()"> </nut-numberkeyboard>
```
### 带右侧栏键盘

```html
<nut-numberkeyboard type="rightColumn" v-model:visible="visible" :custom-key="customKey1" @input="input" @close="close()"> </nut-numberkeyboard>
```
### 随机数键盘

```html
<nut-numberkeyboard type="rightColumn" v-model:visible="visible" randomKeys="true" :custom-key="customKey1" @input="input" @close="close(）"> </nut-numberkeyboard>
```
### 带标题栏键盘

```html
<nut-numberkeyboard title="默认键盘" v-model:visible="visible" :custom-key="customKey2" @input="input" @close="close()"> </nut-numberkeyboard>
```

### 双向绑定：

```html
 <nut-numberkeyboard v-model:visible="visible" v-model:value="value" maxlength="6" @close="close()"> </nut-numberkeyboard>
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| visible | 是否显示键盘 | boolean | false
| title | 键盘标题 | string | - |
| type | 键盘模式  | string | `default`：默认样式<br>`rightColumn`：带右侧栏 |
| custom-key | 自定义键盘额外的键  | array<br>string | 数组形式最多支持添加2个,超出默认取前2项 |
| v-model | 当前输入值 | string | - |
| maxlength  | 输入值最大长度，结合 v-model 使用 | number <br> string| 6 |




## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| input  | 点击按键时触发                 | 按键内容 |
| delete | 点击删除键时触发               | -             |
| close  | 点击关闭按钮或非键盘区域时触发  | -             |

