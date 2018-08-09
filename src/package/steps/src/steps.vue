<template>
    <div class="nut-steps" :class="stepsId">
        <div class="progress-list-box" v-for="(item,index) in stepTitleList" v-bind:key="index">
            <div :class="['progress-list', {'left-border' : index !== stepTitleList.length-1}]">
                <div class="gap no-border" v-if="index==0" :style="{height: titleTop+'rem'}"></div>
                <div class="gap"  :style="{height: titleTop+'rem'}" v-else></div>
                <template v-if="item.icon">
                    <div :class="['title', {'red' : index <active}]">
                        {{item.stepTitle}}
                        <i class="red-round"  v-if="index<active"><img :src="item.icon" class="img-box"></i>
                        <i class="grey-round"  v-else><img :src="item.icon" class="img-box"></i>
                    </div>
                </template>
                <template v-else>
                    <div :class="['title', {'red' : index <active}]">
                        {{item.stepTitle}}
                        <i class="red-round" v-if="index<active">
                            <b v-if="showNum">{{index+1}}</b>
                            <b v-else></b>
                        </i>
                        <i class="grey-round" v-else>
                            <b v-if="showNum">{{index+1}}</b>
                            <b v-else></b>
                        </i>
                    </div>
                </template>

                <div class="nut-steps-content" v-html="item.innerHtml">
                </div> 
            </div>
        </div> 
        <div class="hidden-box">
           <slot></slot> 
        </div>   
    </div>
</template>

<script>
export default {
    name:'nut-steps',
    props: {
        stepsId:'',
        showNum:{
            type:Boolean,
            default:false
        },
        active:{
           type:Number,
           default:0 
        },
        titleTop:{
            type:Number,
            default:0.3 
        }
    },
    data() {
        return {
            stepTitleList:[],
            slotElm:[],
        };
    },
    mounted:function(){
           this.initPage();    
    },
    methods: {
        initPage(){
            let nutStep ;
            let nutStepsNum =  document.querySelectorAll('.nut-steps').length;
            if(nutStepsNum == 1){
                    nutStep = document.querySelectorAll('.nut-step');
            }else{
                    if(this.stepsId){
                        let stepsId = '.'+this.stepsId;
                        nutStep = document.querySelectorAll(stepsId+' .nut-step');
                    }else{
                        alert('有多个steps，请设置stepsId属性');
                    }
                    
            }
            let slot = this.$slots.default;
            let htmlArr = [];
            for(let i=0;i<nutStep.length;i++){
                htmlArr.push(nutStep[i].innerHTML);
            }
            for(let i = 0; i < slot.length; i++) {
                let aa = slot[i].tag;
                if(typeof(aa)=='string'){
                    if(slot[i].tag.indexOf('nut-step') != -1) {
                        let item ={
                        'stepTitle':slot[i].data.attrs.stepTitle,
                        'innerHtml':htmlArr[i/2],
                        'icon':slot[i].data.attrs.icon,
                       }
                       this.stepTitleList.push(item);      
                    }
                }  
            } 
        }
        
    }
}
</script>
<style lang="scss">
p{
    margin-bottom:0 !important;
}
.hidden-box{
    display:none;
}
.nut-steps{
    background:#fff;
    margin-top: 0.2rem;
    .progress-list-box{
        overflow: hidden;
        padding-left: 0.4rem;
        padding-right: 0.34rem;
        position: relative;
        &:after{
            position: absolute;
            bottom:0;
            left: 1.1rem;
            content: '';
            width: 100%;
            height: 1px;
            background:#ececec;
        };
    }
    .progress-list{
        position: relative;
        .gap{
            padding-left: 0.3rem;
            height: 0.3rem;
            border-left: 1px solid #eee;
        }
        .no-border{
            border-left: 0;
        }
        .title{
            padding-left: 0.4rem;
            line-height: 0.4rem;
            color:#000;
            font-size: 0.28rem;
            position: relative;
            text-align:left;
            .red-round{
                width: 0.6rem;
                height: 0.6rem;
                background-color: #ffdfde;
                border-radius: 50%;
                position: absolute;
                top:50%;
                transform: translate(-50%,-50%);
                left: 0;
                b{
                    font-size: 0.24rem;
                    position: absolute;
                    width: 0.4rem;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    text-align: center;
                    border-radius: 50%;
                    background-color:red;
                    top:50%;
                    color: #fff;
                    transform: translate(-50%,-50%);
                    left: 50%;
                    font-style:normal
                }
            }
            .grey-round{
                font-size: 0.24rem;
                width: 0.6rem;
                height: 0.6rem;
                line-height: 0.6rem;
                text-align: center;
                background-color: #ccc;
                border-radius: 50%;
                position: absolute;
                top:50%;
                transform: translate(-50%,-50%);
                left: 0;
                b{
                    font-style:normal;
                    font-size: 0.24rem;
                    position: absolute;
                    width: 0.4rem;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    text-align: center;
                    border-radius: 50%;
                    background-color:#999;
                    top:50%;
                    color: #fff;
                    transform: translate(-50%,-50%);
                    left: 50%;
                    font-style:normal;
                }
                
            }
        }
        .red{
            color: red;
        }
        .grey{
            color:#666;
        }
        .closed{
            color:#666;
        }
        .content{
            color: #666;
            font-size: 0.24rem;
            padding-top: 0.1rem;
            padding-bottom: 0.1rem;
            p{
                margin-left: 0.3rem;
                height: 0.34rem;
                line-height: 0.34rem;
                margin-bottom: 0.16rem;
                span{
                    margin-right: 0.1rem;
                }
            }
            .warm-grey{
                color:#eee;
            }
        }
        .no-border{
            border-left: 0;
        }
        

    }
    .left-border{
        &:before{
            position: absolute;
            top:0.6rem;
            left: 0;
            content: '';
            width: 1px;
            height: 100%;
            background:#eee;
        };
    }
}
.img-box{
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    top:50%;
    transform: translate(-50%,-50%);
    left: 50%;
}
.nut-steps-content{
     padding-left: 0.7rem;
}
</style>