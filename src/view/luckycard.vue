<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="刮刮卡。" 
        :showQrCode="true"></nut-docheader>
        <!-- <a class="button button-primary" href="/demo.html#/luckycard" target="_blank">Demo</a> -->
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-codebox :code="demo1" imgUrl="../asset/img/demo/luckycard1.png"></nut-codebox>
        <h6>刮开层和背景层都支持自定义颜色，奖品信息支持HTML</h6>
        <nut-codebox :code="demo2" imgUrl="../asset/img/demo/luckycard2.png"></nut-codebox>
        <h6>刮开层支持图片</h6>
        <nut-codebox :code="demo3" imgUrl="../asset/img/demo/luckycard3.png"></nut-codebox>
        <h6>刮开面积超过设定比值（ratio）触发事件，可调用clearCover方法清除刮开层</h6>
        <nut-codebox :code="demo4" imgUrl="../asset/img/demo/luckycard4.png"></nut-codebox>
        
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
              <td>奖品信息(必传)</td>
              <td>String</td>
              <td>''</td>
              <td>支持HTML</td>
            </tr>
            <tr>
              <td>coverColor</td>
              <td>刮开层颜色</td>
              <td>String</td>
              <td>'#C5C5C5'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>coverImg</td>
              <td>把图片设为刮开层</td>
              <td>String</td>
              <td>''</td>
              <td>不支持跨域。设置此项后coverColor失效。</td>
            </tr>
            <tr>
              <td>backgroundColor</td>
              <td>内容层背景颜色</td>
              <td>String</td>
              <td>'#FFFFFF'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>ratio</td>
              <td>触发事件的刮开比。</td>
              <td>Number</td>
              <td>0.5</td>
              <td>刮开面积超过此比例时触发事件。值介于0-1之间。</td>
            </tr>
            <tr>
              <td>height</td>
              <td>卡片高度</td>
              <td>Number</td>
              <td>2</td>
              <td>单位rem</td>
            </tr>
            <tr>
              <td>width</td>
              <td>卡片宽度</td>
              <td>Number</td>
              <td>4</td>
              <td>单位rem</td>
            </tr>
            <tr>
              <td>fontSize</td>
              <td>中奖信息字号</td>
              <td>Number</td>
              <td>0.4</td>
              <td>单位rem</td>
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
              <td>open</td>
              <td>刮开面积达到指定比例（ratio）时触发的事件</td>
              <td>唯一参数是卡片对象，调用其clearCover方法可以清除刮开层所有可见像素</td>
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
            demo1:`<nut-luckycard 
content="1000万"
></nut-luckycard>`,
            demo2:`<nut-luckycard 
coverColor="#F9CC9D" 
backgroundColor="#C3D08B" 
content="<em>1000<em><strong>元</strong>"
></nut-luckycard>`,
            demo3:`<nut-luckycard 
content="1000万" 
:coverImg="coverImage"
></nut-luckycard>`,
            demo4:`<nut-luckycard 
content="再来一瓶" 
:ratio="0.3" 
@open= "cardOpen"
></nut-luckycard>`,
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
</style>
