<template>
  <div class="index">
    <Header :compName="compName" />
    <iframe :src="src"></iframe>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance } from '@tarojs/taro';
import { ref, computed, Ref } from 'vue';
import Header from '../../components/header.vue';
export default {
  name: 'NutUI',
  components: {
    Header
  },
  setup() {
    let compName = ref('') as Ref;

    let $instance = getCurrentInstance();

    compName.value = $instance.router?.params.n;

    const src = computed(() => {
      return `/#/${$instance.router?.params.e}/pages/${$instance.router?.params.n}/index`;
    });

    return {
      compName,
      src
    };
  }
};
</script>
<style lang="scss">
.index {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}
iframe {
  border: 0;
  position: fixed;
  top: 57px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 57px);
}
</style>
