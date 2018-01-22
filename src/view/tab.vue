<template>
    <div>
        <h1>Tab</h1>
        <p>一种用于tab切换的选项卡，支持内容区自定义元素。</p>
        <!-- DEMO区域 -->
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-tab @tab-switch="tabSwitch">
            <nut-tab-panel tabTitle="页签名称1">11</nut-tab-panel>
            <nut-tab-panel tabTitle="页签名称2">
              <h2>22</h2>
            </nut-tab-panel>
            <nut-tab-panel tabTitle="页签名称3">33</nut-tab-panel>
            <nut-tab-panel tabTitle="页签名称4">44</nut-tab-panel>
        </nut-tab>
        <pre><code v-highlight v-text="demo1"></code></pre>
        <p>在第二个标签上增加图标,页签导航条在左侧（支持导航条在上下左右位置）</p>
        <nut-tab @tab-switch="tabSwitch"  positionNav="left">
            <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>
            <nut-tab-panel tabTitle="页签2" iconUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABzElEQVQ4y7XVPWgVQRQF4O9t4sIzWPhTRAuxSaUIaSJoYSCdfRohGGE3CbERGztNGWxMJeosJGKZws5KJY1NQAJqJ4gQUUFUECW4ErV4Y3wuuy8qOM0s3DPnnjl7752WmlXk6X6cwlmcqIQfYhF3s1C+rp5t1ZBNYAF78AyP8S6G9+IohvAe57NQ3q4lLPK0DyGqeoLLWMlC+aGScDdGMRfJF5FnodyE/i7stUh2HRezUH6ssyMmuFPk6T1cwQy+YnpLYZGnZ7CEm1kop/3FKvL0BqYwmYXyVite4Sm+4HAWyo3KgX1RyTrma+LtaFEbRxKM40A0eKNGxLFoxSUcrLFgAxcix3iCSbzA/YZb9XV99zdgHkSOyQQjWMtC+bkBvBn37/jW8KM+YQ0jSVTwpofvO+Le6qFQ5OhLbL/W4/5ym8QgiVcabAJkoXyk034ns1C+7cE1iM0Eqxgu8nSgDhX7+jQmYonUYQYwjNVEp6APYawh8yjO6bTaUANmLHIsJVjGKywUebqzBrwSk87jeY26Nq5GjuVq64UslFPbGV8h/L31agI9h0MXfpdfw2FrBnTX1axOzc3geJGnc/58fM3+jP+/AVsh/ecn4AfFGqg7vPafMgAAAABJRU5ErkJggg==">
              <h2>22</h2>
            </nut-tab-panel>
            <nut-tab-panel tabTitle="页签3">33</nut-tab-panel>
            <nut-tab-panel tabTitle="页签4">44</nut-tab-panel>
        </nut-tab>
        <pre><code v-highlight v-text="demo2"></code></pre>
        <p>隐藏tab下面内容，跳转页面</p>
        <nut-tab @tab-switch="tabSwitch" :contentShow="false">
            <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>
            <nut-tab-panel tabTitle="页签2" tabLink="http://www.baidu.com">
              <h2>22</h2>
            </nut-tab-panel>
            <nut-tab-panel tabTitle="页签3" tabLink="http://www.jd.com">33</nut-tab-panel>
        </nut-tab>
        <pre><code v-highlight v-text="demo3"></code></pre>
        <p>给tab页签增加className，可以自定义样式，默认选中第二个标签</p>
        <nut-tab 
        :defIndex="1"
        class="customer-css" 
        @tab-switch="tabSwitch"
        :contentShow="true"
        >
            <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>
            <nut-tab-panel tabTitle="页签2">
              <h2>22</h2>
            </nut-tab-panel>
            <nut-tab-panel tabTitle="页签3">33</nut-tab-panel>
            <nut-tab-panel tabTitle="页签4">44</nut-tab-panel>
        </nut-tab>
        <!-- DEMO代码 -->
        <pre><code v-highlight v-text="demo4"></code></pre>
        <pre><code v-highlight v-text="demo5"></code></pre>
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
              <td>defIndex</td>
              <td>默认选中的tab</td>
              <td>Number</td>
              <td>0</td>
              <td>--</td>
            </tr>
            <tr>
              <td>contentShow</td>
              <td>是否显示tab下面的内容</td>
              <td>boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>tabTitle</td>
              <td>tab选项卡标题</td>
              <td>string</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>iconUrl</td>
              <td>tab标签中的图片地址</td>
              <td>string</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>tabLink</td>
              <td>tab标签中的跳转链接地址</td>
              <td>string</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>positionNav</td>
              <td>tab标签的位置</td>
              <td>string</td>
              <td>'top'</td>
              <td>'top'/'left'/'right'/'bottom'</td>
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
              <td>tab-switch</td>
              <td>点击tab标签时触发事件</td>
              <td>返回index值和自身对象event</td>
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
          demo1:
`<nut-tab @tabSwitch="tab-switch">
    <nut-tab-panel tabTitle="页签名称1">11</nut-tab-panel>
    <nut-tab-panel tabTitle="页签名称2">
      <h2>22</h2>
    </nut-tab-panel>
    <nut-tab-panel tabTitle="页签名称3">33</nut-tab-panel>
    <nut-tab-panel tabTitle="页签名称4">44</nut-tab-panel>
</nut-tab>`,
        demo2:
`<nut-tab @tabSwitch="tab-switch" positionNav="left">
    <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>
    <nut-tab-panel tabTitle="页签2" iconUrl="图片地址">
      <h2>22</h2>
    </nut-tab-panel>
    <nut-tab-panel tabTitle="页签3">33</nut-tab-panel>
    <nut-tab-panel tabTitle="页签4">44</nut-tab-panel>
</nut-tab>`,
        demo3:
`<nut-tab @tabSwitch="tab-switch" :contentShow="false">
    <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>
    <nut-tab-panel tabTitle="页签2" tabLink="http://www.baidu.com">
      <h2>22</h2>
    </nut-tab-panel>
    <nut-tab-panel tabTitle="页签3" tabLink="http://www.jd.com">33</nut-tab-panel>
</nut-tab>`,
        demo4:
`<nut-tab 
:defIndex="1"
class="customer-css" 
@tabSwitch="tab-switch"
:contentShow="true"
>
    <nut-tab-panel tabTitle="页签1">11</nut-tab-panel>
    <nut-tab-panel tabTitle="页签2">
      <h2>22</h2>
    </nut-tab-panel>
    <nut-tab-panel tabTitle="页签3">33</nut-tab-panel>
    <nut-tab-panel tabTitle="页签4">44</nut-tab-panel>
</nut-tab>`,
demo5:
`.customer-css .nut-tab-active .nut-tab-link[data-v-240d0c90]{
  border-bottom: 1px solid #0E90D2;
  background: #F5F7FA;
}
.customer-css .nut-title-nav-list[data-v-240d0c90]{
  background: #fff;
  border-left: 1px solid #F5F7FA;
}
.customer-css .nut-title-nav-list[data-v-240d0c90]:first-child{
  border-left: 0;
};
.customer-css .nut-tab-active[data-v-240d0c90]{
  background: #F5F7FA;
  border: 0;
}
.customer-css .nut-tab-link[data-v-240d0c90]{
  width:100%;
}`,

        }
       
    },
    methods:{
      tabSwitch:function(index,event){
        console.log(index+'--'+event.target);
      },
    }
}
</script>

<style>
    .customer-css .nut-tab-active .nut-tab-link[data-v-240d0c90]{
      border-bottom: 1px solid #0E90D2;
      background: #F5F7FA;
    }
    .customer-css .nut-title-nav-list[data-v-240d0c90]{
      background: #fff;
      border-left: 1px solid #F5F7FA;
    }
    .customer-css .nut-title-nav-list[data-v-240d0c90]:first-child{
      border-left: 0;
    };
    .customer-css .nut-tab-active[data-v-240d0c90]{
      background: #F5F7FA;
      border: 0;
    }
    .customer-css .nut-tab-link[data-v-240d0c90]{
      width:100%;
    }
</style>
