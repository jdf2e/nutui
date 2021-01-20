<template>
  <div class="demo" id="elId" ref="scroll">
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
    <nut-backtop @click="handleClick" elId="elId" :distance="100" :bottom="90"><view>无</view></nut-backtop>
    <nut-backtop @click="handleClick" elId="elId" :distance="200"></nut-backtop>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('backtop');

export default createDemo({
  setup(props, { emit }) {
    const handleClick = () => {
      console.log('触发回到顶部');
    };

    return {
      handleClick
    };
  }
});
</script>

<style scoped></style>
