<template>
  <doc-header></doc-header>
  <div class="doc-content-index">
    <div class="content-left">
      <div class="content-title"> Nut UI 3.0 </div>
      <div class="content-smile"> </div>
      <div class="content-subTitle">一款具有京东风格的VUE组件</div>
      <div class="content-button">
        <input class="leftButton" type="button" value="开始使用" />
        <input class="rightButton" type="button" value="扫码体验" />
      </div>
    </div>
    <div class="content-right">
      <div class="content-img"> </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute } from 'vue-router';
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
.doc-content-index {
  display: flex;
  flex: 1;
  background-color: #070505;

  .content-left {
    padding: 15% 0 0 8.8%;
    // margin: auto 0;
    width: 1300px;
    min-width: 500px;
    .content-title {
      // line-height: 36px;
      font-family: PingFangSC-Medium;
      font-size: 50px;
      color: rgba(255, 255, 255, 1);
    }
    .content-smile {
      margin-top: 10px;
      width: 69px;
      height: 27px;
      background: url(https://storage.360buyimg.com/imgtools/09516173b9-9b32b9d0-3864-11eb-9a56-0104487ad2b0.png) no-repeat;
      background-size: cover;
    }
    .content-subTitle {
      margin-top: 12px;
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
    }
    .content-button {
      margin-top: 40px;
      .leftButton {
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
        width: 170px;
        height: 50px;
        background: linear-gradient(135deg, rgba(250, 25, 44, 1) 0%, rgba(250, 39, 40, 1) 45%, rgba(250, 56, 31, 1) 83%, rgba(250, 63, 25, 1) 100%);
        border-radius: 29px;
      }
      .rightButton {
        margin-left: 30px;
        font-size: 20px;
        color: rgba(227, 44, 54, 1);
        width: 170px;
        height: 50px;
        border: 1px solid rgba(250, 44, 25, 1);
        border-radius: 29px;
        background-color: #000000;
      }
    }
  }
  .content-right {
    flex: 1;
    margin: auto 0;
    .content-img {
      width: 900px;
      height: 514px;
      background: url(https://storage.360buyimg.com/imgtools/732c3242e9-9b1946b0-391a-11eb-8a8d-55c57d054ae1.png) no-repeat;
      background-size: cover;
    }
  }
}
</style>
