<template>
  <Demo>
    <h2>基础演示</h2>
    <nut-cell>
      <view id="scrollDemo" class="infiniteUl">
        <nut-infinite-loading
          pull-icon="JD"
          load-txt="loading"
          load-more-txt="没有啦～"
          :is-open-refresh="true"
          container-id="scrollDemo"
          :has-more="hasMore"
          @load-more="loadMore"
          @refresh="refresh"
        >
          <view v-for="(item, index) in defaultList" :key="index" class="infiniteLi">{{ item }}</view>
        </nut-infinite-loading>
      </view>
    </nut-cell>
  </Demo>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const hasMore = ref(true);
const defaultList = ref(['']);

const loadMore = (done) => {
  setTimeout(() => {
    const curLen = defaultList.value.length;

    for (let i = curLen; i < curLen + 10; i++) {
      defaultList.value.push(`${i}`);
    }

    if (defaultList.value.length > 30) hasMore.value = false;

    done();
  }, 500);
};

const refresh = (done) => {
  setTimeout(() => {
    console.log('刷新成功');
    done();
  }, 1000);
};

const init = () => {
  for (let i = 0; i < 20; i++) {
    defaultList.value.push(`${i}`);
  }
};
onMounted(() => {
  init();
});
</script>

<style>
.infiniteUl {
  height: 500px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}

.loading {
  display: block;
  width: 100%;
  text-align: center;
}
</style>
