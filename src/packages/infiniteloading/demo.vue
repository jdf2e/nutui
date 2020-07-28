<template>
  <div class="demo-list">
    <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true" :has-more="isHasMore" :is-loading="isLoading" :threshold="200">
      <div class="list">
        <nut-cell v-for="(item, index) of data" :key="item" :title="'噜啦噜' + index" sub-title="我又来送福利啦！关注之后你就会">
          <div slot="avatar">
            <nut-avatar
              sizeNum="60"
              bg-image="https://img14.360buyimg.com/imagetools/jfs/t1/130112/36/5492/38449/5f1f964cEfd6f41bf/bec836b48b55bb00.jpg"
              bg-icon
            ></nut-avatar>
          </div>
          <div slot="desc">
            <p class="timer">10:12</p>
            <p class="badge">
              <nut-badge :value="9" :max="99" top="0px" right="15px"></nut-badge>
            </p>
          </div>
        </nut-cell>
      </div>
    </nut-infiniteloading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: new Array(30),
      page: 2,
      num: 30,
      isHasMore: true,
      isLoading: false,
      isErr: false,
      timer: null,
    };
  },
  methods: {
    onInfinite() {
      this.isLoading = true;
      this.timer = setTimeout(() => {
        if (this.page <= 5) {
          this.data = new Array(this.num * this.page);
          this.page = this.page + 1;
        } else {
          this.isHasMore = false;
        }
        this.isLoading = false;
      }, 100);
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.list {
  .timer {
    color: #c8c8c8ff;
  }

  .badge {
    .nut-badge {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
