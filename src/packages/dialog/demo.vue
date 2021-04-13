<template>
  <div class="demo">
    <!-- <nut-cell title="基础弹框" @click="baseClick"></nut-cell> -->
    <nut-cell title="标签弹框" @click="noTitleClick"></nut-cell>
    <nut-dialog
      title="标签式使用"
      :close-on-click-overlay="false"
      :content="content"
      v-model:visible="visible"
    >
    </nut-dialog>

    <!-- <template v-slot:header>
        
      </template> -->
  </div>
</template>
<script lang="ts">
import { ref, getCurrentInstance } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('dialog');
export default createDemo({
  props: {},

  setup() {
    const { proxy } = getCurrentInstance();
    const content = ref(
      '模态对话框，在浮层中显示，引导用户进行相关操作，支持图片对话框。'
    );
    const visible = ref(false);

    const baseClick = () => {
      proxy.$dialog({
        title: '基础弹框',
        content: '基础弹框内容'
      });
    };
    const noTitleClick = () => {
      visible.value = true;
    };

    return {
      content,
      visible,
      baseClick,
      noTitleClick
    };
  }
});
</script>
<style lang="scss"></style>
