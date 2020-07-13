<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <nut-menu mask :list="list" type="simple" @open="onOpen" @close="onClose" />
    <h4>多选样式</h4>
    <nut-menu :class="{ hidden: isVisible1 }" mask :list="list1" type="multiple" :max="2" @maxTip="onMaxTip" @reset="onReset" @ok="onOK"></nut-menu>
  </div>
</template>

<script>
import cloneDeep from 'lodash.clonedeep';
const list = [
  {
    id: 0,
    text: '综合',
    selected: true,
    children: [
      {
        id: 1,
        text: '全部订单',
        selected: false,
      },
      {
        id: 2,
        text: '派送订单',
        selected: false,
      },
      {
        id: 3,
        text: '揽收订单',
        selected: false,
      },
      {
        id: 4,
        text: '其他订单',
        selected: false,
      },
    ],
  },
  {
    id: 1,
    text: '综合',
    selected: true,
    children: [
      {
        id: 1,
        text: '全部订单',
        selected: false,
      },
      {
        id: 2,
        text: '派送订单',
        selected: false,
      },
      {
        id: 3,
        text: '揽收订单',
        selected: false,
      },
      {
        id: 4,
        text: '其他订单',
        selected: false,
      },
    ],
  },
  {
    id: 2,
    text: '综合',
    selected: true,
    children: [
      {
        id: 1,
        text: '全部订单',
        selected: false,
      },
      {
        id: 2,
        text: '派送订单',
        selected: false,
      },
      {
        id: 3,
        text: '揽收订单',
        selected: false,
      },
      {
        id: 4,
        text: '其他订单',
        selected: false,
      },
    ],
  },
];
export default {
  data() {
    return {
      num: 1,
      titlenum: 1,
      max: 6,
      isVisible1: false,
      list,
      list1: cloneDeep(list),
    };
  },

  methods: {
    onOpen() {
      this.isVisible1 = true;
    },
    onClose() {
      this.isVisible1 = false;
    },
    onOK(data) {
      console.log('onReset data = ', data);
    },
    onReset(data, index) {
      console.log('onReset data = ', data, ', index = ', index);
    },
    chooseMenu(item, index, list) {},
    onMaxTip() {
      alert('超过了最大选择数');
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

.custom-wrap {
  height: 260px;
  line-height: 260px;
  text-align: center;
}
.nut-menu.custom-nut-menu {
}
.nut-menu-title {
  width: 50px !important;
}
</style>
