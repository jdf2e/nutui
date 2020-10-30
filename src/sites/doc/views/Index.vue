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
import { defineComponent, reactive } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import Header from '@/sites/doc/components/Header.vue';
import Nav from '@/sites/doc/components/Nav.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import DemoPreview from '@/sites/doc/components/DemoPreview.vue';
import '../../../styles/md-style.scss';
export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Nav.name]: Nav,
    [Footer.name]: Footer,
    [DemoPreview.name]: DemoPreview
  },
  setup() {
    const data = reactive({
      demoUrl: 'demo.html'
    });

    onBeforeRouteUpdate(to => {
      const { origin, pathname } = window.location;
      data.demoUrl = `${origin}${pathname.replace('index.html', '')}demo.html#${to.path}`;
    });

    return data;
  }
});
</script>

<style lang="scss" scoped>
.doc {
  &-content {
    display: flex;
  }
}
</style>
