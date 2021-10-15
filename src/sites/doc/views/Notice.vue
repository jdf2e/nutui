<template>
  <doc-header></doc-header>
  <div class="notice">
    <div class="notice-main">
      <div class="notice-main-tab">
        <div class="notice-main-tab-title">
          <img
            class="notice-main-tab-title-img"
            src="../../assets/images/order.png"
            alt=""
          />
          <div class="notice-main-tab-title-tip">站内消息</div>
        </div>
        <div
          v-for="(item, index) in tips"
          :key="index"
          class="notice-main-tab-panel"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="notice-main-content">
        <div class="notice-main-title">常见问题</div>
        <div class="notice-main-line"></div>
        <div
          v-for="(item, index) in list"
          :key="index"
          class="notice-main-item"
          @click="link(item)"
        >
          <div class="article-title">{{ item.title }} </div>
          <div class="article-time">{{ item.update_time }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 设计资源 -->

  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute,
  useRouter
} from 'vue-router';
import Header from '@/sites/doc/components/Header.vue';
import { ApiService } from '@/sites/service/ApiService';
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
      list: [],
      tips: [{ name: 'FAQ' }]
    });

    const router = useRouter();
    const watchDemoUrl = (router: RouteLocationNormalized) => {
      RefData.getInstance().currentRoute.value = router.name as string;
    };
    const link = (item: any) => {
      console.log(item);
      window.open(item.link);
      // router.push('/noticedetail');
    };
    // 文章列表接口
    const getFaq = () => {
      const apiService = new ApiService();
      apiService.getFaq().then((res) => {
        if (res?.state == 0) {
          data.list = res.value.data.arrays;
        }
      });
    };

    onMounted(() => {
      // 路由
      const route = useRoute();
      watchDemoUrl(route);
      getFaq();
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
.notice {
  background: #f7f8fa;
  .notice-main {
    width: 1006px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    .notice-main-tab {
      width: 296px;
      height: 210px;
      background: rgba(255, 255, 255, 1);
      .notice-main-tab-title {
        margin: 19px 0 14px 22px;
        display: flex;
        align-items: center;
        .notice-main-tab-title-img {
          width: 13px;
          height: 14px;
          margin-right: 8px;
          display: block;
        }
      }
      .notice-main-tab-panel {
        padding: 14px 66px;
        width: 296px;
        height: 48px;
        background: rgba(250, 36, 0, 0.06);
        position: relative;
        &:after {
          content: '';
          display: inline-block;
          width: 10px;
          height: 22px;
          background: url('../../assets/images/item-rotate-active.png')
            no-repeat;
          position: absolute;
          left: 42px;
        }
      }
    }
    .notice-main-content {
      width: 696px;
      height: 747px;
      background: rgba(255, 255, 255, 1);
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
        &:hover {
          .article-title,
          .article-time {
            color: rgba(250, 36, 0, 1);
          }
          cursor: pointer;
        }
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
}
</style>
