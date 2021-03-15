<template>
  <doc-header></doc-header>
  <div class="doc-content" :class="themeName()">
    <div class="doc-content-index">
      <div class="content-left">
        <div class="content-title"> Nut UI 3.0 </div>
        <div class="content-smile"> </div>
        <div class="content-subTitle">一款具有京东风格的VUE组件</div>
        <div class="content-button">
          <div class="leftButton" @click="toIntro">
            <div class="leftButtonText">开始使用</div>
          </div>
          <div class="rightButton">
            <div class="rightButtonText">扫码体验</div>

            <div class="qrcodepart">
              <div class="qrcode-text"> 请使用手机扫码体验 </div>
              <div class="qrcode"> </div>
            </div>
          </div>
          <iframe
            style="margin-left: 20px"
            src="https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
        <!-- <div style="display: flex; align-items: center">
          <a href="#" class="leftButton">开始使用</a>
          <a href="javascript:;" class="rightButton ">
            扫码体验
            <a>
              <span>请使用手机扫码体验</span>
              <img
                src="https://img12.360buyimg.com/imagetools/jfs/t1/124892/31/7144/6065/5f0d9fe4Ef020d678/cae78d015aa5897c.png"
                alt
              />
            </a>
          </a>
          <iframe
            style="margin-left: 20px"
            src="https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div> -->
      </div>
      <div class="content-right">
        <div class="content-img"> </div>
      </div>
    </div>
    <div class="doc-content-features">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">平台特色</h4>
      </div>
      <ul class="features-list">
        <li class="features-item">
          <img src="../../assets/images/img-home-features1.png" />
          <p class="features-title">京东风格</p>
          <p class="features-desc">遵循京东App9.0设计规范</p>
        </li>
        <li class="features-item">
          <img src="../../assets/images/img-home-features2.png" />
          <p class="features-title">组件丰富</p>
          <p class="features-desc a-l"
            >提供70+组件，丰富的demo快速体验交互细节，覆盖各类场景满足各种功能的需求</p
          >
        </li>
        <li class="features-item">
          <img src="../../assets/images/img-home-features3.png" />
          <p class="features-title">前沿技术</p>
          <p class="features-desc">Vue3.X vite2.X typescript</p>
        </li>
        <li class="features-item">
          <img src="../../assets/images/img-home-features4.png" />
          <p class="features-title">贴心通道</p>
          <p class="features-desc">社区维护 高效服务<br />技术支持 经验沉淀</p>
        </li>
      </ul>
    </div>
    <div class="doc-content-more" v-if="articleList.length > 0">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">更多内容</h4>
        <a class="sub-more" href="https://jelly.jd.com" target="_blank"
          >更多内容</a
        >
      </div>
      <ul class="more-list">
        <li
          class="more-item"
          v-for="item in articleList.slice(0, 4)"
          :key="item.id"
          @click="toLink(item.id)"
        >
          <img :src="item.cover_image" />
          <p class="more-title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed } from 'vue';
import Header from '@/sites/doc/components/Header.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import router from '../router';
import { themeColor } from '@/sites/assets/util/ref';
import { ArticleApiService } from '@/sites/service/ArticleApiService';
export default defineComponent({
  name: 'main',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer
  },
  setup() {
    const articleList: any[] = [];
    const data = reactive({
      // theme: 'white',
      articleList
    });
    onMounted(() => {
      // 文章列表接口
      const articleApiService = new ArticleApiService();
      articleApiService.getArticle().then(res => {
        console.log('res', res);
        if (res?.state == 0) {
          data.articleList = res.value.data.arrays as any[];
          console.log('data.articleList', data.articleList);
        }
      });
    });
    const themeName = computed(() => {
      return function() {
        return `doc-content-${themeColor.value}`;
      };
    });
    const toLink = (id: number) => {
      window.open('//jelly.jd.com/article/' + id);
    };
    function toIntro() {
      router.push({ path: '/intro' });
    }
    return {
      toIntro,
      ...toRefs(data),
      themeName,
      toLink
    };
  }
});
</script>

<style lang="scss" scoped>
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.doc-content {
  &-hd {
    height: 52px;
    line-height: 52px;
    margin-bottom: 50px;
    text-align: center;
    .sub-more {
      float: right;
      color: $theme-red;
    }
  }
  &-title {
    display: inline-block;
    font-size: 36px;
    font-family: PingFangSC-Medium;
  }
  &-features {
    width: 1230px;
    margin: 0 auto 90px;
    .features-list {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
    }
    .features-item {
      width: 296px;
      text-align: center;
      img {
        width: 160px;
        height: 160px;
        margin-bottom: 20px;
      }
    }
    .features-title {
      margin-bottom: 18px;
      line-height: 50px;
      font-family: PingFangSC-Medium;
      font-size: 36px;
    }
    .features-desc {
      font-size: 18px;
      line-height: 24px;
    }
  }
  &-more {
    width: 1200px;
    margin: 0 auto 80px;
    .more-list {
      display: flex;
      flex-wrap: wrap;
    }
    .more-item {
      width: 280px;
      margin-right: 26px;
      cursor: pointer;
      &:nth-child(4n) {
        margin-right: 0;
      }
      img {
        width: 280px;
        height: 170px;
        margin-bottom: 20px;
        border-radius: 6px;
      }
    }
    .more-title {
      width: 280px;
      height: 44px;
      line-height: 22px;
      font-size: 16px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
.doc-content-index {
  display: flex;
  flex: 1;
  margin-bottom: 70px;
  background-color: #070505;
  .content-left {
    padding: 15% 0 0 8.8%;
    // margin: auto 0;
    width: 1300px;
    min-width: 550px;
    .content-title {
      // line-height: 36px;
      font-family: PingFangSC-Medium;
      font-size: 42px;
      color: rgba(255, 255, 255, 1);
      animation: fadeInLeft 1s both;
    }
    .content-smile {
      margin-top: 10px;
      width: 44px;
      height: 17px;
      background: url(https://storage.360buyimg.com/imgtools/09516173b9-9b32b9d0-3864-11eb-9a56-0104487ad2b0.png)
        no-repeat;
      background-size: cover;
      animation: fadeInLeft 1s both 0.5s;
    }
    .content-subTitle {
      margin-top: 12px;
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
      animation: fadeInLeft 1s both 0.5s;
    }
    .content-button {
      position: relative;
      display: flex;
      margin-top: 40px;
      iframe {
        align-self: center;
        animation: fadeInLeft 1s both 1.2s;
      }
      .leftButton {
        display: flex;
        .leftButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: rgba(255, 255, 255, 1);
        }
        font-family: PingFangSC-Regular;
        width: 150px;
        height: 40px;
        animation: fadeInLeft 1s both 1.2s;
        background: linear-gradient(
          135deg,
          rgba(250, 25, 44, 1) 0%,
          rgba(250, 39, 40, 1) 45%,
          rgba(250, 56, 31, 1) 83%,
          rgba(250, 63, 25, 1) 100%
        );
        border-radius: 29px;
        cursor: pointer;
      }
      .rightButton {
        display: flex;
        .rightButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: rgba(227, 44, 54, 1);
        }
        margin-left: 26px;
        width: 150px;
        height: 40px;
        border: 1px solid rgba(250, 44, 25, 1);
        border-radius: 29px;
        background-color: #000000;
        cursor: pointer;
        animation: fadeInLeft 1s both 1.2s;
        &:hover {
          .qrcodepart {
            display: block;
          }
        }
      }
      .qrcodepart {
        display: none;
        position: absolute;
        left: 0;
        top: 50px;
        padding: 4px;
        width: 166px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.11);
        .qrcode-text {
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          margin-top: 10px;
          margin-left: 6px;
        }
        .qrcode {
          width: 160px;
          height: 160px;
          margin: 0 auto;
          background: url(https://img12.360buyimg.com/imagetools/jfs/t1/124892/31/7144/6065/5f0d9fe4Ef020d678/cae78d015aa5897c.png)
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
  .content-right {
    flex: 1;
    margin: auto 0;
    .content-img {
      width: 900px;
      height: 514px;
      background: url(https://storage.360buyimg.com/imgtools/2386827bf5-0c3c6fb0-444d-11eb-a71e-e96ecf999ecc.png)
        no-repeat;
      background-size: cover;
    }
  }
}
.doc-content-black {
  background: $theme-black-content-bg;
  color: white;
  .doc-content-title {
    color: white;
  }
  .doc-content-feature {
    .features-title {
      color: white;
    }
    .features-desc {
      color: white;
    }
  }
  .doc-content-more {
    .more-title {
      color: #fff;
    }
  }
}
.doc-content-white,
.doc-content-red {
  background: white;
  color: white;
  .doc-content-title {
    color: $theme-white-footer-word3;
  }
  .doc-content-features {
    .features-title {
      color: $theme-white-word;
    }
    .features-desc {
      color: $theme-white-index-desc;
    }
  }
  .doc-content-more {
    .more-title {
      color: $theme-white-footer-word3;
    }
  }
}
.a-l {
  text-align: left;
}
</style>
