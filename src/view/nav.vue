<template>
    <div class="nav">
        <div class="info">
          <input class="s-b" placeholder="请输入搜索内容" type="search" v-model="searchKeyWork">
        </div>
    <ul v-if="!searchKeyWork">
      <li><router-link to="/intro" :class="{ current:path=='/intro' }">指南</router-link></li>
      <li class="nutdemo"><router-link to="/nutdemo" :class="{ current:path=='/nutdemo' }">手机示例</router-link></li>
      <li class="pcdemo"><a href="./demo.html">示例</a></li>
      <li>
          组件/Components
          <ul>
              <li v-for="cpt in packages" v-if="['component','method'].indexOf(cpt.type)!==-1"><router-link :to="{name:cpt.name}" :class="{ current:path=='/'+cpt.name }">{{cpt.name}}<span class="chnn">{{cpt.chnName || '组件' }}</span></router-link></li>
          </ul>
      <li>过滤器/Filters
          <ul>
              <li v-for="cpt in packages" v-if="cpt.type==='filter'"><router-link :to="{name:cpt.name}" :class="{ current:path=='/'+cpt.name }">{{cpt.name}}<span class="chnn">{{cpt.chnName || '组件' }}</span></router-link></li>
          </ul>
      </li>
      <li>指令/Directives
          <ul>
              <li v-for="cpt in packages" v-if="cpt.type==='directive'"><router-link :to="'/'+cpt.name" :class="{ current:path=='/'+cpt.name }">{{cpt.name}}<span class="chnn">{{cpt.chnName || '组件' }}</span></router-link></li>
          </ul></li>
      </li>
    </ul>
    <ul if-else>
      <li v-for="(item,index) in reslouts" :key="index" >
        <router-link :to="{name:item.name}" :class="{ current:path=='/'+item.name }">{{item.name}}<span class="chnn">{{item.chnName || '组件' }}</span></router-link>
      </li>
    </ul>
    </div>
</template>

<script>
//import Conf from "../../config.json";
export default {
  data() {
    return {
      path: "",
      packages: [],
      version: "",
      searchKeyWork:"",
      reslouts:[]
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
    searchKeyWork(val){
      let packages = this.packages;
      let temAry = [];      
      for(let index=0,item;item=packages[index];index++) {
          let ishas = false;
          for(let key in item) {
            if(item[key]&&typeof item[key]== "string" &&item[key].indexOf(val)>-1){                  
              ishas = true;     
            }            
          }
          if(ishas){
            temAry.push(item); 
          }
           
      }
      console.log(temAry)
      this.reslouts = temAry;
    }
  },
  created() {
    this.packages = this.NUTCONF.packages;
    this.version = this.NUTCONF.version;
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
.chnn{
  margin-left: 5px;
  color: #999;
  font-size: 12px;
 
}
.pcdemo{
  display: none;
}
.info {
    color: #999;
    padding: 8px 0;
    margin-bottom: 10px;
    border-bottom: 1px dashed #ccc;
    display: flex;
    align-items: baseline;
    justify-content: space-between;   
    
    .s-b{
      display: block;
       align-items:center;
        flex-grow:2;
       margin:0;
    }
}
.tot{
  font-size:12px;
}
 @media (max-width: 415px){
    .pcdemo{
      display: list-item;
    }
}
</style>
