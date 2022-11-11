<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-menu>
      <nut-menu-item v-model="state.value1" :options="options1" />
      <nut-menu-item v-model="state.value2" @change="handleChange" :options="options2" />
    </nut-menu>
    <h2>{{ translate('customMenuContent') }}</h2>
    <nut-menu>
      <nut-menu-item v-model="state.value1" :options="options1" />
      <nut-menu-item :title="translate('screen')" ref="item">
        <div :style="{ display: 'flex', flex: 1, 'justify-content': 'space-between', 'align-items': 'center' }">
          <div :style="{ marginRight: '10px' }">{{ translate('customContent') }}</div>
          <nut-button @click="onConfirm">{{ translate('confirm') }}</nut-button>
        </div>
      </nut-menu-item>
    </nut-menu>
    <h2>{{ translate('twoColsInOneLine') }}</h2>
    <nut-menu>
      <nut-menu-item v-model="state.value3" :cols="2" :options="options3" />
    </nut-menu>
    <h2>{{ translate('customActiveColor') }}</h2>
    <nut-menu active-color="green">
      <nut-menu-item v-model="state.value1" :options="options1" />
      <nut-menu-item v-model="state.value2" @change="handleChange" :options="options2" />
    </nut-menu>
    <h2>{{ translate('customIcons') }}</h2>
    <nut-menu titleIcon="joy-smile">
      <nut-menu-item v-model="state.value1" :options="options1" />
      <nut-menu-item v-model="state.value2" @change="handleChange" :options="options2" optionIcon="checklist" />
    </nut-menu>
    <h2>{{ translate('expandDirection') }}</h2>
    <nut-menu direction="up">
      <nut-menu-item v-model="state.value1" :options="options1" />
      <nut-menu-item v-model="state.value2" @change="handleChange" :options="options2" />
    </nut-menu>
    <h2>{{ translate('disableMenu') }}</h2>
    <nut-menu>
      <nut-menu-item disabled v-model="state.value1" :options="options1" />
      <nut-menu-item disabled v-model="state.value2" :options="options2" />
    </nut-menu>
  </div>
</template>

<script lang="ts">
import { reactive, ref, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('menu');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      customMenuContent: '自定义菜单内容',
      customContent: '自定义内容',
      screen: '筛选',
      confirm: '确认',
      twoColsInOneLine: '一行两列',
      customActiveColor: '自定义选中态颜色',
      customIcons: '自定义图标',
      expandDirection: '向上展开',
      disableMenu: '禁用菜单',
      allProducts: '全部商品',
      newProducts: '新款商品',
      activityProducts: '活动商品',
      defaultSort: '默认排序',
      praiseSort: '好评排序',
      salesVolumeSort: '销量排序',
      product1: '家庭清洁/纸品',
      product2: '个人护理',
      product3: '美妆护肤',
      product4: '食品饮料',
      product5: '家用电器',
      product6: '母婴',
      product7: '数码',
      product8: '电脑、办公',
      product9: '运动户外',
      product10: '厨具',
      product11: '医疗保健',
      product12: '酒类',
      product13: '生鲜',
      product14: '家具',
      product15: '传统滋补',
      product16: '汽车用品',
      product17: '家居日用'
    },
    'en-US': {
      basic: 'Basic Usage',
      customMenuContent: 'Custom Menu Content',
      customContent: 'Custom content',
      screen: 'Screen',
      confirm: 'Confirm',
      twoColsInOneLine: 'Two Cols In One Line',
      customActiveColor: 'Custom Active Color',
      customIcons: 'Custom Icons',
      expandDirection: 'Expand Direction',
      disableMenu: 'Disable Menu',
      allProducts: 'All Products',
      newProducts: 'New Products',
      activityProducts: 'Activity Products',
      defaultSort: 'Default Sort',
      praiseSort: 'Praise Sort',
      salesVolumeSort: 'Sales Volume Sort',
      product1: 'Product1',
      product2: 'Product2',
      product3: 'Product3',
      product4: 'Product4',
      product5: 'Product5',
      product6: 'Product6',
      product7: 'Product7',
      product8: 'Product8',
      product9: 'Product9',
      product10: 'Product10',
      product11: 'Product11',
      product12: 'Product12',
      product13: 'Product13',
      product14: 'Product14',
      product15: 'Product15',
      product16: 'Product16',
      product17: 'Product17'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const state = reactive({
      value1: 0,
      value2: 'a',
      value3: 0
    });

    const options1 = computed(() => [
      { text: translate('allProducts'), value: 0 },
      { text: translate('newProducts'), value: 1 },
      { text: translate('activityProducts'), value: 2 }
    ]);

    const options2 = computed(() => [
      { text: translate('defaultSort'), value: 'a' },
      { text: translate('praiseSort'), value: 'b' },
      { text: translate('salesVolumeSort'), value: 'c' }
    ]);

    const options3 = computed(() => [
      { text: translate('allProducts'), value: 0 },
      { text: translate('product1'), value: 1 },
      { text: translate('product2'), value: 2 },
      { text: translate('product3'), value: 3 },
      { text: translate('product4'), value: 4 },
      { text: translate('product5'), value: 5 },
      { text: translate('product6'), value: 6 },
      { text: translate('product7'), value: 7 },
      { text: translate('product8'), value: 8 },
      { text: translate('product9'), value: 9 },
      { text: translate('product10'), value: 10 },
      { text: translate('product11'), value: 11 },
      { text: translate('product12'), value: 12 },
      { text: translate('product13'), value: 13 },
      { text: translate('product14'), value: 14 },
      { text: translate('product15'), value: 15 },
      { text: translate('product16'), value: 16 },
      { text: translate('product17'), value: 17 }
    ]);

    const item = ref('');

    const onConfirm = () => {
      item.value.toggle();
    };

    const handleChange = (val) => {
      console.log('val', val);
    };

    return {
      state,
      item,
      options1,
      options2,
      options3,
      onConfirm,
      handleChange,
      translate
    };
  }
});
</script>
