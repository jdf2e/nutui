<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div class="demo-content">
      <nut-button size="middle" @click.native="textToast1('我只传了文案一个参数')">文字提示</nut-button>
      <nut-button size="middle" @click.native="textToast2('我传了文案和显示时长两个参数，多行文字默认居中展示', 5000)">长文字提示</nut-button>
      <nut-button size="middle" @click.native="sucToast('操作成功')">成功提示</nut-button>
      <nut-button size="middle" @click.native="failToast('操作失败')">失败提示</nut-button>
      <nut-button size="middle" @click.native="warnToast('操作警告')" >警告提示</nut-button>
    </div>
    <h4>加载提示</h4>
    <div class="demo-content">
      <nut-button size="middle" @click.native="showLoading()">透明遮罩</nut-button>
      <nut-button size="middle" @click.native="showLoading2()">半透明遮罩</nut-button>
      <nut-button size="middle" @click.native="showLoading3()">不自动消失+不带遮罩</nut-button>
      <nut-button size="middle" @click.native="hideLoading()">隐藏Loading</nut-button>
    </div>

    <h4>自定义样式</h4>
    <div class="demo-content">
      <nut-button size="middle" @click.native="cusBgToast('我修改了背景色和透明度')">自定义背景色和透明度</nut-button>
      <nut-button size="middle" @click.native="cusClassToast('我有一个名为 my-class 自定义class')">自定义class</nut-button>
      <nut-button size="middle" @click.native="cusIconToast('自定义Icon')">自定义Icon</nut-button>
    </div>

    <h4>共享实例</h4>

    <div class="demo-content">
      <nut-button size="middle" @click.native="idToast1('我设置了id为123')">我设置了id为123</nut-button>
      <nut-button size="middle" @click.native="idToast2('我设置了id为321')">我设置了id为321</nut-button>
    </div>

    <h4>更改默认配置</h4>

    <div class="demo-content">
      <nut-button size="middle" @click.native="setDefaultOptions()">将所有Toast提示展示时长设置为5000毫秒</nut-button>
      <nut-button size="middle" @click.native="resetDefaultOptions()">恢复所有Toast提示默认配置</nut-button>
      <nut-button size="middle" @click.native="setDefaultOptions2()">更改文字提示默认配置</nut-button>
      <nut-button size="middle" @click.native="resetDefaultOptions2()">恢复文字提示默认配置</nut-button>
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

<style lang="scss" scoped>
.demo-content {
  margin: 12px;
}
/deep/.nut-button {
  margin: 4px;
}
</style>
