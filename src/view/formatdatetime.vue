<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="日期时间格式化组件，用于将时间戳或者已格式化的时间字符串转换成指定格式。" 
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        
        <div><nut-formatdatetime :datetime="1280977330748" dateformat="yyyy-mm-dd hh:ii:ss"></nut-formatdatetime></div>
        <nut-codebox :code="demo1"></nut-codebox>
        <br>
        <div><nut-formatdatetime datetime="2015-02-18 15:23:48" dateformat="mm/dd/yyyy hh:ii:ss"></nut-formatdatetime></div>
        <nut-codebox :code="demo2"></nut-codebox>
        <br>
        <div><nut-formatdatetime datetime="1280977330748" dateformat="yyyy-mm-dd"></nut-formatdatetime></div>
        <nut-codebox :code="demo3"></nut-codebox>
        <br>
        <div><nut-formatdatetime datetime="1280977330748" dateformat="hh:ii"></nut-formatdatetime></div>
        <nut-codebox :code="demo4"></nut-codebox>

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
          demo1:`<nut-formatdatetime 
:datetime="1280977330748" 
dateformat="yyyy-mm-dd hh:ii:ss"
></nut-formatdatetime>`,
          demo2:`<nut-formatdatetime 
datetime="2015-02-18 15:23:48" 
dateformat="mm/dd/yyyy hh:ii:ss"
></nut-formatdatetime>`,
          demo3:`<nut-formatdatetime 
datetime="1280977330748" 
dateformat="yyyy-mm-dd"
></nut-formatdatetime>`,
          demo4:`<nut-formatdatetime 
datetime="1280977330748" 
dateformat="hh:ii"
></nut-formatdatetime>`,
        }
    }
}
</script>

<style>
</style>
