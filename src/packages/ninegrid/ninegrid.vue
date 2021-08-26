<template>
  <div class="nut-ninegrid">
    <div
      v-for="(item, index) in gridList"
      class="item"
      :class="[{ active: activeState && index != 4 }, { shake: shakeIndexs.includes(index + 1) }]"
      :key="index"
    >
      <div v-if="index == 4" class="center" @click="refresh(true)">
        <img
          :class="{ rotate: loadingDataState }"
          src="//img13.360buyimg.com/imagetools/jfs/t1/190805/24/20092/1136/6126fce9E6c61cf21/acd44eec9fc694bd.png"
          alt="refresh.png"
        />
        <span>换一换</span>
        <p>{{ countDown }}S&nbsp;后自动换</p>
      </div>
      <template v-else>
        <div class="front" @click="toDetail(item.front)">
          <p>{{ item.front.name }}</p>
          <nut-price class="price" :price="item.front.price" :thousands="true" />
          <img :src="item.front.pictureUrl" />
        </div>
        <div class="back" @click="toDetail(item.back)">
          <p>{{ item.back.name }}</p>
          <nut-price class="price" :price="item.back.price" :thousands="true" />
          <img :src="item.back.pictureUrl" />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-ninegrid',
  props: {
    data: {
      type: [Object, Array],
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      gridList: [], // 数据list
      activeState: false, // 去掉中间的换一换方块
      shakeIndexs: [], // 动画抖一抖的下标
      loadingDataState: false, // 换一换的小图标是否旋转  并且等它旋转完才可以再次点击
      countDown: 10, // 倒计时时间
      number: 0
    };
  },
  watch: {
    data: {
      handler(value) {
        if (value) {
          this.resResponse(value);
        }
      }
    }
  },
  methods: {
    resResponse(sudoku_goodsG) {
      if (!(sudoku_goodsG.length > 15)) {
        return;
      }
      let list = sudoku_goodsG;
      let spArrs = this.spArray(8, list);
      let front = spArrs[0];
      let back = spArrs[1];
      let filterData = [];
      front.forEach((element, index) => {
        filterData.push({
          front: element,
          back: back[index]
        });
      });
      filterData.splice(4, 0, {});
      this.gridList = filterData;
    },
    beginTimeIntervar() {
      this.timeIntervar = setInterval(() => {
        this.countDown--;
        if (this.countDown == 0) {
          this.refresh();
        }
        if (this.countDown == 7) {
          this.shakeIndexs = [2, 4, 6, 8];
        } else if (this.countDown == 3) {
          this.shakeIndexs = [1, 3, 7, 9];
        }
      }, 1000);
    },
    refresh(manual = false) {
      if (this.loadingDataState) return;
      this.number += 1;
      this.countDown = 10;
      this.shakeIndexs = [];
      this.activeState = !this.activeState;

      // 检查点击次数
      if (this.number % 2 === 0) {
        console.log(123);
        this.$emit('refresh');
      } else {
        this.loadingDataState = true;
        setTimeout(() => {
          this.loadingDataState = false;
        }, 1000);
      }
    },
    /**
     * 跳转详情
     * @param item skuItem
     */
    toDetail(item) {
      // 跳转商详
      this.$emit('toDetail', item);
    },
    /**
     *
     * 数组拆分函数
     * @static
     * @param {number} N 拆分长度
     * @param {any[]} Q 将要拆分的数组
     * @returns {Array}
     * @memberof Utils
     */
    spArray(N, Q) {
      let R = [],
        F;
      for (F = 0; F < Q.length; ) {
        R.push(Q.slice(F, (F += N)));
      }
      return R;
    }
  },
  mounted() {
    this.resResponse(this.data);
    this.beginTimeIntervar();
  }
};
</script>
