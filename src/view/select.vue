<template>
    <div>
        <h1>Select</h1>
        <p>从页面底部弹出的select选择器，支持多级选择及异步请求的多级选择。</p>

        <a class="button button-primary" href="/demo.html#/select" target="_blank">Demo</a>

        <pre><code v-highlight>{{demo1.txt}}</code></pre>

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
              <td>data</td>
              <td>显示数据，类型为[{"n": "1","s":[{"n","2"}]}]</td>
              <td>Array</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>selected</td>
              <td>选中值，每一列的显示值已‘-’分割，如设置的值本列未找到，则默认第一个，例“2017-1-2”</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>nodeKey</td>
              <td>跟数据节点值，如传入数据为[{"n":"1","b":"2"}],nodeKey配置为n，则列表显示1</td>
              <td>String</td>
              <td>--</td>
              <td>n</td>
            </tr>
            <tr>
              <td>childKey</td>
              <td>子数据节点值，如传入数据为[{"n":"1","s":[{"n","1"}]}],childKey配置为s，则子列表为s数据</td>
              <td>String</td>
              <td>--</td>
              <td>s</td>
            </tr>            
            <tr>
              <td>async</td>
              <td>是否支持异步，当为true时，data配置一层即可，列拖动时会返回对应索引，可动态添加后面的子列</td>
              <td>Boolean</td>
              <td>--</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
        </div>
        
        <h5>Slot</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>名称</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>显示Slot</td>
              <td>默认显示的自定义样式Slot</td>
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
              <td>slideEnd</td>
              <td>当异步开启时，每当滑动结束时触发</td>
              <td>[数据数据],数据索引对应列（用于更新数据）</td>
            </tr>
            <tr>
              <td>change</td>
              <td>点击确认时触发</td>
              <td>[每列选中的对象值]</td>
            </tr>
          </tbody>
        </table>
        </div>
        
        <h5>Methods</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>传入参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>updateSelect</td>
              <td>当异步开启时，动态添加第二列时调用</td>
              <td>符合列表数据结构（nodeKey与childKey）</td>
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
          demo1: {
            txt: `<nut-select class="demo1-select" 
                  :selected="demo1.selected" 
                  :data="demo1.data" 
                  @change="demo1Change">{{demo1.selected}}</nut-select>
                  export default {
                    methods:{
                      demo1Change(val) {
                        this.demo1.selected = val.join('-');
                      }
                    }
                  }`
          },
        }
    },
    methods:{
    }
}
</script>

<style>

</style>
