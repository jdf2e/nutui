<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        :showQrCode="true"></nut-docheader>

        <h5>依赖</h5>
        <h6>Mask</h6>
        <h5>基本用法</h5>
        <nut-codebox code="this.$loading(options);"></nut-codebox>

        <h5>示例</h5>
        <nut-codebox :code="demo" imgUrl="../asset/img/demo/loading1.png"></nut-codebox>
        <nut-codebox code="export default {
    data(){
        return{
          loading:null
        }
    },
    mounted(){
      this.loading = this.$loading({
        fade:true
      });
    },
    methods:{
      showLoading(){
        this.loading.show();
      },
      hideLoading(){
        this.loading.hide();
      },
    }
}"></nut-codebox>


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
                <td>mini</td>
                <td>迷你模式（非全屏），默认</td>
                <td>Boolean</td>
                <td>true</td>
                <td>--</td>
              </tr>
              <tr>
                <td>maxDuring</td>
                <td>最大展示时长</td>
                <td>Number</td>
                <td>0（0为不消失）</td>
                <td>--</td>
              </tr>
              <tr>
                <td>bgColor</td>
                <td>遮罩层颜色</td>
                <td>String</td>
                <td>mini模式：'rgba(0,0,0,.7)'<br>非mini模式：'rgba(0,0,0,.5)'</td>
                <td>支持HEX、RGBA</td>
              </tr>
              <tr>
                <td>iconUrl</td>
                <td>icon图片地址</td>
                <td>String</td>
                <td>''</td>
                <td>--</td>
              </tr>
              <tr>
                <td>iconRotate</td>
                <td>ICON无限旋转动画，mini模式默认开启</td>
                <td>Boolean</td>
                <td>mini模式：true<br>非mini模式：false</td>
                <td>--</td>
              </tr>
              <tr>
                <td>text</td>
                <td>提示文字</td>
                <td>String</td>
                <td>mini模式：''<br>非mini模式：'加载中...'</td>
                <td>--</td>
              </tr>
              <tr>
                <td>textColor</td>
                <td>文字颜色</td>
                <td>String</td>
                <td>mini模式：'#FFFFFF'<br>非mini模式：'#000000'</td>
                <td>支持HEX、RGBA</td>
              </tr>
              <tr>
                <td>fontSize</td>
                <td>文字大小，单位rem</td>
                <td>Number/String</td>
                <td>mini模式：0.22<br>非mini模式：0.28</td>
                <td>支持HEX、RGBA</td>
              </tr>
              <tr>
                <td>height</td>
                <td>mini模式框体高度，单位rem</td>
                <td>Number/String</td>
                <td>'auto'</td>
                <td>--</td>
              </tr>
              <tr>
                <td>width</td>
                <td>mini模式框体宽度，单位rem</td>
                <td>Number/String</td>
                <td>'auto'</td>
                <td>--</td>
              </tr>
              <tr>
                <td>borderRadius</td>
                <td>mini模式圆角边框</td>
                <td>String</td>
                <td>'10%'</td>
                <td>--</td>
              </tr>
              <tr>
                <td>padding</td>
                <td>mini模式内边距，单位rem</td>
                <td>String</td>
                <td>'0.3'</td>
                <td>--</td>
              </tr>
              <tr>
                <td>fade</td>
                <td>是否开启渐隐渐现动效</td>
                <td>Boolean</td>
                <td>false</td>
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
          demo:`<a href="javascript:;" @click="showLoading">Demo</a>`
        }
    },
    mounted(){

    },
    methods:{
    }
}
</script>

<style>

</style>
