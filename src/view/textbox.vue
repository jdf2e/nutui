<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="多行文本输入框，支持字数提示、字数限制等功能。" 
        :showQrCode="true"></nut-docheader>
        <!-- <h1>TextBox</h1>
        <h6>多行文本输入框，带有字数提示、字数限制等功能。</h6> -->
       
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-codebox code="<nut-textbox></nut-textbox>" imgUrl="../asset/img/demo/textbox1.png"></nut-codebox>
        <!-- <nut-textbox></nut-textbox> -->

        <h6>自定义高度:5rem</h6>
        <nut-codebox code="<nut-textbox :txtAreaH='5' :maxNum='300'></nut-textbox>" imgUrl="../asset/img/demo/textbox2.png"></nut-codebox>

        <h6>自定义提示语</h6>
        <nut-codebox code="<nut-textbox placeText='请填写详细情况'></nut-textbox>" imgUrl="../asset/img/demo/textbox3.png"></nut-codebox>
        

        <h6>自定义字数限制</h6>
        <nut-codebox code="<nut-textbox :maxNum='100'></nut-textbox>"></nut-codebox>
        
        <h6>限制字数不可超出</h6>
        <nut-codebox code="<nut-textbox :switchMax='true' 
        :maxNum='10' 
        :txtAreaH='2' 
        textBgColor='#efefef'>
      </nut-textbox>" imgUrl="../asset/img/demo/textbox4.png"></nut-codebox>
        

        <h6>字数超出报错</h6>
        <nut-codebox :code="demo6" imgUrl="../asset/img/demo/textbox5.png"></nut-codebox>
        <nut-codebox :code="demo66"></nut-codebox>

        <h6>自定义文本框背景色</h6>
        <nut-codebox :code="demo7" imgUrl="../asset/img/demo/textbox6.png"></nut-codebox>

        <h6>不显示字数限制</h6>
        <nut-codebox :code="demo8" imgUrl="../asset/img/demo/textbox7.png"></nut-codebox>

        <h6>输入回调返回文字</h6>
        <nut-textbox 
          :maxNum="10" 
          txtAreaH="2"  
          @inputFunc="inputText" 
          ></nut-textbox>
        <nut-codebox :code="demo9" ></nut-codebox>
        
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
              <td>txtAreaH</td>
              <td>文本框高度</td>
              <td>Number</td>
              <td>1rem</td>
              <td></td>
            </tr>
            <tr>
              <td>placeText</td>
              <td>自定义placeholder文案提示</td>
              <td>String</td>
              <td>请您在此输入</td>
              <td>--</td>
            </tr>
            <tr>
              <td>maxNum</td>
              <td>最大字数</td>
              <td>Number</td>
              <td>50</td>
              <td>--</td>
            </tr>
            <tr>
              <td>switchMax</td>
              <td>控制字数超出是否不可输入，注意：最大字数限制，请设置maxNum</td>
              <td>Boolean</td>
              <td>false</td>
              <td>--</td>
            </tr>
            <tr>
              <td>textBgColor</td>
              <td>设置输入框背景色</td>
              <td>String</td>
              <td>#fff</td>
              <td>--</td>
            </tr>
            <tr>
              <td>limitShow</td>
              <td>不显示字数限制</td>
              <td>Boolean</td>
              <td>true</td>
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
              <th>回调</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>errorFunc</td>
              <td>输入字数超过限定字数时触发事件</td>
              <td>--</td>
            </tr>
            <tr>
              <td>inputText</td>
              <td>文字输入事件回调，默认传回输入文本</td>
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
            demo1:`<nut-textbox></nut-textbox>`,
            demo2:`<nut-textbox 
:txtAreaH="10"
></nut-textbox>`,
            demo3:`<nut-textbox 
placeText="请填写详细情况"
></nut-textbox>`,
            demo4:`<nut-textbox 
:maxNum="100"
></nut-textbox>`,
            demo5:`<nut-textbox 
:switchMax="true" 
:maxNum="10" 
:txtAreaH="2"
></nut-textbox>`,
            demo6:`<nut-textbox 
:maxNum="10" 
txtAreaH="2"  
@errorFunc="overLength" 
></nut-textbox>`,
            demo66:`export default {
  methods:{
      overLength(){
          alert("字数超出");
      }
  }
}`,
            demo7:`<nut-textbox 
:switchMax="true" 
:maxNum="10" 
:txtAreaH="2" 
textBgColor="#feefef">
</nut-textbox>`,

            demo8:`<nut-textbox 
:limitShow="false">
</nut-textbox>`,
            demo9:` <nut-textbox :maxNum="10" txtAreaH="2" @inputFunc="inputText" ></nut-textbox>
export default {
  methods:{
      inputText(val){
           alert(val);
      }
  }
}`
        }
    },
    methods:{
        overLength(){
            alert('字数超出');
        },
        inputText(val){
           alert(val);
        }
    }
}
</script>

<style lang="scss" scoped>
.txt-area{
    padding: 0.1rem 0.2rem 1.5rem;
}
</style>
