<template>
  <div class="applets-demo-header">
    <div class="back" @click="navigateTo">
      <Home />
    </div>
    <div class="applets-icon">
      <img
        src="https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png"
      />
    </div>
    <div>{{ compName }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import Taro from '@tarojs/taro';
import { Home } from '@nutui/icons-vue';
import config from '../../../../../config.json';
export default defineComponent({
  name: 'header',
  components: {
    Home
  },
  setup() {
    //返回demo页
    const navigateTo = () => {
      Taro.navigateTo({
        url: '/pages/index/index'
      });
    };

    const compName = computed(() => {
      let allComps: any = [];
      let hashCompName = location.hash.split('pages/')[1].replace('/index', '');
      config.nav.map((item) => {
        allComps = [...allComps, ...item.packages];
      });

      let targetComp = allComps.filter((item: any) => hashCompName === item.name.toLowerCase());

      return targetComp[0].name;
    });

    return { navigateTo, compName };
  }
});
</script>

<style lang="scss">
.applets-demo-header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 57px;
  line-height: 57px;
  text-align: center;
  background: $white;
  font-weight: bold;
  font-size: 20px;
  color: rgba(51, 51, 51, 1);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
  .back {
    position: absolute;
    left: 0;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .applets-icon {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > img {
      width: 87px;
      height: 36px;
    }
  }
}
</style>
