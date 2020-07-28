<template>
  <div class="page has-navbar">
    <nut-pullrefresh-loadmore class="page-content" :on-refresh="onRefresh" :on-infinite="onInfinite" ref="scroller">
      <div
        v-for="(item, index) in items"
        :key="index"
        @click="onItemClick(index)"
        class="item item-borderless"
        :class="{ 'item-stable': index % 2 == 0 }"
      >
        {{ item }}
      </div>
    </nut-pullrefresh-loadmore>
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
      this.items.push(i + ' - 塑像本来就在石头里，我只是把不要的部分去掉');
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
          this.items.splice(0, 0, i + ' - 塑像本来就在石头里，我只是把不要的部分去掉');
        }
        this.top = this.top - 10;

        setTimeout(() => {
          if (this.$refs.scroller) this.$refs.scroller.finishPullToRefresh();
        });
      }, 1500);
    },

    onInfinite() {
      setTimeout(() => {
        let start = this.bottom + 1;
        for (let i = start; i < start + 10; i++) {
          this.items.push(i + ' - 塑像本来就在石头里，我只是把不要的部分去掉');
        }
        this.bottom = this.bottom + 10;

        setTimeout(() => {
          if (this.$refs.scroller) this.$refs.scroller.finishInfinite();
        });
      }, 1500);
    },

    onItemClick(index) {
      console.log(index);
    },

    clickFn() {
      console.log('do click');
    },
  },
};
</script>

<style lang="scss"></style>
