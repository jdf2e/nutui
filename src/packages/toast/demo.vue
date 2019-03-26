<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="textToast1('我只传了文案一个参数')">
        <span slot="title">
          <label>只传文案</label>
        </span>
      </nut-cell>
      <nut-cell
        :showIcon="true"
        :isLink="true"
        @click.native="textToast2('我传了文案和显示时长两个参数，多行文字默认居中展示',5000)"
      >
        <span slot="title">
          <label>设置显示时长</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="sucToast('操作成功')">
        <span slot="title">
          <label>Success</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="failToast('操作失败')">
        <span slot="title">
          <label>Fail</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="warnToast('操作警告')">
        <span slot="title">
          <label>Warn</label>
        </span>
      </nut-cell>
    </div>
    <h4>加载提示</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="showLoading()">
        <span slot="title">
          <label>Loading</label>
        </span>
        <span slot="desc">带文案+带透明遮罩（默认）+自动消失</span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="showLoading2()">
        <span slot="title">
          <label>Loading</label>
        </span>
        <span slot="desc">不自动消失+不带遮罩</span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="hideLoading()">
        <span slot="title">
          <label>隐藏Loading</label>
        </span>
        <span slot="desc">点击手动隐藏上面的Loading</span>
      </nut-cell>
    </div>
    <h4>自定义样式</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="cusBgToast('我修改了背景色和透明度')">
        <span slot="title">
          <label>自定义背景色和透明度</label>
        </span>
      </nut-cell>
      <nut-cell
        :showIcon="true"
        :isLink="true"
        @click.native="cusClassToast('我有一个名为 my-class 自定义class')"
      >
        <span slot="title">
          <label>自定义class</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="cusIconToast('自定义Icon')">
        <span slot="title">
          <label>自定义Icon</label>
        </span>
      </nut-cell>
    </div>
    <h4>不共享实例</h4>
    <p>如果不指定id，多个Toast默认将共享一个实例（loading类型与其他类型实例不共享），新的内容和设置将取代旧的，多个Toast不能同时出现。如果不需要共享实例，可以给其设置id。例如，以下两个栗子分别设置了不同id，它们可以同时出现。</p>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="idToast1('我设置了id为123')">
        <span slot="title">
          <label>我设置了id为123</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="idToast2('我设置了id为321')">
        <span slot="title">
          <label>我设置了id为321</label>
        </span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
import locale from "../../mixins/locale";
import { locale as i18n } from "../../locales";

export default {
  mixins: [locale],
  data() {
    return {};
  },
  methods: {
    textToast1(msg) {
      this.$toast.text(msg);
    },
    textToast2(msg, duration) {
      this.$toast.text(msg, { duration });
    },
    sucToast(msg) {
      this.$toast.success(msg, { duration:8000 });
    },
    failToast(msg) {
      this.$toast.fail(msg);
    },
    warnToast(msg) {
      this.$toast.warn(msg);
    },
    showLoading() {
      this.$toast.loading("加载中...", { duration: 3000 });
    },
    showLoading2() {
      if (this.loading) return;
      this.loading = this.$toast.loading("", { cover: false });
    },
    hideLoading() {
      this.loading && this.loading.hide();
      this.loading = null;
    },
    cusBgToast(msg) {
      this.$toast.text(msg, { bgColor: "rgba(50, 50, 50, 0.6)" });
    },
    cusClassToast(msg) {
      this.$toast.text(msg, { customClass: "my-class" });
    },
    cusIconToast(msg) {
      this.$toast.loading(msg, {
        icon:
          "data:image/svg+xml, %3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb(230,230,230)' d='M626.345 121.83c0 53.151-43.08 96.23-96.23 96.23-53.146 0-96.23-43.079-96.23-96.23.004-53.15 43.084-96.23 96.23-96.23 53.145 0 96.23 43.085 96.23 96.23zm-96.23 712.167c-46.505 0-84.199 37.698-84.199 84.198s37.699 84.199 84.199 84.199 84.198-37.699 84.198-84.199-37.693-84.198-84.198-84.198zm398.187-253.84c-33.218 0-60.145-26.92-60.145-60.144 0-33.219 26.927-60.145 60.145-60.145 33.224 0 60.145 26.926 60.145 60.145-.005 33.218-26.931 60.144-60.145 60.144zm-700.145-60.144c0-53.146-43.08-96.23-96.23-96.23-53.146 0-96.23 43.08-96.23 96.23 0 53.145 43.08 96.23 96.23 96.23 53.15 0 96.23-43.085 96.23-96.23zm88.448-349.599c37.581 37.58 37.581 98.509 0 136.085-37.58 37.58-98.508 37.58-136.09 0s-37.58-98.51 0-136.09 98.51-37.58 136.09.005zm444.038 580.127c-28.186 28.185-28.186 73.881-.006 102.067 28.186 28.186 73.882 28.186 102.068 0 28.185-28.186 28.185-73.882 0-102.067-28.18-28.19-73.877-28.19-102.062 0zM845.7 272.476c-18.79 18.79-49.26 18.79-68.04 0-18.795-18.795-18.795-49.26 0-68.045a48.097 48.097 0 0 1 68.04 0c18.79 18.79 18.79 49.26 0 68.045zM316.605 733.527c-37.58-37.58-98.508-37.58-136.09 0s-37.58 98.509 0 136.085c37.582 37.58 98.51 37.58 136.085 0 37.581-37.576 37.581-98.504.005-136.085z'/%3E%3C/svg%3E",
        duration: 3000,
        loadingRotate: true
      });
    },
    idToast1(msg) {
      this.$toast.success(msg, { id: 123 });
    },
    idToast2(msg) {
      this.$toast.text(msg, { id: 321, duration: 4000 });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
