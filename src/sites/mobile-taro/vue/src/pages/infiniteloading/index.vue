<template>
  <view class="demo">
    <h2>基础演示</h2>
    <nut-cell>
      <view-block class="infiniteUl" id="scrollDemo">
        <nut-infiniteloading
          pull-icon="JD"
          load-txt="loading"
          load-more-txt="没有啦～"
          :is-open-refresh="true"
          container-id="scrollDemo"
          :has-more="hasMore"
          @load-more="loadMore"
          @refresh="refresh"
        >
          <view-block
            class="infiniteLi"
            v-for="(item, index) in defultList"
            :key="index"
            >{{ item }}</view-block
          >
        </nut-infiniteloading>
      </view-block>
    </nut-cell>
  </view>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs } from 'vue';

export default {
  props: {},
  setup() {
    const hasMore = ref(true);

    const data = reactive({
      defultList: ['']
    });

    const loadMore = (done) => {
      setTimeout(() => {
        const curLen = data.defultList.length;

        for (let i = curLen; i < curLen + 10; i++) {
          data.defultList.push(`${i}`);
        }

        if (data.defultList.length > 30) hasMore.value = false;

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
        data.defultList.push(`${i}`);
      }
    };
    onMounted(() => {
      init();
    });

    return {
      loadMore,
      hasMore,
      refresh,
      ...toRefs(data)
    };
  }
};
</script>

<style>
.infiniteUl {
  height: 500px;
  width: 100%;
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
