<template>
  <div class="img-outbox">
    <i class="close" @click="close"></i>
    <img class="img-box" v-if="src" :src="src" alt />
  </div>
</template>
<script>
export default {
  name: 'img-cell',
  props: ['src', 'clear'],
  methods: {
    close() {
      if (Object.prototype.toString.apply(this.clear) === '[object Function]') {
        this.clear();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.img-outbox {
  width: 76px;
  height: 76px;
  border-radius: 3px;
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 0 12px 12px 0;
  border: 1px solid #ccc;
  .close {
    position: absolute;
    display: block;
    background: url(./../../assets/img/img-clear.png) no-repeat;
    background-size: cover;
    width: 18px;
    height: 18px;
    top: -9px;
    right: -9px;
    cursor: pointer;
  }
  .img-box {
    width: 100%;
  }
}
</style>
