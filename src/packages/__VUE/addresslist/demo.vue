<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-addresslist
      :data="data"
      @delIcon="delClick"
      @editIcon="editClick"
      @itemClick="itemClick"
      :showBottomButton="false"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
    <h2>{{ translate('title1') }}</h2>
    <nut-addresslist
      :data="data"
      long-Press
      :showBottomButton="false"
      @delIcon="delClick"
      @editIcon="editClick"
      @itemClick="itemClick"
      @longCopy="copyClick"
      @longSet="setClick"
      @longDel="delClick"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
    <h2>{{ translate('title1') }}</h2>
    <nut-addresslist
      :data="data"
      swipeEdition
      showBottomButton
      @delIcon="delClick"
      @editIcon="editClick"
      @itemClick="itemClick"
      @swipeDel="delClick"
      @add="addAddress"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { reactive, ref } from 'vue';
const { createDemo, translate } = createComponent('addresslist');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '长按功能',
      title2: '滑动功能'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Long Press Function',
      title2: 'Swipe Function'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const data = ref([
      {
        testid: 3,
        testaddressName: '姓名',
        phone: '123****4567',
        defaultAddress: false,
        fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
      },
      {
        testid: 4,
        testaddressName: '姓名',
        phone: '123****4567',
        defaultAddress: true,
        fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
      }
    ]);
    const dataMapOptions = reactive({
      id: 'testid',
      addressDetail: 'testaddressDetail',
      addressName: 'testaddressName'
    });

    const itemClick = () => {
      console.log('Click To Address');
    };
    const delClick = () => {
      console.log('Click To Delete');
    };
    const editClick = () => {
      console.log('Click To Edit');
    };
    const copyClick = () => {
      console.log('Click To Copy');
    };
    const setClick = () => {
      console.log('Click On Settings');
    };
    const addAddress = () => {
      console.log('Click To Add');
    };
    return {
      itemClick,
      data,
      delClick,
      editClick,
      copyClick,
      setClick,
      addAddress,
      dataMapOptions,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
