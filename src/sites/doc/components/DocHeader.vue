<template>
  <div class="doc-header doc-header-black">
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RefData } from '@/sites/assets/util/ref';
const toHome = () => {
  RefData.getInstance().currentRoute.value = '/';
};
</script>

<style lang="scss">
.doc-header {
  height: $doc-header-height;
  line-height: $doc-header-height;
  padding: 0 50px;
  font-size: 20px;
}
.header {
  &-logo {
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
