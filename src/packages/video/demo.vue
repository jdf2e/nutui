<template>
    <div>
        <h4>基本用法</h4>
        <div class="video-con">
            <nut-video :sources="sources" :options="options"></nut-video>
        </div>
        <h4>自动播放</h4>
        <div class="video-con">
            <nut-video :sources="sources" :options="options2"></nut-video>
        </div>
        <h4>初始化静音</h4>
        <div class="video-con">
            <nut-video :sources="sources" :options="options3"></nut-video>
        </div>
        <h4>视频背景图</h4>
        <p>行内展示，自动播放，循环播放，不可操作，静音</p>
        <div class="video-con">
            <nut-video :sources="sources" :options="options4"></nut-video>
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

            options: {
                controls: true
            },
            options2: {
                autoplay: true,
                volume: 0.6,
                poster: ''
            },
            options3: {
                controls: true,
                volume: 0.6,
                poster: '',
                muted: true
            },
            options4: {
                autoplay: true,
                volume: 0.6,
                poster: '',
                muted: true,
                disabled: true,
                playsinline: true,
                loop: true
            }
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped></style>
