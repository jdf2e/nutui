<template>
    <div>
        <h1>组件名</h1>
        <p>组件说明文字</p>
        
        <a class="button button-primary" href="/demo.html#/switch" target="_blank">Demo</a>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        <!-- DEMO代码 -->
        <pre><code v-highlight>this.$dialog(options);</code></pre>

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
              <td>msg</td>
              <td>提示文字</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>during</td>
              <td>展示时长</td>
              <td>Number</td>
              <td>3000</td>
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
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
</style>
