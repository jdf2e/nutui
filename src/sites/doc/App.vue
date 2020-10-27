<template>
  <div class="doc-header">
    NutUI
  </div>
  <div class="doc-nav">
    <ol>
      <li>指南</li>
      <ul>
        <li>介绍</li>
        <li>快速上手</li>
        <li>主题定制</li>
        <li>国际化</li>
        <li>更新日志</li>
        <li>资源</li>
      </ul>
    </ol>
    <ol v-for="_nav in nav" :key="_nav">
      <li>{{ _nav.name }}</li>
      <ul>
        <li v-for="_package in _nav.packages" :key="_package">
          <router-link :to="_package.name.toLocaleLowerCase()">{{ _package.name }}&nbsp;&nbsp;{{ _package.cName }}
          </router-link>
        </li>
      </ul>
    </ol>
  </div>
  <div class="doc-h5-preview">
    <iframe :src="demoUrl" frameborder="0"></iframe>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { nav, versions } from "@/config";
export default defineComponent({
  name: "doc",
  components: {},
  data() {
    return {
      nav,
      versions,
      demoUrl: `demo.html`
    };
  },
  watch: {
    $route(to) {
      const { origin, pathname } = window.location;
      this.demoUrl = `${origin}${pathname.replace("index.html", "")}demo.html#${
        to.path
      }`;
    }
  }
});
</script>

<style lang="scss">
#doc {
  font-family: PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: 100%;
  background: #f7f8fa;
  height: 100%;
  width: 100%;
}
.doc {
  &-header {
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    background: $button-default-bg-color;
    height: 57px;
    line-height: 57px;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
    color: $white;
  }

  &-nav {
    position: fixed;
    z-index: 1;
    background: #fff;
    width: 220px;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 80px 20px;
    > ol {
      border-bottom: 1px solid red;
      > li {
        font-weight: bold;
      }
      > ul {
        li {
        }
      }
    }
  }

  &-h5-preview {
    height: 667px;
    width: 375px;
    position: fixed;
    right: 30px;
    top: 100px;
    box-shadow: #ebedf0 0 4px 12px;
    border-radius: 12px;
    overflow: hidden;

    iframe {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
