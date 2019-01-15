<template>
  <div class="demo-list-wrapper">
    <!-- <nut-noticebar
      :closeMode="true"
      v-if="cacheHasNewVersion"
    >本页面有更新，请<a href="javascript:window.location.reload();">刷新页面</a>。</nut-noticebar> -->

    <h1 class="logo"></h1>
    <div class="version">NutUI 2.0</div>
    <p>NutUI 是一套京东风格的移动端Vue组件库</p>
    <div
      :class="['demo-list-box',{'unfold':foldStatus[item]}]"
      v-for="item in sorts"
      :key="item"
    >
      <h4 @click="toggleFold(item)">
        {{oriSorts[item]}}
        <i></i>
      </h4>
      <ul>
        <template v-for="cpt in packages">
          <li v-if="cpt.showDemo !== false && cpt.sort == item" :key="cpt.name">
            <a :href="'./demo.html#/'+cpt.name">
              {{cpt.name}}
              <span>{{cpt.chnName}}</span>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { packages,sorts } from "../../../src/config.json";
export default {
  name: "index",
  data() {
    return {
      path: "",
      packages: {},
      sortedPackages: [],
      oriSorts:[],
      sorts: [1,2,0,3,4,5],
      foldStatus: []
    };
  },
  methods: {
    toggleFold(idx) {
      this.foldStatus.splice(idx, 1, !this.foldStatus[idx]);
      sessionStorage.setItem("foldStatus", JSON.stringify(this.foldStatus));
    }
  },
  created() {
    this.packages = packages;
    this.oriSorts = sorts;
    
    this.foldStatus = Array(this.sorts.length)
      .join(",")
      .split(",")
      .map(function(key, index) {
        return 0;
      });
  },
  activated() {
    const seVal = sessionStorage.getItem("foldStatus");
    if (seVal && seVal !== "false") {
      this.foldStatus = JSON.parse(seVal);
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-list-wrapper {
  padding: 8px;
  box-sizing: border-box;
  .logo {
    background: url(../asset/img/logo.png) no-repeat;
    background-size: contain;
    height: 100px;
    width: 100px;
    text-align: center;
    margin: 5px auto 15px;
  }
  .version {
    text-align: center;
    font-size: 24px;
  }
  p {
    text-align: center;
    color: #848484;
    margin: 20px 0 30px;
  }
}

.demo-list-box {
  margin: 15px auto;
  width: 95%;
  background: #fff;
  border-radius: 5px;
  h4 {
    position: relative;
    margin: 0;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    i {
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -5px;
      height: 10px;
      width: 10px;
      transform: rotate(0deg);
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(132,132,132)' viewBox='0 0 30 11'%3E%3Cpath d='M15 7.757L27.737.21a1.5 1.5 0 0 1 1.53 2.58c-4.5 2.668-9 5.334-13.5 8a1.503 1.503 0 0 1-1.53 0c-4.5-2.666-9-5.332-13.5-8A1.5 1.5 0 1 1 2.266.21C6.51 2.726 10.756 5.24 15 7.757' fill-rule='evenodd'/%3E%3C/svg%3E")
        no-repeat center;
      background-size: contain;
      transition: transform 0.3s;
    }
  }
  &.unfold {
    h4 i {
      transform: rotate(-180deg);
    }
    ul {
      display: block;
    }
  }
  ul {
    display: none;
    padding: 0 5px;
  }
  li {
    margin: 0 5px;
    overflow: hidden;
    border-top: 1px solid #edeef1;
    border-radius: 2px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 30'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-11 0h30v30h-30z'/%3E%3Cpath d='M7.757 15C5.241 10.755 2.727 6.51.21 2.266A1.5 1.5 0 0 1 2.79.736l8 13.499c.28.472.28 1.058 0 1.53l-8 13.5a1.499 1.499 0 1 1-2.58-1.53L7.757 15z' fill='rgb(132,132,132)' /%3E%3C/g%3E%3C/svg%3E")
      no-repeat right 15px center;
    background-size: 10px 10px;
    a {
      display: block;
      height: 100%;
      padding: 20px;
      text-decoration: none;
      color: #2e2d2d;
    }
    span {
      margin-left: 10px;
      font-size: 14px;
      color: #848484;
    }
    &:active {
      background-color: rgba(200, 200, 200, 0.1);
    }
  }
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
