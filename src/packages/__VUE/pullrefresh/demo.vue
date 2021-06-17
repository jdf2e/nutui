<template>
  <div class="demo full">
    <h2>纵向</h2>
    <nut-cell>
      <div class="vertical">
        <nut-pullrefresh
          @refresh="refresh"
          @down-refresh="downRefresh"
          :useWindow="false"
          containerId="pull"
        >
          <div class="content" id="pull">
            <div class="main">
              <div
                class="pull-data"
                v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
                :key="item"
                >我是测试数据 {{ item }}</div
              >
            </div>
          </div>
        </nut-pullrefresh>
      </div>
    </nut-cell>

    <h2>横向</h2>
    <nut-cell>
      <div class="horizontal">
        <nut-pullrefresh
          @refresh="refresh"
          @down-refresh="downRefresh"
          :useWindow="false"
          containerId="pullH"
          direction="horizontal"
        >
          <div class="contentH" id="pullH">
            <div class="mainH">
              <div
                class="pull-data"
                v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
                :key="item"
                >我是测试数据 {{ item }}</div
              >
            </div>
          </div>
        </nut-pullrefresh>
      </div>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('pullrefresh');
export default createDemo({
  props: {},
  setup() {
    const refresh = (done) => {
      console.log('上拉加载');
      setTimeout(() => {
        done();
      }, 1000);
    };

    const downRefresh = (done) => {
      console.log('下拉刷新');
      setTimeout(() => {
        done();
      }, 1000);
    };
    return { refresh, downRefresh };
  }
});
</script>

<style lang="scss" scoped>
.vertical {
  height: 300px;
  overflow: hidden;
  width: 100%;
}
.content {
  height: 100%;
  overflow: auto;
}

.horizontal {
  width: 100%;
}
.contentH {
  height: 100px;
  overflow: auto;
  .mainH {
    display: flex;
    height: 100%;
    .pull-data {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      height: 90%;
      width: 120px;
      justify-content: center;
      padding: 0;
      margin: 2px 10px 0 0;
      background: white;
      border-radius: 7px;
      box-shadow: 0px 1px 7px 0px #edeef1;
      line-height: 19px;
      font-size: 13px;
      color: #666666;
    }
  }
}
.content {
  .main {
    .pull-data {
      margin: 15px auto 20px;
      padding-left: 16px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 46px;
      background: rgba(255, 255, 255, 1);
      border-radius: 7px;
      box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
      line-height: 19px;
      font-size: 13px;
      color: rgba(102, 102, 102, 1);
      &:first-child {
        margin-top: 0 !important;
      }
      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>
