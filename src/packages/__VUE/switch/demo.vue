<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-switch v-model="checked" />
    </nut-cell>

    <h2>{{ translate('title1') }}</h2>
    <nut-cell>
      <nut-switch
        :v-model="translate('text1')"
        :activeValue="translate('text1')"
        :inactiveValue="translate('text2')"
        @change="change"
      />
    </nut-cell>

    <h2>{{ translate('title2') }}</h2>
    <nut-cell>
      <nut-switch v-model="checked" disable />
    </nut-cell>

    <h2>{{ translate('title3') }}</h2>
    <nut-cell>
      <nut-switch v-model="checked" loading color="red" />
    </nut-cell>

    <h2>{{ translate('title4') }}</h2>
    <nut-cell>
      <nut-switch v-model="checked" @change="change" />
    </nut-cell>

    <h2>{{ translate('title5') }}</h2>
    <nut-cell>
      <nut-switch :model-value="checkedAsync" @change="changeAsync" :loading="loadingAsync" />
    </nut-cell>

    <h2>{{ translate('title6') }}</h2>
    <nut-cell>
      <nut-switch v-model="checked" @change="change" active-color="blue" />
    </nut-cell>

    <h2>{{ translate('title7') }}</h2>
    <nut-cell>
      <nut-switch
        v-model="checked"
        @change="change"
        :active-text="translate('text1')"
        :inactive-text="translate('text2')"
        class="switch-demo1"
      />
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('switch');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '值为字符串',
      title2: '禁用状态',
      title3: '加载状态',
      title4: 'change 事件',
      title5: '异步控制',
      title6: '自定义颜色',
      title7: '支持文字',
      text1: '开',
      text2: '关'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Value Is String',
      title2: 'Disabled',
      title3: 'Loading',
      title4: 'Change Event',
      title5: 'Async Control',
      title6: 'Custom Color',
      title7: 'Support Text',
      text1: 'Open',
      text2: 'Closed'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    let { proxy } = getCurrentInstance() as any;
    const checked = ref(true);
    const checkedAsync = ref(true);
    const loadingAsync = ref(false);

    // const checkedStr = ref('开');

    const change = (value: boolean, event: Event) => {
      proxy.$toast.text(`value：${value}`);
    };

    const changeAsync = (value: boolean, event: Event) => {
      proxy.$toast.text(`after 2 second： ${value}`);
      loadingAsync.value = true;
      setTimeout(() => {
        checkedAsync.value = value;
        loadingAsync.value = false;
      }, 2000);
    };

    return {
      checked,
      checkedAsync,
      // checkedStr,
      loadingAsync,
      change,
      changeAsync,
      translate
    };
  }
});
</script>
<style lang="scss" scoped>
.switch-demo1 {
  // width: 50px;
}
</style>
