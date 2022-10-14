# ShortPassword 短密码

### 介绍

短密码输入框，可用于输入密码、短信验证码等
### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { ShortPassword,Popup } from '@nutui/nutui';
//taro
import { ShortPassword,Popup } from '@nutui/nutui-taro';

const app = createApp();
app.use(ShortPassword);
app.use(Popup);

```


### 基础用法
:::demo
```html
<template>
<nut-cell title="基础用法" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      @change="methods.onChange"
      @close="methods.close"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      value: '',
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      close() {
        Toast.text('点击icon关闭弹窗');
      },
      cancel() {
        Toast.text('点击弹层关闭弹窗');
      }
    };
    return {
      state,
      methods
    };
  }
  }
</script>
```
:::

### 显示按钮组
:::demo
```html
<template>
<nut-cell title="显示按钮组" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      :no-button="false"
      @change="methods.onChange"
      @ok="methods.onOk"
      @close="methods.close"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      noButton: true,
      value: '',
      errorMsg: '',
      length: 6
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      onOk(val) {
        val && Toast.text(val);
        state.visible = false;
      },
      close() {
        Toast.text('点击icon关闭弹窗');
      },
      cancel() {
        Toast.text('关闭弹窗');
      }
    };
    return {
      state,
      methods
    };
  }
  }
</script>
```
:::

### 自定义密码长度4

:::demo
```html
<template>
<nut-cell title="显示按钮组" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      :length="state.length"
      @change="methods.onChange"
      @close="methods.close"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      value: '',
      length: 4
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      onOk(val) {
        val && Toast.text(val);
        state.visible = false;
      },
      close() {
        Toast.text('点击icon关闭弹窗');
      },
      cancel() {
        Toast.text('关闭弹窗');
      }
    };
    return {
      state,
      methods
    };
  }
  }
</script>
```
:::
### 忘记密码提示语事件回调


:::demo
```html
<template>
<nut-cell title="显示按钮组" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      @change="methods.onChange"
      @close="methods.close"
      @tips="methods.onTips"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      value: '',
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      onTips() {
        Toast.text('执行忘记密码逻辑');
      },
      close() {
        Toast.text('点击icon关闭弹窗');
      },
      cancel() {
        Toast.text('关闭弹窗');
      }
    };
    return {
      state,
      methods
    };
  }
  }
</script>
```
:::

### 错误提示语
:::demo
```html
<template>
<nut-cell title="显示按钮组" is-link @click="state.visible = true;"></nut-cell>
 <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      :error-msg="state.errorMsg"
      @change="methods.onChange"
      @close="methods.close"
      @tips="methods.onTips"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
</template>
<script>
import { reactive } from 'vue';
import { Toast } from '@nutui/nutui';
export default{
  setup() {
    const state = reactive({
      visible: false,
      value: '',
      errorMsg: '请输入正确密码',
    });
    const methods = {
      onChange(val) {
        val && Toast.text(val);
      },
      onTips() {
        Toast.text('执行忘记密码逻辑');
      },
      close() {
        Toast.text('点击icon关闭弹窗');
      },
      cancel() {
        Toast.text('关闭弹窗');
      }
    };
    return {
      state,
      methods
    };
  }
  }
</script>
```
:::
## API
### Props


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


### Events

| 事件名称 | 说明                   | 回调参数 |
|----------|------------------------|----------|
| change   | 输入密码时触发事件     |  当前输入框值value    |
| ok       | 点击确实时触发事件     | 当前输入框值value    |
| cancel   | 点击弹层或取消时触发事件     | -    |
| close    | 点击关闭图标时触发事件 | -    |
| complete | 输入完成的回调         | 当前输入框值value    |

