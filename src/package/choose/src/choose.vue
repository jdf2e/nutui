<template>

    <div class="nut-choose" v-show="visibile">
        <transition name="maskfade">
            <div class="mask" @click="maskClose" v-show="areaShow"></div>
        </transition>
        <transition name="popup">
            <div :class="{area:true,'short-area':short}" @click.stop v-show="areaShow">
                <div class="area-title">
                     <span class="area-title-txt">{{ title }}</span>
                     <a href='javascript:;' class='area-close' @click="maskClose">
                        <svg>
                            <line x1='0' y1='0' x2='10' y2='10' className='line' />
                            <line x1='10' y1='0' x2='0' y2='10' className='line' />
                        </svg>
                    </a>
                </div>
                <div class="area-con">
                    <ul class="area-tab-tit">
                        <template v-if="tempDatas.length ==1">
                            <li v-for="(data, index) in tempDatas" 
                                :class="{curr:tabIndex == index + 1,red:!data.item||!data.item.name}"
                            >
                                    {{data.item && data.item.name||'请选择'}}
                                </li>
                            </li>
                        </template>
                        <template v-else>
                            <li v-for="(data, index) in tempDatas" 
                                :class="{curr:tabIndex == index + 1,red:!data.item||!data.item.name}"
                                @click="getCurrList(index)">
                                    {{data.item && data.item.name||'请选择'}}
                                </li>
                            </li>
                        </template>
                    </ul>
                    <div class="area-tab-con" ref="areaTabCon">
                        <ul>
                            <li v-for="item in list" :class="{curr:item[onlyKey] == currItem[onlyKey]}" @click="getNextList(item)">{{item[contentKey]}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    
    </div>

</template>
<script>

export default {
    name:'nut-choose',
    props: {
        visibile: {
            type: Boolean,
            default: false
        },
        needCache: {
            type: Boolean,
            default: false
        },
        title:{
            type: String,
            default: '所在地区'
        },
        listData:{
            type:Array,
            default:[],
        },
        onlyKey: {
            type: String,
            default: 'id'
        },
        contentKey: {
            type: String,
            default: 'name'
        },
        short:{
            type:Boolean,
            default:false,
        }
    },
    mounted() {
        if(this.needCache) {
            this.$emit('init-choose');
        }
    },
    destroyed(){
        this.timer = null;
    },
    data() {
        return {
            timer:null,
            areaShow:false,
            list:[], 
            tempDatas:[],
            tabIndex:0,
            currItem:{},
        };
    },
    watch:{
        'visibile'(val,oldVal){
            if(!val) {
                // this.$emit('close-choose');
                if(!this.needCache) {
                    this.resetData();
                }
            } else {
                this.areaShow = true;
                if(!this.needCache) {
                    this.$emit('init-choose');
                }
            }
        },
        'listData'(val,oldVal){
            if(val){
                this.list = val;
                 this.$refs.areaTabCon.scrollTop = 0;
                if(this.tabIndex < this.tempDatas.length){
                   this.tempDatas =  this.tempDatas.slice(0,this.tabIndex);
                }
                this.tempDatas.push({
                    list:val,
                    item:{}
                });
                this.tabIndex += 1;
            }
        }
    },
    methods: {
        maskClose() {
            this.areaShow = false;
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                if(!this.needCache) {
                    this.resetData();
                }
                this.$emit('close-choose');
            },300);
        },
        resetData() {
            this.list = [];
            this.tempDatas = [];
            this.tabIndex = 0;
            this.currItem = {};
        },
        getNextList(item){
            this.tempDatas[this.tabIndex-1].item = item;
            this.currItem = item;
            this.$emit('choose-item',item,this.tabIndex);
        },
        getCurrList(index){
            this.list = this.tempDatas[index].list || [];
            this.currItem = this.tempDatas[index].item ;
            this.tabIndex = index + 1;
        }
    },

}
</script>
<style lang="scss">

@keyframes popupEnter {
    from {
        transform:translate3d(0,100%,0);
        -webkit-transform:translate3d(0,100%,0);
    }

    to {
        transform:translate3d(0,0,0);
        -webkit-transform:translate3d(0,0,0);
    }
}
@keyframes popupLeave {
    from {
        transform:translate3d(0,0,0);
        -webkit-transform:translate3d(0,0,0);
    }

    to {
        transform:translate3d(0,100%,0);
        -webkit-transform:translate3d(0,100%,0);
    }
}

.popup-leave-active{
    animation: popupLeave 0.4s;
}
.popup-enter-active{
    animation: popupEnter 0.4s;
}
.maskfade-enter-active, .maskfade-leave-active {
  transition: opacity .4s ease;
}
.maskfade-enter,.maskfade-leave-active {
  opacity: 0
}

.nut-choose {

    .mask{
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background:rgba(0,0,0,0.7);
        z-index:99;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    .area {
        background: #fff;
        position: fixed;
        width: 100%;
        height: 8rem;
        bottom: 0;
        left: 0;
        font-size: .14rem;
        z-index:999;
    }
    .short-area{
        height:6rem;
        .area-tab-con {
            height:4.4rem;
        }
    }

    .area-title {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f3f2f8;
        height: .84rem;
        line-height: .84rem;
        text-align: center;
        position: relative;
        .area-title-txt{
            font-size:16px;
        }
    }
    .area-close {
        position: absolute;
        right: 0;
        display: inline-block;
        width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
        svg {
            width: 10px;
            height: 12px;
        }
        line {
            stroke: #6a6f7b;
            stroke-width: 1px;
        }
    }
    .area-con {}
    .area-tab-tit {
        position: relative;
        height: .8rem;
        font-size:14px;
        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200%;
            height: 0;
            box-sizing: border-box;
            transform: scale(0.5);
            transform-origin: left bottom;
            border-bottom: 1px solid #ececee;
        }
        li {
            float: left;
            height: .8rem;
            line-height: .8rem;
            display: flex;
            align-items: center;
            margin-left: .2rem;
            &.red{
                color: #e4393c;
            }
            &.curr {
                //color: #e4393c;
                position: relative;
                // border-bottom: 1px solid #e4393c;
                 &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 200%;
                    height: 0;
                    box-sizing: border-box;
                    transform: scale(0.5);
                    transform-origin: left bottom;
                    border-bottom: 1px solid #e4393c;
                }
                
            }
        }
    }
    .area-tab-con {
        height: 6.4rem;
        overflow-y: auto;
        font-size:14px;
        -webkit-overflow-scrolling:touch;
        li {
            display: flex;
            align-items: center;
            height: .8rem;
            line-height: .8rem;
            position: relative;
            padding-left: .2rem;
            &.curr {
                position: relative;
                color: #e4393c;
                &:before {
                    content: '';
                    position: absolute;
                    right: .2rem;
                    top: 50%;
                    margin-top: -.1rem;
                    width: .26rem;
                    height: .18rem;
                    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAAGefZb8AAAAAXNSR0IArs4c6QAAAItJREFUGBljYMAKPpuaajP8MDBQBct+MjDwBzGAdBWK8v+hocwM/42N+cEMFClsHJAqFDNABv+3tBRCEcSmEyT2ydBwEYbcZ0PDpWDBzwYGR2CycEG4AFASQxAmSRYN8grIRLjLPxsZNYBCAptpGIqRFYHCAOR4mGa8ipE1gthgzYaGr+DOQFcA5QMACe4+MqIvCpoAAAAASUVORK5CYII=) no-repeat;
                    background-size: cover;
                }
            }
        }
    }
}
</style>