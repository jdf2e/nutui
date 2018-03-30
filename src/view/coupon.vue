<template>
    <div>
        <h1>Coupon</h1>
        <p>一种支持自定义的优惠券展示（京券、东券、运费券、不可用券），支持领取，选中。</p>
        <h5>示例</h5>
        <a class="button button-primary" href="/demo.html#/Coupon" target="_blank">Demo</a>
        <h5>Props</h5>
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
              <td>beanData</td>
              <td>券数据</td>
              <td>Object</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>isSwitch</td>
              <td>是否切换到选择功能</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>isBadge</td>
              <td>是否有角标</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>immediate-use</td>
              <td>点击立即使用时触发</td>
              <td>返回当前优惠券数据</td>
            </tr>
            <tr>
              <td>switch-use</td>
              <td>选中或不选中时触发</td>
              <td>返回当前优惠券数据和是否选中状态</td>
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
        }
    },
    methods:{
    }
}
</script>

<style>
</style>
