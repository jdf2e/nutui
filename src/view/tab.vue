<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="选项卡组件。" 
        :showQrCode="true"></nut-docheader>
        <!-- <h6>一种用于tab切换的选项卡，支持内容区自定义元素。</h6> -->
        <!-- DEMO区域 -->
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-codebox :code="demo1" :imgUrl="['../asset/img/demo/tab1.png']"></nut-codebox>
       <!--  <pre><code v-highlight v-text="demo1"></code></pre> -->
        <h6>在第二个标签上增加图标,页签导航条在左侧（支持导航条在上下左右位置）</h6>
        <nut-codebox :code="demo2" :imgUrl="['../asset/img/demo/tab2.png']"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo2"></code></pre> -->
        <h6>隐藏tab下面内容，跳转页面</h6>
        <nut-codebox :code="demo3" :imgUrl="['../asset/img/demo/tab3.png']"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo3"></code></pre> -->
        <h6>给tab页签增加className，可以自定义样式，默认选中第二个标签</h6>
        <nut-codebox :code="demo4" :imgUrl="['../asset/img/demo/tab4.png']"></nut-codebox>
        <nut-codebox :code="demo5"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo4"></code></pre>
        <pre><code v-highlight v-text="demo5"></code></pre> -->
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
