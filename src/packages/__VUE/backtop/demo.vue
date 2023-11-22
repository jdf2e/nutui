<template>
  <div id="elId" class="demo">
    <h2>{{ translate('title') }}</h2>
    <div v-for="(_, index) in 24" :key="index" class="text-data">{{ translate('content') + index }}</div>
    <nut-backtop el-id="elId" :distance="100" :bottom="110" @click="handleClick">
      <view class="backtop-demo">
        <Top width="12px" height="12px" class="nut-backtop-main"></Top>
        <view class="title">{{ translate('backText') }}</view>
      </view>
    </nut-backtop>
    <nut-backtop el-id="elId" :distance="200" :bottom="50" @click="handleClick"></nut-backtop>
  </div>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import { Top } from '@nutui/icons-vue';
const translate = useTranslate({
  'zh-CN': { title: '基础用法', clg: '触发返回顶部', content: '我是测试数据', backText: '顶部' },
  'en-US': { title: 'Basic Usage', clg: 'backtop', content: 'test data', backText: 'Top' }
});
const handleClick = () => {
  console.log(translate('clg'));
};
</script>

<style lang="scss" scoped>
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    line-height: 19px;
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
  }

  .backtop-demo {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 12px;
    }
  }
}
</style>
