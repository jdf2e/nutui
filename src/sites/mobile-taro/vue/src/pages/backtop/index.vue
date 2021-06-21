<template>
  <view class="demo">
    <nut-backtop @click="click">
      <template v-slot:content>
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
      </template>
    </nut-backtop>
  </view>
</template>

<script>
export default {
  setup() {
    const click = () => {
      console.log('click');
    };

    return {
      click
    };
  }
};
</script>

<style lang="scss">
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
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
  }
}
</style>
