<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="电梯楼层组件。" 
        :showQrCode="true"></nut-docheader>
        <!-- <h1>Elevator</h1>
        <p>电梯楼层组件</p> -->
        <h5>示例</h5>
        <!-- <a class="button button-primary" href="/demo.html#/Elevator" target="_blank">Demo</a> -->
        <h6>默认用法</h6>
        <nut-codebox :code="demo1" imgUrl="../asset/img/demo/elevator.png"></nut-codebox>
        
        <!-- <pre><code v-highlight v-text="demo1" ></code></pre> -->
        <h6>数据类型</h6>
        <nut-codebox :code="demo2"></nut-codebox>
        
        <!-- <pre><code v-highlight v-text="demo2" ></code></pre> -->
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
                  <td>dataArray</td>
                  <td>渲染楼层数据，为必填项</td>
                  <td>Array</td>
                  <td>[]</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>showIndicator</td>
                  <td>是否显示索引值提示符</td>
                  <td>Boolean</td>
                  <td>--</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>hiddenTime</td>
                  <td>索引值提示符显示的时间，单位ms</td>
                  <td>Number</td>
                  <td>500</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>navHeight</td>
                  <td>索引栏每个索引区域的高度，单位rem</td>
                  <td>Number</td>
                  <td>0.8</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>initIndex</td>
                  <td>进入页面后，当前定位到的索引值</td>
                  <td>Number</td>
                  <td>0</td>
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
              <td>clickNav</td>
              <td>点击/离开索引栏时的回调函数</td>
              <td>返回点击的索引值和title</td>
            </tr>
            <tr>
              <td>clickList</td>
              <td>点击左侧列表时的回调函数</td>
              <td>返回点击的对象数据和所在区域的对象数据</td>
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
      return {
        demo1:`<nut-elevator 
        :dataArray="dataList"  
        :showIndicator="true"
        :navHeight="0.8"
        :initIndex="0" 
        :hiddenTime='500'
        @clickNav="clickNav"
        @clickList="clickList"
></nut-elevator>`,
demo2:`dataList:[
    {
      title:"A",
      list:[//可以为空数组
        {
          name:'安其拉',
          id:'a1'//id字段可以没有
        },
        {
          name:'安琪',
          id:'a2'
        }
      ]
    }    
]`
      }
    },
    methods:{

    }
}
</script>

<style>

</style>
