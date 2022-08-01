<template>
  <div v-if="isShow" id="nav">
    <div class="back" @click="goBack">
      <nut-icon name="left"></nut-icon>
    </div>
    {{ title }}
    <div class="translate" @click="translateChange">
      <nut-icon
        name="https://img14.360buyimg.com/imagetools/jfs/t1/135168/8/21387/6193/625fa81aEe07cc347/55ad5bc2580c53a6.png"
      >
      </nut-icon>
    </div>
  </div>
  <router-view />
  <!-- <demo-icon></demo-icon> -->
</template>
<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { isMobile } from '@/sites/assets/util';
import { useThemeEditor } from '@/sites/assets/util/helper';
import Icon from '@/sites/mobile/components/Icon.vue';
import { translateChange } from '../assets/util/useTranslate';
export default defineComponent({
  name: 'app',
  components: {
    [Icon.name]: Icon
  },
  setup() {
    const title = ref('NutUI');
    // 获取当前路由
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      // demo转换index
      const { origin, hash, pathname } = window.top.location;
      if (!isMobile && pathname.includes('demo')) {
        window.top.location.href = `${origin}/3x/index.html${hash}`;
        window.location.href = `${origin}/3x/demo.html${hash}`;
      }
      // 接收数据
      window.addEventListener('message', handledemoFromParent);
    });

    const handledemoFromParent = (event: any) => {
      var data = event.data;
      console.log('data', data);
      switch (data.cmd) {
        case 'refresh':
          if (data.params.state) {
            router.go(0);
          }
          break;
        case 'goHome':
          if (data.params.state) {
            router.push('/');
          }
          break;
      }
    };

    useThemeEditor();

    //返回demo页
    const goBack = () => {
      router.back();
    };

    // 是否显示 title
    const isShow = computed(() => {
      return title.value && title.value != '/' && !title.value.includes('-taro');
    });
    // 当当前路由发生变化时，调用回调函数
    watch(
      () => route,
      () => {
        // const { origin, hash, pathname } = window.top.location;
        const { hash } = window.top.location;
        if (!isMobile && route.hash != hash) {
          // window.top.location.replace(`${origin}${pathname}#/${route.hash}`);
          title.value = (route?.meta?.ComponentName as string) || (route.name as string);
        } else {
          title.value = (route?.meta?.ComponentName as string) || (route.name as string);
        }
      },
      {
        immediate: true,
        deep: true
      }
    );

    return { title, isShow, goBack, translateChange };
  }
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

.nut-theme-dark {
  .demo {
    background: #131313 !important;
  }
}

#app {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  #nav {
    position: fixed;
    z-index: 10;
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
    .translate {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  .demo {
    // height: 100%;
    min-height: 100vh;
    background: #f7f8fa;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 57px 17px 15px;
    box-sizing: border-box;
    &.full {
      min-height: 100vh;
      padding: 57px 0 0;
      h2 {
        padding-left: 27px;
      }
    }

    &.bg-w {
      background: #fff;
    }

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
    > h2 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 14px;
      color: rgba(144, 156, 164, 1);
      padding: 0 10px;
      font-weight: normal;
    }
    > p {
      font-size: 12px;
    }

    .card {
      padding: 25px 18px;
      background: rgba(255, 255, 255, 1);
    }
  }
}
</style>
