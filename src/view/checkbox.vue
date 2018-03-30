<template>
    <div class="chexkbox-demo">
        <h1>Checkbox</h1>
        <p>复选按钮</p>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        <!-- DEMO代码 -->
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-checkbox></nut-checkbox>
        <pre><code v-highlight v-text="demo1"></code></pre>

        <p>点击触发事件</p>
        <nut-checkbox :checked.sync="checked" @change="checkboxChange"></nut-checkbox>
        <pre><code v-highlight v-text="demo2"></code></pre>
        <pre><code v-highlight>export default {
    data(){
        return{
            checked:false
        }
    }
    methods:{
        checkboxChange(){
            alert(this.checked);
        }
    }
}</code></pre>
        <p>禁用选项</p>
        <nut-checkbox :name="'test2'" :checked.sync="checked2" :disabled="true"></nut-checkbox>
        <nut-checkbox :name="'test2'" :checked.sync="checked2"></nut-checkbox>
        <pre><code v-highlight v-text="demo3"></code></pre>

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
              <td>checked.sync</td>
              <td>是否选中</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>Boolean</td>
              <td>false</td>
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
              <td>change</td>
              <td>选择时触发回调函数</td>
              <td>唯一参数为事件对象</td>
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
             demo1:`<nut-checkbox></nut-checkbox>`,
             demo2:`<nut-checkbox 
:checked.sync="checked" 
@change="checkboxChange">
</nut-checkbox>`,
            demo3:`<nut-checkbox 
:checked.sync="checked2" 
:disabled="true">
</nut-checkbox>

<nut-checkbox 
:checked.sync="checked2">
</nut-checkbox>`,
             checked:false,
             checked2:false
        }
    },
    methods:{
        checkboxChange(event){
          alert(this.checked);
        }
    }
}
</script>

<style lang="scss">
.chexkbox-demo .nut-checkbox{
    display:inline-block;
    margin-right:5px;
}
</style>
