<template>
  <div :class="['demo-wrapper',{'in-iframe':inIframe}]">
    <router-view class="demo-nav" name="demonav" v-if="!inIframe" v-transition></router-view>
    <keep-alive include="index">
      <router-view class="demo" name="main" v-transition></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      inIframe: false
    };
  },
  mounted() {
    if (window.self != window.top) {
      this.inIframe = true;
    }
  }
};
</script>
<style lang="scss">
* {
  -webkit-tap-highlight-color: transparent;
}
[v-cloak] {
  display: none;
}
body {
  font-size: 16px;
  margin: 0;
  color: #2e2d2d;
  font-family: PingHei, "Microsoft YaHei", "Lucida Grande",
    "Lucida Sans Unicode", STHeiti, Helvetica, Arial, Verdana, "sans-serif",
    "PingHei-light", SimHei, "Droid Sans";
}
.demo-wrapper {
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
  box-sizing: border-box;
  background: #f6f6f6;
  &.in-iframe {
    padding-top: 0;
  }
}
h4 {
  padding: 0 8px;
  box-sizing: border-box;
}
.demo {
  padding:0 8px 20px 8px;
}
</style>
