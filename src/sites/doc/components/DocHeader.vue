<template>
  <div class="doc-header doc-header-black">
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
    </div>
    <div class="tabs">
      <div class="tab-item" @click="switchTo('h5')">h5</div>
      <div class="tab-item" @click="switchTo('taro')">taro</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RefData } from '@/sites/assets/util/ref'
const toHome = () => {
  RefData.getInstance().currentRoute.value = '/'
}
const switchTo = (type: 'h5' | 'taro') => {
  if (type === 'h5') {
    location.href = location.href.replace('taro', 'h5')
  } else {
    location.href = location.href.replace('h5', 'taro')
  }
}
</script>

<style lang="scss" scoped>
.doc-header {
  height: $doc-header-height;
  line-height: $doc-header-height;
  padding: 0 50px;
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header-logo {
  position: relative;
  display: inline-block;
  width: 240px;
  height: 64px;
  .logo-link {
    width: 120px;
    height: 46px;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    margin-top: -23px;
  }
  .logo-border {
    width: 1px;
    height: 26px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -13px;
  }
}

.tabs {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 2px;
  box-sizing: border-box;

  border-radius: 2px;
  background: #eee;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;
  &.single {
    padding: 0;
    .tab-item {
      line-height: 40px;
      cursor: auto;
    }
  }
  .tab-item {
    position: relative;
    padding: 0 10px;
    line-height: 36px;
    cursor: pointer;
    font-size: 16px;
    color: #323232;
    text-align: center;
    border-radius: 2px;
    background: #eee;
    &.cur {
      font-weight: bold;
      color: #323232;
      background: #fff;
    }
  }
}
// 颜色
.doc-header-black {
  background: black;
  color: $theme-black-word;
  border-bottom: 1px solid $theme-black-box-border;
  .header {
    &-logo {
      .logo-link {
        background: url('../../assets/images/logo-header-red.png') no-repeat center/100%;
      }
      .logo-border {
        background: $theme-black-border;
      }
    }
  }
}
</style>
