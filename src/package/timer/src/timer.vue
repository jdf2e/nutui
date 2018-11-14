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
            },
            'starttime': {
                type: [Number,String],
                default: 0
            },
            'endtime': {
                type: [Number,String,Date],
                default: 0
            },
            'formater': {
                type: [Number,String,Date],
                default: 'hh:mm:ss'
            }
        },
        mounted() {
            let self = this;
            this.time();
            if(self.starttime!=0 && self.endtime!=0) {
                self.endtime = (self.endtime instanceof Date)?self.endtime:(new Date(self.endtime.replace(/\-/g, "/")));
                self.starttime = (self.starttime instanceof Date)?self.starttime:(new Date(self.starttime.replace(/\-/g, "/")));
                self.timespace = self.endtime.getTime() - self.starttime.getTime();
            }
        },
        computed: {
            timerSecond() {
                let self = this;
                return self.dateFormater(self.timespace);
            }
        },
        data() {
            return {
                timer: '',
                timespace: this.timespacer
            }
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
            dateFormater: function(ms) {
                let day = Math.floor(ms / (1000 * 60 * 60 * 24));
                    ms = ms - day * (1000 * 60 * 60 * 24);
                let hour = Math.floor(ms / (1000 * 60 * 60));
                    ms = ms - hour * (1000 * 60 * 60);
                let minute = Math.floor(ms / (1000 * 60 ));
                    ms = ms - minute * (1000 * 60 );
                let second = Math.floor(ms / 1000);
                /*日期字典*/
                var timeMap = {
                    'd': day, //日
                    'h': hour, //小时
                    'm': minute, //分
                    's': second, //秒
                };
                // var timeMap = {
                //     'd': Math.floor(ms / 1000 / 60 / 60 / 24 % 24), //日 
                //     'h': Math.floor(ms / 1000 / 60 / 60 % 24), //小时 
                //     'm': Math.floor(ms / 1000 / 60 % 60), //分 
                //     's': Math.floor(ms / 1000 % 60), //秒 
                // };
                var formater = this.formater;
                /*正则替换*/
                return formater.replace(/([yMdhmsS])+/g, function(all, t) {
                    var v = timeMap[t];
                    if ((String(v)).length < all.length) {
                        var zero = '';
                        for (var i = 0; i < all.length - String(v).length; i++) {
                            zero += '0';
                        }
                        return zero + v;
                    }
                    return v;
                });
            }

        }
    }
</script>