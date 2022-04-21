<template>
  <div class="icon-moudle">
    <div class="item home" @click="goHome">
      <nut-icon name="home"></nut-icon>
    </div>
    <div class="item refresh" @click="refresh">
      <nut-icon name="refresh"></nut-icon>
    </div>
    <div class="item category" @click="toCategory($event)">
      <nut-icon name="category"></nut-icon>
    </div>
    <div class="qrcodepart" v-if="showCode" ref="codeRef" @click="stopClick($event)">
      <div class="qrcode"> </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  name: 'demo-icon',
  setup() {
    const router = useRouter();

    const state = reactive({
      showCode: false
    });

    const codeRef = ref(null);

    onMounted(() => {
      document.addEventListener('click', (e: any) => {
        state.showCode = false; // 点击其他区域关闭
      });
    });

    // 返回demo 首页页
    const goHome = () => {
      router.push('/');
    };

    // 刷新
    const refresh = () => {
      router.go(0);
    };

    // 二维码
    const toCategory = (e: any) => {
      state.showCode = !state.showCode;
      e.stopPropagation(); // 阻止事件向上冒泡
    };

    const stopClick = (e: any) => {
      e.stopPropagation(); // 阻止事件向上冒泡
    };

    return reactive({
      ...toRefs(state),
      codeRef,
      goHome,
      refresh,
      toCategory,
      stopClick
    });
  }
});
</script>
<style lang="scss" scoped>
.icon-moudle {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  padding: 0 22px;
  color: #666;
  border-top: 1px solid #e6e6e6;
  background: #fff;
  .item {
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
.qrcodepart {
  // display: none;
  position: absolute;
  right: 9px;
  bottom: 48px;
  width: 110px;
  padding: 6px 7px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.11);
  box-sizing: border-box;
  .qrcode {
    width: 96px;
    height: 96px;
    margin: 0 auto;
    background: url(https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png)
      no-repeat;
    background-size: cover;
  }
}
</style>
