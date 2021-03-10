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

### 基础用法

``` html
<div @click="switchActionSheet('dialogShow')" >点击出现输出框</div>
<nut-shortpassword 
    v-model:value="state.value" 
    v-model:is-visible="state.dialogShow"
    >
</nut-shortpassword>
```

``` javascript
  setup() {
    const state = reactive({
      dialogShow: false,
      value: '',
    });
    return {
      state,
    };
  },
// ...
```

### 展示按钮

``` html
<div @click="switchActionSheet('dialogShow')" >点击出现输出框</div>
<nut-shortpassword 
    v-model:value="state.value" 
    v-model:is-visible="state.dialogShow"
    :no-button="false"
    @sure-click='sureClick'
    >
</nut-shortpassword>
```

``` javascript
setup() {
    const state = reactive({
      dialogShow: false,
      value: '',
    });
    function switchActionSheet() {
        state.dialogShow = !state.dialogShow
    }
    function sureClick() {
      state.dialogShow = false
    }
    return {
      state,
      switchActionSheet,
      sureClick
    };
  },
  
```

### 自定义长度

``` html
<div @click="switchActionSheet('dialogShow')" >点击出现输出框</div>
<nut-shortpassword 
    v-model:value="state.value" 
    v-model:is-visible="state.dialogShow"
    :length=5
    >
</nut-shortpassword>
```

``` javascript
setup() {
    const state = reactive({
      dialogShow: false,
      value: '',
    });
    function switchActionSheet() {
        state.dialogShow = !state.dialogShow
    }
    return {
      state,
      switchActionSheet
    };
  },
```

### 出现提示信息

``` html
<div @click="switchActionSheet('dialogShow')" >点击出现输出框</div>
<nut-shortpassword 
    v-model:value="state.value" 
    v-model:is-visible="state.dialogShow"
    :error-msg = state.errorMsg
    >
</nut-shortpassword>
```

``` javascript
setup() {
    const state = reactive({
      dialogShow: false,
      value: '',
      errorMsg:''
    });
    function switchActionSheet() {
        state.dialogShow = !state.dialogShow
    }
    watch(
      () => state.value3,
      val => {
        if (val.length == 6) {
          state.errorMsg = '请输入正确密码'
        }
      }
    );
    return {
      state,
      switchActionSheet
    };
  },
```

### Prop


| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| title | 标题| Boolean | '请输入密码'
| is-visible | 是否展示短密码框| Boolean | false
| value | 密码值 | string | ''
| no-button | 是否隐藏底部按钮 |Boolean|true|
| length | 密码长度，取值为4，5，6 |string||Number|6|
| error-msg | 错误信息提示 |string|''|
| show-password-tips | 忘记密码提示信息 |string|'忘记密码'|
| link | 忘记密码跳转链接 |string|''|


### Event

| 事件名称 | 说明 | 回调参数
|----- | ----- | ----- 
| input | 输入密码时触发事件 | --
| sure-click | 点击确实时触发事件 | value
| complete | 输入完成的回调 | value



