<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="返回页面顶部的快捷按钮。" 
        :showQrCode="true"></nut-docheader>
        <!-- <a class="button button-primary" href="/demo.html#/backtop" target="_blank">Demo</a> -->
        <h5>示例</h5>
        <nut-codebox :code="demo1" imgUrl="../asset/img/demo/backtop.png"></nut-codebox>

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
              <td>bottom</td>
              <td>距离窗口底部的距离（单位rem）</td>
              <td>String</td>
              <td>0.8</td>
              <td>--</td>
            </tr>
            <tr>
              <td>right</td>
              <td>距离窗口右侧的距离（单位rem）</td>
              <td>String</td>
              <td>0.8</td>
              <td>--</td>
            </tr>
            <tr>
              <td>screenNum</td>
              <td width="30%">出现该按钮时的滚动距离相对窗口高度的比例。比如，0.5为页面滚动到窗口高度的一半时出现返回按钮。</td>
              <td>Number</td>
              <td>0.5</td>
              <td>--</td>
            </tr>
            <tr>
              <td>arrowColor</td>
              <td>箭头颜色</td>
              <td>String</td>
              <td>'#000000'</td>
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
          demo1:`<nut-gotop 
:bottom="0.8" 
:right="0.3" 
:screenNum="0.5"
></nut-gotop>`
        }
    },
    methods:{
      
    }
}
</script>

<style>

</style>
