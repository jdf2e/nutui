<template>
  <div class="demo-list">
    <!-- 京贴券 -->
    <h4>京贴券</h4>
    <div class="coupon-box">
      <div class="coupon-item">
        <nut-coupon type="1" cText1="每满10减1" cText2="仅可购买京贴测试商品" state="0" @click="handleClick()" />
      </div>
      <div class="coupon-item">
        <nut-coupon type="1" cText1="每满10减1" cText2="仅可购买京贴测试商品" state="1" @click="handleClick()" />
      </div>
      <div class="coupon-item">
        <nut-coupon type="1" cText1="每满10减1" cText2="仅可购买京贴测试商品" state="2" @click="handleClick()" />
      </div>
    </div>
    <!-- 品类券无图 -->
    <h4>品类券无图</h4>
    <div class="coupon-box">
      <div class="coupon-item">
        <nut-coupon type="2" discount="2" cText1="满49元可用" cText2="仅可购买年货节头号京贴活动商品" state="0" @click="handleClick()" />
      </div>
      <div class="coupon-item">
        <nut-coupon type="2" discount="8折" cText1="满199元可用" cText2="仅可购买年货节头号京贴活动商品" state="1" @click="handleClick()" />
      </div>
      <div class="coupon-item">
        <nut-coupon type="2" discount="5" cText1="满99元可用" cText2="全品类券" state="2" @click="handleClick()" />
      </div>
    </div>
    <!-- 品类券有图 -->
    <h4>品类券有图</h4>
    <div class="coupon-box">
      <div class="coupon-item">
        <nut-coupon
          type="2"
          discount="2"
          cText1="满49元可用"
          cText2="仅可购买年货节头号京贴活动商品"
          cImage="https://m.360buyimg.com/babel/s250x250_jfs/t1/137621/21/15770/49049/5fbe0520E043b4ce5/f8a1e0e877908389.jpg"
          state="0"
          @click="handleClick()"
        />
      </div>
      <div class="coupon-item">
        <nut-coupon
          type="2"
          discount="8折"
          cText1="满199元可用"
          cText2="仅可购买年货节头号京贴活动商品"
          cImage="https://m.360buyimg.com/babel/s250x250_jfs/t1/132022/33/3322/189592/5ef9d0c4Ece6a3708/c5dc348d3f943324.jpg"
          state="1"
          @click="handleClick()"
        />
      </div>
      <div class="coupon-item">
        <nut-coupon
          type="2"
          discount="5"
          cText1="满99元可用"
          cText2="全品类券"
          cImage="https://m.360buyimg.com/babel/s250x250_jfs/t1/113459/35/17982/103219/5f6338c6Ec5691153/7e8cf299c6318afe.jpg"
          state="2"
          @click="handleClick()"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$toast.text('很抱歉，没抢到~~');
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-list /deep/ p {
  padding: 0;
  margin: 0;
}
.coupon-box {
  display: flex;
  flex: 0 0 auto;
  overflow-x: auto;
  .coupon-item {
    position: relative;
    margin-right: 10px;
  }
}
</style>
