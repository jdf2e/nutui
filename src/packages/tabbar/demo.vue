<template>
  <div class="demo-list">
    <h4>图标文本标签栏</h4>
    <nut-tabbar @tab-switch="tabSwitch1" type="card" :tabbar-list="tabList1"></nut-tabbar>
    <h4>带有tips的文本标签栏</h4>
    <nut-tabbar @tab-switch="tabSwitch2" type="card" :tabbar-list="tabList2"></nut-tabbar>
    <h4>固定底部，可跳转页面</h4>
    <nut-tabbar @tab-switch="tabSwitch3" :tabbar-list="tabList3" :bottom="true" class="my-tabbar"> </nut-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList1: [
        {
          tabTitle: '日用品',
          curr: true,
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/127072/2/1076/4692/5eb93ab4Ec8c415b7/b8c5dda3f2d0f6a6.png',
          activeIcon: 'https://img14.360buyimg.com/imagetools/jfs/t1/127314/1/1110/6272/5eb93ab9E9b708938/6ea8b9d6d13ca396.png'
        },
        {
          tabTitle: '服饰',
          curr: false,
          icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/122494/19/1075/6299/5eb93b05E3674bd7e/7f10f0774b6ca63a.png',
          activeIcon: 'https://img14.360buyimg.com/imagetools/jfs/t1/119999/25/1142/8218/5eb93b09E1a8c228f/907bcc2818e590c7.png'
        },
        {
          tabTitle: '娱乐',
          curr: false,
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/113878/31/6319/6100/5eb93b6cEdb187192/68176aa418a2f511.png',
          activeIcon: 'https://img11.360buyimg.com/imagetools/jfs/t1/127726/7/1065/8167/5eb93b70Eae11b392/cba15d13b435872b.png'
        }
      ],
      tabList2: [
        {
          tabTitle: '百度',
          curr: false,
          icon: '',
          num: 13
        },
        {
          tabTitle: '京东',
          curr: true,
          icon: ''
        },
        {
          tabTitle: '知乎',
          curr: false,
          icon: ''
        }
      ],
      tabList3: [
        {
          tabTitle: '主页',
          curr: true,
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/115926/10/6303/6603/5eb93bdeE8951c288/d277b2a668645e73.png',
          activeIcon: 'https://img12.360buyimg.com/imagetools/jfs/t1/126024/30/1055/6952/5eb93be3E45d921c4/3060f25d49fc4ae7.png',
          href: 'https://m.jd.com'
        },
        {
          tabTitle: '分类',
          curr: false,
          icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/113925/39/6348/5096/5eb94318E4037bdfc/1909ae8058e42cf5.png',
          activeIcon: 'https://img10.360buyimg.com/imagetools/jfs/t1/118911/20/6244/5340/5eb9431cE8cd86a1d/1579cdf6ac2d1b8d.png',
          href: '###'
        },
        {
          tabTitle: '发现',
          curr: false,
          icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/127703/8/1017/7162/5eb93ea5Ed45cba37/fb52534fc21cc790.png',
          activeIcon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119259/20/6245/9589/5eb93ea9E1377964b/0c97f713361320b1.png',
          href: '###'
        },
        {
          tabTitle: '购物车',
          curr: false,
          num: 2,
          icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/126465/3/1055/5848/5eb93f31E0ce4f65b/087c08eaeef97b64.png',
          activeIcon: 'https://img10.360buyimg.com/imagetools/jfs/t1/111251/23/6376/6446/5eb93f2dE659da502/41fea546d36b8aaa.png',
          href: 'https://m.jd.com'
        },
        {
          tabTitle: '我的',
          curr: false,
          icon: 'http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg',
          activeIcon: 'http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg',
          href: 'https://m.jd.com'
        }
      ]
    };
  },
  methods: {
    tabSwitch1: function(value, index) {
      console.log(value, index);
    },
    tabSwitch2: function(value, index) {
      console.log(value, index);
    },
    tabSwitch3: function(value, index) {
      console.log(value, index);
    }
  }
};
</script>
<style lang="scss">
.my-tabbar {
  padding-top: 5px;
  border-top: 1px solid #f2f2f2;
  .tips {
    top: -5px;
    right: 10px;
  }
}
</style>
