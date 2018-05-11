<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="加载等待蒙层。" 
        :showQrCode="true"></nut-docheader>
        <!-- <h1>Loading</h1>
        <p>“加载中”提示蒙层。</p> -->
        <h5>依赖</h5>
        <h6>Mask</h6>
        <h5>基本用法</h5>
        <nut-codebox code="this.$loading(options);"></nut-codebox>
        <!-- <a class="button button-primary" href="javascript:;" @click="showLoading">Demo</a> -->
        <h5>示例</h5>
        <nut-codebox :code="demo"></nut-codebox>
        <nut-codebox code="export default {
    data(){
        return{
          loading:null
        }
    },
    mounted(){
      this.loading = this.$loading({
        maxDuring:5000,
        iconUrl:'//misc.360buyimg.com/mtd/pc/o2_toolbar/1.0.0/home/images/loading.gif'
      });
    },
    methods:{
      showLoading(options){
        this.loading.show();
      },
      hideLoading(options){
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
                <td>'rgba(0,0,0,.5)'</td>
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
                <td>text</td>
                <td>提示文字</td>
                <td>String</td>
                <td>'加载中...'</td>
                <td>--</td>
              </tr>
              </tr>
              <tr>
                <td>textColor</td>
                <td>文字颜色</td>
                <td>String</td>
                <td>'#000000'</td>
                <td>支持HEX、RGBA</td>
              </tr>
              <tr>
                <td>userClose</td>
                <td>是否允许用户点击关闭</td>
                <td>Boolean</td>
                <td>true</td>
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
          loading:null,
          demo:`<a href="javascript:;" @click="showLoading">Demo</a>`
        }
    },
    mounted(){
      this.loading = this.$loading({
        maxDuring:5000,
        iconUrl:'//misc.360buyimg.com/mtd/pc/o2_toolbar/1.0.0/home/images/loading.gif'
      });
    },
    methods:{
      showLoading(options){
        this.loading.show();
      },
      hideLoading(options){
        this.loading.hide();
      },
    }
}
</script>

<style>

</style>
