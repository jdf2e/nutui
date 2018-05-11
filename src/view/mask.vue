<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="通用遮罩层，通常被其他组件依赖，亦可单独使用。" 
        :showQrCode="true"></nut-docheader>

        <h5>示例</h5>
        <nut-codebox :code="demo"></nut-codebox>
        <nut-codebox code="export default {
    data(){
        return{
          maskShow:false
        }
    },
    methods:{
      maskOpen(){
        console.log('maskOpen方法执行了');
      },
      maskClose(){
        console.log('maskClose方法执行了');
      }
    }
}"></nut-codebox>

        <h5>Props</h5>
        <div class="tbl-wrapper">
          <table class="u-full-width">
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>visible.sync</td>
                <td>显示/隐藏</td>
                <td>Boolean</td>
                <td>false</td>
                <td>".sync"不可省略</td>
              </tr>
              <tr>
                <td>color</td>
                <td>颜色</td>
                <td>String</td>
                <td>'rgba(0,0,0,.5)'</td>
                <td>支持HEX、RGBA</td>
              </tr>
              </tr>
              <tr>
                <td>fade</td>
                <td>是否开启渐显渐隐动效</td>
                <td>Boolean</td>
                <td>false</td>
                <td></td>
              </tr>
              <tr>
                <td>closeOnClickModal</td>
                <td>点击遮罩层是否关闭</td>
                <td>Boolean</td>
                <td>true</td>
                <td>若为false，点击不关闭，但仍会触发'close-mask'事件</td>
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
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>open-mask</td>
                <td>遮罩层显示时触发</td>
                <td>--</td>
              </tr>
              <tr>
                <td>close-mask</td>
                <td>遮罩层隐藏时触发</td>
                <td>即便在closeOnClickModal为true，不允许点击关闭的时候依然会触发此事件</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      demo: `<nut-mask 
:visible.sync="maskShow" 
@open-mask="maskOpen" 
@close-mask="maskClose"
></nut-mask>`,
      maskShow: false
    };
  },
  methods: {
    maskOpen() {
      console.log("maskOpen方法执行了");
    },
    maskClose() {
      console.log("maskClose方法执行了");
    }
  }
};
</script>

<style>

</style>
