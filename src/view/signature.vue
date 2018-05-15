<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="签名组件。" 
        :showQrCode="true"></nut-docheader>
        <!-- <h1>Signature</h1>
        <p>一种在线签字组件。</p> -->
        <h5>示例</h5>
        <h6>基本用法</h6>
        <nut-codebox :code="demo1" imgUrl="../asset/img/demo/signature1.png"></nut-codebox>
        <nut-codebox :code="demo3"></nut-codebox>
        <h6>修改签字颜色和画笔粗细</h6>
        <nut-codebox :code="demo2" imgUrl="../asset/img/demo/signature2.png"></nut-codebox>
        
        <!-- <a class="button button-primary" href="/demo.html#/Signature" target="_blank">Demo</a> -->
        <!-- <p>默认用法</p>
        <nut-signature  @confirm="confirm"></nut-signature>
        <pre><code v-highlight v-text="demo1"></code></pre>
        <p>修改签字颜色和画笔粗细</p>
        <nut-signature  @confirm="confirm1" :lineWidth="lineWidth" :strokeStyle="strokeStyle"></nut-signature>
        <pre><code v-highlight v-text="demo2"></code></pre> -->
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
              <td>lineWidth</td>
              <td>画笔宽度</td>
              <td>number</td>
              <td>2</td>
              <td>--</td>
            </tr>
            <tr>
              <td>strokeStyle</td>
              <td>画笔颜色</td>
              <td>string</td>
              <td>#000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>type</td>
              <td>转换为dataUrl格式</td>
              <td>string</td>
              <td>png</td>
              <td>png/jpg</td>
            </tr>
            <tr>
              <td>unSupportTpl</td>
              <td>浏览器不支持显示文案</td>
              <td>string</td>
              <td>对不起，当前浏览器不支持Canvas，无法使用本控件！</td>
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
              <td>confirm</td>
              <td>点击确认签字按钮时触发</td>
              <td>canvas:canvas;data：based64</td>
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
          demo1:`<nut-signature  
@confirm="confirm"
></nut-signature>`,
          demo2:`<nut-signature  
@confirm="confirm1" 
:lineWidth="5" 
strokeStyle="#000000"
></nut-signature>`,
          demo3:`export default {
    methods:{
      confirm(canvas, data) {
            console.log(data);
        }
    }
}`
        }
    },
    methods:{
      confirm(canvas, data) {
            console.log(data);
        },

        confirm1(canvas, data) {
            console.log(data);
        }
    }
}
</script>

<style lang="scss">
.nut-signature{
    .nut-signature-inner{
        height: 200px;
        width: 100%;
        max-width: 400px;
        margin-bottom: 10px;
        border: 1px solid #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nut-signature-unsopport{
        font-size: 12px;
    }
}
</style>
