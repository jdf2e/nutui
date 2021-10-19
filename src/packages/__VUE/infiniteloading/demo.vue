<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <ul class="infiniteUl" id="scroll">
        <nut-infiniteloading container-id="scroll" :use-window="false" :has-more="hasMore" @load-more="loadMore">
          <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{ item }}</li>
        </nut-infiniteloading>
      </ul>
    </nut-cell>

    <h2>下拉刷新</h2>
    <nut-cell>
      <ul class="infiniteUl" id="refreshScroll">
        <nut-infiniteloading
          pull-icon="JD"
          container-id="refreshScroll"
          :use-window="false"
          :is-open-refresh="true"
          :has-more="refreshHasMore"
          @load-more="refreshLoadMore"
          @refresh="refresh"
        >
          <li class="infiniteLi" v-for="(item, index) in refreshList" :key="index">{{ item }}</li>
        </nut-infiniteloading>
      </ul>
    </nut-cell>

    <h2>自定义加载文案</h2>
    <nut-cell>
      <ul class="infiniteUl" id="customScroll">
        <nut-infiniteloading
          load-txt="loading"
          load-more-txt="没有啦～"
          container-id="customScroll"
          :use-window="false"
          :has-more="customHasMore"
          @load-more="customLoadMore"
        >
          <li class="infiniteLi" v-for="(item, index) in customList" :key="index">{{ item }}</li>
        </nut-infiniteloading>
      </ul>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs, getCurrentInstance } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('infiniteloading');
export default createDemo({
  props: {},
  setup() {
    let { proxy } = getCurrentInstance() as any;

    const hasMore = ref(true);
    const customHasMore = ref(true);
    const refreshHasMore = ref(true);

    const data = reactive({
      defultList: [''],
      customList: [''],
      refreshList: ['']
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

    const customLoadMore = (done) => {
      setTimeout(() => {
        const curLen = data.customList.length;
        for (let i = curLen; i < curLen + 10; i++) {
          data.customList.push(`${i}`);
        }
        if (data.customList.length > 30) customHasMore.value = false;
        done();
      }, 500);
    };

    const refreshLoadMore = (done) => {
      setTimeout(() => {
        const curLen = data.refreshList.length;
        for (let i = curLen; i < curLen + 10; i++) {
          data.refreshList.push(`${i}`);
        }
        if (data.refreshList.length > 30) refreshHasMore.value = false;
        done();
      }, 500);
    };

    const refresh = (done) => {
      setTimeout(() => {
        proxy.$toast.text('刷新成功');
        done();
      }, 1000);
    };

    const init = () => {
      for (let i = 0; i < 10; i++) {
        data.defultList.push(`${i}`);
        data.customList.push(`${i}`);
        data.refreshList.push(`${i}`);
      }
    };
    onMounted(() => {
      init();
    });

    return {
      loadMore,
      hasMore,
      customHasMore,
      customLoadMore,
      refreshHasMore,
      refreshLoadMore,
      refresh,
      ...toRefs(data)
    };
  }
});
</script>

<style lang="scss" scoped>
.infiniteUl {
  height: 300px;
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
