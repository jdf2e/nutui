<template>
  <div class="index">
    <div class="index-header">
      <img
        src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
        alt=""
        srcset=""
      />
      <div class="info">
        <h1>NutUI</h1>
        <p>京东风格的轻量级小程序组件库</p>
      </div>
    </div>
    <div class="index-components">
      <ol v-for="_nav in nav" :key="_nav">
        <li>{{ _nav.name }}</li>
        <ul>
          <template v-for="_package in reorder(_nav.packages)" :key="_package">
            <li v-if="_package.show && _package.exportEmpty !== false">
              <a @click="navigateTo(_package.name.toLowerCase(), _nav.enName)">
                {{ _package.name }}
                &nbsp;&nbsp;
                {{ _package.cName }}
              </a>
              <nut-icon size="14px" color="#979797" name="right"></nut-icon>
            </li>
          </template>
        </ul>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import config from '../../../../../../config.json';
import Taro from '@tarojs/taro';
export default {
  name: 'NutUI',
  onShareAppMessage() {
    return {
      title: '',
      path: '/pages/index/index',
      success: function (res) {}
    };
  },
  // onShareTimeline() {
  //   return {
  //     title: '京东风格的轻量级小程序组件库',
  // 	  success: function(res) {}
  //   }
  // },
  setup() {
    const state = reactive({
      nav: config.nav
    });

    const reorder = (packages: any) => {
      return packages.sort(function (x: any, y: any) {
        return x['name'].toLowerCase().localeCompare(y['name'].toLowerCase());
      });
    };

    const navigateTo = (name, enName) => {
      Taro.navigateTo({
        url: `/${enName}/pages/${name}/index`
      });
    };

    return {
      ...toRefs(state),
      reorder,
      navigateTo
    };
  }
};
</script>
<style lang="scss">
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
        font-weight: 500;
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
    ol,
    li {
      list-style: none;
    }
  }
}
</style>
