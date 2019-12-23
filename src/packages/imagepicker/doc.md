# ImagePicker 图片选择器

## 基本用法

```html
<nut-imagepicker
  @imgMsg="imgMsg" 
  :imgList.sync="imgList1"
>
</nut-imagepicker>
```

指定宽度和高度都是120px,图片间距是10px

```html
<nut-imagepicker 
  @imgMsg="imgMsg" 
  :width="120" 
  :height="120" 
  :margin="10" 
  :imgList.sync="imgList2"
>
</nut-imagepicker>
```

允许上传的最大数量是4张

```html
<nut-imagepicker 
  @imgMsg="imgMsg" 
  :max="4"
>
</nut-imagepicker>
```

支持多图选择

```html
<nut-imagepicker 
  @imgMsg="imgMsg" 
  :ismultiple="true"
>
</nut-imagepicker>
```

支持长按删除图片

```html
<nut-imagepicker 
  @imgMsg="imgMsg" 
  delMode="longtap"
>
</nut-imagepicker>
```

图片之后自动上传除图片

```html
<nut-imagepicker 
  @imgMsg="imgMsg" 
  autoUpload="true"
>
</nut-imagepicker>
```

```javascript
export default {
  data() {
    return {
      imgList1:[
        {
          id:1,
          src:"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
        }
      ],
      imgList2:[
        {
          id:1,
          src:"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
        }
      ]
    };
  },
  methods: {
    imgMsg(data){
      if(data.code == 1) {
        alert('upload');
      }
      console.log(this.imgList2)
      console.log(data);//code 1 自动上传  2 不上传只展示图片  3 删除图片  4 预览图片
    }
  }
};
```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| animation | 是否使用过渡动画 | Boolean | true
| width | 图片宽度 | String/Number | 100
| height | 图片高度 | String/Number | 100
| margin | 图片间距 | String/Number | 5
| max | 允许上传的最大数量 | String/Number | 9
| accept | 允许上传的图片类型 | String | image/*
| ismultiple | 是否开启多张图片上传 | Boolean | false
| delMode | 删除图片的方式（tap、longtap） | String | tap
| autoUpload | 选择完成之后是否直接上传 | Boolean | false
| imgList | 图片列表 （注意：绑定时必须`:imgList.sync`,加sync修饰符） | Array | []

## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| imgMsg | 选择图片之后的回调函数 | 返回Object（包含code值：1 自动上传 2 不上传，只展示 3 删除图片 4 预览图片）
