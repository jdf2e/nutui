<template>
  <div>
    <div v-if="routerName == 'frontcover' || routerName == ''">
      <router-view></router-view>
    </div>
    <div class="md-swaper" @click="clearSearch" v-else>
      <div class="hder">
        <div class="logo">
          <a href="#/index" class="logo-link">
            <img src="./asset/css/i/nut.png" alt>
          </a>
          <span class="version">{{version}}</span>
        </div>
        <div class="h-nav">
          <search/>
          <ul class="list">
            <li class="cur">
              <a href="#/doc">指南</a>
            </li>
            <li>
              <a class="qrcode demoLink" href="/demo.html#/index" target="_blank">
                示例
                <a :href="routerName">
                  <span>请使用手机扫码体验</span>
                  <img
                    src="http://img13.360buyimg.com/uba/jfs/t1/14144/37/3433/5890/5c26d976E7cd98b80/94583409233081cc.png"
                    alt
                  >
                </a>
              </a>
            </li>
            <li>
              <select @change="openwindow">
                <option value="2">2.X</option>
                <option value="1">1.X</option>
              </select>
            </li>
            <li class="github">
              <a target="_back" href="https://github.com/jdf2e/nutui"></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="demo-wrapper">
        <router-view class="demo-nav" name="demonav"></router-view>
        <keep-alive include="index">
          <router-view class="doc-cont" name="main"></router-view>
        </keep-alive>
        <div v-if="showPhone" class="showPhone">
          <div class="ph">
            <div class="bg">
              <img src="./asset/css/i/phtitle.png" alt>
              <div>
                <input type="text" readonly :value="'http://nutui.jd.com/demo.html#/'+routerName">
              </div>
            </div>
            <iframe :src="'//nutui.jd.com/demo.html#/'+routerName+'?ver='+version"></iframe>
          </div>
        </div>
      </div>
      <div class="foot">
        Copyright © 2018~2019
        <a href="//jdc.jd.com" target="_blank">JDC</a>-
        <a target="_blank" href="http://fe.jd.com/">前端开发部</a>
      </div>
    </div>
  </div>
</template>
<script>
import "./asset/css/common.scss";
import "./asset/css/style-blue.scss";
import { packages } from "../../src/config.json";
import { version } from "../../package.json";
import search from "./search.vue";
export default {
  name: "App",
  data() {
    return {
      packages,
      searchList: [],
      searchVal: "",
      routerName: "",
      showPhone: false,
      searchCurName: "",
      searchIndex: 0,
      codeurl: "",
      version
    };
  },
  watch: {
    //  '$route':obj =>{
    //    if(this){
    //      this.routerName = obj.name
    //    }
    //  },
    $route: "fetchData"
  },
  components: {
    search
  },
  methods: {
    openwindow(val) {
      if (val.target.value == 1) {
        window.location.href = " http://nutui.jd.com/1x/";
      }
    },
    choseList(e) {
      let searchIndex = this.searchIndex;
      if (e.keyCode == 40) {
        searchIndex++;
      }
      if (e.keyCode == 38) {
        searchIndex--;
      }
      if (searchIndex < 0) {
        searchIndex = 0;
      }
      let searchList = this.searchList;
      if (searchList.length > 0) {
        let chnName = searchList[searchIndex].chnName;
        if (chnName) {
          this.searchCurName = chnName;
          this.searchIndex = searchIndex;
          if (e.keyCode == 13) {
            this.$router.push({
              path: "/" + searchList[searchIndex].name
            });
            this.searchCurName = "";
            this.searchIndex = 0;
            this.searchList = [];
            this.searchVal = "";
          }
        }
      }
    },
    fetchData(obj) {
      this.routerName = obj.name;
      this.showPhone = false;
      for (let i = 0, item; (item = packages[i]); i++) {
        if (obj.name == item.name) {
          this.showPhone = true;
        }
      }
      let that = this;
      this.qrcode.toDataURL(
        "http://nutui.jd.com/index.html#/" + that.routerName,
        { width: 170 },
        (err, url) => {
          that.codeurl = url;
        }
      );
    },
    onfocus(e) {
      e.target.select();
    },
    clearSearch() {
      this.searchList = [];
    },
    search(e) {
      let val = e.target.value.toLowerCase();
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
      }
    },
    checklist(obj) {
      this.searchVal = "";
      this.searchList = [];
      this.searchCurName = "";
      this.searchIndex = 0;
    }
  },
  created() {
    let that = this;
    let name = this.$route.name;
    for (let i = 0, item; (item = packages[i]); i++) {
      if (name == item.name) {
        this.showPhone = true;
      }
    }
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
* {
  -webkit-tap-highlight-color: transparent;
}
.md-swaper {
  position: relative;
  background: #fff;
  min-height: 100vh;
  padding: 115px 0 200px 0;
  box-sizing: border-box;
  display: flex;
}
.hder {
  position: absolute;
  top: 0;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  height: 64px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  z-index: 42;
  .logo {
    width: 295px;
    height: 65px;
    border-right: 1px solid #d8d8d8;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    .logo-link {
      display: inline-block;
    }
    img {
      display: block;
      width: 120px;
      height: 46px;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0 10px 0 30px;
    }
    color: #999;
    font-size: 12px;
  }
  .version {
    display: inline-block;
    margin-top: 7px;
    vertical-align: bottom;
  }

  .h-nav {
    display: flex;
    padding-left: 42px;
    align-items: center;
    width: 100%;
    select {
      width: 74px;
      height: 28px;
      margin-top: 18px;
      margin-left: 20px;
      font-size: 12px;
    }
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
      z-index: 99;
      top: 27px;
      padding: 0;
      li {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
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
      .cur {
        background: #6096ff;
        color: #fff;
        a {
          color: #fff;
        }
      }
    }
  }
  .list {
    display: flex;
    list-style: none;
    margin-left: auto;
    li {
      padding: 0 10px;
      height: 63px;
      line-height: 63px;
      text-align: center;
    }
    .cur {
      border-bottom: 2px solid #5396ff;
      a {
        color: #5396ff;
      }
    }
    a {
      text-decoration: none;
      font-size: 14px;
      color: #333333;
      cursor: pointer;
    }
    .github {
      a {
        display: inline-block;
        width: 26px;
        height: 26px;
        vertical-align: middle;
        background: url(./asset/css/i/Shape.png) center no-repeat;
        border-radius: 20px;
      }
    }
  }
}

.demo-wrapper {
  display: flex;
  width: 100%;

  //padding: 0 20px 0 0;
  .demo-nav {
    width: 200px;
    flex-shrink: 0;
  }
  .showPhone {
    padding-right: 25px;
    //margin-left: 20px;
    width: 375px;
    flex-shrink: 0;
    position: relative;
    .ph {
      height: 631px;
      width: 375px;
      position: fixed;
      border-radius: 55px;
      top: 100px;
      border-radius: 4px;
      overflow: hidden;
      z-index: 10;
      box-shadow: 0px 0px 9px 5px #eee;
      iframe {
        border: none;
        width: 375px;
        height: 562px;
        padding: 0;
        box-sizing: border-box;
      }
    }
    .bg {
      width: 375px;
      height: 64px;
      padding-top: 5px;
      background: linear-gradient(rgba(55, 55, 55, 0.98), #545456);
      text-align: center;
      img {
        width: 90%;
      }
      input {
        width: 90%;
        height: 28px;
        line-height: 28px;
        color: #fff;
        background-color: #a2a2a2;
        margin: 0 auto;
        border-radius: 4px;
        white-space: nowrap;
        overflow-x: scroll;
        border: none;
        margin-top: 5px;
        padding: 0 5px;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
.foot {
  height: 120px;
  background: #0a0a0a;
  font-size: 16px;
  color: #ffffff;
  line-height: 120px;
  text-align: center;
  margin-top: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

[v-cloak] {
  display: none;
}
body {
  font-size: 16px;
  //background:#F8F8F8;
  margin: 0;
}
.demo-wrapper {
  background-color: #fff;
  // min-height:100%;
}
.doc-cont {
  padding: 8px 40px 8px 0;
  margin-left: 50px;
  box-sizing: border-box;
  flex: 1;
  min-width: 500px;
}
// .button-primary {
//   display: block;
//   margin: 50px 0;
//   height: 38px;
//   padding: 0 24px;
//   color: #555;
//   text-align: center;
//   font-size: 12px;
//   font-weight: 600;
//   line-height: 38px;
//   letter-spacing: 10px;
//   text-transform: uppercase;
//   text-decoration: none;
//   white-space: nowrap;
//   background-color: transparent;
//   border-radius: 4px;
//   border: 1px solid #bbb;
//   cursor: pointer;
//   box-sizing: border-box;
//   color: #fff;
//   background-color: #33c3f0;
//   border-color: #33c3f0;
// }
.demoLink {
  background: #fff;
  position: relative;
  z-index: 99999;
  width: auto;
  height: auto;
  a {
    z-index: 9999;
  }
  &.qrcode {
    span {
      line-height: 64px;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
}
@media screen and (max-width: 1300px) {
  .demo-wrapper {
    .showPhone{
      width:360px;
      .ph{
        width:360px;
        &>div,iframe{
          width:360px;
        }
      }
    }
  }
}
</style>
