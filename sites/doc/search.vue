<template>
      <div class="search-box">
          <input
            @focus="onfocus"
            @input="search"
            @keyup="choseList"
            v-model="searchVal"
            class="search"
            type="text"
            placeholder="在NutUI中搜索"
          >
          <!-- <transition name="fade"> -->
            <ul class="search-list" v-if="searchList.length>0">
              <li :class="searchCurName==item.name?'cur':''" @click="checklist(item)" v-for="(item,index) in searchList" :key="index">
                <router-link :to="{name:item.name}">
                  {{item.name}}
                  <span>{{item.chnName}}</span>
                </router-link>
              </li>
            </ul>
          <!-- </transition> -->
        </div>
</template>
<script>
import Conf from "../../src/config.json";
export default {
    data(){
        return {
            packages : Conf.packages,
            searchVal: "",           
            searchList: [],
            searchCurName:'',
             searchIndex:0,
        }
    },   
    mounted() {
      let list = document.querySelector('.search-list');
      let that = this;
      window.addEventListener('click',that.closelist)
    },
    methods:{
        closelist(){           
            this.searchList = [];
            this.searchCurName='';
            this.searchIndex=0;          
        },
        onfocus(e) {
            e.target.select();
          },
          clearSearch() {
            this.searchList = [];
          },    
          search(e) {
            let val = e.target.value.toLowerCase();     
            this.searchIndex=0;
            if (val) {
              let packages = this.packages;
              let list = [];
              for (let i = 0, item; (item = packages[i]); i++) {
                let cn = item.chnName.toLowerCase();
                let en = item.name.toLowerCase();
                if (cn.indexOf(val) > -1 || en.indexOf(val) > -1) {
                  list.push(item);
                }
              }
              this.searchList = list;
            }else{

                this.checklist()
            }
          },
          checklist() {
            this.searchVal = "";
            this.searchList = [];
            this.searchCurName='';
            this.searchIndex=0;
          },
          choseList(e){           
            let searchIndex = this.searchIndex;
            if(e.keyCode==40){
              searchIndex++;
            }
            if(e.keyCode==38){
              searchIndex--;
            }
            if(searchIndex<0){
              searchIndex = 0;
            }      
            let searchList = this.searchList;
            if(searchList.length>0){       
             
            let chnName = searchList[searchIndex].name;
            
            if(chnName){
              this.searchCurName = chnName;
              this.searchIndex = searchIndex;
              if(e.keyCode==13){
                  this.$router.push({
                      path:'/'+searchList[searchIndex].name
                  })
                this.searchCurName='';
                this.searchIndex=0;
                this.searchList=[];
                this.searchVal='';
              }
            }       
            }
          }
    }
}
</script>
<style lang="scss" scoped>
.search-box {
      height: 22px;
      min-width: 300px;
      position: relative;
      input {
        width: 100%;
      }
    }
 .search {
      height: 22px;
      font-size: 14px;
      color: #666;
      border: none;
      background: url(./asset/css/i/sreach.png) no-repeat left center;
      padding-left: 45px;
      &:focus {
        outline: none;
      }
    }
.search-list {
    background: #fff;
    position: absolute;
    width: 300px;
    list-style: none;
    border: 1px solid #f2f2f2;
    z-index: 99999;
    top: 27px;
    padding: 0;
    li {
    height: 40px;
    line-height: 40px;

    a {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        padding-left: 40px;
        text-decoration: none;
        color: #666;
    }
    &:hover {
        background: #6096ff;
        color: #fff;
        a {
        color: #fff;
        }
    }
    }
    .cur{
        background: #6096ff;
        color: #fff;
        a {
        color: #fff;
        }
    }
}
</style>

