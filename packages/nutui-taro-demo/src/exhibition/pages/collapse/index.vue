<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-collapse v-model="active1" @change="change">
      <nut-collapse-item :title="title1" :name="1">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2"> 京东到家：教师节期间 创意花束销量增长53倍 </nut-collapse-item>
      <nut-collapse-item :title="title3" :name="3" disabled> </nut-collapse-item>
    </nut-collapse>
    <h2>手风琴</h2>
    <nut-collapse v-model="active2" :accordion="true">
      <nut-collapse-item :title="title1" :name="1">
        <template v-slot:value> 文本测试 </template>
        华为终端操作系统EMUI 11发布，9月11日正式开启
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" :value="subTitle">
        中国服务机器人市场已占全球市场超1/4
      </nut-collapse-item>
      <nut-collapse-item :title="title3" :name="3"> QuestMobile：90后互联网用户规模超越80后达3.62亿 </nut-collapse-item>
    </nut-collapse>
    <h2>自定义折叠图标</h2>
    <nut-collapse v-model="active3" :accordion="true">
      <nut-collapse-item :title="title1" :name="1" :icon="Notice"> 京东数科IPO将引入“绿鞋机制” </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" value="文本内容" :icon="Follow">
        世界制造业大会开幕，阿里巴巴与安徽合作再升级
      </nut-collapse-item>
    </nut-collapse>
    <h2>设置固定内容（不折叠部分）</h2>
    <nut-collapse v-model="active6" :accordion="true">
      <nut-collapse-item :title="title1" :name="1">
        <template v-slot:extra>固定内容</template>
        NutUI是一套拥有京东风格的轻量级的 Vue 组件库
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2">
        在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
      </nut-collapse-item>
    </nut-collapse>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs } from 'vue';
import { Notice, Follow } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';

export default {
  components: {
    Header
  },
  setup(props, context) {
    const env = Taro.getEnv();
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
    return {
      change,
      ...toRefs(data),
      Notice,
      Follow,
      env
    };
  }
};
</script>
