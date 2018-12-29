# Dialog 对话框

## 基本用法

```javascript
this.$dialog({
  title: "确定删除此订单？",
  content: "删除后将从你的记录里消失，无法找回"
});
```

## 事件
```javascript
this.$dialog({
        title: "自定义Dialog标题",
        content: "小屏或移动端浏览效果最佳",
        closeBtn:true,  //显式右上角关闭按钮
        onOkBtn(event) {  //确定按钮点击事件
          alert("okBtn");
          this.close(); //关闭对话框
        },
        onCancelBtn(event) {  //取消按钮点击事件，默认行为关闭对话框
          alert("cancelBtn");
          //return false;  //阻止默认“关闭对话框”的行为
        },
        onCloseBtn(event) { //右上角关闭按钮点击事件
          alert("closeBtn");
          //return false;  //阻止默认“关闭对话框”的行为
        },
        closeCallback(target) {
          alert("will close");  //对话框关闭回调函数，无论通过何种方式关闭都会触发
        }
});
        
```

## 图片弹窗

**type**值为 **image** 时为图片弹窗，需要配置一张图片，可带链接（非必须）。默认展示关闭按钮。点击图片触发 **onClickImageLink** 事件，返回**false**可阻止默认的跳转链接行为。

```javascript
this.$dialog({
  type:"image", //设置弹窗类型为”图片弹窗“
  link:"http://m.jd.com", //点击图片跳转的Url
  imgSrc:"https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/4875/23/1968/285655/5b9549eeE4997a18c/070eaf5bddf26be8.jpg", //图片Url
  onClickImageLink:function(){ //图片点击事件，默认行为是跳转Url
    console.log(this); //this指向该Dialog实例
    return false;  //返回false可阻止默认的链接跳转行为
  }
});
```

## 共享实例

如果给Dialog设置**id**(推荐)，则该Dialog再次弹出时依旧使用该实例，不再新建实例。如果多个Dialog的**id**相同，则共享一个实例。

```javascript
this.$dialog({
  id:"myDialog",
  title: "我的ID是myDialog",
  content: "只会新建一个实例"
});
```

## API

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| id | 标识符，相同者共享一个实例 | String/Number | -
| title | 标题 | String | -
| content | 内容，支持HTML | String | -
| type | 弹窗类型，值为**image**时为图片弹窗 | String | -
| closeOnClickModal | 点击蒙层是否关闭对话框 | Boolean | true
| noFooter | 是否隐藏底部按钮栏 | Boolean | false
| noOkBtn | 是否隐藏确定按钮 | Boolean | false
| noCancelBtn | 是否隐藏取消按钮 | Boolean | false
| okBtnTxt | 确定按钮文案 | String | ”确定“
| okBtnDisabled | 禁用确定按钮 | Boolean | false
| cancelAutoClose | 取消按钮是否默认关闭弹窗 | Boolean | true
| textAlign | 文字对齐方向，可选值同css的text-align | String | "center"
| onOkBtn | 确定按钮回调 | Function | -
| onCancelBtn | 取消按钮回调 | Function | -
| onCloseBtn | 关闭按钮回调 | Function | -
| closeCallback | 关闭回调，任何情况关闭弹窗都会触发 | Function | -
| onClickImageLink | 图片链接点击回调，仅对图片类型弹窗有效 | Function | -
| maskBgStyle | 遮罩层样式（颜色、透明度） | String | -
| customClass | 增加一个自定义class | String | -
| link | 点击图片跳转的Url，仅对图片类型弹窗有效 | String | -
| imgSrc | 图片Url，仅对图片类型弹窗有效 | String | -
| animation | 是否开启默认动效 | Boolean | true
| lockBgScroll | 锁定遮罩层滚动，不影响弹窗内部滚动（实验性质） | Boolean | false
