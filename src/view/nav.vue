<template>
    <div class="nav">
        <div class="info"><span class="version">Version {{ version }}</span><span class="tot">In total, {{ total }}</span></div>
    <ul>
    <li><router-link to="/intro" :class="{ current:path=='/intro' }">指南</router-link></li>
    <li class="nutdemo"><router-link to="/nutdemo" :class="{ current:path=='/nutdemo' }">手机示例</router-link></li>
    <li class="pcdemo"><a href="./demo.html">示例</a></li>
    <li>
        组件/Components
        <ul>
            <li v-for="cpt in packages" v-if="['component','method'].indexOf(cpt.type)!==-1"><router-link :to="'/'+cpt.name" :class="{ current:path=='/'+cpt.name }">{{cpt.name}}</router-link></li>
        </ul>
    <li>过滤器/Filters
        <ul>
            <li v-for="cpt in packages" v-if="cpt.type==='filter'"><router-link :to="'/'+cpt.name" :class="{ current:path=='/'+cpt.name }">{{cpt.name}}</router-link></li>
        </ul>
    </li>
    <li>指令/Directives
        <ul>
            <li v-for="cpt in packages" v-if="cpt.type==='directive'"><router-link :to="'/'+cpt.name" :class="{ current:path=='/'+cpt.name }">{{cpt.name}}</router-link></li>
        </ul></li>
    </li>
    </ul>
    </div>
</template>

<script>
import Conf from "../../package.json";
export default {
  data() {
    return {
      path: "",
      packages: [],
      version: ""
    };
  },
  computed:{
    total(){
      return this.packages.length || '--';
    }
  },
  methods: {},
  watch: {
    $route: {
      immediate: true,
      handler: function(to, from) {
        this.path = to.path;
      }
    },
  },
  created() {
    this.packages = Conf.packages;
    this.version = Conf.version;
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.current {
  color: #ff0000;
}
.pcdemo{
  display: none;
}
.info {
    color: #999;
    padding-bottom: 8px;
    margin-bottom: 10px;
    border-bottom: 1px dashed #ccc;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
.tot{
  font-size:12px;
}
 @media (max-width: 400px){
    .pcdemo{
      display: list-item;
    }
}
</style>
