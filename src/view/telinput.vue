<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="电话号码输入框，支持自定义间隔位数，支持基本电话号码校验。" 
        :showQrCode="true"></nut-docheader>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        <h5>示例</h5>
        <h6>默认用法</h6>
        
        <nut-codebox code="<nut-telinput></nut-telinput>" :imgUrl="['../asset/img/demo/telinput1.png']"></nut-codebox>        
        <!-- <pre><code v-highlight v-text="demo1"></code></pre> -->
        <h6>自定义输入框宽高、带有清除按钮</h6>
        
        <nut-codebox :code="demo2" :imgUrl="['../asset/img/demo/telinput2.png']"></nut-codebox>        
        
        <h6>增加回调函数，且提示信息位置在输入框下面</h6>
       
        <nut-codebox :code="demo3" :imgUrl="['../asset/img/demo/telinput3.png']"></nut-codebox>        
        <nut-codebox :code="demo5"></nut-codebox>        
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
              <td>gapone</td>
              <td>第1个空格的位置</td>
              <td>Number</td>
              <td>3</td>
              <td>--</td>
            </tr>
            <tr>
              <td>gapsec</td>
              <td>第2个空格的位置</td>
              <td>Number</td>
              <td>7</td>
              <td>--</td>
            </tr>
            <tr>
              <td>telWidth</td>
              <td>输入框的宽度，支持数字和百分比</td>
              <td>String</td>
              <td>4(单位rem)</td>
              <td>--</td>
            </tr>
            <tr>
              <td>telHeight</td>
              <td>输入框的高度，支持数字和百分比</td>
              <td>String</td>
              <td>1(单位rem)</td>
              <td>--</td>
            </tr>
            <tr>
              <td>clearPic</td>
              <td>是否显示清除按钮</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>tipsInfo</td>
              <td>错误提示信息</td>
              <td>String</td>
              <td>请输入正确的电话号码</td>
              <td>--</td>
            </tr>
            <tr>
              <td>placeText</td>
              <td>输入框默认提示文案</td>
              <td>String</td>
              <td>请输入电话号码</td>
              <td>--</td>
            </tr>
            <tr>
              <td>tipsPosition</td>
              <td>错误提示信息位置</td>
              <td>String</td>
              <td>'left'提示信息在输入框左侧</td>
              <td>'left'/'bottom'</td>
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
              <td>pass-test</td>
              <td>输入的是正确的电话号码时触发事件</td>
              <td>返回带有间隔的电话号码</td>
            </tr>
            <tr>
              <td>error-tel</td>
              <td>输入的是错误的电话号码时触发事件</td>
              <td>返回带有间隔的电话号码</td>
            </tr>
            <tr>
              <td>clear</td>
              <td>点击清除按钮时的触发事件</td>
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
          demo1:`<nut-telinput></nut-telinput>`,
          demo2:
`<nut-telinput 
  telWidth="50%" 
  telHeight="1" 
  :clearPic="true"
></nut-telinput>`,
          demo3:
`<nut-telinput 
:gapone="3" 
:gapsec="7" 
telWidth="4"
telHeight="1" 
:clearPic="true"
tipsInfo="请输入正确的电话号码"
placeText="请输入自定义文案"
tipsPosition="bottom"
class="input-telnum"
@pass-test="passTest"
@clear="clear"
@error-tel="errorTel"
></nut-telinput>`,
demo4:
`clear:function(){
  console.log('点击了清除按钮');
},
passTest:function(value){
  console.log(value);
},
errorTel:function(value){
  console.log('error'+value)
}`,
demo5:
`.input-telnum .nut-telinput-box ::placeholder{
    color:green;
};`
        }
    },
    methods:{
      clear:function(){
        console.log('点击了清除按钮');
      },
      passTest:function(value){
        console.log(value);
      },
      errorTel:function(value){
        console.log('error'+value)
      }
    }
}
</script>

<style>
.input-telnum .nut-telinput-box ::placeholder{
    color:green;
};
</style>
