<template>
  <doc-header></doc-header>
  <div class="notice-main">
    <div class="notice-main-content"> </div>
  </div>
  <!-- 设计资源 -->

  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute, useRouter } from 'vue-router';
import Header from '@/sites/doc/components/Header.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import { RefData } from '@/sites/assets/util/ref';
export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer
  },
  setup() {
    const data = reactive({
      list: [
        { name: '123', id: '12' },
        { name: '123', id: '12' },
        { name: '123', id: '12' }
      ]
    });

    const router = useRouter();
    const watchDemoUrl = (router: RouteLocationNormalized) => {
      RefData.getInstance().currentRoute.value = router.name as string;
    };
    const link = () => {
      router.push('/noticedetail');
    };
    onMounted(() => {
      // 路由
      const route = useRoute();
      watchDemoUrl(route);
    });
    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to);
    });
    return {
      ...toRefs(data),
      link
    };
  }
});
</script>

<style lang="scss" scoped>
.notice-main {
  background: #f7f8fa;
  .notice-main-content {
    width: 696px;
    height: 747px;
    background: rgba(255, 255, 255, 1);
    margin: 30px auto;
    padding: 16px 36px;
    .notice-main-title {
      line-height: 36px;
      font-size: 16px;
      font-family: PingFangSC;
      font-weight: 500;
      color: rgba(26, 26, 26, 1);
    }
    .notice-main-line {
      width: 644px;
      height: 1px;
      background: rgba(247, 248, 250, 1);
      margin: 11px auto 0;
      margin-bottom: 15px;
    }
    .notice-main-item {
      padding-top: 18px;
      height: 54px;
      border-bottom: 1px solid rgba(247, 248, 250, 1);
      .article-title {
        line-height: 20px;
        font-size: 14px;
        font-family: PingFangSC;
        font-weight: normal;
        color: rgba(26, 26, 26, 1);
        float: left;
      }
      .article-time {
        float: right;
        line-height: 17px;
        font-size: 12px;
        font-family: PingFangSC;
        font-weight: normal;
        color: rgba(154, 155, 157, 1);
      }
    }
  }
}
</style>
