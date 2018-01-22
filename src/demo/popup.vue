<template>
    <div>
        <h1>Popup</h1>
        <p>可自定义内容的弹窗框</p>
        
        <a class="button button-primary" href="javascript:;" @click="popupDemo1">footer含两个操作按钮</a>
        <a class="button button-primary" href="javascript:;" @click="popupDemo2">footer仅有一个按钮</a>
        <a class="button button-primary" href="javascript:;" @click="popupDemo3">header含有两个操作按钮</a>
        <a class="button button-primary" href="javascript:;" @click="popupDemo4">仅含有关闭按钮</a>
        <a class="button button-primary" href="javascript:;" @click="popupDemo5">默认示例</a>
        <nut-popup :popupVisible.sync="visible1" :configItems="popup[0]" @cancel-btn-click="cancelBtnFn" @ok-btn-click="okBtnFn"></nut-popup>
        <nut-popup :popupVisible.sync="visible2" :configItems="popup[1]" @onlyone-btn-click="onlyOneBtnFn"></nut-popup>
        <nut-popup :popupVisible.sync="visible3" :configItems="popup[2]" @cancel-click="cancelFn" @ok-click="okFn"></nut-popup>
        <nut-popup :popupVisible.sync="visible4" :configItems="popup[3]"></nut-popup>
        <nut-popup :popupVisible.sync="visible5" :configItems="{}"></nut-popup>
  </div>
</template>

<script>
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
              hasCloseBtn: true,
              btnAmount: 2
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
      }
    }
}
</script>

<style lang="scss" scope>
</style>
