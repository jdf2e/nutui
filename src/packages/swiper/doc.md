# swiper 滑动切换

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 基本用法

横向无缝切换

```html
<nut-swiper
    :paginationVisible="true"
    direction="horizontal"
    ref="demo1"
    
>
    <div  v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide">
        <span>page{{item.name}}</span>
    </div>
</nut-swiper>
```

横向切换

```html
<nut-swiper
    direction="horizontal"
    ref="demo2"
    :canDragging="false"
    :paginationVisible="true"
    
>
    <div  v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide">
        <span>page{{item.name}}</span>
    </div>

</nut-swiper>
```

横向循环切换

```html
<nut-swiper
    direction="horizontal"
    ref="demo3"
    :loop="true"
    :canDragging="false"
    :paginationVisible="true"
    
>
    <div  class="nut-swiper-slide gray" >
        <span>page 1</span>
    </div>
    <div  class="nut-swiper-slide gray_1" >
        <span>page 2</span>
    </div>
    <div  class="nut-swiper-slide gray" >
        <span>page 3</span>
    </div>
    <div  class="nut-swiper-slide gray_1" >
        <span>page 4</span>
    </div>
</nut-swiper>
```

纵向自动播放

```html
 <nut-swiper
    direction="vertical"
    ref="dem4"
    :autoPlay="3000"
    id="dome4"
>
    <div  class="nut-swiper-slide gray" >
        <span>page 1</span>
    </div>
    <div  class="nut-swiper-slide gray_1" >
        <span>page 2</span>
    </div>
    <div  class="nut-swiper-slide gray" >
        <span>page 3</span>
    </div>
    <div  class="nut-swiper-slide gray_1" >
        <span>page 4</span>
    </div>
</nut-swiper>
```

滑动懒加载图片

```html
<nut-swiper
    direction="horizontal"
    ref="demo4"
    :lazyLoad="true"
        :paginationVisible="true"
>
        <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
        <img :data-src="item.imgSrc"   style="max-width:100%; max-height:100%" class="nut-img-lazyload"/> 
    </div>

</nut-swiper>
```

```javascript
    export default{
        data(){
            return{
                dataItem:null,
                dataImgItem:[],
            }
        },
        mounted(){
            setTimeout(()=>{
                this.dataItem = [{
                    name:1
                },{
                    name:2
                },{
                    name:3
                },{
                    name:4
                }]

                this.dataImgItem = [
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t19441/80/1577112624/568821/1ee9b683/5ad064f1Nf41a94b4.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t16798/338/1617130854/542623/4c197f4d/5ad064f1Nce5f69e2.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t22123/348/720079801/233727/23c4c0a4/5b162d64Nc5883413.jpg'
                    },
                    {
                        imgSrc:'//m.360buyimg.com/mobilecms/s843x843_jfs/t1/27233/9/354/82863/5c090a0eEe2a350d8/aaa6686ce133e364.jpg'
                    }
                ];
                
                this.$refs.demo1.updateEvent(1);
                this.$refs.demo2.updateEvent();

                this.$refs.demo4.updateEvent();

            },300)
        }
    }

```

## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| direction | 滑动方向 | String | vertical
| paginationVisible | 是否分页显示 | Boolean | false
| paginationClickable | 分页是否可以点击 | Boolean | false
| loop | 是否循环 | Boolean | false
| speed | 过度动画执行时间 | Number | 500
| canDragging | 是否无缝切换 | Boolean | true
| autoPlay | 自动轮播，轮播默认是循环模式，直接写轮播间隔时间 | Number | 0
| initPage | 设置初始时候显示的页 | Number | 1
| lazyLoad | 是否懒加载图片 | Boolean | false
| lazyLoadUrl | 懒加载的默认展示图片 | String | -

## Methods

| 字段 | 说明 | 参数 
|----- | ----- | ----- 
| next | 去下一页 | -
| prev | 去上一页 | -
| setPage |  设置当前显示第几页 | number
| updateEvent | 异步数据渲染slide，都需要重新调用方法，绑定事件，如【横向无缝滑动】this.$refs.demo1.update(1)。也提供设置初始页面 | number

## Events
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| slideChangeStart | 页面开始切换时候 | pageSize,el
| slideChangeEnd | 页面结束切换时候 | pageSize,el
| slideRevertStart | 拖动页面没改变回到原先位置开始时候 | pageSize,el
| slideRevertEnd | 拖动页面没有改变回到原先位置结束时候 | pageSize,el
| slideMove | 拖动过程中 | offset,el

