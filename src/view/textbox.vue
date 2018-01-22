<template>
    <div>
        <h1>TextBox</h1>
        <p>多行文本输入框，带有字数提示、字数限制等功能。</p>
       
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-textbox></nut-textbox>
        <pre><code v-highlight v-text="demo1"></code></pre>

        <p>自定义高度:100px</p>
        <nut-textbox :txtAreaH="100" :maxNum="300"></nut-textbox>
        <pre><code v-highlight v-text="demo2"></code></pre>

        <p>自定义提示语</p>
        <nut-textbox :placeText="'请填写详细情况请填写详细情况'"></nut-textbox>
        <pre><code v-highlight v-text="demo3"></code></pre>

        <p>自定义字数限制</p>
        <nut-textbox :maxNum="100"></nut-textbox>
        <pre><code v-highlight v-text="demo4"></code></pre>

        <p>限制字数不可超出</p>
        <nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="20" textBgColor="#efefef"></nut-textbox>
        <pre><code v-highlight v-text="demo5"></code></pre>

        <p>字数超出报错</p>
        <nut-textbox :maxNum="10" :txtAreaH="20"  @errorFunc="overLength" ></nut-textbox>
        <pre><code v-highlight v-text="demo6"></code></pre>

        <p>自定义文本框背景色</p>
        <nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="20" textBgColor="#feefef"></nut-textbox>
        <pre><code v-highlight v-text="demo7"></code></pre>

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
              <td>String</td>
              <td>50</td>
              <td>--</td>
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
            demo2:`<nut-textbox :txtAreaH="100"></nut-textbox>`,
            demo3:`<nut-textbox :placeText='"请填写详细情况请填写详细情况"'></nut-textbox>`,
            demo4:`<nut-textbox :maxNum="100"></nut-textbox>`,
            demo5:`<nut-textbox :switchMax="true" :maxNum="10" :txtAreaH="20"></nut-textbox>`,
            demo6:`<nut-textbox :maxNum="10" txtAreaH="20"  @errorFunc="overLength" ></nut-textbox>
methods:{
    overLength(){
        alert("字数超出");
    }
}`,
            demo7:`<nut-textbox 
:switchMax="true" 
:maxNum="10" 
:txtAreaH="20" 
textBgColor="#feefef">
</nut-textbox>`,
        }
    },
    methods:{
        overLength(){
            alert('字数超出');
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
