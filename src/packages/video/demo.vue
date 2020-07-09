<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div class="video-con">
      <nut-video :sources="sources" :options="options" @play="play" @pause="pause" @playend="playend"> </nut-video>
    </div>
    <h4>自动播放</h4>
    <p>autoplay属性设置视频自动播放</p>
    <div class="video-con">
      <nut-video :sources="sources" :options="options2"></nut-video>
    </div>
    <h4>初始化静音</h4>
    <p>muted属性设置视频初始化静音</p>
    <div class="video-con">
      <nut-video :sources="sources" :options="options3"></nut-video>
    </div>
    <h4>视频封面海报设置</h4>
    <p>poster属性设置视频海报</p>
    <div class="video-con">
      <nut-video :sources="sources" :options="options4"></nut-video>
    </div>
    <h4>行内播放</h4>
    <p>playsinline属性设置移动端视频行内播放，阻止新打开页面播放（兼容ios，兼容部分安卓机）</p>
    <div class="video-con">
      <nut-video :sources="sources" :options="options5"></nut-video>
    </div>
    <h4>设置视频为背景图</h4>
    <p
      >当设置视频为背景图时需要将 muted 静音、 disabled 禁止操作、loop 循环播放、autoplay 自动播放设置为 true，移动端需要设置 playsinline
      行内展示（兼容安卓用）</p
    >
    <div class="video-con">
      <nut-video :sources="sources" :options="options6"></nut-video>
    </div>
    <h4>视频切换</h4>
    <p>当视频地址发生变化时，重置视频</p>
    <button @click="changeVideo">切换视频</button>
    <div class="video-con">
      <nut-video :sources="sources1" :options="options"></nut-video>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sources: [
        {
          src:
            'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
          type: 'video/mp4'
        }
      ],
      sources1: [
        {
          src:
            'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
          type: 'video/mp4'
        }
      ],
      videoId: 'videoid',
      options: {
        controls: true
      },
      options2: {
        autoplay: true,
        muted: true,
        volume: 0.6,
        poster: ''
      },
      options3: {
        controls: true,
        muted: true
      },
      options4: {
        controls: true,
        poster: 'https://img10.360buyimg.com/ling/s640x356_jfs/t1/96045/31/13848/43886/5e5e35ffE68170c74/861a6394e38810f0.png'
      },
      options5: {
        playsinline: true,
        controls: true
      },
      options6: {
        autoplay: true,
        volume: 0.6,
        poster: '',
        muted: true,
        disabled: true,
        playsinline: true,
        loop: true,
        controls: false
      }
    };
  },
  mounted() {},
  methods: {
    changeVideo() {
      this.sources1 = [
        {
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4'
        }
      ];
    },
    play(elm) {
      console.log('play', elm);
    },
    pause(e) {
      console.log('pause');
    },
    playend(e) {
      alert('播放结束');
    }
  }
};
</script>

<style lang="scss" scoped>
.nut-video {
  /* height: 200px; */
}

button {
  margin: 5px 10px 5px 0;
  background: #f0250f;
  border: 1px solid #f0250f;
  height: 32px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
}
</style>
