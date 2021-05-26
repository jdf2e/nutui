<template>
  <div class="demo">
    <div class="demo-header">
      <img
        src="https://nutui.jd.com/3x/assets/logo-red.022bc3e5.png"
        alt=""
        srcset=""
      />
      <div class="info">
        <h1 class="title">NutUI-Taro-Vue</h1>
        <p class="desc">京东风格的轻量级移动端 Vue 组件库</p>
      </div>
    </div>
    <div class="demo-components">
      <ol v-for="_nav in nav" :key="_nav">
        <li>{{ _nav.name }}</li>
        <ul>
          <template v-for="_package in _nav.packages" :key="_package">
            <li v-if="_package.show">
              <a :href="_package.path"
                >{{ _package.name }}&nbsp;&nbsp;{{ _package.cName }}</a
              >
              <nut-icon size="14px" color="#979797" name="right"></nut-icon>
            </li>
          </template>
        </ul>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { nav, versions } from '@/config.json';
export default defineComponent({
  name: 'doc',
  setup() {
    return reactive({
      nav,
      versions
    });
  }
});
</script>
<style lang="scss">
.demo {
  height: 100%;
  width: 100%;
  padding-top: 30px;
  &-header {
    display: flex;
    align-items: center;
    padding: 0 34px;
    height: 117px;
    > img {
      width: 67px;
      height: 67px;
      margin-right: 18px;
      flex-shrink: 0;
    }
    .info {
      display: flex;
      flex-direction: column;
      .title {
        height: 48px;
        line-height: 48px;
        font-size: 34px;
        color: rgba(51, 51, 51, 1);
      }
      .desc {
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
  &-components {
    background: #f7f8fa;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
    padding: 30px 25px;
    > ol {
      margin-bottom: 17px;
      > li {
        line-height: 20px;
        font-size: 14px;
        color: rgba(144, 156, 164, 1);
        margin-bottom: 10px;
      }
      > ul {
        li {
          display: flex;
          align-items: center;
          padding: 0 24px;
          width: 100%;
          height: 45px;
          line-height: 45px;
          background: rgba(255, 255, 255, 1);
          border-radius: 22px;
          box-shadow: 0px 1px 4px 0px rgba(102, 102, 102, 0.06);
          margin-bottom: 13px;
          box-sizing: border-box;
          a {
            width: 100%;
            height: 100%;
            font-size: 15px;
            font-weight: bold;
            display: block;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
  }
}
</style>
