<template>
  <div class="wrapper">
    <h1 class="logo">NutUI</h1>
    <p>NutUI是一套基于Vue2的轻量级移动端组件库。[<a href="/index.html">文档</a>] [<a href="http://git.jd.com/lifeifan3/NutUI">代码</a>]</p>
    <ul>
      <li v-for="cpt in packages"><router-link :to="'/'+cpt.name" v-if="cpt.showDemo !== false">{{cpt.name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import Conf from '../../package.json';
export default {
    data(){
        return{
            path:'',
            packages:{},
            version:''
        }
    },
    methods:{
    },
    created(){
        this.packages = Conf.packages;
        this.version = Conf.version;
    }
}
</script>

<style lang="scss" scoped>
.logo{
  background:url(../asset/img/nutui-logo.png) no-repeat;
  background-size:contain;
  height:50px;
  width:140px;
  font-size:0;
  margin:15px auto;
}
p{
  text-align:center;
  color:#888;
}
ul,li{
  list-style:none;
  margin:0;
  padding:0;
}
ul{
  padding:.1rem;
}
li{
  margin:10px 0;
  background-color:#FFF;
  overflow:hidden;
  border-radius:2px;
  a{
    display: block;
    height:100%;
    padding:20px;
    text-decoration: none;
    color:#000;
  }
}
</style>
