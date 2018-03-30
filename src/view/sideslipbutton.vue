<template>
    <div>
        <h1>SideslipButton</h1>
        <p>左划展示操作按钮，例如删除、收藏等按钮。</p>
        <a class="button button-primary" href="/demo.html#/sideslipbutton" target="_blank">Demo</a>
        <!-- DEMO区域 -->
        <!-- DEMO代码 -->
        <pre><code v-highlight v-text="demo"></code></pre>
        <h5>Props</h5>
        <div class="tbl-wrapper">
          <table class="u-full-width">
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
                <th>可选值/备注</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>during</td>
                <td>缓动效果时长</td>
                <td>Number</td>
                <td>1</td>
                <td>单位是s</td>
              </tr>
              <tr>
                <td>isClickRestore</td>
                <td>是否在点击的时候恢复原状</td>
                <td>Boolean</td>
                <td>true</td>
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
                <td>slide-left</td>
                <td>左划时触发事件</td>
                <td>--</td>
              </tr>
              <tr>
                <td>slide-right</td>
                <td>右划时触发事件</td>
                <td>--</td>
              </tr>
              <tr>
                <td>slide-no</td>
                <td>点击时触发事件</td>
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
            demo: `<nut-sideslipbutton @slide-left="slideLeft" @slide-right="slideRight" @slide-no="slideNo">
    <div slot="slidedom" class="slidedom">
        <div class="addr">
            <p class="name-mobile">159****8888</p>
            <p class="full-addr">北京市大兴区亦庄经济开发中心京东大厦B座</p>
        </div>
        <a class="addr-edit" href="javascript:void(0)"></a>
    </div>
    <div slot="slideoper" class="slideoper">删除/收藏</div>
</nut-sideslipbutton>`
        }
    },
    methods:{
    }
}
</script>


