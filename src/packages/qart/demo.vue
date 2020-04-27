<template>
    <div class="qartDemo">
        <h4>基础使用</h4>
        <vue-qr :text="codeValue" :size="300"></vue-qr>
        <h4>背景图</h4>
        <vue-qr :bgSrc="imageUrl" :text="codeValue" :size="300"></vue-qr>
        <h4>logo图</h4>
        <vue-qr :logoSrc="imageUrl" :text="codeValue" :logoScale="0.5" :size="300"></vue-qr>
        <h4>logo图+背景颜色</h4>
        <vue-qr
            :logoSrc="imageUrl"
            :text="codeValue"
            :logoScale="0.5"
            :size="300"
            backgroundColor="#F2140C"
        ></vue-qr>
        <h4>callback函数</h4>
        <vue-qr text="Hello world!" :callback="test" qid="testid"></vue-qr>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imageUrl: require("./../../assets/img/logo.png"), //默认二维码中间图片
            codeValue: "nutui.jd.com/"
        };
    },
    methods: {
        test(dataUrl, id) {
            console.log(dataUrl, id, "hello");
        }
    }
};
</script>