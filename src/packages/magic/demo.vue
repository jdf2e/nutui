<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <nut-magic @click="click" :data="dataArr"></nut-magic>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataArr: [
        {
          type: 'rank',
          name: 'iphone',
          pictureUrl: 'https://img14.360buyimg.com/n1/s54x54_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'rank',
          name: 'iphone2',
          pictureUrl: 'https://img14.360buyimg.com/n1/s54x54_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'lbs',
          name: 'iphone3',
          pictureUrl: 'https://img14.360buyimg.com/n1/s54x54_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'lbs',
          name: 'iphone4',
          pictureUrl: 'https://img14.360buyimg.com/n1/s54x54_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'act',
          name: 'iphone5',
          pictureUrl: 'https://img14.360buyimg.com/n1/s54x54_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'act',
          name: 'iphone6',
          pictureUrl: 'https://img14.360buyimg.com/n1/s54x54_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'rank',
          name: 'iphone7',
          pictureUrl: 'https://img14.360buyimg.com/n1/s54x54_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'rank',
          name: 'iphone8',
          pictureUrl: 'https://img14.360buyimg.com/n1/s54x54_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg',
          desc: 'desc',
          link: 'link'
        }
      ]
    };
  },
  methods: {
    click(item) {
      console.log('clicked now', item);
    }
  }
};
</script>
