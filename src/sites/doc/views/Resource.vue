<template>
  <doc-header></doc-header>
  <div class="resource-main">
    <div class="resource-main-content">
      <h3 class="sub-title">资源</h3>
      <p class="sub-desc"
        >想要了解 NutUI 设计体系背后的故事？如何才能更好的应用？你可以查阅下述我们为你精挑细选的文章。也欢迎关注 NutUI
        官方专栏，这里常有关于 NutUI 设计体系下相关话题内容的最新分享和讨论。</p
      >
    </div>
  </div>
  <!-- 设计资源 -->
  <div class="resource-content">
    <div class="resource-block">
      <h4 class="sub-title">设计资源</h4>
      <p class="sub-desc"
        >NutUI 3x 基于 JD APP 10.0 视觉规范实现的组件库，在这里可以下载 NutUI 的设计资源。
        <a class="download" download href="https://storage.360buyimg.com/nutui-static/NutUI3xStyleGuide.sketch"
          >点击下载
        </a></p
      >
      <img
        src="https://img11.360buyimg.com/imagetools/jfs/t1/206767/18/7920/405226/6181e655E6b5be4de/47a13df50b92106b.jpg"
      />
    </div>
    <div class="resource-block">
      <div class="no-data" v-if="articleList.length === 0">
        <img class="nodata-img-joy" src="../../assets/images/img-joy.png" />
        <p class="nodata-desc">敬请期待</p>
      </div>
      <div class="tab-box" v-else>
        <div class="tab-hd">
          <div
            class="tab-hd-item"
            :class="{ active: activeIndex === index }"
            v-for="(item, index) in tabData"
            :key="index"
            @click="clickTab(index)"
          >
            {{ item.title }}
          </div>
        </div>
        <template v-for="pItem in articleList" v-show="activeIndex === 0">
          <h3>{{ pItem.year }}</h3>
          <div class="tab-bd">
            <div class="design-item" v-for="item in pItem.list" :key="item.id" @click="toLink(item.id)">
              <img class="img-design" :src="item.cover_image" />
              <p class="design-title" v-hover>{{ item.title }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- 社区文章 -->
    <div class="resource-block">
      <h4 class="sub-title">社区文章</h4>
      <p class="sub-desc"></p>
      <ul class="article-box">
        <li class="article-item" v-for="item in communityArticleList" :key="item.id">
          <a class="article-link" target="_blank" :href="item.link"> {{ item.title }} - {{ item.user_name }} </a>
        </li>
      </ul>
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute } from 'vue-router';
import Header from '@/sites/doc/components/Header.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import { RefData } from '@/sites/assets/util/ref';
import { ApiService } from '@/sites/service/ApiService';
export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer
  },
  setup() {
    const articleList: any[] = [];
    const communityArticleList: any[] = [];
    const data = reactive({
      articleList,
      communityArticleList,
      tabData: [
        {
          title: '全部文章'
        }
        // {
        //   title: '性能体验'
        // },
        // {
        //   title: '性能体验'
        // }
      ],
      activeIndex: 0,
      showNutuiCat: false
    });
    const watchDemoUrl = (router: RouteLocationNormalized) => {
      RefData.getInstance().currentRoute.value = router.name as string;
    };
    onMounted(() => {
      // 路由
      const route = useRoute();
      watchDemoUrl(route);

      // 文章列表接口
      const apiService = new ApiService();
      apiService.getArticle().then((res) => {
        if (res?.state == 0) {
          (res.value.data.arrays as any[]).forEach((element) => {
            if (element.type == 1) {
              let year = element.create_time.split('-')[0];
              let index = data.articleList.findIndex((item) => item.year == year);
              if (index == -1) {
                data.articleList.push({
                  year,
                  list: [element]
                });
              } else {
                data.articleList[index].list.push(element);
              }
            } else {
              data.communityArticleList.push(element);
            }
          });
        }
      });
    });
    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to);
    });
    const clickTab = (index: number) => {
      data.activeIndex = index;
    };
    const toLink = (id: number) => {
      window.open('//jelly.jd.com/article/' + id);
    };
    return {
      ...toRefs(data),
      clickTab,
      toLink
    };
  }
});
</script>

<style lang="scss" scoped>
$mainRed: #fa685d;
.resource {
  &-main {
    background-color: #1d1d1d;
    &-content {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 48px;
      padding-bottom: 53px;
      background: url('../../assets/images/bg-article.png') no-repeat;
      background-size: 307px 200px;
      background-position: right 280px top 0;
      .sub-title {
        margin-left: 8px;
        margin-bottom: 40px;
        line-height: 36px;
        font-size: 30px;
        color: $white;
      }
      .sub-desc {
        line-height: 22px;
        font-size: 16px;
        color: $white;
      }
    }
  }
  &-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
  }
  &-block {
    margin-bottom: 50px;
    text-align: left;
    .download {
      color: #38f;
    }
    > img {
      width: 100%;
      box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    }
    .sub-title {
      margin-bottom: 15px;
      line-height: 42px;
      font-size: 30px;
      color: #1a1a1a;
    }
    .sub-desc {
      margin-bottom: 40px;
      line-height: 22px;
      font-size: 16px;
      color: #959fb1;
    }
    .sub-red {
      color: #fa2c19;
    }
  }
}
.no-data {
  text-align: center;
  .nodata-img-joy {
    width: 269px;
    height: 153px;
    margin-bottom: 30px;
  }
  .nodata-desc {
    font-size: 16px;
    color: #959fb1;
  }
}
.tab {
  &-box {
    > h3 {
      margin-bottom: 10px;
    }
  }
  &-hd {
    display: flex;
    margin-bottom: 30px;
  }
  &-bd {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  &-hd-item {
    margin-right: 40px;
    line-height: 25px;
    font-size: 18px;
    color: #808080;
    cursor: pointer;
    &:first-child {
      color: #1a1a1a;
    }
    &.active {
      color: #e32c36;
    }
  }
}
.design {
  &-item {
    width: 280px;
    margin-right: 26px;
    margin-bottom: 45px;
    cursor: pointer;
    &:nth-child(4n) {
      margin-right: 0;
    }
    .img-design {
      width: 280px;
      height: 170px;
      margin-bottom: 20px;
      border-radius: 5px;
    }
  }
  &-title {
    width: 280px;
    height: 44px;
    line-height: 22px;
    font-size: 16px;
    color: #1d1d21;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.article {
  &-item {
    position: relative;
    padding-left: 34px;
    margin-bottom: 20px;
    color: $mainRed;
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0;
      margin-top: -8px;
      width: 12px;
      height: 12px;
      border: 2px solid #fa2c19;
      border-radius: 50%;
    }
  }
  &-link {
    line-height: 22px;
    font-size: 14px;
    color: $mainRed;
    cursor: pointer;
  }
}
</style>
