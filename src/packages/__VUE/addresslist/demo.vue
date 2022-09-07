<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-addresslist
      :data="data"
      @handelDelIcon="delClick"
      @handelEditIcon="editClick"
      @handelItem="itemClick"
      :showBottomButton="false"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
    <h2>{{ translate('title1') }}</h2>
    <nut-addresslist
      :data="data"
      longPressEdition
      :showBottomButton="false"
      @handelDelIcon="delClick"
      @handelEditIcon="editClick"
      @handelItem="itemClick"
      @longPressCopyClick="copyClick"
      @longPressSetClick="setClick"
      @longPressDelClick="delClick"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
    <h2>{{ translate('title1') }}</h2>
    <nut-addresslist
      :data="data"
      swipeEdition
      showBottomButton
      @handelDelIcon="delClick"
      @handelEditIcon="editClick"
      @handelItem="itemClick"
      @swipeDelClick="delClick"
      @addAddressClick="addAddress"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { toRefs, reactive, onMounted, ref } from 'vue';
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
    // const data = ref([]);
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
    // onMounted(() => {
    //   setTimeout(() => {
    //     getData();
    //   }, 500);
    // });

    // const getData = () => {
    //   fetch('//storage.360buyimg.com/nutui/3x/addresslist.js')
    //     .then((response) => response.json())
    //     .then((res) => {
    //       console.log('res', res)
    //       data.value = res.data;
    //       console.log('data', data.value)
    //     })
    //     .catch((err) => console.log('Oh, error', err));
    // };
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
    const holdDownClick = (event: Event, id: number) => {
      console.log('Long Press');
    };
    const setClick = () => {
      console.log('Click On Settings');
    };
    const addAddress = () => {
      console.log('Click To Add');
    };
    return {
      itemClick,
      holdDownClick,
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
