<template>
  <div class="wrapper">
    <h1 class="logo">NutUI</h1>
    <div class="version">Version {{version}}</div>
    <p>NutUI是一套基于Vue2的轻量级移动端组件库。<br>[<a href="/index.html">文档</a>] [<a href="https://github.com/jdf2e/nutui">代码</a>]</p>
    <ul>
      <template v-for="cpt in packages"><li v-if="cpt.showDemo !== false"><router-link :to="{name:cpt.name}">{{cpt.name}}<span>{{cpt.chnName}}</span></router-link></li></template>
    </ul>
  </div>
</template>

<script>
import Conf from '../../config.json';
export default {
    name:'index',
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
.version{
  text-align:center;
  font-size:12px;
  color:rgb(129, 129, 129);
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
  span{
    margin-left:10px;
    font-size:14px;
    color:rgb(167, 167, 167);
  }
}
</style>
