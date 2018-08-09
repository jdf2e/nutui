<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="弹出面板，可自定义内容，通常作为基础组件被其他组件依赖。" 
        :showQrCode="true"></nut-docheader>
        <!-- <p>可自定义内容的弹窗框</p> -->
        
        <!-- <a class="button button-primary" href="javascript:;" @click="popupDemo1">Demo</a> -->
        <!-- <a class="button button-primary" href="/demo.html#/Popup" target="_blank">Demo</a> -->
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        <!-- DEMO代码 -->
        <h5>示例</h5>
        <h6>footer含两个操作按钮</h6>
        <nut-codebox :code="demo1" :imgUrl="['../asset/img/demo/popup1.png']"></nut-codebox>
        <h6>footer仅有一个按钮</h6>
        <nut-codebox :code="demo2" :imgUrl="['../asset/img/demo/popup2.png']"></nut-codebox>
        <h6>header含有两个操作按钮</h6>
        <nut-codebox :code="demo3" :imgUrl="['../asset/img/demo/popup3.png']"></nut-codebox>
        <h6>仅含有关闭按钮</h6>
        <nut-codebox :code="demo4" :imgUrl="['../asset/img/demo/popup4.png']"></nut-codebox>
        <h6>默认示例</h6>
        <nut-codebox :code="demo5" :imgUrl="['../asset/img/demo/popup5.png']"></nut-codebox>
        <nut-codebox :code="demo6"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo">
        </code></pre> -->
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
              <td>popupVisible.sync</td>
              <td>显示状态</td>
              <td>Boolean</td>
              <td>false</td>
              <td>false/true</td>
            </tr>
            <tr>
              <td>configItems</td>
              <td>配置项</td>
              <td>Object</td>
              <td>{}</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.randomId</td>
              <td>设置popup组件的顶层id</td>
              <td>String</td>
              <td>''</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.autoClose</td>
              <td>是否自动关闭蒙层（如果是，需要将popupVisible增加.sync修饰符）</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.popupHeaderVisible</td>
              <td>是否显示头部</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.hasCloseBtn</td>
              <td>是否有关闭按钮</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.cancelText</td>
              <td>头部取消按钮文案</td>
              <td>String</td>
              <td>取消</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.cancelClose</td>
              <td>点击头部取消是否关闭面板</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.okText</td>
              <td>头部确定按钮文案</td>
              <td>String</td>
              <td>确定</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.popupFooterVisible</td>
              <td>是否显示底部</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.btnAmount</td>
              <td>底部展示按钮的数量</td>
              <td>Number</td>
              <td>2</td>
              <td>2/1</td>
            </tr>
            <tr>
              <td>configItems.onlyOneBtnText</td>
              <td>仅一个按钮文案</td>
              <td>String</td>
              <td>去购买</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.cancelBtnText</td>
              <td>底部取消按钮文案</td>
              <td>String</td>
              <td>取消</td>
              <td>--</td>
            </tr>
            <tr>
              <td>configItems.cancelAutoClose</td>
              <td>点击底部取消按钮是否关闭面板</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>configItems.okBtnText</td>
              <td>底部确定按钮文案</td>
              <td>String</td>
              <td>确定</td>
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
                <td>cancel-click</td>
                <td>点击顶部取消按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
              <tr>
                <td>ok-click</td>
                <td>点击顶部确定按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
              <tr>
                <td>onlyone-btn-click</td>
                <td>点击底部仅有一个按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
              <tr>
                <td>cancel-btn-click</td>
                <td>点击底部取消按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
              <tr>
                <td>ok-btn-click</td>
                <td>点击底部取消按钮时触发</td>
                <td>返回Event对象</td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      demo1: `<nut-popup 
:popupVisible.sync="visible1" 
:configItems="popup[0]" 
@cancel-btn-click="cancelBtnFn" 
@ok-btn-click="okBtnFn" 
@close-popup="closeMask">
</nut-popup>`,
      demo2: `<nut-popup 
:popupVisible.sync="visible2" 
:configItems="popup[1]" 
@onlyone-btn-click="onlyOneBtnFn">
</nut-popup>`,
      demo3: `<nut-popup 
:popupVisible.sync="visible3" 
:configItems="popup[2]" 
@cancel-click="cancelFn" 
@ok-click="okFn">
</nut-popup>`,
      demo4: `<nut-popup 
:popupVisible.sync="visible4" 
:configItems="popup[3]">
</nut-popup>`,
      demo5: `<nut-popup 
:popupVisible.sync="visible5" 
:configItems="{}">
</nut-popup>`,
      demo6: `
export default {
    data(){
        return{
          visible1: false,
          visible2: false,
          visible3: false,
          visible4: false,
          visible5: false,
          popup: [
            {
              randomId: '0',
              hasCloseBtn: true,
              btnAmount: 2,
              popupHeight: {
                height: '100px'
              },
              cancelAutoClose: false
            },
            {
              hasCloseBtn: true,
              btnAmount: 1
            },
            {
              hasCloseBtn: false,
              popupFooterVisible: false
            },
            {
              hasCloseBtn: true,
              popupFooterVisible: false
            }
          ]
        }
    },
    methods:{
      popupDemo1() {
        this.visible1 = true;
      },
      popupDemo2() {
        this.visible2 = true;
      },
      popupDemo3() {
        this.visible3 = true;
      },
      popupDemo4() {
        this.visible4 = true;
      },
      popupDemo5() {
        this.visible5 = true;
      },
      cancelBtnFn(e) {
        console.log(e.target);
      },
      okBtnFn(e) {
        console.log(e.target);
      },
      onlyOneBtnFn(e) {
        console.log('onlyOneBtnFn')
      },
      cancelFn(e) { 
        console.log('cancelFn');
      },
      okFn(e) {
        console.log('okFn');
      },
      closeMask(e) {
        console.log('closePopup');
        this.visible1 = false;
      }
    }
}
      `
    }
  }
}
</script>

<style lang="scss" scope>
</style>
