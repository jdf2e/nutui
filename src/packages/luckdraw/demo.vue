<template>
  <div class="luckDrawBox demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title">剩余抽奖次数：{{ num }}</span>
      </nut-cell>
    </div>
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
          <img :src="scope.item.prizeImg" />
        </div>
      </template>
    </nut-luckdraw>
    <div @click="startTurns" class="pointer" :style="pointerStyle"></div>
  </div>
</template>

<script>
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
        backgroundRepeat: 'no-repeat'
      },
      // 转盘上要展示的奖品数据
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
      // 转动圈数
      turnsNumber: 5,
      // 转动需要持续的时间(秒)
      turnsTime: 5,
      // 转盘样式的选项
      styleOpt: {
        // 转盘中每一块扇形的背景色,根据奖品的index来取每一块的对应颜色
        prizeBgColors: [
          'rgb(255, 231, 149)',
          'rgb(255, 247, 223)',
          'rgb(255, 231, 149)',
          'rgb(255, 247, 223)',
          'rgb(255, 231, 149)',
          'rgb(255, 247, 223)'
        ],
        // 每一个扇形的外边框颜色
        borderColor: '#ff9800'
      },
      // 中奖的奖品的index(此数据可根据后台返回的值重新赋值)
      prizeIndex: -1,
      // 用来锁定转盘，避免同时多次点击转动
      lock: false,
      // 剩余抽奖次数
      num: 5
    };
  },
  methods: {
    startTurns() {
      // 如果还不可以转动
      if (!this.canBeRotated()) {
        return false;
      }
      // 开始转动
      // 先上锁
      this.lock = true;
      // 设置在哪里停下，应该与后台交互，这里随机抽取0~5 ,这里应该是后台返回的中奖信息,现在是测试
      const index = Math.floor(Math.random() * this.prizeList.length);
      // 成功后次数减少一次
      this.num--;
      this.prizeIndex = index;
      // 告诉子组件，开始转动了
      this.$refs.luckDrawPrize.rotate(index);
    },
    // 已经转动完转盘触发的函数
    endTurns() {
      // 提示中奖
      this.$dialog({
        content: `恭喜中奖！！！${this.prizeList[this.prizeIndex].prizeName}`,
        noCloseBtn: false,
        noOkBtn: true,
        cancelBtnTxt: '我知道了'
      });
      // 解锁
      this.lock = false;
    },
    // 判断是否可以转动
    canBeRotated() {
      if (this.num <= 0) {
        alert('已经没有次数了,继续加油赚积分吧！');
        this.$dialog({
          content: `已经没有次数了,继续加油赚积分吧！`,
          noCloseBtn: false,
          noOkBtn: true,
          cancelBtnTxt: '我知道了'
        });
        return false;
      }
      if (this.lock) {
        return false;
      }
      return true;
    }
  }
};
</script>

<style lang="scss">
.luckDrawBox {
  h3 {
    width: 100%;
    text-align: center;
    font-size: 24px;
  }
  // .drawTable {
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  // }
  // .drawTable-name {
  //   position: absolute;
  //   left: 10px;
  //   top: 20px;
  //   width: calc(100% - 20px);
  //   font-size: 12px;
  //   text-align: center;
  //   color: #ff5722;
  // }
  // .drawTable-img {
  //   position: absolute;
  //   /*要居中就要50% - 宽度 / 2*/
  //   left: calc(50% - 30px / 2);
  //   top: 60px;
  //   width: 30px;
  //   height: 30px;
  //   img {
  //     display: inline-block;
  //     width: 100%;
  //     height: 100%;
  //   }
  // }
  // .pointer {
  //   position: absolute;
  //   // left: calc(50% - 35px);
  //   // top: calc(50% - 40px);
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-43.75%, -50%);
  //   // background-image: url("https://img11.360buyimg.com/imagetools/jfs/t1/106989/15/11126/137350/5e265414E8ee514bc/3456bd0d3a0454da.png");
  //   // background-size: contain;
  //   // background-repeat: no-repeat;
  // }
}
</style>
