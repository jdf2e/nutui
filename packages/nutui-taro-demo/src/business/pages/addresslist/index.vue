<template>
  <Demo class="full">
    <h2>基础用法</h2>
    <nut-address-list
      :data="data"
      :show-bottom-button="false"
      :data-Options="dataOptions"
      @del-icon="delClick"
      @edit-icon="editClick"
      @click-item="clickItem"
    >
    </nut-address-list>
    <h2>长按功能</h2>
    <nut-address-list
      :data="data"
      long-press
      :show-bottom-button="false"
      :data-Options="dataOptions"
      @del-icon="delClick"
      @edit-icon="editClick"
      @click-item="clickItem"
      @long-copy="copyClick"
      @long-set="setClick"
      @long-del="delClickLong"
    >
    </nut-address-list>
    <h2>滑动功能</h2>
    <nut-address-list
      :data="data"
      swipe-edition
      show-bottom-button
      :data-Options="dataOptions"
      @del-icon="delClick"
      @edit-icon="editClick"
      @click-item="clickItem"
      @swipe-del="delClickSwipe"
      @add="addAddress"
    >
    </nut-address-list>
  </Demo>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
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
</script>
