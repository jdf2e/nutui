<template>
  <div class="demo-wrapper">
    <router-view class="demo-nav" name="demonav"></router-view>
    <keep-alive include="index">
      <router-view class="demo" name="main" v-transition></router-view>
    </keep-alive>
  </div>
</template>
<script>
</script>
<style lang="scss">
*{
  -webkit-tap-highlight-color: transparent;
}
[v-cloak] {
  display: none;
}
body{
    font-size:16px;
    background:#F8F8F8;
    margin: 0;
}
.demo-wrapper{
  background-color:#F8F8F8;
  min-height:100vh;
}
.demo{
  padding: 8px;
  padding-top: 40px;
  box-sizing:border-box;
}
.button-primary {
    display: block;
    margin:.5rem 0;
    height: 38px;
    padding: 0 24px;
    color: #555;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #bbb;
    cursor: pointer;
    box-sizing: border-box;
    color: #FFF;
    background-color: #33C3F0;
    border-color: #33C3F0;
}
</style>
