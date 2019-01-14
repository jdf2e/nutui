# ShortPassword 短密码

## 底部弹出短密码
```html
<nut-shortpassword
    :visible="isShow"
    @close = "shortpwdClose"
    type = "bottom"
    link = "https://m.jd.com"
>
</nut-shortpassword>
```

## 居中弹出短密码
```html
<nut-shortpassword 
    :visible="isShow2"
    @close="shortpwdClose2"
    type="center"
></nut-shortpassword>
```

```javascript
export default {
    data(){
        return{
            isShow:false,
            isShow2:false,
            val1:'',
            val2:''
        }
    },
    methods:{
        shortpwdClose(val){
            if(val) this.val1 = val;
            this.isShow = false;
        },
        shortpwdClose2(val){
                if(val) this.val2 = val;
            this.isShow2 = false;
        },
        showShortpwd(){
            this.isShow = true;
        },
        showShortpwd2(){
            this.isShow2 = true;
        },


    }
}

```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| visible | 是否显示短密码 | Boolean | false
| link | 忘记密码跳转链接 | String | 'javascript:;'
| type | 短密码样式类型 | String | 'bottom'

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| close | 关闭短密码框 | val