<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="一种可以生成二维码的组件。" 
        :showQrCode="true"></nut-docheader>
        <h6>默认用法</h6>
        <nut-codebox :code="demo1"  imgUrl="../asset/img/demo/qrcode1.png"></nut-codebox>

        
        <!-- <pre><code v-highlight v-text="demo1"></code></pre> -->
        <h6>可配置二维码内容，和配置二维码的高度和宽度</h6>
        <!-- DEMO代码 -->
        <nut-codebox :code="demo2"  imgUrl="../asset/img/demo/qrcode2.png"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo2" ></code></pre> -->
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
                  <td>content</td>
                  <td>二维码内容（必填）</td>
                  <td>String</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>QCWidth</td>
                  <td>二维码图片的宽度（单位px）</td>
                  <td>Number</td>
                  <td>100</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>QCHeight</td>
                  <td>二维码图片的高度（单位px）</td>
                  <td>Number</td>
                  <td>100</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>fontColor</td>
                  <td>二维码前面的颜色</td>
                  <td>Number</td>
                  <td>0.5</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>backColor</td>
                  <td>二维码背景色</td>
                  <td>Number</td>
                  <td>0.5</td>
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
            QCWidth:100,
            QCHeight:100,
            text:'http://www.baidu.com',
            fontColor:'#000',
            backColor:'#fff',
            demo1:`<nut-qrcode content='http://www.baidu.com'></nut-qrcode>`,
            demo2:`<nut-qrcode QCWidth=150 
            QCHeight=150 
            content='http://www.baidu.com' 
            fontColor='green' 
            backColor='#fff'>
</nut-qrcode>`
        }
        
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
</style>
