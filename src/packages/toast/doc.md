# Toast 吐司

轻提示。

## 基本用法
文字提示
```javascript
export default {
  mounted() {
    this.$toast.text('提示信息');
  }
}
```

成功提示

```javascript
export default {
  mounted() {
    this.$toast.success('操作成功！');
  }
}
```

失败提示

```javascript
export default {
  mounted() {
    this.$toast.fail('操作失败！');
  }
}
```

警告提示

```javascript
export default {
  mounted() {
    this.$toast.warn('确定删除？');
  }
}
```

## 加载提示

```javascript
// 带文案，显示透明遮罩层（默认），自动消失
this.$toast.loading('加载中...',{ 
    duration:3000
});

//带文案，显示半透明遮罩层，自动消失，点击遮罩层后消失
this.$toast.loading('加载中...',{ 
    duration:3000,
    coverColor: "rgba(0,0,0,0.5)",
    closeOnClickOverlay: true
});

//不会自动消失(默认)，不带遮罩层
this.loading = this.$toast.loading({
    cover: false
});

//手动关闭上面的Loading
this.loading.hide();
```

## 自定义样式

```javascript
//自定义背景颜色/透明度
this.$toast.text('自定义背景颜色/透明度',{
    bgColor:'rgba(50, 50, 50, 0.9)'
});

//自定义class
this.$toast.text('自定义class',{
    customClass:'my-class'
});

//自定义Icon
this.$toast.text('自定义Icon',{
    icon:"https://img13.360buyimg.com/imagetools/jfs/t1/98294/28/14470/22072/5e65ba08E865683aa/ded7441bdd098511.png"
});
```
## 共享实例

如果不设置id，多个Toast将默认拥有相同的id，**它们将共享一个实例**（loading类型与其他类型实例不共享），新的内容和设置将取代旧的，多个Toast不能同时出现。如果不需要共享实例，可以给其设置id。

```javascript
//二者id不同，不会共享一个实例
this.$toast.success(msg,{
    id:123
});

this.$toast.text(msg,{
    id:321,
    duration:4000
});
```

## 支持在JS模块中导入使用
```javascript
import { Toast } from "@nutui/nutui";

Toast.text('在js模块中使用');
// 返回实例，可以手动调用实例中的hide方法关闭提示
const toast = Toast.loading('在js模块中使用');
toast.hide();
```

## 修改默认配置

通过**Toast.setDefaultOptions**函数可以全局修改 Toast 的默认配置，**值得注意的是，loading无法支持默认配置的修改和重置**。

```js
// 更改所有Toast展示时长设置为5000毫秒
Toast.setDefaultOptions({
    duration: 5000,
    coverColor: "rgba(0, 0, 0, 0.2)",
    closeOnClickOverlay: true,
    cover: true
});

// 重置所有 Toast 的默认配置
Toast.resetDefaultOptions();

// 更改所有文字提示默认设置
Toast.setDefaultOptions("text", {
    size: "large",
    cover: true,
    coverColor: "rgba(0, 0, 0, 0.2)",
    duration: 3000,
    closeOnClickOverlay: true
});

// 重置 text Toast 的默认配置
Toast.resetDefaultOptions("text");
```

### API
| 方法名                    | 说明                                                                    | 参数            | 返回值     |
| ------------------------- | ----------------------------------------------------------------------- | --------------- | ---------- |
| Toast.text                | 展示文字提示                                                            | options/message | toast 实例 |
| Toast.loading             | 展示加载提示                                                            | options/message | toast 实例 |
| Toast.success             | 展示成功提示                                                            | options/message | toast 实例 |
| Toast.fail                | 展示失败提示                                                            | options/message | toast 实例 |
| Toast.warn                | 展示警告提示                                                            | options/message | toast 实例 |
| Toast.hide                | 关闭提示                                                                | force:boolean   | void       |
| Toast.setDefaultOptions   | 修改默认配置，对所有 Toast 生效<br>传入 type 可以修改指定类型的默认配置 | type/options    | void       |
| Toast.resetDefaultOptions | 重置默认配置，对所有 Toast 生效<br>传入 type 可以重置指定类型的默认配置 | type            | void       |

## Options

| 字段                | 说明                                                                          | 类型          | 默认值                        |
| ------------------- | ----------------------------------------------------------------------------- | ------------- | ----------------------------- |
| msg                 | 消息文本内容,支持传入HTML                                                     | String/VNode  | ""                            |
| id                  | 标识符，相同者共用一个实例<br>loading类型默认使用一个实例，其他类型默认不共用 | String/Number | -                             |
| duration            | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失（loading类型默认为0）       | Number        | 2000                          |
| center              | 是否展示在页面中部（为false时展示在底部）                                     | Boolean       | true                          |
| bottom              | 距页面底部的距离（像素），option.center为false时生效                          | Number       | 30                          |
| textAlignCenter     | 多行文案是否居中                                                              | Boolean       | true                          |
| bgColor             | 背景颜色（透明度）                                                            | String        | "rgba(46, 46, 46, 0.7)"       |
| customClass         | 自定义类名                                                                    | String        | ""                            |
| icon                | 自定义图标，**支持图片链接或base64格式**                                        | String        | ""                            |
| size                | 文案尺寸，**small**/**base**/**large**三选一                                                  | String        | "base"                        |
| cover               | 是否显示遮罩层，loading类型默认显示                                           | Boolean       | loading类型true/其他类型false |
| coverColor          | 遮罩层颜色，默认透明                                                          | String        | "rgba(0,0,0,0)"               |
| loadingRotate       | loading图标是否旋转，仅对loading类型生效                                      | Boolean       | true                          |
| onClose             | 关闭时触发的事件                                                              | function      | null                          |
| closeOnClickOverlay | 是否在点击遮罩层后关闭提示                                                    | Boolean       | false                         |
| toastStyle          | 提示框style                                                        | object       | {}                         |
| toastClass          | 提示框class                                                        | String       | ""                         |

