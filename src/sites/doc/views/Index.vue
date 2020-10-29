<template>
  <doc-header></doc-header>
  <div class="doc-content">
    <doc-nav></doc-nav>
    <doc-demo-preview :url="demoUrl"></doc-demo-preview>
    <div class="doc-content-document">
      <router-view />
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
import { nav, versions } from '@/config';
import Header from '@/sites/doc/components/Header.vue';
import Nav from '@/sites/doc/components/Nav.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import DemoPreview from '@/sites/doc/components/DemoPreview.vue';
export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Nav.name]: Nav,
    [Footer.name]: Footer,
    [DemoPreview.name]: DemoPreview
  },
  setup(prop, { emit, slots }) {
    const data = reactive({
      demoUrl: 'demo.html'
    });

    // 获取当前路由
    const route = useRoute();
    // 获取路由实例
    const router = useRouter();

    onBeforeRouteUpdate(() => {
      // 当当前路由发生变化时，调用回调函数
      // const { origin, pathname } = window.location;
      // data.demoUrl = `${origin}${pathname.replace('index.html', '')}demo.html#${route.path}`;
    });

    return data;
  }
});
</script>

<style lang="scss" scoped>
.doc {
  &-content {
    height: 100%;
    display: flex;

    &-document {
      margin: 10px;
      border: 1px solid red;
      width: 800px;
    }
  }
}
</style>
