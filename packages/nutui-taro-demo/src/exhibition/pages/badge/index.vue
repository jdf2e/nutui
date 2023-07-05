<template>
  <view class="demo badge-demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-row>
      <nut-badge :value="8">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW" bubble>
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot>
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>
    <h2>最大值</h2>
    <nut-row>
      <nut-badge :value="200" :max="9">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="200" :max="20">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="200" :max="99">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>自定义颜色</h2>
    <nut-row>
      <nut-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>自定义徽标内容</h2>
    <nut-row>
      <nut-badge>
        <template #icon>
          <Check color="#ffffff" size="12px"></Check>
        </template>
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge>
        <template #icon>
          <Link color="#ffffff" size="12px"></Link>
        </template>
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge>
        <template #icon>
          <Download color="#ffffff" size="12px"></Download>
        </template>
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>自定义位置</h2>
    <nut-row>
      <nut-badge :value="8" top="5" right="5">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76" top="10" right="10">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW">
        <nut-avatar shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>独立展示</h2>
    <nut-row>
      <nut-badge :value="8"> </nut-badge>
      <nut-badge :value="76"> </nut-badge>
      <nut-badge value="NEW"> </nut-badge>
    </nut-row>
  </view>
</template>
<script lang="ts" setup>
import { Check, Link, Download } from '@nutui/icons-vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';

const env = Taro.getEnv();
</script>

<style lang="scss">
.badge-demo {
  .nut-badge {
    margin-right: 40px;
  }
}
</style>
