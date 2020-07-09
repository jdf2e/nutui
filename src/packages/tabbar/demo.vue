<template>
  <div class="demo-list">
    <h4>图标文本标签栏</h4>
    <nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList1"></nut-tabbar>
    <h4>不同数量的标签栏</h4>
    <nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList2"></nut-tabbar>
    <nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList3"></nut-tabbar>
    <nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList4"></nut-tabbar>
    <nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList5"></nut-tabbar>
    <h4>固定底部，徽标提示</h4>
    <nut-tabbar @tab-switch="tabSwitch1" :tabbar-list="tabList6" :bottom="true"> </nut-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList1: [
        {
          tabTitle: '定位',
          curr: false,
          icon: require('../../assets/img/address.png'),
          activeIcon: require('../../assets/img/address-red.png'),
        },
        {
          tabTitle: '收藏',
          curr: false,
          icon: require('../../assets/img/collection.png'),
          activeIcon: require('../../assets/img/collection-red.png'),
        },
        {
          tabTitle: '任务',
          curr: true,
          icon: require('../../assets/img/task.png'),
          activeIcon: require('../../assets/img/task-red.png'),
        },
        {
          tabTitle: '我的',
          curr: false,
          icon: require('../../assets/img/myicon.png'),
          activeIcon: require('../../assets/img/myicon-red.png'),
        },
      ],
      tabList2: [
        {
          tabTitle: '定位',
          curr: true,
          icon: require('../../assets/img/address.png'),
          activeIcon: require('../../assets/img/address-red.png'),
        },
        {
          tabTitle: '我的',
          curr: false,
          icon: require('../../assets/img/myicon.png'),
          activeIcon: require('../../assets/img/myicon-red.png'),
        },
      ],
      tabList3: [
        {
          tabTitle: '定位',
          curr: true,
          icon: require('../../assets/img/address.png'),
          activeIcon: require('../../assets/img/address-red.png'),
        },
        {
          tabTitle: '任务',
          curr: false,
          icon: require('../../assets/img/task.png'),
          activeIcon: require('../../assets/img/task-red.png'),
        },
        {
          tabTitle: '我的',
          curr: false,
          icon: require('../../assets/img/myicon.png'),
          activeIcon: require('../../assets/img/myicon-red.png'),
        },
      ],
      tabList4: [
        {
          tabTitle: '定位',
          curr: true,
          icon: require('../../assets/img/address.png'),
          activeIcon: require('../../assets/img/address-red.png'),
        },
        {
          tabTitle: '收藏',
          curr: false,
          icon: require('../../assets/img/collection.png'),
          activeIcon: require('../../assets/img/collection-red.png'),
        },
        {
          tabTitle: '任务',
          curr: false,
          icon: require('../../assets/img/task.png'),
          activeIcon: require('../../assets/img/task-red.png'),
        },
        {
          tabTitle: '我的',
          curr: false,
          icon: require('../../assets/img/myicon.png'),
          activeIcon: require('../../assets/img/myicon-red.png'),
        },
      ],
      tabList5: [
        {
          tabTitle: '定位',
          curr: true,
          icon: require('../../assets/img/address.png'),
          activeIcon: require('../../assets/img/address-red.png'),
        },
        {
          tabTitle: '收藏',
          curr: false,
          icon: require('../../assets/img/collection.png'),
          activeIcon: require('../../assets/img/collection-red.png'),
        },
        {
          tabTitle: '设置',
          curr: false,
          icon: require('../../assets/img/install.png'),
          activeIcon: require('../../assets/img/install-red.png'),
        },
        {
          tabTitle: '任务',
          curr: false,
          icon: require('../../assets/img/task.png'),
          activeIcon: require('../../assets/img/task-red.png'),
        },
        {
          tabTitle: '我的',
          curr: false,
          icon: require('../../assets/img/myicon.png'),
          activeIcon: require('../../assets/img/myicon-red.png'),
        },
      ],
      tabList6: [
        {
          tabTitle: '定位',
          curr: true,
          href: 'http://nutui.jd.com/demo.html#/index',
          icon: require('../../assets/img/address.png'),
          activeIcon: require('../../assets/img/address-red.png'),
        },
        {
          tabTitle: '收藏',
          curr: false,
          isDot: true,
          href: 'http://nutui.jd.com/demo.html#/index',
          icon: require('../../assets/img/collection.png'),
          activeIcon: require('../../assets/img/collection-red.png'),
        },
        {
          tabTitle: '任务',
          curr: false,
          num: 9,
          href: 'http://nutui.jd.com/demo.html#/index',
          icon: require('../../assets/img/task.png'),
          activeIcon: require('../../assets/img/task-red.png'),
        },
        {
          tabTitle: '我的',
          curr: false,
          num: 100,
          href: 'http://nutui.jd.com/demo.html#/index',
          icon: require('../../assets/img/myicon.png'),
          activeIcon: require('../../assets/img/myicon-red.png'),
        },
      ],
    };
  },
  methods: {
    tabSwitch1: function (value, index) {
      console.log(value, index);
    },
  },
};
</script>
<style lang="scss"></style>
