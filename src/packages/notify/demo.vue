<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="notify1('通知内容')">
        <span slot="title">
          <label>基础用法</label>
        </span>
      </nut-cell>
    </div>
    <h4>通知类型</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="notify2('通知内容')">
        <span slot="title">
          <label>主要通知</label>
        </span>
      </nut-cell>
    </div>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="notify3('成功通知')">
        <span slot="title">
          <label>成功通知</label>
        </span>
      </nut-cell>
    </div>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="notify4('危险通知')">
        <span slot="title">
          <label>危险通知</label>
        </span>
      </nut-cell>
    </div>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="notify5('警告通知')">
        <span slot="title">
          <label>警告通知</label>
        </span>
      </nut-cell>
    </div>
    <h4>自定义样式</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="cusBgNotify('自定义背景色和字体颜色')">
        <span slot="title">
          <label>自定义背景色和字体颜色</label>
        </span>
      </nut-cell>
    </div>
    <h4>自定义时长</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="timeNotify('自定义时间')">
        <span slot="title">
          <label>自定义时长</label>
        </span>
      </nut-cell>
    </div>
    <h4>组件调用</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="showNotify">
        <span slot="title">
          <label>组件调用</label>
        </span>
      </nut-cell>
      <nut-notify :showPopup="show" type="success" msg="通知内容"></nut-notify>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    notify1(val) {
      this.$notify.text(val, {
        onClosed() {
          console.log('close');
        },
        onClick: () => {
          console.log('click');
        },
        onOpened: () => {
          console.log('opened');
        }
      });
    },
    notify2(val) {
      this.$notify.primary(val);
    },
    notify3(val) {
      this.$notify.success(val);
    },
    notify4(val) {
      this.$notify.danger(val);
    },
    notify5(val) {
      this.$notify.warn(val);
    },
    cusBgNotify(val) {
      this.$notify.text(val, {
        color: '#ad0000',
        background: '#ffe1e1'
      });
    },
    timeNotify(val) {
      this.$notify.text(val, {
        duration: 10000
      });
    },
    showNotify() {
      // debugger;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    }
  }
};
</script>
