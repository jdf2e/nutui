<template>
  <div class="demo nut-infiniteloading-demo">
    <nut-tabs v-model="tabsValue" @change="chagetabs">
      <nut-tab-pane :title="translate('basic')">
        <ul class="infiniteUl">
          <nut-infinite-loading v-model="infinityValue" :has-more="hasMore" @load-more="loadMore">
            <li class="infiniteLi" v-for="(item, index) in defultList" :key="index">{{ item }}</li>
          </nut-infinite-loading>
        </ul>
      </nut-tab-pane>

      <nut-tab-pane :title="translate('customTxt')">
        <ul class="infiniteUl">
          <nut-infinite-loading
            v-model="infinityValue2"
            load-txt="Loading..."
            :load-more-txt="translate('none')"
            :has-more="customHasMore"
            @load-more="customLoadMore"
          >
            <li class="infiniteLi" v-for="(item, index) in customList" :key="index">{{ item }}</li>
          </nut-infinite-loading>
        </ul>
      </nut-tab-pane>
    </nut-tabs>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('infinite-loading');
import { useTranslate } from '@/sites/assets/util/useTranslate';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      pullRefresh: '下拉刷新',
      customTxt: '自定义加载文案',
      none: '没有啦~',
      success: '刷新成功'
    },
    'en-US': {
      basic: 'Basic Usage',
      pullRefresh: 'Pull to refresh',
      customTxt: 'Custom loading copywriting',
      none: 'No more',
      success: 'Refresh success'
    }
  });

export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const letter: any[] = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'IJ',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ];

    const hasMore = ref(true);
    const customHasMore = ref(true);
    const refreshHasMore = ref(true);

    const data = reactive({
      tabsValue: 0,
      infinityValue: false,
      infinityValue2: false,
      defultList: [],
      customList: [],
      refreshList: []
    });

    let cycle = 0;
    let cycle2 = 0;

    const loadMore = () => {
      setTimeout(() => {
        data.defultList = data.defultList.concat(letter);
        cycle++;
        if (cycle > 2) hasMore.value = false;
        data.infinityValue = false;
      }, 1000);
    };

    const customLoadMore = () => {
      setTimeout(() => {
        data.customList = data.customList.concat(letter);
        cycle2++;

        console.log(cycle2, data.customList);
        if (cycle2 > 2) customHasMore.value = false;

        data.infinityValue2 = false;
      }, 1000);
    };

    const chagetabs = () => {
      data.defultList = [].concat(letter);
      data.customList = [].concat(letter);
      data.infinityValue2 = false;
      data.infinityValue = false;
      customHasMore.value = true;
      hasMore.value = true;
    };
    onMounted(() => {
      chagetabs();
    });

    return {
      loadMore,
      hasMore,
      customHasMore,
      customLoadMore,
      refreshHasMore,
      translate,
      ...toRefs(data),
      chagetabs
    };
  }
});
</script>

<style lang="scss">
.nut-infiniteloading-demo {
  .nut-theme-dark {
    .infiniteLi {
      color: $dark-color;
    }
  }

  .nut-tabs__titles {
    background: #fff !important;
    box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 7%);
    margin-top: 10px;
    margin-bottom: 3px;
    z-index: 99;
  }

  .nut-tab-pane {
    padding: 0 !important;
    padding-left: 16px !important;
  }
  .infiniteUl {
    width: 100%;
    height: calc(100vh - 120px);
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .infiniteLi {
    font-size: 14px;
    color: #333;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  .loading {
    display: block;
    width: 100%;
    text-align: center;
  }
}
</style>
