# LuckDraw 转盘抽奖

## 基本用法

```html
<luck-draw
  class="drawTable"
  ref="luckDrawPrize"
  :luckWidth="luckWidth"
  :luckheight="luckheight"
  :prizeList="prizeList"
  :turnsNumber="turnsNumber"
  :turnsTime="turnsTime"
  :prizeIndex="prizeIndex"
  :styleOpt="styleOpt"
  @endTurns="endTurns"
>
  <template slot="item" slot-scope="scope">
    <div class="drawTable-name">{{ scope.item.prizeName }}</div>
    <div class="drawTable-img">
      <img :src="scope.item.prizeImg">
    </div>
  </template>
</luck-draw>
<div @click="startTurns" class="pointer" :style="pointerStyle"></div>
```

```javascript
export default {
    data() {
      return {
        // 转盘大小
        luckWidth: '300px',
        luckheight: '300px',
        // 转盘指针图片样式
        pointerStyle: {
          width: '80px',
          height: '80px',
          backgroundImage: 'url("https://img11.360buyimg.com/imagetools/jfs/t1/106989/15/11126/137350/5e265414E8ee514bc/3456bd0d3a0454da.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        },
        // 奖品列表
        prizeList: [
          {
            id: 'xiaomi',
            prizeName: '小米手机',
            prizeImg: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/96788/40/337/73706/5dabd0e2E1f166028/7120ca2b421cb0a0.jpg!q70.dpg.webp',
          },
          {
            id: 'blue',
            prizeName: '蓝牙耳机',
            prizeImg: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/65070/13/4325/183551/5d26e23fE09ab2010/a94eaff8242e6c63.jpg!q70.dpg.webp',
          },
          {
            id: 'apple',
            prizeName: 'apple watch',
            prizeImg: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/105083/3/4010/126031/5de4aa51E1c7fefc6/0288f4cf3016e061.jpg!q70.dpg.webp',
          },
          {
            id: 'fruit',
            prizeName: '迪士尼苹果',
            prizeImg: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/47486/35/13399/356858/5da3cde2E9b3ec40f/3b3a56d54d5db565.jpg!q80.dpg.webp',
          },
          {
            id: 'fish',
            prizeName: '海鲜套餐',
            prizeImg: 'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/109529/24/1330/283533/5dfc836fE33d8ce6b/372adb638802710a.jpg!q70.dpg.webp',
          },
          {
            id: 'thanks',
            prizeName: '谢谢参与',
            prizeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/104502/28/10892/5123/5e265414Ec167392c/2831c6155895f33d.png',
          }
        ],
        turnsNumber: 5, // 转动圈数
        turnsTime: 5,// 转动时间：S
        styleOpt: {
          prizeBgColors: ['rgb(255, 231, 149)','rgb(255, 247, 223)','rgb(255, 231, 149)','rgb(255, 247, 223)','rgb(255, 231, 149)','rgb(255, 247, 223)'],
          borderColor: '#ff9800',
        },
        prizeIndex: -1, // 中奖奖品的index
        lock: false,// 防止多次连续点击抽奖
        num: 5,// 抽奖次数,根据需求定义
      }
    },
    methods: {
      startTurns() {
        if (!this.canBeRotated()) {
          return false;
        }
        this.lock = true;
        // 此为模拟随机数字，这里可以接受后台中奖信息
        const index = Math.floor(Math.random() * this.prizeList.length);
        // 成功后抽奖次数减1
        this.num--;
        // 中奖奖品的index
        this.prizeIndex = index;
        // 调用组件的方法，使转盘转动并停留在中奖奖品的那个扇形区域
        this.$refs.luckDrawPrize.rotate(index);
      },
      endTurns() {
        this.$dialog({
          content: `恭喜中奖！！！${this.prizeList[this.prizeIndex].prizeName}`,
          noCloseBtn: false,
          noOkBtn: true,
          cancelBtnTxt: "我知道了"
        });
        this.lock = false;
      },
      canBeRotated() {
        if (this.num <= 0) {
          this.$dialog({
            content: `已经没有次数了,继续加油赚积分吧！`,
            noCloseBtn: false,
            noOkBtn: true,
            cancelBtnTxt: "我知道了"
          });
          return false;
        }
        if (this.lock) {
          return false;
        }
        return true;
      },
    }
  }
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| ref | 当前转盘的类名,转动的时候根据类名执行回调函数 | String | luckDrawPrize
| luckWidth | 转盘的宽度 | String | 300px
| luckHeight | 转盘的高度 | String | 300px
| prizeList | 奖品列表 | Array | -
| turnsNumber | 转动的圈数 | Number | 5
| turnsTime | 从开始转动到结束所用时间 | Number | 5(单位是秒)
| styleOpt | 转盘中的样式，包括每个扇区的背景颜色，扇区的边框颜色 | Object | {prizeBgColors: [],borderColor: ''}
| pointerStyle | 转盘中指针的样式，包括背景图片、大小等 | Object | {width: '80px',height: '80px'}



## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| endTurns | 转盘中停止转动后的回调函数 | - 
