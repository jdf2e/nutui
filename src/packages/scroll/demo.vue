<template>
  <div class="page has-navbar">
    <div class="demo-item">
      <h4>上拉刷新&&无限加载</h4>
      <div class="scroll-box">
        <nut-scroll
          class="page-content"
          :on-refresh="onRefresh"
          :on-infinite="onInfinite"
          refreshText="下拉释放刷新-加载数据"
          noDataText="没有数据啦~"
          ref="scroller"
        >
          <div v-for="(item, index) in items" :key="index" @click="onItemClick(index)" class="item">
            {{ item }}
          </div>
        </nut-scroll>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      menuButtonText: '<span class="assertive">更多</span>',
    };
  },

  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.items.push('塑像本来就在石头里，我只是把不要的部分去掉 ' + (i < 10 ? '0' + i : i));
    }
    this.top = 1;
    this.bottom = 20;
    setTimeout(() => {
      if (this.$refs.scroller) this.$refs.scroller.resize();
    });
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        let start = this.top - 1;
        for (let i = start; i > start - 10; i--) {
          this.items.splice(0, 0, '塑像本来就在石头里，我只是把不要的部分去掉 ' + (i > -10 ? '0' + -i : -i));
        }
        this.top = this.top - 10;
        this.$refs.scroller && this.$refs.scroller.finishPullToRefresh();
      }, 1500);
    },

    onInfinite(cb) {
      if (this.bottom >= 50) {
        cb(true);
        return;
      }
      setTimeout(() => {
        let start = this.bottom + 1;
        for (let i = start; i < start + 10; i++) {
          this.items.push('塑像本来就在石头里，我只是把不要的部分去掉 ' + (i < 10 ? '0' + i : i));
        }
        this.bottom = this.bottom + 10;
        this.$refs.scroller && this.$refs.scroller.finishInfinite();
      }, 1500);
    },

    onItemClick(index) {
      this.$toast.text('当前点击项的index - ' + index);
    },
  },
};
</script>

<style lang="scss">
html,
body {
  overflow: hidden;
  .has-navbar {
    position: relative;
    overflow: hidden;
    height: calc(100vh - 40px);
    padding: 0;
    .demo-item {
      position: relative;
      height: 100vh;
      margin-bottom: 10px;
      overflow: hidden;
      flex: 1;
      display: flex;
      flex-direction: column;
      &:last-child {
        margin-bottom: 0;
      }
      h4 {
        margin: 10px;
      }
      .scroll-box {
        position: relative;
        flex: 1;
        text-align: center;
      }
      .page-content {
        background: #fff;
      }
      .item {
        height: 30px;
        line-height: 30px;
        font-size: 13px;
      }
    }
  }
}
</style>
