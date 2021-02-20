<template>
  <div class="demo">
    <h2>纵向</h2>
    <nut-cell>
      <div class="vertical">
        <nut-pullrefresh
          @refresh="refresh"
          :useWindow="false"
          containerId="pull"
        >
          <div class="content" id="pull">
            <div class="main">
              <div class="text-data">我是测试数据1</div>
              <div class="text-data">我是测试数据2</div>
              <div class="text-data">我是测试数据3</div>
              <div class="text-data">我是测试数据4</div>
              <div class="text-data">我是测试数据5</div>
              <div class="text-data">我是测试数据6</div>
              <div class="text-data">我是测试数据7</div>
              <div class="text-data">我是测试数据8</div>
              <div class="text-data">我是测试数据9</div>
              <div class="text-data">我是测试数据10</div>
              <div class="text-data">我是测试数据11</div>
              <div class="text-data">我是测试数据12</div>
              <div class="text-data">我是测试数据13</div>
              <div class="text-data">我是测试数据14</div>
              <div class="text-data">我是测试数据15</div>
              <div class="text-data">我是测试数据16</div>
              <div class="text-data">我是测试数据17</div>
              <div class="text-data">我是测试数据18</div>
              <div class="text-data">我是测试数据19</div>
              <div class="text-data">我是测试数据20</div>
              <div class="text-data">我是测试数据21</div>
              <div class="text-data">我是测试数据22</div>
              <div class="text-data">我是测试数据23</div>
              <div class="text-data">我是测试数据24</div>
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
          :useWindow="false"
          containerId="pullH"
          direction="horizontal"
        >
          <div class="contentH" id="pullH">
            <div class="mainH">
              <div class="text-data">我是测试数据1</div>
              <div class="text-data">我是测试数据2</div>
              <div class="text-data">我是测试数据3</div>
              <div class="text-data">我是测试数据4</div>
              <div class="text-data">我是测试数据5</div>
              <div class="text-data">我是测试数据6</div>
              <div class="text-data">我是测试数据7</div>
              <div class="text-data">我是测试数据8</div>
              <div class="text-data">我是测试数据9</div>
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
      setTimeout(() => {
        done();
      }, 1000);
    };
    return { refresh };
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
  .main {
    padding: 10px 0;
  }
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
