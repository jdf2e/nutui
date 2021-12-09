<template>
  <doc-header></doc-header>
  <div class="doc-content" :class="themeName()">
    <div class="doc-content-index">
      <div class="content-left">
        <div class="content-title"> NutUI </div>
        <div class="content-smile"> </div>
        <div class="content-subTitle">京东风格的轻量级移动端 Vue 组件库</div>
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
          <p class="features-desc">遵循京东 App 10.0 设计规范</p>
        </li>
        <li class="features-item">
          <img src="../../assets/images/img-home-features3.png" />
          <p class="features-title">前沿技术</p>
          <p class="features-desc">vue3 vite2.x typescript</p>
        </li>
        <li class="features-item">
          <img src="../../assets/images/img-home-features5.png" />
          <p class="features-title">适配多端</p>
          <p class="features-desc a-l">基于 Taro 轻松开发多端小程序</p>
        </li>
        <li class="features-item">
          <img src="../../assets/images/img-home-features2.png" />
          <p class="features-title">组件丰富</p>
          <p class="features-desc a-l">70+ 组件，覆盖多数业务场景</p>
        </li>
        <!-- <li class="features-item">
          <img src="../../assets/images/img-home-features4.png" />
          <p class="features-title">贴心通道</p>
          <p class="features-desc">社区维护 高效服务<br />技术支持 经验沉淀</p>
        </li> -->
      </ul>
    </div>
    <!-- taro楼层 -->
    <div class="doc-content-taro">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">一处代码 多端运行</h4>
      </div>
      <div class="taro-content">
        <div class="taro-left"> </div>
        <div class="taro-right">
          <div class="right-img"></div>
          <p class="taro-desc">
            基于 Taro 对 NutUI 每一个组件进行深度适配<br />
            支持开发多端小程序
          </p>
        </div>
      </div>
    </div>

    <!-- nutui-cat / nutui-营销 -->
    <div class="doc-content-catmarketing">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">业务组件</h4>
      </div>
      <div class="doc-content-catmarketing-content">
        <div class="cat-content">
          <div class="cat-content-left">
            <img src="./../../assets/images/cat-back.png" alt="" />
          </div>
          <div class="cat-content-right">
            <div class="cat-content-right-title">
              <img src="./../../assets/images/cat-title.png" alt="" />
            </div>
            <p class="cat-content-right-desc">基于 NutUI 的大促组件</p>
            <div class="cat-content-right-godetail" @click="toDetail">查看详情</div>
          </div>
        </div>
        <div class="marketing-content">
          <div class="marketing-content-left">
            <img src="./../../assets/images/marketing-back.png" alt="" />
          </div>
          <div class="marketing-content-right">
            <div class="marketing-content-right-title">
              <img src="./../../assets/images/marketing-title.png" alt="" />
            </div>
            <p class="marketing-content-right-desc">基于 NutUI 的抽奖组件</p>
            <div class="marketing-content-right-godetail" @click="goAwait">敬请期待</div>
          </div>
          <div class="marketing-content-mask" v-if="showAwait" @click="hideAwait"> 正在建设中，敬请期待~ </div>
        </div>
      </div>
    </div>

    <div class="doc-content-cases" v-if="casesImages.length">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">应用案例</h4>
      </div>
      <div class="doc-content-cases-content">
        <div class="doc-content-cases-content__main">
          <div class="doc-content-cases-content__main-lefticon" @click="onLeft"></div>
          <div class="doc-content-cases-content__main-iconinfo">
            <h4>{{ currentCaseItem.product_name }}</h4>
            <p>{{ currentCaseItem.product_info }}</p>
            <img :src="currentCaseItem.logo" />
          </div>
          <div
            class="doc-content-cases-content__main-iphone"
            :style="{
              backgroundImage: 'url(' + currentCaseItem.cover_image + ')'
            }"
          >
            <img src="../../assets/images/iphone-cases.png" alt="" srcset="" />
          </div>
          <div class="doc-content-cases-content__main-righticon" @click="onRight"></div>
        </div>
        <div class="doc-content-cases-content__list">
          <div class="swiper-wrapper" :class="[themeNameValue() == 'black' ? 'noShadow' : '']">
            <div class="swiper-slide" v-for="(item, index) in casesImages" :key="index">
              <img :src="item.cover_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-content-more" v-if="articleList.length">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">学习资源</h4>
        <a class="sub-more" href="#/resource">More</a>
      </div>
      <ul class="more-list">
        <li class="more-item" v-for="item in articleList.slice(0, 4)" :key="item.id" @click="toLink(item.id)">
          <img :src="item.cover_image" />
          <p class="more-title" v-hover>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, computed, ref } from 'vue';
import Header from '@/sites/doc/components/Header.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import router from '../router';
import { RefData } from '@/sites/assets/util/ref';
import { ApiService } from '@/sites/service/ApiService';
import 'swiper/swiper.min.css';
import Swiper from 'swiper/swiper-bundle.min.js';
export default defineComponent({
  name: 'main',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer
  },
  setup() {
    const data = reactive({
      // theme: 'white',
      articleList: new Array(),
      casesImages: new Array(),
      currentCaseItem: {},
      currentCaseIndex: 0,
      localTheme: localStorage.getItem('nutui-theme-color'),
      showAwait: false
    });
    let caseSwiper: any = null;
    onMounted(() => {
      // 文章列表接口
      const apiService = new ApiService();
      apiService.getArticle().then((res) => {
        if (res?.state == 0) {
          data.articleList = (res.value.data.arrays as any[])
            .map((item) => {
              if (item.type == 1) {
                return item;
              }
            })
            .filter((i) => i);
        }
      });
      apiService.getCases().then((res) => {
        if (res?.state == 0) {
          data.casesImages = (res.value.data.arrays as any[]).map((item) => {
            if (item.cover_image?.length) {
              item.cover_image = item.cover_image.split(',')[0];
            }
            return item;
          });
          if (data.casesImages?.length) {
            data.currentCaseItem = data.casesImages[data.currentCaseIndex];
          }

          setTimeout(() => {
            caseSwiper = new Swiper('.doc-content-cases-content__list', {
              direction: 'horizontal',
              slidesPerView: 'auto',
              initialSlide: 1,
              loop: true,
              on: {
                slideChange: function () {
                  let realIndex = (this as any).realIndex;
                  data.currentCaseIndex = realIndex === 0 ? data.casesImages.length - 1 : realIndex - 1;
                  setTimeout(() => {
                    data.currentCaseItem = data.casesImages[data.currentCaseIndex];
                  }, 230);
                }
              }
            });
          }, 500);
        }
      });
    });
    const goAwait = () => {
      data.showAwait = true;
    };
    const hideAwait = () => {
      data.showAwait = false;
    };
    const onLeft = () => {
      caseSwiper.slidePrev();
    };

    const onRight = () => {
      caseSwiper.slideNext();
    };

    const themeName = computed(() => {
      return function () {
        return `doc-content-${RefData.getInstance().themeColor.value}`;
      };
    });
    const themeNameValue = computed(() => {
      return function () {
        return RefData.getInstance().themeColor.value;
      };
    });
    const toLink = (id: number) => {
      window.open('//jelly.jd.com/article/' + id);
    };
    function toIntro() {
      router.push({ path: '/intro' });
    }
    const toDetail = () => {
      window.open('/cat');
    };
    return {
      toIntro,
      ...toRefs(data),
      themeName,
      themeNameValue,
      toLink,
      onLeft,
      onRight,
      toDetail,
      goAwait,
      hideAwait
    };
  }
});
</script>
<style lang="scss">
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
.doc-content-index {
  .content-left {
    background: url(https://storage.360buyimg.com/imgtools/a423faab46-8b142e80-8bb1-11eb-853a-6fded8704e77.png)
      no-repeat;
    background-size: 1126px 568px;
    background-position-x: right;
    background-position-y: 150px;
    .content-title {
      animation: fadeInLeft 1s both;
    }
    .content-smile {
      animation: fadeInLeft 1s both 0.5s;
    }
    .content-subTitle {
      animation: fadeInLeft 1s both 0.5s;
    }
    .content-button {
      iframe {
        animation: fadeInLeft 1s both 1.2s;
      }
      .leftButton {
        animation: fadeInLeft 1s both 1.2s;
      }
      .rightButton {
        animation: fadeInLeft 1s both 1.2s;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.doc-content {
  &-hd {
    height: 52px;
    line-height: 52px;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
    .sub-more {
      position: absolute;
      right: 0;
      font-size: 14px;
      color: $theme-red;
    }
  }
  &-title {
    display: inline-block;
    font-size: 26px;
  }
  &-features {
    width: 1200px;
    margin: 0 auto 90px;
    .features-list {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
    }
    .features-item {
      width: 198px;
      text-align: center;
      img {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
      }
    }
    .features-title {
      margin-bottom: 20px;
      font-size: 24px;
    }
    .features-desc {
      font-size: 14px;
      line-height: 18px;
    }
  }
  &-taro {
    width: 1200px;
    margin: 0 auto 90px;
    .taro-content {
      display: flex;
      .taro-left {
        margin-left: 50px;
        width: 453px;
        height: 386px;
        background: url('../../assets/images/img-taro-left.png') no-repeat;
        background-size: cover;
      }
      .taro-right {
        margin-left: 145px;
        .right-img {
          width: 436px;
          height: 213px;
          background: url('../../assets/images/img-taro-right.png') no-repeat;
          background-size: cover;
          margin-bottom: 58px;
        }
        .taro-desc {
          padding-left: 25px;
          color: #f2f2f2;
          font-weight: lighter;
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
  &-catmarketing {
    width: 1200px;
    margin: 0 auto 90px;

    &-content {
      display: flex;
    }

    .cat-content,
    .marketing-content {
      display: flex;
      width: 585px;
      height: 270px;
      background: linear-gradient(
        130.16deg,
        rgba(249, 188, 203, 1) 0%,
        rgba(247, 239, 247, 1) 26.666302447552447%,
        rgba(241, 240, 246, 1) 66.69307255244755%,
        rgba(180, 228, 228, 1) 100%
      );
      border-radius: 4px 4px 4px 0 4px;
      margin-left: 44px;
    }
    .cat-content,
    .marketing-content {
      margin-left: 0px;
      display: flex;
      align-items: center;
      &-left {
        height: 182px;
        width: 270px;
        margin-left: 14px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      &-right {
        height: 182px;
        width: 233px;
        margin-left: 37px;
        font-family: PingFangSC;
        font-weight: normal;
        padding-top: 11px;
        box-sizing: border-box;
        &-title {
          img {
            height: 46px;
            width: 177px;
          }
        }
        &-desc {
          margin-top: 26px;
          font-size: 18px;
          color: rgba(51, 51, 51, 1);
        }
        &-godetail {
          width: 130px;
          height: 35px;
          margin-top: 24px;
          line-height: 35px;
          text-align: center;
          font-size: 19px;
          cursor: pointer;
          color: rgba(255, 255, 255, 1);
          background: linear-gradient(
            135deg,
            rgba(255, 28, 101, 1) 0%,
            rgba(255, 133, 202, 1) 67.83430752051981%,
            rgba(255, 142, 155, 1) 87.35307751528254%,
            rgba(255, 169, 151, 1) 100%
          );
          border-radius: 17px;
        }
      }
    }
    .marketing-content {
      position: relative;
      margin-left: 44px;
      background: linear-gradient(
        130.16deg,
        rgba(219, 210, 255, 1) 0%,
        rgba(247, 239, 247, 1) 26.666302447552447%,
        rgba(241, 240, 246, 1) 66.69307255244755%,
        rgba(255, 236, 203, 1) 100%
      );
      &-left {
        height: 196px;
        width: 243px;
        margin-left: 28px;
      }
      &-right {
        height: 196px;
        padding-top: 20px;
        &-godetail {
          background: linear-gradient(
            135deg,
            rgba(114, 60, 255, 1) 0%,
            rgba(111, 58, 255, 1) 63.49938195167575%,
            rgba(150, 110, 255, 1) 87.35307751528254%,
            rgba(149, 117, 241, 1) 100%
          );
        }
      }
      &-mask {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.52);
        border-radius: 4px 4px 4px 0 4px;
        text-align: center;
        line-height: 270px;
        font-size: 30px;
        color: #ffffff;
      }
    }
  }
  &-cases {
    width: 1200px;
    overflow: hidden;
    margin: 0 auto 90px;
    &-content {
      height: 463px;
      display: flex;
      align-items: center;
      &__main {
        padding: 0 22px;
        width: 590px;
        height: 463px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #959fb1;
        border-radius: 29px 20px 20px 29px;
        &-iphone {
          width: 210px;
          height: 420px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 188px 397px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        &-lefticon {
          margin-right: 20px;
          width: 36px;
          height: 36px;
          background-image: url('../../assets/images/right-arrow.png');
          transform: rotate(180deg);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          &:hover {
            transform: rotate(0);
            background-image: url('../../assets/images/left-arrow.png');
          }
        }
        &-righticon {
          margin-left: 20px;
          width: 36px;
          height: 36px;
          background-image: url('../../assets/images/right-arrow.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          z-index: 1;
          &:hover {
            transform: rotate(180deg);
            background-image: url('../../assets/images/left-arrow.png');
          }
        }
        &-iconinfo {
          width: 190px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          > h4 {
            line-height: 42px;
            font-size: 26px;
            color: rgba(255, 255, 255, 1);
          }
          > p {
            font-size: 18px;
            margin-bottom: 20px;
            color: rgba(255, 255, 255, 1);
          }
          > img {
            width: 114px;
            height: 114px;
            overflow: hidden;
            border-radius: 29px;
          }
        }
      }
      &__list {
        flex: 1;
        overflow: hidden;
        margin-left: 30px;
        .swiper-wrapper {
          display: flex;
          transform: translate3d(0, 0, 0);
          transition: all 0.6s ease;
          .swiper-slide {
            width: 180px;
            height: 390px;
            flex-shrink: 0;
            margin-right: 20px;
            border-radius: 4px;
            overflow: hidden;
            > img {
              width: 100%;
              height: 100%;
            }
          }
          &.noShadow {
            .swiper-slide {
              box-shadow: none !important;
            }
          }
        }
      }
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
        box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
      }
    }
    .more-title {
      width: 280px;
      height: 44px;
      line-height: 22px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
.doc-content-index {
  display: flex;
  height: 926px;
  margin-bottom: 70px;
  background-color: #070505;
  min-width: 1200px;
  .content-left {
    padding: 15% 0 0 8.8%;
    // margin: auto 0;
    flex: 1;
    min-width: 550px;
    .content-title {
      // line-height: 36px;
      font-size: 42px;
      color: rgba(255, 255, 255, 1);
    }
    .content-smile {
      margin-top: 10px;
      width: 44px;
      height: 17px;
      background: url(https://storage.360buyimg.com/imgtools/09516173b9-9b32b9d0-3864-11eb-9a56-0104487ad2b0.png)
        no-repeat;
      background-size: cover;
    }
    .content-subTitle {
      margin-top: 12px;
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
    }
    .content-button {
      position: relative;
      display: flex;
      margin-top: 40px;
      iframe {
        align-self: center;
      }
      .leftButton {
        display: flex;
        .leftButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: rgba(255, 255, 255, 1);
        }
        width: 150px;
        height: 40px;
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
        position: relative;
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
        &:hover {
          .qrcodepart {
            display: block;
          }
        }
      }
      .qrcodepart {
        display: none;
        position: absolute;
        right: -10px;
        top: 50px;
        padding: 4px;
        width: 166px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.11);
        .qrcode-text {
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          text-align: center;
        }
        .qrcode {
          width: 160px;
          height: 160px;
          margin: 0 auto;
          background: url(https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png)
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
}
.doc-content-black {
  background: $theme-black-content-bg;
  color: white;
  .doc-content-title {
    color: white;
  }
  .doc-content-features {
    .features-title {
      color: white;
    }
    .features-desc {
      color: #a5a5a5;
    }
  }
  .doc-content-more {
    .more-title {
      color: #fff;
    }
  }
  .doc-content-cases-content__main {
    background: #474753;
  }
  .doc-content-more {
    .more-item img {
      box-shadow: none;
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
  .taro-content {
    display: flex;
    .taro-left {
      margin-left: 50px;
      width: 453px;
      height: 386px;
      background: url('../../assets/images/img-taro-left-white.png') no-repeat;
      background-size: cover;
    }
    .taro-right {
      margin-left: 145px;
      .right-img {
        width: 436px;
        height: 213px;
        background: url('../../assets/images/img-taro-right-white.png') no-repeat;
        background-size: cover;
        margin-bottom: 58px;
      }
      .taro-desc {
        color: #1a1a1a;
        font-weight: lighter;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
.a-l {
  text-align: center;
}
</style>
