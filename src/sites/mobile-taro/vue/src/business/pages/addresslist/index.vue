<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-addresslist
      :data="data"
      @delIcon="delClick"
      @editIcon="editClick"
      @itemClick="itemClick"
      :showBottomButton="false"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
    <h2>长按功能</h2>
    <nut-addresslist
      :data="data"
      longPress
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
    <h2>滑动功能</h2>
    <nut-addresslist
      :data="data"
      swipeEdition
      showBottomButton
      @delIcon="delClick"
      @editIcon="editClick"
      @itemClick="itemClick"
      @swipeDelClick="delClick"
      @add="addAddress"
      :dataMapOptions="dataMapOptions"
    >
    </nut-addresslist>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';

export default {
  props: {},
  setup() {
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
      console.log('点击了地址哦～');
    };
    const delClick = () => {
      console.log('点击了删除哦～');
    };
    const editClick = () => {
      console.log('点击了编辑哦～');
    };
    const copyClick = () => {
      console.log('复制成功～');
    };
    const setClick = () => {
      console.log('点击了设置～');
    };
    const addAddress = () => {
      console.log('添加新地址～');
    };
    return {
      itemClick,
      data,
      delClick,
      editClick,
      copyClick,
      setClick,
      addAddress,
      dataMapOptions
    };
  }
};
</script>

<style lang="scss" scoped>
.demo {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
</style>
