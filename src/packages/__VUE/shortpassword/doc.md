# ShortPassword 短密码组件

### 介绍

短密码输入框，可用于输入密码、短信验证码等
### 安装

``` javascript
import { createApp } from 'vue';
import { ShortPassword } from '@nutui/nutui';

const app = createApp();
app.use(ShortPassword);

```

## 代码示例

### 公用片段

``` html
<nut-shortpassword
  v-model="state.value"
  v-model:visible="state.visible"
  :no-button="state.noButton"
  :length="state.length"
  :error-msg="state.errorMsg"
  @change="methods.onChange"
  @complete="methods.onComplete"
  @ok="methods.onOk"
  @tips="methods.onTips">
</nut-shortpassword>
```

``` javascript
import { reactive, getCurrentInstance } from 'vue';
setup() {
  let { proxy } = getCurrentInstance();
  const state = reactive({
    visible: false,
    noButton: true,
    value: '',
    errorMsg: '',
    length: 6
  });
  const methods = {
    onChange(val: string) {
      val && proxy.$toast.text(val);
    },
    onOk(val: string) {
      val && proxy.$toast.text(val);
      state.visible = false;
    },
    onComplete() {
      
    },
    onTips() {
      proxy.$toast.text('执行忘记密码逻辑');
    }
  };
  return {
    state,
    methods
  };
}

```
### 基础用法

``` html
<nut-cell title="基础用法" is-link @click="state.visible = true;"></nut-cell>
```

### 显示按钮组

``` html
<nut-cell title="显示按钮组" is-link @click="state.visible = true;state.noButton = false;"></nut-cell>
```

### 自定义密码长度4

``` html
<nut-cell title="自定义密码长度4" is-link @click="state.visible = true;state.length = 4;"></nut-cell>
```
### 忘记密码提示语事件回调

``` html
<nut-cell title="忘记密码提示语事件回调" is-link @click="state.visible = true;"></nut-cell>
```

### 错误提示语
``` html
<nut-cell title="错误提示语" is-link @click="state.visible = true;state.errorMsg = '请输入正确密码';"></nut-cell>
```

### Prop


| 字段                   | 说明                | 类型           | 默认值                       |
|------------------------|---------------------|----------------|------------------------------|
| v-model                | 密码初始值          | String         |                              |
| v-model:visible        | 是否展示短密码框    | Boolean        | false                        |
| title                  | 标题                | String         | 请输入密码                   |
| desc                   | 密码框描述          | String         | 您使用了虚拟资产，请进行验证 |
| tips                   | 提示语              | String         | 忘记密码                     |
| close-on-click-overlay | 是否点击遮罩关闭    | Boolean        | true                         |
| no-button              | 是否隐藏底部按钮    | Boolean        | true                         |
| length                 | 密码长度，取值为4~6 | String、Number | 6                            |
| error-msg              | 错误信息提示        | String         | ''                           |


### Event

| 事件名称 | 说明                   | 回调参数 |
|----------|------------------------|----------|
| change   | 输入密码时触发事件     | value    |
| ok       | 点击确实时触发事件     | value    |
| cancel   | 点击取消时触发事件     | value    |
| close    | 点击关闭图标时触发事件 | value    |
| complete | 输入完成的回调         | value    |

