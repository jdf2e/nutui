<template>
    <div class="nut-luckdraw" ref="luckdraw" :style="{width:luckWidth, height:luckheight}">
        <div class="lucktable" :style="{transform: rotateAngle, transition: rotateTransition}">
            <canvas id="canvas" ref="canvas">
                浏览器版本过低
            </canvas>
            <div class="prize">
                <div v-for="(item, index) in prizeList" class="item" :style="getRotateAngle(index)" :key="index">
                <slot name="item" :item="item"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-luckdraw',
    mounted() {
      this.init();
    },
    props: {
      luckWidth: {
        required: true
      },
      luckheight: {
        required: true
      },
      prizeList: {
        required: true
      },
      turnsNumber: {
        default: 5
      },
      styleOpt: {
        default: () => {
          return {
            // 每一块扇形的背景色,默认值,可通过父组件来改变
            prizeBgColors: ['rgb(255, 231, 149)','rgb(255, 247, 223)','rgb(255, 231, 149)','rgb(255, 247, 223)','rgb(255, 231, 149)','rgb(255, 247, 223)'],
            // 每一块扇形的外边框颜色,默认值,可通过父组件来改变
            borderColor: '#ff9800',
          }
        }
      },
      turnsTime: {
        // 转动需要持续的时间(秒)  
        default: 5
      }
    },
    data() {
      return {
        winningPrize: 0,
        // 开始转动的角度
        startRotateDegree: 0,
        // 设置指针默认指向的位置,现在是默认指向2个扇形之间的边线上
        rotateAngle: 0,//`rotate(30deg)`
        rotateTransition: '',
      }
    },
    methods: {
      // 根据index计算每一格要旋转的角度的样式
      getRotateAngle(index) {
        const angle = 360 / this.prizeList.length * index + (180 / this.prizeList.length);
        return {
          transform: `rotate(${angle}deg)`
        };
      },
      // 初始化圆形转盘canvas
      init() {
        const data = this.styleOpt;
        const prizeNum = this.prizeList.length;
        const {prizeBgColors, borderColor} = data;
        // 开始绘画
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext("2d");
        const canvasW = this.$refs.canvas.width = this.$refs.luckdraw.clientWidth; // 画板的高度
        const canvasH = this.$refs.canvas.height = this.$refs.luckdraw.clientHeight; // 画板的宽度
        // translate方法重新映射画布上的 (0,0) 位置
        ctx.translate(0, canvasH);
        // rotate方法旋转当前的绘图，因为文字是和当前扇形中心线垂直的
        ctx.rotate(-90 * Math.PI / 180);
        // 圆环的外圆的半径,可用来调整圆盘大小来适应外部盒子的大小
        const outRadius = canvasW / 2 - 1;
        // 圆环的内圆的半径
        const innerRadius = 0;
        const baseAngle = Math.PI * 2 / prizeNum; // 每个奖项所占角度数
        ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认色
        ctx.strokeStyle = borderColor; // 设置画图线的颜色
        for (let index = 0; index < prizeNum; index++) {
          const angle = index * baseAngle;
          ctx.fillStyle = prizeBgColors[index]; //设置每个扇形区域的颜色
          ctx.beginPath(); //开始绘制
          // 标准圆弧：arc(x,y,radius,startAngle,endAngle,anticlockwise)
          ctx.arc(canvasW * 0.5, canvasH * 0.5, outRadius, angle, angle + baseAngle, false);
          ctx.arc(canvasW * 0.5, canvasH * 0.5, innerRadius, angle + baseAngle, angle, true);
          ctx.stroke();
          ctx.fill();
          ctx.save();
        }
      },
      // 转动起来
      rotate(index) {
        const turnsTime = this.turnsTime;
        const rotateAngle = this.startRotateDegree + this.turnsNumber * 360 + 360 - (180 / this.prizeList.length + 360 / this.prizeList.length * index) - this.startRotateDegree % 360;
        this.startRotateDegree = rotateAngle;
        this.rotateAngle = `rotate(${rotateAngle}deg)`;
        this.rotateTransition = `transform ${turnsTime}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`;
        setTimeout(() => {
          this.$emit('endTurns');
        }, turnsTime * 1000 + 500)
      },
    },
}
</script>