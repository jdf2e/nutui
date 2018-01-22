<template>
    <div>
        <h1>弹出框</h1>
        <p>可自定义内容的弹窗框</p>
        
        <!-- <a class="button button-primary" href="javascript:;" @click="popupDemo1">Demo</a> -->
        <a class="button button-primary" href="/demo.html#/Popup" target="_blank">Demo</a>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        <!-- DEMO代码 -->
        <pre><code v-highlight>this.$dialog(options);</code></pre>
        <h5>props</h5>
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
              <td>popupVisible.sync</td>
              <td>显示状态</td>
              <td>Boolean</td>
              <td>false</td>
              <td>false/true</td>
            </tr>
            <tr>
              <td>configItems</td>
              <td>配置项</td>
              <td>Object</td>
              <td>{}</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.popupHeaderVisible</td>
              <td>是否显示头部</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.hasCloseBtn</td>
              <td>是否有关闭按钮</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.cancelText</td>
              <td>头部取消按钮文案</td>
              <td>String</td>
              <td>取消</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.okText</td>
              <td>头部确定按钮文案</td>
              <td>String</td>
              <td>确定</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.popupFooterVisible</td>
              <td>是否显示底部</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.btnAmount</td>
              <td>底部展示按钮的数量</td>
              <td>Number</td>
              <td>2</td>
              <td>2/1</td>
            </tr>
            <tr>
              <td>configItems.onlyOneBtnText</td>
              <td>仅一个按钮文案</td>
              <td>String</td>
              <td>去购买</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.cancelBtnText</td>
              <td>底部取消按钮文案</td>
              <td>String</td>
              <td>取消</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.okBtnText</td>
              <td>底部确定按钮文案</td>
              <td>String</td>
              <td>确定</td>
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
                <td>cancel-click</td>
                <td>点击顶部取消按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
              <tr>
                <td>ok-click</td>
                <td>点击顶部确定按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
              <tr>
                <td>onlyone-btn-click</td>
                <td>点击底部仅有一个按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
              <tr>
                <td>cancel-btn-click</td>
                <td>点击底部取消按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
              <tr>
                <td>ok-btn-click</td>
                <td>点击底部取消按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scope>
</style>
