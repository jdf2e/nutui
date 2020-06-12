# Field 输入框

## 基本用法

标准样式
```html
    <nut-cell>
        <span slot="title">
          <nut-field label="标题内容：" placeholder="请输入内容" v-model="val" />
        </span>
      </nut-cell>
```

文字左对齐，且不展示清除按钮
```html
    <nut-cell>
        <span slot="title">
          <nut-field :disableClear="true" v-model="val2"  label="文本左对齐：" textAlign="left" placeholder="请输入内容" />
        </span>
      </nut-cell>
```

标题超出范围展示
```html
   <span slot="title">
          <nut-field  v-model="val2"  label="标题长度超出超出超出范围：" textAlign="right" placeholder="请输入内容" />
        </span>
      </nut-cell>
```

只输入数字

```html
 <nut-cell>
        <span slot="title">
          <nut-field  v-model="val4"  label="请输入数字"  type="number"  />
        </span>
  </nut-cell>

```


错误提示

```html
 <nut-cell>
        <span slot="title">
          <nut-field  v-model="val5" :state="state"  :requireShow="true" label="手机号码"   />
        </span>
      </nut-cell>
```
```javascript
 export default {
  data() {
    return {
      val5: '12345678985',
      state:"error"
    };
  },

};
```
禁用输入框

```html
 <div>
      <nut-cell>
        <span slot="title">
          <nut-field  v-model="val6"  :readonly="true" label="标题内容"   />
        </span>
      </nut-cell>
    </div> 
    <div>
      <nut-cell >
        <span slot="title">
          <nut-field  v-model="val7" :disabled="true"  label="标题内容"   />
        </span>
      </nut-cell>
    </div> 
```

文本域

```html
<div class="text-area">
    <nut-field  label="自我介绍" placeholder="自我介绍" v-model="val3"  type="textarea" maxLength="20" rows="4"  />
</div> 
```
右侧自定义demo

```html
<div class="filed-wrap"> 
          <nut-field label="验证码：" textAlign="left"  placeholder="请输入内容" v-model="val" @inputFunc="a" > 
              <div class="get-code"> 获取验证码</div>
          </nut-field>
      </div>
```



## Prop

| 字段  | 说明                                                                                     | 类型    | 默认值 |
| ----- | ---------------------------------------------------------------------------------------- | ------- | ------ |
| type  | 按钮类型，可选类型包含：空/bottom/red/gray/light/lightred/primary/default/actived/dashed | String  | -      |
| block | 是否为通栏                                                                               | Boolean | false  |
| size  | big /middle/small                                                                      | String  | big |
| shape | 形状配置，可选类型：空、circle                                                           | String  | -      |
| icon  | 按钮前的图标，参考Icon组件                                                               | String  | -      |
| color | 自定义颜色，包含文字与图片颜色                                                           | String  | -      |
