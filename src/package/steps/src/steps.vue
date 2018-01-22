<template>
    <div class="nut-steps" :class="stepsId">
        <div class="progress-list-box" v-for="(item,index) in stepTitleList">
            <div :class="['progress-list', {'left-border' : index !== stepTitleList.length-1}]">
                <div class="gap no-border" v-if="index==0" :style="{height: titleTop+'px'}"></div>
                <div class="gap"  :style="{height: titleTop+'px'}" v-else></div>
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
            default:15 
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
<style lang="scss" scoped>
p{
    margin-bottom:0 !important;
}
.hidden-box{
    display:none;
}
.nut-steps{
    margin-top: 10px;
    .progress-list-box{
        overflow: hidden;
        padding-left: 20px;
        padding-right: 17px;
        position: relative;
        &:after{
            position: absolute;
            bottom:0;
            left: 55px;
            content: '';
            width: 100%;
            height: 1px;
            background:#ececec;
        };
    }
    .progress-list{
        position: relative;
        .gap{
            padding-left: 15px;
            height: 15px;
            border-left: 1px solid #eee;
        }
        .no-border{
            border-left: 0;
        }
        .title{
            padding-left: 20px;
            line-height: 20px;
            color:#000;
            font-size: 14px;
            position: relative;
            text-align:left;
            .red-round{
                width: 30px;
                height: 30px;
                background-color: #ffdfde;
                border-radius: 50%;
                position: absolute;
                top:50%;
                transform: translate(-50%,-50%);
                left: 0;
                b{
                    font-size: 12px;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
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
                font-size: 12px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background-color: #ccc;
                border-radius: 50%;
                position: absolute;
                top:50%;
                transform: translate(-50%,-50%);
                left: 0;
                b{
                    font-style:normal;
                    font-size: 12px;
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
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
            font-size: 12px;
            padding-top: 5px;
            padding-bottom: 5px;
            p{
                margin-left: 15px;
                height: 17px;
                line-height: 17px;
                margin-bottom: 8px;
                span{
                    margin-right: 5px;
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
            top:30px;
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
    width: 20px;
    height: 20px;
    top:50%;
    transform: translate(-50%,-50%);
    left: 50%;
}
.nut-steps-content{
     padding-left: 35px;
}
</style>