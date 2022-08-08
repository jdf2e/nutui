<template>
  <div class="doc-demo-preview">
    <iframe :src="url" frameborder="0" ref="demoIframe"></iframe>
    <!-- <demo-icon @refresh="onRefresh()" @goHome="onGoHome()"></demo-icon> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Icon from '@/sites/doc/components/Icon.vue';
export default defineComponent({
  name: 'doc-demo-preview',
  components: {
    [Icon.name]: Icon
  },
  props: {
    url: String
  },
  setup(props: any, { emit }: any) {
    const demoIframe = ref(null);
    const onRefresh = () => {
      const iframe = demoIframe?.value?.contentWindow;
      iframe.postMessage(
        {
          cmd: 'refresh',
          params: {
            state: true
          }
        },
        '*'
      );
    };
    const onGoHome = () => {
      const iframe = demoIframe?.value?.contentWindow;
      iframe.postMessage(
        {
          cmd: 'goHome',
          params: {
            state: true
          }
        },
        '*'
      );
    };

    return { demoIframe, onRefresh, onGoHome };
  }
});
</script>

<style lang="scss">
.doc {
  &-demo-preview {
    height: 667px;
    // height: 637px;
    width: 375px;
    position: absolute;
    right: 30px;
    top: 240px;
    // top: 135px;
    box-shadow: #ebedf0 0 4px 12px;
    border-radius: 12px;
    overflow: hidden;
    &.fixed {
      position: fixed;
      top: 120px;
    }
    iframe {
      // height: calc(100% - 40px);
      height: 100%;
      width: 100%;
    }
  }
}
</style>
