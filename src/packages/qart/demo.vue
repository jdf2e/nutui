<template>
  <div class="qartDemo">
    <h4>基础使用</h4>
    <vue-qr :text="codeValue"></vue-qr>
    <h4>背景图</h4>
    <vue-qr :bg-src="imageUrl" :text="codeValue"></vue-qr>
    <h4>logo图</h4>
    <vue-qr :logo-src="imageUrl" :text="codeValue" :logo-scale="0.5"></vue-qr>
    <h4>logo图+背景颜色</h4>
    <vue-qr :logo-src="imageUrl" :text="codeValue" :logo-scale="0.5" background-color="#F2140C"></vue-qr>
    <h4>callback函数</h4>
    <vue-qr text="Hello world!" :callback="test" qid="testid"></vue-qr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: 'https://img11.360buyimg.com/imagetools/jfs/t1/108423/20/14341/6907/5ea6b783E61a6cef3/55d0728276b2248d.png',
      codeValue: 'http://nutui.jd.com'
    };
  },
  methods: {
    test(dataUrl, id) {
      console.log(dataUrl, id, 'hello');
    }
  }
};
</script>
