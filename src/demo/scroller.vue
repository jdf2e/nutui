<template>
  <div>
    <nut-docheader 
    :name="$route.name"
    :showQrCode="true"></nut-docheader>

    <h5>示例</h5>
    <div class="scroller-container">
      <nut-scroller 
        :onRefresh="onRefresh" :onInfinite="onInfinite">
        <div v-for="(item, index) in list" :key="index" class="content-item">{{'滚动区域的内容' + (index + 1)}}</div>
      </nut-scroller>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     list: [...Array(15)]
    };
  },
  methods: {
    onRefresh(done) {
      setTimeout(() => {
        this.list = [...Array(15)]
          done()
      }, 2000)
    },
    onInfinite(done) {
      setTimeout(() => {
        if (this.list && this.list.length < 30) {
          this.list = [...this.list, ...Array(10)]
          done(true);
          return
        }
        done(false)
      }, 2000)
    }
  }
};
</script>

<style lang="scss">
  .scroller-container {
    position: relative;
    width: 100%;
    height: 500px;
		background: #f2f2f2;
  }
  .content-item {
    padding: 5px;
    line-height: 20px;
    background: #cccccc;
    margin-bottom: 10px;
    font-size: 14px;
  }
</style>

