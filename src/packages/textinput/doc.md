# TextInput 文本框

单行文本框。

## 基本用法

```html
<nut-textinput 
    v-model="val"
    label="无清空按钮："
    placeholder="请输入内容"
    :clearBtn="true"
    :disabled="false"
/>
```
## 高级用法

密码框
```html
<nut-textinput 
    placeholder="请输入密码" 
    v-model="val" 
    label="密码框：" 
    type="password"
/>
```

禁用
```html
<nut-textinput 
    label="禁用状态：" 
    :disabled="true" 
    placeholder="请输入内容" 
/>
```

使用input原生属性
```html
<!-- maxlength -->
<nut-textinput
    placeholder="maxlength=5"
    maxlength="5"
    label="限制文字数："
/>

<!-- readonly -->
<nut-textinput 
    placeholder="请输入内容" 
    v-model="val" 
    readonly 
    label="只读：" 
/>
```

使用input原生事件
```html
<nut-textinput
    placeholder="请输入内容"
    label="focus/blur事件："
    @focus="onFocus"
    @blur="onBlur"
    v-model="val"
/>
```

自定义关闭按钮样式
```html
<nut-textinput
    class="my-input"
    v-model="val7"
    placeholder="请输入搜索内容"
    :clearBtnPersonnal="true"
>
    <template v-slot:clearBtn>
        <nut-icon type="cross"></nut-icon>
    </template>
</nut-textinput>
```
自动聚焦

注：由于移动设备的不同，第一次自动获取焦点并不一定能吊起键盘，需要手动吊起来一次，当再次进入时则正常吊起键盘

```html
<div class="autoFucus">
  <nut-textinput  class="my-input" type="search" v-model="val8"  placeholder="请输入搜索内容" ref="myInput" @keyup.enter="submit" />

  <div class="searchBtn" @click="submit">搜索</div>
</div>
```

```javascript
export default {
  data() {
    return {
      val: ""
    };
  },
  mounted() {
    //设置获取焦点
    this.$nextTick(function() {
				this.$refs.myInput.focus()
		})
  },
  methods: {
    onFocus() {
      console.log("focus事件触发！");
    },
    onBlur() {
      console.log("blur事件触发！");
    },
    submit() {
      //失去焦点
        this.$refs.myInput.blur()
    }
  }
};
```


## Prop

| 字段              | 说明                                                                                     | 类型    | 默认值 |
| ----------------- | ---------------------------------------------------------------------------------------- | ------- | ------ |
| value             | 当前input值，可使用 v-model 双向绑定数据                                                 | String  | ''     |
| type              | input输入框的类型                                                                        | String  | 'text' |
| placeholder       | 占位文本                                                                                 | String  | ''     |
| label             | 文本框前面的标签                                                                         | String  | ''     |
| disabled          | 是否禁用                                                                                 | Boolean | false  |
| clear-btn         | 是否需要清空按钮                                                                         | Boolean | true   |
| has-border        | 是否需要边框                                                                             | Boolean | true   |
| clearBtnPersonnal | 是否需要定制化清除按钮，如果是true,需要配合slot:  clearBtn使用，如案例自定义关闭按钮样式 | Boolean | false  |


## 特殊说明 

设置input框自动聚焦时，由于ios和安卓设备的不同，在ios中，引入的父组件第一次加载，键盘不会弹起，退出再次进入会自动弹起。