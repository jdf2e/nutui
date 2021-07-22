<template>
  <div class="demo-list">
    <nut-ninegrid @toDetail="toDetail" @refresh="change" :data="dataArr"></nut-ninegrid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataArr: [
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/174906/19/10256/188436/60a242afE89a800c9/801b64e5b80fde9a.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/133995/36/19954/205635/60ccc436E19f8b69b/8fc0a468ac037d2e.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/17279/28/13940/140479/60b984f4E723b9981/d007711aa1cdc358.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/190452/2/84/116077/608627ecEef11d11e/e0a93f09eca31ddf.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg'
        },
        {
          name: '祥禾饽饽铺京东自营旗舰店',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s66x66_jfs/t1/195378/33/9432/145698/60d0400eE0520ca9f/2283995f6c6176e7.jpg!q50.jpg'
        },
        {
          name: '鲜花4+1束 鲜花速递 ',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/185809/36/6800/181830/60b4fdaaEa74ddfdf/7f3776e9a493ec20.jpg!q70.jpg'
        },
        {
          name: '大连萨米托爱心樱桃',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/191656/26/7699/116921/60c1ed9eE933be59e/5c77c8eabda19d0d.jpg!q70.jpg'
        },
        {
          name: '鲜花玫瑰花速递鲜',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/173012/21/12272/176325/60b4fedbE63906907/2e2a3b2d83624a1b.jpg!q70.jpg'
        },
        {
          name: '贵州茅台酒',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/175839/15/15604/255754/60cccb3cE897d48ed/586a5491fc09f48b.jpg!q70.jpg'
        },
        {
          name: '海易鲜旗舰店',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s66x66_jfs/t1/179709/3/12102/211718/60dd8856E0e8b6b34/ca07667259929e95.jpg!q50.jpg'
        },
        {
          name: '何氏蹦蹦鱼旗舰店',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s66x66_jfs/t1/195322/30/5856/460587/60b5c7a8E7d4415a5/dd6b7f65bcfb3025.jpg!q50.jpg'
        },
        {
          name: '祥威五味子道地中药材养',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/119866/20/1495/226548/5ebc8e7cE458b8026/a865aa78cdd824e1.jpg!q70.jpg'
        },
        {
          name: '溪鲜花产业带 玫瑰花情人',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/82574/39/10088/166075/5d788be1E59b39789/af30349781d00f0a.jpg!q70.jpg'
        },
        {
          name: '商品名称名称',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s180x180_jfs/t1/195296/23/7502/581747/60c1e6b6Efc4f34b5/b9219c19185ebc9b.jpg!q70.jpg'
        },
        {
          name: '半山农京东自营旗舰店',
          price: '199',
          pictureUrl: '//m.360buyimg.com/babel/s66x66_jfs/t1/191641/14/13305/169869/60efca80Eb40cfe34/bb1970d1b220be48.jpg!q50.jpg'
        }
      ]
    };
  },
  methods: {
    change() {
      console.log('更新数据');
      // this.dataArr = [{1:2}]
    },
    toDetail(item) {
      console.log('跳转', item);
    }
  }
};
</script>
