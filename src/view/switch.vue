<template>
    <div>
        <nut-docheader
        :name="$route.name"
        :chName="$route.params.chnName"
        type="Component"
        desc="一种滑动开关，通过点击使按钮左右滑动，同时触发对应的开关状态。"
        :showQrCode="true"></nut-docheader>
        <!-- <a class="button-primary button" href="/demo.html#/switch" target="_blank">DEMO</a> -->
        <h6>默认用法</h6>
        <nut-codebox :code="demo1" :imgUrl="['../asset/img/demo/switch1.png','../asset/img/demo/switch2.png']"></nut-codebox>
        <h6>自定义颜色</h6>
        <nut-codebox :code="demo2" :imgUrl="['../asset/img/demo/switch3.png','../asset/img/demo/switch4.png']"></nut-codebox>
        <h6>ON/OFF事件</h6>
        <nut-codebox :code="demo3"></nut-codebox>
        <nut-codebox :code="demo4"></nut-codebox>



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
              <td>active.sync</td>
              <td>开关状态</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>width</td>
              <td>组件宽度（单位rem）</td>
              <td>Number</td>
              <td>0.8</td>
              <td>--</td>
            </tr>
            <tr>
              <td>height</td>
              <td>组件高度（单位rem）</td>
              <td>Number</td>
              <td>0.4</td>
              <td>--</td>
            </tr>
            <tr>
              <td>activeBgColor</td>
              <td>打开状态背景颜色</td>
              <td>String</td>
              <td>#F42E2D</td>
              <td>--</td>
            </tr>
            <tr>
              <td>inActiveBgColor</td>
              <td>关闭状态背景颜色</td>
              <td>String</td>
              <td>#FDFDFD</td>
              <td>--</td>
            </tr>
            <tr>
              <td>btnColor</td>
              <td>滑动圆按钮颜色</td>
              <td>String</td>
              <td>#FFFFFF</td>
              <td>--</td>
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
              <td>switch-on</td>
              <td>开关打开时触发</td>
              <td>--</td>
            </tr>
            <tr>
              <td>switch-off</td>
              <td>开关关闭时触发</td>
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
          demo1:`<nut-switch
:active="true"
></nut-switch>`,
          demo2:`<nut-switch
:height="0.3"
:width="0.6"
activeBgColor="#9ABB82"
inActiveBgColor="#EAE7E2"
btnColor="#CBDDDD"
></nut-switch>`,
          demo3:`<nut-switch
@switch-on="switchOnEvt"
@switch-off="switchOffEvt"
></nut-switch>`,
          demo4:`export default {
    methods:{
      switchOnEvt(){
        alert('on');
      },
      switchOffEvt(){
        alert('off');
      }
    }
}`,
        }
    },
    methods:{
      switchOnEvt(){
        alert('on');
      },
      switchOffEvt(){
        alert('off');
      }
    }
}
</script>

<style>

</style>
