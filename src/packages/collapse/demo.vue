<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div class="show-demo">
      <nut-collapse v-model="active1">
        <nut-collapse-item :title="title1" :name="1">
          京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2">
          京东到家：教师节期间 创意花束销量增长53倍
        </nut-collapse-item>
        <nut-collapse-item :title="title3" :name="3" disabled> </nut-collapse-item>
      </nut-collapse>
    </div>
    <div class="show-demo">
      <h4>手风琴</h4>
      <nut-collapse v-model="active2" :accordion="true">
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
      <h4>图标展示</h4>
      <nut-collapse v-model="active3" :accordion="true" :expandIconPosition="expandIconPosition" :icon="icon" :rotate="rotate">
        <nut-collapse-item :title="title1" :name="1">
          京东数科IPO将引入“绿鞋机制”
        </nut-collapse-item>
        <nut-collapse-item :title="title2" :name="2">
          世界制造业大会开幕，阿里巴巴与安徽合作再升级
        </nut-collapse-item>
      </nut-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active1: [1, '2'],
      active2: 1,
      active3: 1,
      expandIconPosition: 'left',
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
      subTitle: '副标题',
      icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/132849/8/9709/550/5f5f0d8aE802abee7/68bd02b3a52c3988.png',
      rotate: 90
    };
  },
  methods: {
    callback(name) {
      console.log(`点击了name是${name}的面板,callback`);
    }
  }
};
</script>
