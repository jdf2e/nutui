<template>
  <div class="index">
    <div class="index-header">
      <img :src="logo" alt="" srcset="" />
      <div class="info">
        <h1>{{ title }}</h1>
        <p>{{ desc }}</p>
      </div>
    </div>
    <div class="index-components">
      <ol v-for="_nav in nav" :key="_nav">
        <li>{{ _nav.name }}</li>
        <ul>
          <template v-for="_package in _nav.packages" :key="_package">
            <li v-if="_package.show">
              <router-link :to="_package.name.toLowerCase()"
                >{{ _package.name }}&nbsp;&nbsp;{{ _package.cName }}
              </router-link>
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
import { nav } from '@/config.json';
import { isJDT } from '@/sites/assets/util';
export default defineComponent({
  name: 'doc',
  setup() {
    let baseInfo = {
      logo: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
      title: 'NutUI',
      desc: '京东风格的轻量级移动端 Vue 组件库'
    };
    if (isJDT()) {
      baseInfo.logo =
        'https://img12.360buyimg.com/imagetools/jfs/t1/101920/21/28459/834912/62870b04E0e1f20ec/17425bea5318a22c.png';
      baseInfo.title = 'NutUI JDT';
      baseInfo.desc = '京东科技风格的轻量级移动端 Vue 组件库';
    }

    return {
      nav,
      ...baseInfo
    };
  }
});
</script>
<style lang="scss" scoped>
@import '@/sites/assets/styles/reset.scss';
.index {
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
      h1 {
        height: 48px;
        line-height: 48px;
        font-size: 34px;
        color: rgba(51, 51, 51, 1);
      }
      p {
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
  &-components {
    box-sizing: border-box;
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
