<template>
  <div class="demo">
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
                class="text-data"
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
                class="text-data"
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
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('pullrefresh');
export default createDemo({
  props: {},
  setup() {
    const refresh = done => {
      console.log('上拉加载');
      setTimeout(() => {
        done();
      }, 1000);
    };

    const downRefresh = done => {
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
    .text-data {
      height: 90% !important;
      width: 120px !important;
      flex-shrink: 0;
      padding: 0 !important;
      margin: 2px 10px 0 0 !important;
      justify-content: center;
    }
  }
}
.content {
  .main {
    .text-data {
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
