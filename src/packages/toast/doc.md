# Toast 吐司

轻提示。

## 基本用法

```javascript
export default {
  mounted() {
    this.$toast.text('提示信息');
  }
}
```

## 高级用法

第二个参数是一个对象，可以传入一些高级配置。

```javascript
export default {
  mounted() {
    this.$toast.text('提示信息',{
        duration: 4000, //展示时长
        center: true, //是否居中展示，值为false时展示在页面底部
        bottom: 40, //展示在页面底部时，距底部的距离（px)
        textAlignCenter:true //多行文本是否居中展示，值为false时单行居中，多行居左
    });
  }
}
```

## 带ICON

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
//Loading类型，默认不会自动消失，带透明遮罩
this.loading = this.$toast.loading();

//手动关闭上面的Loading
this.loading.hide();

//带文字，自动消失，不要遮罩
this.$toast.loading('加载中...',{ 
    duration:3000,
    cover:false
});
```

## 共享实例

Toast的id如果相同，将共享一个实例。如果不设置id，多个Toast将拥有相同的id默认值，它们将共享一个实例（loading类型与其他类型实例不共享），新的内容和设置将取代旧的，多个Toast不能同时出现。如果不需要共享实例，可以给其设置id。

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

## 自定义样式

```javascript
//自定义背景颜色/透明度
this.$toast.text('提示文案',{
    bgColor:'rgba(50, 50, 50, 0.9)'
});

//自定义字号，'small'/'base'/'large'三选一
this.$toast.text('提示文案',{
    size:'small'
});

//自定义class
this.$toast.text('提示文案',{
    customClass:'my-class'
});
```
<!-- ```javascript
//自定义loading的Icon
this.$toast.loading(msg,{icon:"data:image/svg+xml,%3Csvg fill="#FFFFFF" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 21'%3E%3Cpath d='M10 13.5l-7-6-3 3L10.5 21 28 3.5l-3-3z' fill-rule='evenodd'/%3E%3C/svg%3E"),
    duration:3000
});
``` -->


## API

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| msg | 消息文案 | String | ""
| option.id | 标识符，相同者共用一个实例。loading类型默认使用一个实例，其他类型默认不共用。 | String/Number | -
| option.duration | 展示时长（毫秒）,为0时不自动关闭（loading类型默认为0） | Number | 2000
| option.center | 是否展示在页面中部（为false时展示在底部） | Boolean | true
| option.bottom | 距页面底部的距离（像素），option.center为false时生效 | Boolean | true
| option.textAlignCenter | 多行文案是否居中 | Boolean | true
| option.bgColor | 背景颜色（透明度） | String | "rgba(46, 46, 46, 0.7)"
| option.customClass | 增加自定义class | String | ""
| option.icon | 自定义图标，Data URI格式 | String | ""
| option.size | 尺寸，small/base/large三选一 | String | "base"
| option.cover | 透明遮罩，loading类型默认打开 | Boolean | loading类型true/其他false
| option.loadingRotate | loading图标是否旋转，仅对loading类型生效 | Boolean | true
| option.onClose | 关闭时触发的事件 | function | null
