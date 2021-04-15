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
          name: 'name1',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'rank',
          name: 'name2',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'lbs',
          name: 'name3',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'lbs',
          name: 'name4',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'act',
          name: 'name5',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'act',
          name: 'name6',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'rank',
          name: 'name7',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
          desc: 'desc',
          link: 'link'
        },
        {
          type: 'rank',
          name: 'name8',
          pictureUrl: 'https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg',
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
