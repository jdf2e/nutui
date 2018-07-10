<template>
    <nut-mask id="dateSwiper" :visible.sync='maskShow' @close-mask="hideMask">
        <slot> 
            <transition name="fade">             
                <div class="nut-date-swiper" @click.stop="">
                    <div class="nut-button-group">
                        <button class="nut-cancel" @click="cancel">取消</button>
                        <button class="nut-submit" @click="submit">确认</button>
                    </div>
                    <div class="selected-bg"></div>
                    <div class="date-swiper-con">
                        <div v-if='selectShow' class="select-mask">{{txt}}</div>
                        <template v-for="(d, idx) in swiperData">
                            <nut-swiper :date-swiper-index= 'idx' :ref='"dw"+idx'
                            direction="vertical"
                            class="date-swiper"
                            type="multiple"
                            :initPage="d.selected"
                            :speed="250"
                            @slideChangeEnd="slideEnd"
                            >
                                <div class="nut-swiper-silde" v-for="item in d.data"><span>{{item[nodeKey]}}</span></div>
                            </nut-swiper>
                        </template>                    
                    </div>                
                </div> 
            </transition> 
        </slot>
    </nut-mask>
</template>
<script>
    export default {
        name: 'nut-date-swiper',
        data() {
            return {
                selectShow: false,
                txt: '',
                maskShow: true,
                data: [],
                callbackParam: [],
                nodeKey: 'a',
                selectIndexs: [],
            }
        },

        mounted: function() {
            this.loading = this.$loading({
                fade: true
            })
        },
        computed: {
            swiperData() {
                return this.data;
            }
        },
        watch:{
            data() {
                for (var prop in this.$refs) {
                    if(this.$refs[prop][0]) {
                        var idx = parseInt(this.$refs[prop][0].$el.getAttribute('date-swiper-index'));
                        if(this.data[idx]) {
                            this.$refs[prop][0].setPage(this.data[idx].selected, true);
                            this.$refs[prop][0].updateSlidesBindEvent();
                        }
                    }
                }
                
            }
        },
        methods: {
            hideMask() {
                this.removeSwiper()
            },
            slideEnd(index, el) {
                var idx = parseInt(el.getAttribute('date-swiper-index'));
                this.$emit('slideEnd', {hie: idx, index: index});
                this.data[idx].selected = index;
            },
            cancel() {
                this.removeSwiper();
            },
            submit() {
                this.callbackParam = [];
                for(var i = 0; i < this.data.length; i++) {
                    var item = this.data[i]
                    this.callbackParam.push(item.data[item.selected-1])
                }
                this.$emit('change', this.callbackParam);
                this.removeSwiper()
            },
            removeSwiper: function() {
                document.querySelector('#nut__select-dropdown').remove();
            }
        }
    }
</script>
<style lang="scss">
    .nut-swiper-silde {
        height: 0.7rem!important;
        line-height: 0.7rem;
        text-align: center;
    }
    .nut-date-swiper {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        background: #fff;
        height: 4.46rem;
        .date-swiper-con {
            display: flex;
        }
        .select-mask {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 100;
            text-align: center;
            color: #fff;
            line-height: 3.56rem;
            background: rgba(0,0,0,.5);
        }
        .date-swiper {
            color: #dedede!important;
            font-size: 0.28rem!important;
            width: 100%;
            height: 2.5rem!important;
            padding-top: 1.40rem!important;
            transition: .5s all;
        }
        .nut-swiper-silde-selected {
            color: #333!important;
        }
    }
    .nut-button-group {
        height: 0.9rem;
        font-size: 0.28rem;
        button {            
            background: #fff;
            font-weight: normal;
            border: none;
            height: 0.9rem;
            padding: 0.1rem;
        }
        .nut-cancel {
            float: left;
            color: #878787;
        }
        .nut-submit {
            float:right;
            color: #f23030;
        }
    }
    .selected-bg {
        position: absolute;
        margin-top: 1.39rem;
        height: 0.7rem;
        width: 100%;
        border-top: 0.01rem solid #f0f0f0;
        border-bottom: 0.01rem solid #f0f0f0;
    }
    
.fade-enter-active {
    animation: goUp 0.3s ;
}

@keyframes goUp {
    0% {
        bottom: -223px;
    }
    100% {
        bottom: 0;
    }
}

@keyframes zoomOut {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
        transform: scale3d(1.3, 1.3, 1.3);
    }
    100% {
        opacity: 0;
    }
}

.fade-leave-active {
    animation:zoomOut 0.3s forwards;
}
</style>