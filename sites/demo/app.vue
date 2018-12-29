<template>
  <div :class="['demo-wrapper',{'in-iframe':inIframe}]">
    <router-view class="demo-nav" name="demonav" v-if="!inIframe"></router-view>
    <keep-alive include="index">
      <router-view class="demo" name="main" v-transition></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      inIframe:false
    }
  },
  created(){
    if (window.self != window.top) { 
      this.inIframe = true;
    }
  }
}
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
    margin: 0;
    color:#2e2d2d;
    font-family: PingHei,Lucida Grande,Lucida Sans Unicode,STHeiti,Helvetica,Arial,Verdana,"sans-serif","PingHei-light",SimHei,"Droid Sans";  
}
.demo-wrapper{
  width:100%;
  min-height:100vh;
  padding-top:40px;
  box-sizing:border-box;
  background: #F6F6F6;
  &.in-iframe{
    padding-top:0;
  }
}
h4{
  padding:0 8px;
  box-sizing: border-box;
}
.demo{
  padding-left:8px;
  padding-right:8px;
}
// .button-primary {
//     display: block;
//     margin:.5rem 0;
//     height: 38px;
//     padding: 0 24px;
//     color: #555;
//     text-align: center;
//     font-size: 12px;
//     font-weight: 600;
//     line-height: 38px;
//     letter-spacing: .1rem;
//     text-transform: uppercase;
//     text-decoration: none;
//     white-space: nowrap;
//     background-color: transparent;
//     border-radius: 4px;
//     border: 1px solid #bbb;
//     cursor: pointer;
//     box-sizing: border-box;
//     color: #FFF;
//     background-color: #33C3F0;
//     border-color: #33C3F0;
// }
</style>
