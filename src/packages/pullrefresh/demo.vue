<template>
  <div class="demo">
    <nut-pullrefresh @refresh="refresh" :useWindow="false" containerId="pull">
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
.content {
  height: 100%;
  overflow: auto;
  .main {
    padding: 10px 0;
    background: #f00;
  }
}
</style>
