<template>
  <div class="demo">
    <nut-tabs v-model="tabsValue" animatedTime="0">
      <nut-tabpane title="基础用法">
        <nut-pullrefresh v-model="refresh" @refresh="refreshFun">
          <div class="pull-block">向下拉试试吧！</div>
        </nut-pullrefresh>
      </nut-tabpane>
      <nut-tabpane title="自定义文案">
        <nut-pullrefresh
          v-model="refresh2"
          pullingTxt="用力拉"
          loosingTxt="松开吧"
          loadingTxt="玩命加载中..."
          completeTxt="好啦"
          @refresh="refreshFun"
        >
          <div class="pull-block">向下拉试试吧！</div>
        </nut-pullrefresh>
      </nut-tabpane>
      <nut-tabpane title="Tab 3">
        <div class="parentpage">
          <nut-pullrefresh v-model="refresh" @refresh="refreshFun">
            <div class="pull-block" v-for="item in refreshList">
              <div>item</div>
            </div>
          </nut-pullrefresh>
        </div>
      </nut-tabpane>
    </nut-tabs>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs, getCurrentInstance } from 'vue';
import { createComponent } from '@/packages/utils/create';

const { createDemo, translate } = createComponent('pullrefresh');
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

    const refresh = ref(false);
    const refresh2 = ref(false);

    const data = reactive({
      tabsValue: 0,
      customList: [],
      refreshList: new Array(10).fill(11)
    });

    const refreshFun = () => {
      setTimeout(() => {
        console.log('加载中');
        refresh.value = false;
        refresh2.value = false;
      }, 3000);
    };

    return {
      refreshFun,
      refresh,
      refresh2,
      translate,
      ...toRefs(data)
    };
  }
});
</script>

<style lang="scss">
.demo {
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-bottom: 0 !important;
}

.nut-tabpane {
  padding: 0;
}
.nut-pullrefresh {
  height: calc(100vh - 107px);
}
.pull-block {
  text-align: center;
  color: #999;
  font-size: 16px;
  padding-top: 60px;
}

.parentpage {
  height: 600px;
  /* background: #ee; */
}
</style>
