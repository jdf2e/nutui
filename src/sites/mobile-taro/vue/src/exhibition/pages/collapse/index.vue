<template>
  <div class="demo full">
    <h2>基本用法</h2>
    <nut-collapse v-model:active="active1" icon="down-arrow" @change="change">
      <nut-collapse-item :title="title1" :name="1">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2"> 京东到家：教师节期间 创意花束销量增长53倍 </nut-collapse-item>
      <nut-collapse-item :title="title3" :name="3" disabled> </nut-collapse-item>
    </nut-collapse>
    <h2>无icon样式</h2>
    <nut-collapse v-model:active="active4" :accordion="true">
      <nut-collapse-item :title="title1" :name="1"> 2020年中国数字游戏市场规模超2786亿元 </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2"> 基于区块链技术的取证APP在浙江省杭州市发布 </nut-collapse-item>
    </nut-collapse>
    <h2>手风琴</h2>
    <nut-collapse v-model:active="active2" :accordion="true" icon="down-arrow">
      <nut-collapse-item :title="title1" :name="1">
        <template v-slot:sTitle> 文本测试 </template>
        华为终端操作系统EMUI 11发布，9月11日正式开启
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" :sub-title="subTitle">
        中国服务机器人市场已占全球市场超1/4
      </nut-collapse-item>
      <nut-collapse-item :title="title3" :name="3"> QuestMobile：90后互联网用户规模超越80后达3.62亿 </nut-collapse-item>
    </nut-collapse>
    <h2>自定义折叠图标</h2>
    <nut-collapse v-model:active="active3" :accordion="true" icon="arrow-right2" rotate="90">
      <nut-collapse-item :title="title1" :name="1"> 京东数科IPO将引入“绿鞋机制” </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
        世界制造业大会开幕，阿里巴巴与安徽合作再升级
      </nut-collapse-item>
    </nut-collapse>
    <h2>自定义标题图标</h2>
    <nut-collapse
      v-model:active="active5"
      title-icon="issue"
      title-icon-color="red"
      title-icon-size="20px"
      title-icon-position="left"
      icon="down-arrow"
      :accordion="true"
    >
      <nut-collapse-item :title="title1" :name="1"> “森亿智能”获4亿元D轮融资 </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
        快看漫画与全球潮玩集合店X11达成战略合作
      </nut-collapse-item>
    </nut-collapse>
    <h2>设置固定内容（不折叠部分）</h2>
    <nut-collapse v-model:active="active6" icon="down-arrow" :accordion="true">
      <nut-collapse-item :title="title1" :name="1">
        <template v-slot:extraRender>固定内容</template>
        NutUI是一套拥有京东风格的轻量级的 Vue 组件库
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2">
        在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
      </nut-collapse-item>
    </nut-collapse>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue';
export default {
  setup(props, context) {
    const data = reactive({
      active1: [1, '2'],
      active2: 1,
      active3: 1,
      active4: 1,
      active5: 1,
      active6: 1,
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
      subTitle: '副标题'
    });
    const change = (name: string) => {
      console.log(`点击了name是${name}的面板`);
    };
    // const content = ref("");
    // onMounted(() => {
    //   setTimeout(() => {
    //     content.value = "京东到家：教师节期间 创意花束销量增长53倍";
    //   }, 500);
    // })
    return {
      change,
      ...toRefs(data)
    };
  }
};
</script>
