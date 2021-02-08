# swiper 滑动切换

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

## 基本用法

横向无缝切换

```html
<nut-swiper
    :paginationVisible="true"
    direction="horizontal"
    :swiperData="dataItem"
    ref="demo1"
>
    <div  v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide">
        <span>page{{item.name} }</span>
    </div>
</nut-swiper>
```

横向切换

```html
<nut-swiper
    direction="horizontal"
    :swiperData="dataItem"
    :canDragging="false"
    :paginationVisible="true"
    ref="demo2"
>
    <div  v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide">
        <span>page{{item.name} }</span>
    </div>

</nut-swiper>
```

横向循环切换

```html
<nut-swiper
    direction="horizontal"
    :loop="true"
    :canDragging="false"
    :paginationVisible="true"
    ref="demo3"
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
<br/>
<nut-button @click="add">控制下翻页</nut-button>
<nut-button @click="sub">控制上翻页</nut-button>
```

纵向自动播放

```html
 <nut-swiper
    direction="vertical"
    :autoPlay="3000"
    ref="demo4"
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
    :swiperData="dataImgItem"
    :lazyLoad="true"
    :paginationVisible="true"
    ref="demo5"
>
        <div  v-for="(item,index) in dataImgItem" :key="index"  class="nut-swiper-slide ">
        <img :data-src="item.imgSrc"   style="max-width:100%; max-height:100%" class="nut-img-lazyload"/> 
    </div>

</nut-swiper>
```

```javascript
export default {
  data() {
    return {
      dataItem: [],
      dataImgItem: [],
      newCurrentPage: 1
    };
  },
  mounted() {
    setTimeout(() => {
      this.dataItem = [
        {
          name: 1
        },
        {
          name: 2
        },
        {
          name: 3
        },
        {
          name: 4
        }
      ];

      this.dataImgItem = [
        {
          imgSrc: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
        },
        {
          imgSrc: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
        },
        {
          imgSrc: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
        },
        {
          imgSrc: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
        }
      ];
    }, 300);
  },
  methods: {
    slideChangeEnd(page) {
      console.log(page);
    },
    slideMove(page) {
      console.log(page);
    },
    slideChangeStart(page) {
      console.log(page);
    },
    add() {
      this.newCurrentPage = this.newCurrentPage + 1;
    },
    sub() {
      this.newCurrentPage = this.newCurrentPage - 1;
    }
  }
};
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
| swiperData | 异步数据渲染slide时，必须绑定对应数组（v2.1.7以上支持） | Array | -
| newCurrentPage | 当前页数控制，用于异步切换指定页数（v2.2.14以上支持） | Number | 1
## Methods

| 字段 | 说明 | 参数 
|----- | ----- | ----- 
| next | 去下一页 | -
| prev | 去上一页 | -
| setPage |  设置当前显示第几页 | number

## Events
| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| slideChangeStart | 页面开始切换时候 | pageSize,el
| slideChangeEnd | 页面结束切换时候 | pageSize,el
| slideRevertStart | 拖动页面没改变回到原先位置开始时候 | pageSize,el
| slideRevertEnd | 拖动页面没有改变回到原先位置结束时候 | pageSize,el
| slideMove | 拖动过程中 | offset,el

