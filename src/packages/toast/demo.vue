<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="textToast1('我只传了文案一个参数')">
        <span slot="title">
          <label>文字提示</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="textToast2('我传了文案和显示时长两个参数，多行文字默认居中展示', 5000)">
        <span slot="title">
          <label>长文字提示</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="sucToast('操作成功')">
        <span slot="title">
          <label>成功提示</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="failToast('操作失败')">
        <span slot="title">
          <label>失败提示</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="warnToast('操作警告')">
        <span slot="title">
          <label>警告提示</label>
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
        <span slot="desc">带文案+带半透明遮罩+自动消失</span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="showLoading3()">
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
      <nut-cell :showIcon="true" :isLink="true" @click.native="cusClassToast('我有一个名为 my-class 自定义class')">
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
    <h4>共享实例</h4>
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
    <h4>更改默认配置</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="setDefaultOptions()">
        <span slot="title">
          <label>将所有Toast提示展示时长设置为5000毫秒</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="resetDefaultOptions()">
        <span slot="title">
          <label>恢复所有Toast提示默认配置</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="setDefaultOptions2()">
        <span slot="title">
          <label>更改文字提示默认配置</label>
        </span>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="resetDefaultOptions2()">
        <span slot="title">
          <label>恢复文字提示默认配置</label>
        </span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
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
      this.$toast.success(msg, { duration: 3000 });
    },
    failToast(msg) {
      this.$toast.fail(msg);
    },
    warnToast(msg) {
      this.$toast.warn(msg);
    },
    showLoading() {
      this.hideLoading();
      this.$toast.loading('加载中...', {
        duration: 3000
      });
    },
    showLoading2() {
      this.hideLoading();
      this.$toast.loading('加载中...', {
        duration: 3000,
        coverColor: 'rgba(0,0,0,0.5)',
        closeOnClickOverlay: true
      });
    },
    showLoading3() {
      if (this.loading) return;
      this.loading = this.$toast.loading('', {
        cover: false
      });
    },
    hideLoading() {
      this.loading && this.loading.hide();
      this.loading = null;
    },
    cusBgToast(msg) {
      this.$toast.text(msg, {
        bgColor: 'rgba(50, 50, 50, 0.6)'
      });
    },
    cusClassToast(msg) {
      this.$toast.text(msg, { customClass: 'my-class' });
    },
    cusIconToast(msg) {
      this.$toast.text(msg, {
        icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/98294/28/14470/22072/5e65ba08E865683aa/ded7441bdd098511.png',
        duration: 3000
      });
    },
    idToast1(msg) {
      this.$toast.success(msg, { id: 123 });
    },
    idToast2(msg) {
      this.$toast.text(msg, { id: 321, duration: 4000 });
    },
    setDefaultOptions() {
      this.$toast.setDefaultOptions({
        duration: 5000,
        coverColor: 'rgba(0, 0, 0, 0.2)',
        closeOnClickOverlay: true,
        cover: true
      });
      this.$toast.text('将所有Toast提示展示时长设置为5000毫秒，并且点击遮罩层可关闭提示');
    },
    resetDefaultOptions() {
      this.$toast.resetDefaultOptions();
      this.$toast.text('恢复所有Toast提示默认配置');
    },
    setDefaultOptions2() {
      this.$toast.setDefaultOptions('text', {
        size: 'large',
        cover: true,
        coverColor: 'rgba(0, 0, 0, 0.2)',
        duration: 4000,
        closeOnClickOverlay: true
      });
      this.$toast.text('设置文字提示默认配置为：大小设置为large，遮罩层透明度0.2，展示4秒');
    },
    resetDefaultOptions2() {
      this.$toast.resetDefaultOptions('text');
      this.$toast.text('文字提示默认配置已恢复');
    }
  }
};
</script>

<style lang="scss" scoped></style>
