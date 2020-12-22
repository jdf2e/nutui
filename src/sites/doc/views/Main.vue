<template>
  <doc-header></doc-header>
  <div class="doc-content-index">
    <div class="content-left">
      <div class="content-title"> Nut UI 3.0 </div>
      <div class="content-smile"> </div>
      <div class="content-subTitle">一款具有京东风格的VUE组件</div>
      <div class="content-button">
        <div class="leftButton">
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
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute
} from 'vue-router';
import { currentRoute } from '@/sites/assets/util/ref';
import Header from '@/sites/doc/components/Header.vue';
export default defineComponent({
  name: 'main',
  components: { [Header.name]: Header },
  setup() {
    const data = reactive({});

    onMounted(() => {
      const route = useRoute();
    });

    return data;
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

.doc-content-index {
  display: flex;
  flex: 1;
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
</style>
