<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <nut-card
      title="这里是默认卡片内容"
      :footerButtons="footerButtons"
      @click1="clickHandler1"
      @click2="clickHandler2"
    ></nut-card>

    <h4>可添加标题的卡片</h4>
    <nut-card title="卡片标题" content="这里是卡片内容区域"></nut-card>

    <h4>带标题/操作</h4>
    <nut-card
      title="卡片标题"
      content="这里是卡片内容区域"
      :footerButtons="footerButtons"
      @click1="clickHandler1"
      @click2="clickHandler2"
    ></nut-card>

    <h4>可展开/收起的卡片</h4>
    <nut-card title="卡片标题" content="这里是卡片内容区域" openIcon :isOpen="isOpen"  @switchClick="switchClick"></nut-card>

    <h4>通栏卡片</h4>
    <nut-card title="卡片标题" content="这里是卡片内容区域" isFull></nut-card>

    <h4>通过Slot插槽分发内容</h4>
    <nut-card hasContent hasFooter>
      <div slot="title" class="card-title">
        <div class="right">我是标题</div>
        <div class="left">一小时</div>
      </div>
      <div slot="content">这里是卡片内容区域</div>
      <div slot="footer">
        <nut-button size="small" type="bottom" @click="clickHandler1">操作一</nut-button>
        <nut-button size="small" type="bottom" @click="clickHandler2">操作二</nut-button>
      </div>
    </nut-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      footerButtons: [
        { event: 'click1', clickName: '操作一' }, // event的值 对应组件的点击事件 clickName为按钮显示的文案
        { event: 'click2', clickName: '操作二' }
      ]
    };
  },
  methods: {
    clickHandler1() {
      // 操作1
      this.$toast.text('操作一', { duration: 1000 });
    },
    clickHandler2() {
      // 操作2
      this.$toast.text('操作二', { duration: 1000 });
    },
    switchClick() {
      // 展开收起卡片
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-title {
  display: flex;
  justify-content: space-between;
  .left {
    color: $text-black-4;
  }
}
</style>
