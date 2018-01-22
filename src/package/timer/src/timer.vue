<template>
    <span>{{timerSecond}}</span>
</template>

<script>
    export default {
        name: 'nut-timer',
        props: {
            'timespacer':{
                type: [Number,String],
                default: 0
            }
        },
        computed: {
            timerSecond() {
                return this.formatMs(this.timespace);
            }
        },
        data() {
            return {
                timer: '',
                timespace: this.timespacer
            }
        },
        created() {
            this.time();
        },
        methods: {
            //倒计时
            time() {
                let self = this;
                self.timer = setInterval(function(){
                	self.timespace = self.timespace - 1000;
                    if (self.timespace - 1000 < 0 && self.timer) {
                        self.$emit('end-timer');
                        clearInterval(self.timer);
                    }
                    
                }, 1000);
            },
            //毫秒数格式化成为hh:mm:ss
            formatMs(ms) {
                let self = this;
                let h = Math.floor(ms / 1000 / 60 / 60 % 24);
                let m = Math.floor(ms / 1000 / 60 % 60);
                let s = Math.floor(ms / 1000 % 60);
                let hms = (h < 10 ? ('0' + h) : h) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s);
                return hms;
            }
        }
    }
</script>