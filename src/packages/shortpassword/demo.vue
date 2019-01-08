<template>
  <div class="demo-list">
    <h4>底部短密码</h4>
    <nut-cell :isLink="true" @click.native="showShortpwd" :showIcon="true" title="打开短密码框"></nut-cell>
    <nut-shortpassword
      :visible="isShow"
      @close="shortpwdClose"
      type="bottom"
      link="https://m.jd.com"
    ></nut-shortpassword>
    <nut-cell>
      <span slot="title">您输入的密码是:{{val1}}</span>
    </nut-cell>

    <h4>居中短密码</h4>
    <nut-cell :isLinke="true" @click.native="showShortpwd2" :showIcon="true" title="打开短密码框"></nut-cell>
    <nut-cell>
      <span slot="title">您输入的密码是：{{val2}}</span>
    </nut-cell>

    <nut-shortpassword :visible="isShow2" @close="shortpwdClose2" type="center"></nut-shortpassword>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isShow2: false,
      val1: "",
      val2: ""
    };
  },
  methods: {
    shortpwdClose(val) {
      if (val) this.val1 = val;
      this.isShow = false;
    },
    shortpwdClose2(val) {
      if (val) this.val2 = val;
      this.isShow2 = false;
    },
    showShortpwd() {
      this.isShow = true;
    },
    showShortpwd2() {
      this.isShow2 = true;
    }
  }
};
</script>