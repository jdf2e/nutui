<template>
    <div>
      <nut-docheader
        :name="$route.name"
        :chName="$route.params.chnName"
        type="directive"
        desc="基于animate.css的动画指令"
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <nut-codebox :code="demo1"></nut-codebox>
        <h5>Options</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>v-nut-animate</td>
              <td>指令</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>name</td>
              <td>绑定的动画keyframe名称</td>
              <td>String</td>
              <td>必填</td>
              <td>--</td>
            </tr>
            <tr>
              <td>customAnimations</td>
              <td>animate.css之外自定义的动画</td>
              <td>Array</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>delay</td>
              <td>规定在动画开始之前的延迟</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>规定完成动画所花费的时间</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>iterationCount</td>
              <td>规定动画应该播放的次数</td>
              <td>String</td>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>fillMode</td>
              <td>规定是否应该轮流反向播放动画</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          demo1:`<div v-nut-animate='{
      name: "dash",
      delay: 1000,
      duration: 1500,
      iterationCount: "infinite"
}'>测试</div>`,
        }
    },
    methods:{
    }
}
</script>

<style>
</style>
