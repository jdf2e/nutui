<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="下拉选择面板，从页面底部弹出，支持多级联动选择及异步请求。" 
        :showQrCode="true"></nut-docheader>
        <!-- <p>从页面底部弹出的select选择器，支持多级选择及异步请求的多级选择</p> -->

        <!-- <a class="button button-primary" href="/demo.html#/select" target="_blank">Demo</a> -->
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-codebox :code="demo.code1" :imgUrl="['../asset/img/demo/select1.png']"></nut-codebox>
        <nut-codebox :code="demo.code11"></nut-codebox>
        <h6>显示内容自定义Slot</h6>
        <nut-codebox :code="demo.code2" :imgUrl="['../asset/img/demo/select2.png']"></nut-codebox>
        <nut-codebox :code="demo.code22"></nut-codebox>
        <h6>异步加载</h6>
        <nut-codebox :code="demo.code3" :imgUrl="['../asset/img/demo/select3.png']"></nut-codebox>
        <nut-codebox :code="demo.code33"></nut-codebox>

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
          demo:{
            code1: `<nut-select class="demo1-select" 
:selected="demo1.selected" 
:data="demo1.data" 
@change="demo1Change">
    {{demo1.selected}}
</nut-select>`,
          code11:`export default {
    data(){
        return{
          demo1: {
              data: [
                {"n": "北京", "s": [{"n": "海淀区"},{"n": "通州区"}]},
                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
                {"n": "河北省", "s": [{"n": "石家庄市", "s": [{"n": "城东区"},{"n": "城西区"}]},{"n":"秦皇岛市"}]},
                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]},
                {"n": "上海", "s": [{"n": "浦东新区"},{"n": "其他区"}]}
              ],
              selected: '河北省-石家庄市-城东区'
          }
        }
    }   
}`,
          code2: `
          <nut-select
  :selected="demo2.selected" 
  :data="demo2.data"
  @change="demo2Change"
  class="demo-select">
  <slot><a class="button button-primary">{{demo2.selected}}</a></slot>
</nut-select>`,
        code22:`export default {
    data(){
        return{
            demo2: {
                selected: '2018-11',
                data: [
                    {"n":"2017","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                    {"n":"2018","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                    {"n":"2019","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                    {"n":"2020","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                    {"n":"2021","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                    {"n":"2022","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]},
                    {"n":"2023","s":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"},{"n":"7"},{"n":"8"},{"n":"9"},{"n":"10"},{"n":"11"},{"n":"12"}]}
                ]
            }
        }
    }   
}`,
    code3: `    
<nut-select
  :selected="demo3.selected" 
  :data="demo3.data"
  :async = true
  @change="demo3Change"
  @slideEnd="slideEnd"
  class="demo-select">
  <slot><a class="button button-primary">{{demo3.selected}}</a></slot>
</nut-select>`,
    code33:`export default {
    data(){
        return{
            demo3: {
              selected: '1',
              data: [
                {"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"},{"n":"5"},{"n":"6"}
              ]
            }
        }
    }   
}`,
    }
    }
    },
    methods:{
    }
}
</script>

<style>

</style>
