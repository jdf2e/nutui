<template>
  <div class="demo addresslist-demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-address-list
      :data="data"
      @del-icon="delClick"
      @edit-icon="editClick"
      @click-item="clickItem"
      :showBottomButton="false"
      :data-Options="dataOptions"
    >
    </nut-address-list>
    <h2>长按功能</h2>
    <nut-address-list
      :data="data"
      longPress
      :showBottomButton="false"
      @del-icon="delClick"
      @edit-icon="editClick"
      @click-item="clickItem"
      @long-copy="copyClick"
      @long-set="setClick"
      @long-del="delClickLong"
      :data-Options="dataOptions"
    >
    </nut-address-list>
    <h2>滑动功能</h2>
    <nut-address-list
      :data="data"
      swipeEdition
      showBottomButton
      @del-icon="delClick"
      @edit-icon="editClick"
      @click-item="clickItem"
      @swipe-del="delClickSwipe"
      @add="addAddress"
      :data-Options="dataOptions"
    >
    </nut-address-list>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';

export default {
  components: { Header },
  setup() {
    const env = Taro.getEnv();
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
    const dataOptions = reactive({
      id: 'testid',
      addressDetail: 'testaddressDetail',
      addressName: 'testaddressName'
    });
    const clickItem = () => {
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
    const delClickLong = () => {
      console.log('Click On DelClickLong');
    };
    const delClickSwipe = () => {
      console.log('Click On DelClickSwipe');
    };
    const addAddress = () => {
      console.log('Click To Add');
    };
    return {
      clickItem,
      data,
      delClick,
      editClick,
      copyClick,
      setClick,
      delClickLong,
      delClickSwipe,
      addAddress,
      dataOptions,
      env
    };
  }
};
</script>

<style lang="scss" scoped>
.addresslist-demo {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
