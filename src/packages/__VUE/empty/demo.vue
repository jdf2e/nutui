<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <div class="show">
      <nut-empty :description="translate('noData')"></nut-empty>
    </div>

    <h2>{{ translate('imageType') }}</h2>
    <div class="show">
      <nut-tabs v-model="tabValue">
        <nut-tabpane :title="translate('noContent')">
          <nut-empty image="empty" :description="translate('noContent')"></nut-empty>
        </nut-tabpane>
        <nut-tabpane :title="translate('error')">
          <nut-empty image="error" :description="translate('error')"></nut-empty>
        </nut-tabpane>
        <nut-tabpane :title="translate('noNetWork')">
          <nut-empty image="network" :description="translate('noNetWork')"></nut-empty>
        </nut-tabpane>
      </nut-tabs>
    </div>

    <h2>{{ translate('customImg') }}</h2>
    <div class="show">
      <nut-empty :description="translate('description')">
        <template #image>
          <img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" />
        </template>
      </nut-empty>
    </div>

    <h2>{{ translate('bottomContent') }}</h2>
    <div class="show">
      <nut-empty image="error" :description="translate('fail')">
        <div style="margin-top: 10px">
          <nut-button icon="refresh" type="primary">{{ translate('retry') }}</nut-button>
        </div>
      </nut-empty>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('empty');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      noData: '无数据',
      noContent: '无内容',
      noNetWork: '无网络',
      error: '加载失败/错误',
      imageType: '图片类型',
      description: '描述文字',
      customImg: '自定义图片',
      bottomContent: '底部内容',
      fail: '加载失败',
      retry: '重试'
    },
    'en-US': {
      basic: 'Basic Usage',
      noData: 'no data',
      noContent: 'no content',
      noNetWork: 'no network',
      error: 'error',
      imageType: 'Image Type',
      description: 'description',
      customImg: 'Custom Image',
      bottomContent: 'Bottom Content',
      fail: 'Failed to load',
      retry: 'Retry'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const tabValue = ref(0);
    return {
      tabValue,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  .show {
    background: #ffffff;
  }
}
</style>
