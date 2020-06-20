# LuckDraw 转盘抽奖

## 基本用法

```html
<nut-luckdraw
  class="drawTable"
  ref="luckDrawPrize"
  :luck-width="luckWidth"
  :luck-height="luckheight"
  :prize-list="prizeList"
  :turns-number="turnsNumber"
  :turns-time="turnsTime"
  :prize-index="prizeIndex"
  :style-opt="styleOpt"
  @end-turns="endTurns"
>
  <template slot="item" slot-scope="scope">
    <div class="drawTable-name">{{ scope.item.prizeName }}</div>
    <div class="drawTable-img">
      <img :src="scope.item.prizeImg">
    </div>
  </template>
</nut-luckdraw>
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
          backgroundImage: 'url("https://img11.360buyimg.com/imagetools/jfs/t1/89512/11/15244/137408/5e6f15edEf57fa3ff/cb57747119b3bf89.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        },
        // 奖品列表
        prizeList: [
          {
            id: 'xiaomi',
            prizeName: '小米手机',
            prizeImg: 'https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png'
          },
          {
            id: 'blue',
            prizeColor: 'rgb(251, 219, 216)',
            prizeName: '蓝牙耳机',
            prizeImg: 'https://img13.360buyimg.com/imagetools/jfs/t1/91864/11/15108/139003/5e6f146dE1c7b511d/1ddc5aa6e502060a.jpg'
          },
          {
            id: 'apple',
            prizeName: 'apple watch',
            prizeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png'
          },
          {
            id: 'fruit',
            prizeColor: 'rgba(246, 142, 46, 0.5)',
            prizeName: '迪士尼苹果',
            prizeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/108308/11/8890/237603/5e6f157eE489cccf1/26e0437cfd93b9c8.png'
          },
          {
            id: 'fish',
            prizeName: '海鲜套餐',
            prizeImg: 'https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png'
          },
          {
            id: 'thanks',
            prizeName: '谢谢参与',
            prizeImg: 'https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png'
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
| luck-width | 转盘的宽度 | String | 300px
| luck-height | 转盘的高度 | String | 300px
| prize-list | 奖品列表 | Array | -
| turns-number | 转动的圈数 | Number | 5
| turns-time | 从开始转动到结束所用时间 | Number | 5(单位是秒)
| style-opt | 转盘中的样式，包括每个扇区的背景颜色(在每条数据中页可单独设置prizeColor)，扇区的边框颜色 | Object | {prizeBgColors: [],borderColor: ''}
| pointerStyle | 转盘中指针的样式，包括背景图片、大小等 | Object | {width: '80px',height: '80px'}



## Event

| 字段 | 说明 | 回调参数
|----- | ----- | -----
| end-turns | 转盘中停止转动后的回调函数 | - 
