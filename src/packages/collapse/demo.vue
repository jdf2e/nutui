<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div class="show-demo">
      <nut-collapse v-model:active="active1">
        <nut-collapse-item :title="title1" :name="1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2">
          京东到家：教师节期间 创意花束销量增长53倍
        </nut-collapse-item>
        <nut-collapse-item :title="title3" :name="3" disabled>
        </nut-collapse-item>
      </nut-collapse>
    </div>
    <h4>无icon样式</h4>
    <div class="show-demo">
      <nut-collapse v-model:active="active4" :accordion="true" :icon="icon2">
        <nut-collapse-item :title="title1" :name="1">
          2020年中国数字游戏市场规模超2786亿元
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2">
          基于区块链技术的取证APP在浙江省杭州市发布
        </nut-collapse-item>
      </nut-collapse>
    </div>
    <div class="show-demo">
      <h4>手风琴</h4>
      <nut-collapse v-model:active="active2" :accordion="true">
        <nut-collapse-item :title="title1" :name="1">
          华为终端操作系统EMUI 11发布，9月11日正式开启
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2" :subTitle="subTitle">
          中国服务机器人市场已占全球市场超1/4
        </nut-collapse-item>
        <nut-collapse-item :title="title3" :name="3">
          QuestMobile：90后互联网用户规模超越80后达3.62亿
        </nut-collapse-item>
      </nut-collapse>
    </div>
    <div class="show-demo">
      <h4>自定义折叠图标</h4>
      <nut-collapse
        v-model:active="active3"
        :accordion="true"
        :expandIconPosition="expandIconPosition"
        :icon="icon"
        :iconWidth="iconWidth"
        :iconHeight="iconHeight"
        :rotate="rotate"
      >
        <nut-collapse-item :title="title1" :name="1">
          京东数科IPO将引入“绿鞋机制”
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2">
          世界制造业大会开幕，阿里巴巴与安徽合作再升级
        </nut-collapse-item>
      </nut-collapse>
    </div>
    <div class="show-demo">
      <h4>自定义标题图标</h4>
      <nut-collapse
        v-model:active="active5"
        :titleIcon="titleIcon"
        :accordion="true"
        :rotate="rotate"
      >
        <nut-collapse-item :title="title1" :name="1">
          “森亿智能”获4亿元D轮融资
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2">
          快看漫画与全球潮玩集合店X11达成战略合作
        </nut-collapse-item>
      </nut-collapse>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('collapse');
export default createDemo({
  setup(props, context) {
    const data = reactive({
      active1: [1, '2'],
      active2: 1,
      active3: 1,
      active4: 1,
      active5: 1,
      expandIconPosition: 'left',
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
      subTitle: '副标题',
      icon:
        'https://img11.360buyimg.com/imagetools/jfs/t1/132849/8/9709/550/5f5f0d8aE802abee7/68bd02b3a52c3988.png',
      icon2: 'none',
      titleIcon:
        'https://img13.360buyimg.com/imagetools/jfs/t1/144156/13/19748/1977/5fe2f5f8E21020483/a15144ab447bfbf2.png',
      iconWidth: '20px',
      iconHeight: '20px',
      rotate: 90
    });
    const change = (name: string) => {
      console.log(`点击了name是${name}的面板`);
    };
    return {
      change,
      ...toRefs(data)
    };
  }
});
</script>

<style>
#app {
  background: #f7f8fa;
}
</style>
<style lang="scss" scoped>
.demo-list {
  margin: 60px 0;
  h4 {
    margin: 20px 0 10px 25px;
    font-size: 14px;
    color: #909ca4;
  }
}
</style>
