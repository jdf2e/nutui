<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-toast
      :msg="page.state.msg"
      v-model:visible="page.state.show"
      :type="page.state.type"
      @closed="page.methods.onClosed"
      :cover="page.state.cover"
    />
    <nut-cell
      title="Text 文字提示"
      is-link
      @click="page.methods.openToast('text', '网络失败，请稍后再试~')"
    ></nut-cell>
    <nut-cell
      title="Success 成功提示"
      is-link
      @click="page.methods.openToast('success', '成功提示')"
    ></nut-cell>
    <nut-cell
      title="Error 失败提示"
      is-link
      @click="page.methods.openToast('fail', '失败提示')"
    ></nut-cell>
    <nut-cell
      title="Warning 警告提示"
      is-link
      @click="page.methods.openToast('warn', '警告提示')"
    ></nut-cell>
    <nut-cell
      title="Loading 加载提示"
      is-link
      @click="page.methods.openToast('loading', '加载中')"
    ></nut-cell>
    <nut-cell
      title="Loading 带白色背景遮罩"
      is-link
      @click="page.methods.openToast('loading', '加载中', true)"
    ></nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const page = {
      state: reactive({
        msg: 'toast',
        type: 'text',
        show: false,
        cover: false
      }),
      methods: {
        openToast: (type: string, msg: string, cover: boolean = false) => {
          page.state.show = true;
          page.state.msg = msg;
          page.state.type = type;
          page.state.cover = cover;
        },
        onClosed: () => console.log('closed')
      }
    };
    return {
      page
    };
  }
};
</script>

<style lang="scss" scoped></style>
