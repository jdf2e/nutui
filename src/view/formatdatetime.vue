<template>
    <div>
        <h1>FormatDatetime</h1>
        <p>将时间戳或者已格式化的时间字符串转换成指定格式</p>
        <h5>示例</h5>
        

        <div><nut-formatdatetime :datetime="1280977330748" dateformat="yyyy-mm-dd hh:ii:ss"></nut-formatdatetime></div>
        <pre><code v-highlight v-text="demo1"></code></pre>
        <div><nut-formatdatetime datetime="2015-02-18 15:23:48" dateformat="mm/dd/yyyy hh:ii:ss"></nut-formatdatetime></div>
        <pre><code v-highlight v-text="demo2"></code></pre>
        <div><nut-formatdatetime datetime="1280977330748" dateformat="yyyy-mm-dd"></nut-formatdatetime></div>
        <pre><code v-highlight v-text="demo3"></code></pre>
        <div><nut-formatdatetime datetime="1280977330748" dateformat="hh:ii"></nut-formatdatetime></div>
        <pre><code v-highlight v-text="demo4"></code></pre>

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
              <td>datetime</td>
              <td>原始时间</td>
              <td>String</td>
              <td>null</td>
              <td>--</td>
            </tr>
            <tr>
              <td>dateformat</td>
              <td>输出格式</td>
              <td>String</td>
              <td>null</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{
          demo1:'<nut-formatdatetime :datetime="1280977330748" dateformat="yyyy-mm-dd hh:ii:ss"></nut-formatdatetime>',
          demo2:'<nut-formatdatetime datetime="2015-02-18 15:23:48" dateformat="mm/dd/yyyy hh:ii:ss"></nut-formatdatetime>',
          demo3:'<nut-formatdatetime datetime="1280977330748" dateformat="yyyy-mm-dd"></nut-formatdatetime>',
          demo4:'<nut-formatdatetime datetime="1280977330748" dateformat="hh:ii"></nut-formatdatetime>',
        }
    }
}
</script>

<style>
</style>
