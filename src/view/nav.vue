<template>
    <div class="nav">
        <div class="info">
          <input class="s-b" placeholder="请输入搜索内容" type="search" v-model="searchKeyWork" @click.stop>
          <svg v-if="searchKeyWork" class="c-l" width="18" height="18" @click.stop="clearSearch">
              <use xlink:href="#close3"/>
          </svg>
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
      <li v-if="resloutempty" class="l-s">{{resloutempty}}</li>
    </ul>
    
    </div>
</template>

<script>
//import Conf from "../../config.json";
import closeIcon from '../asset/img/svg/close3.svg';
export default {
  data() {
    return {
      path: "",
      packages: [],
      version: "",
      searchKeyWork:"",
      reslouts:[],
      resloutempty:'',
      timeOut:null
    };
  },
  computed:{
    total(){
      return this.packages.length || '--';
    }
  },
  methods: {
    clearSearch(){
      this.searchKeyWork ="";
    }    
  },
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
      let timeOut = this.timeOut;    
      let that = this;     
      if(timeOut){
        clearTimeout(timeOut)
      }
      setTimeout(()=>{
        for(let index=0,item;item=packages[index];index++) {
            let ishas = false;
            for(let key in item) {
              if(item[key]&&typeof item[key]== "string" &&item[key].toLowerCase().indexOf(val.toLowerCase())>-1){                  
                ishas = true;     
              }            
            }
            if(ishas){
              temAry.push(item); 
            }
        }    
        if(temAry.length==0){
          that.resloutempty= "未匹配到相关内容...";
          that.reslouts = [];
        }else{
          that.resloutempty = "";
          that.reslouts = temAry;
        }
      },200);
      
      
    }
  },
  created() {
    this.packages = this.NUTCONF.packages;
    this.version = this.NUTCONF.version;
  }
};
</script>

<style lang="scss" scoped>
 input::-webkit-input-placeholder{
            color:#ccc;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#ccc;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#ccc;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#ccc;
        }
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
    // border-bottom: 1px dashed #ccc;
    display: flex;
    align-items: baseline;
    justify-content: space-between;   
    position: relative;
    .s-b{
      display: block;
       align-items:center;
        flex-grow:2;
       margin:0;
       border-radius: 20px;
       padding:0 .5rem;
       box-sizing: border-box;
       text-indent: 15px;
       appearance: none;
       font-size:14px;
       border:1px solid rgba(233, 230, 230, 0.72);
    }
    .c-l{
      position: absolute;
      right: 10px;
      top:50%;
      transform: translateY(-50%);
    }
}
.l-s{
  list-style: none;
  text-align: center;
  color:#999;
  height: 100px;
  font-size:14px;
  line-height: 100px;
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
