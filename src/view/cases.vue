<template>
    <div class="wrapper">
        <h1 class="title-box">实践案例</h1>
        <p>从NUTUI诞生起，就逐渐应用在多个项目中，相信以后会有越来越多的项目接入到NUTUI中。以下是应用了NUTUI的项目示例。</p>
        <h4 class="nav-box"><b class="icon"></b>京东&nbsp;APP</h4>
        <div class="box" v-for="(item,index) in appList" v-bind:key="index">
            <p class="box-title"><b class="title-round"></b>{{item.title}}</p>
            <div class="box-entry">{{item.entry}}</div>
            <div class="box-intro">{{item.intro}}</div>
            <div class="box-image">
                <img :src='item.imageSrc' width="350px" />
            </div>
        </div>
        <h4 class="nav-box"><b class="icon"></b>京东&nbsp;ME</h4>
        <ul class="logos">
            <li v-for="(list,index) in meList" v-bind:key="index">
                <img class="logos-img" :src="list.imageSrc"/>
                <p class="logos-text">{{list.title}}</p>
            </li>
        </ul>
        <div class="line"></div>
        <h4 class="nav-box"><b class="icon"></b>大客户</h4>
        <ul class="logos">
            <li v-for="(list,index) in clientList" v-bind:key="index">
                <div class="client-big" v-if="list.title == '生活杉德'">
                    <img class="logos-img client-bigimg" :src="list.imageSrc"/>
                </div>
                
                <img class="logos-img client-img" :src="list.imageSrc" v-if="list.title !== '生活杉德'"/>
                <p class="logos-text">{{list.title}}</p>
            </li>
        </ul>
        <div class="line"></div>
        <h4 class="nav-box"><b class="icon"></b>其他</h4>
        <ul class="logos">
            <li v-for="(list,index) in otherList" v-bind:key="index">
                <img class="logos-img other-img" :src="list.imageSrc"/>
                <p class="logos-text">{{list.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
          appList:[
            {
              title:'PLUS会员',
              entry:'京东APP首页—PLUS会员',
              intro:'京东为向核心客户提供更优质的购物体验，推出了京东PLUS会员，包含购物回馈、自营运费补贴、畅读电子书、退换无忧、专属客服和专享商品等权益，全方位提升和丰富网购特权。',
              imageSrc:'//img10.360buyimg.com/uba/jfs/t23413/151/250900924/114472/8b24b17f/5b2a2b55Ndc255cf7.png'
            },
            {
              title:'京保养',
              entry:'京东APP-车保养-京保养',
              intro:'京保养实现了汽车服务市场的业务快速接入，提供购买保养套餐后的绑车、预约门店进行保养等一系列移动端线上操作功能，让用户购买一次，多个门店可选择并进行爱车保养。',
              imageSrc:'//img11.360buyimg.com/uba/jfs/t20998/154/1477000841/77697/dc24002b/5b2a0f0eNfcdaa2f2.jpg'
            },
            {
              title:'宽带办理',
              entry:'京东APP-充值缴费-宽带办理',
              intro:'宽带项目作为电商进入客户家庭的关键入口，利用运营商现有渠道，能集约对接各省市运营商，且支持线下/第三方各渠道下单。',
              imageSrc:'//img11.360buyimg.com/uba/jfs/t22624/176/252723731/122091/20837dc4/5b2a17baNe4cc750f.png'
            }
          ],
          meList:[
            {
                title:'预约中心',
                imageSrc:'../asset/img/cases/yuyue_icon.png',
            },
            {
                title:'用户之声',
                imageSrc:'../asset/img/cases/user_icon.png',
            },
            {
                title:'一线支援',
                imageSrc:'../asset/img/cases/online_icon.png',
            },
            {
                title:'e维平台',
                imageSrc:'../asset/img/cases/e_platform.png',
            },
            {
                title:'差旅服务',
                imageSrc:'../asset/img/cases/travel.png',
            },
            {
                title:'智能停车场',
                imageSrc:'../asset/img/cases/car_stop.png',
            }
          ],
          clientList:[
            {
                title:'年节福利',
                imageSrc:'../asset/img/cases/jingxi.png',
            },
            {
                title:'生活杉德',
                imageSrc:'../asset/img/cases/shande_icon.png',
            }
          ],
          otherList:[
            {
                title:'智慧党建',
                imageSrc:'../asset/img/cases/dangjian_icon.png',
            }
          ]
        }
    },
    components: {
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    padding-bottom:50px;
    background:#fff;
}
.title-box{
    color: #0f0649;
    margin-bottom: 20px;
    margin-top: 8px;
    font-size: 30px;
    line-height: 38px;
}
p{
    color: #314659;
    font-size: 16px;
    line-height: 2;
}
.nav-box{
    display:inline-block;
    font-size: 26px;
    height:25px;
    line-height: 25px;
    color:#a38249;
    &:hover{
        animation: swing 1s linear both;
    }
    .line{
        vertical-align:middle;
        width:15px;
        height:5px;
        background:#a38249;
        display:inline-block;
        margin-right:10px;
    }
    .icon{
        margin-right:10px;
        display:inline-block;
        width:11px;
        height:16px;
        background:url('../asset/img/cases/right-icon.png') no-repeat;
    }
    @-webkit-keyframes swing{
        20% {
            -webkit-transform: rotate3d(0, 0, 1, 15deg);
            transform: rotate3d(0, 0, 1, 15deg);
        }
        40% {
            -webkit-transform: rotate3d(0, 0, 1, -10deg);
            transform: rotate3d(0, 0, 1, -10deg);
        }
        60% {
            -webkit-transform: rotate3d(0, 0, 1, 5deg);
            transform: rotate3d(0, 0, 1, 5deg);
        }
        80% {
            -webkit-transform: rotate3d(0, 0, 1, -5deg);
            transform: rotate3d(0, 0, 1, -5deg);
        }
        to {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
        }
    }
}
.box{
    border-bottom:2px solid #eee;
    margin-bottom:20px;
    padding-bottom:40px;
    .box-title{
        font-size: 20px;
        margin-bottom:0px;
        font-weight:bold;
        .title-round{
            display:inline-block;
            width:10px;
            height:10px;
            background:#314659;
            border-radius:50%;
            margin-right:10px;
            margin-bottom: 2px;
        }
    }
    .box-entry, .box-intro{
        font-size: 16px;
    }
    .box-intro{
        margin-bottom:35px;
    }
    .box-entry{
        color:#2d336a;
        margin-bottom:10px;
    }
    .box-image{
        img{
            display:block;
            //margin:0 auto;
            box-shadow: 0px 15px 38px 1px #eee;
            animation: bounceInRight 1s linear both;
            @-webkit-keyframes bounceInRight{

                from, 60%, 75%, 90%, to {
                    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                }
                from {
                    opacity: 0;
                    -webkit-transform: translate3d(3000px, 0, 0);
                    transform: translate3d(3000px, 0, 0);
                }
                60% {
                    opacity: 1;
                    -webkit-transform: translate3d(-25px, 0, 0);
                    transform: translate3d(-25px, 0, 0);
                }
                75% {
                    -webkit-transform: translate3d(10px, 0, 0);
                    transform: translate3d(10px, 0, 0);
                }
                90% {
                    -webkit-transform: translate3d(-5px, 0, 0);
                    transform: translate3d(-5px, 0, 0);
                }
                to {
                    -webkit-transform: none;
                    transform: none;
                }
                }
        
            }
    }
}
.logos{
    padding:0px;
    margin:0px;
    //width:80%;
    margin:0 auto;
    box-sizing:border-box;
    list-style-type:none;
    display:flex;
    //justify-content: center;
    flex-wrap: wrap;
    li{
        float:left;
        padding:0px;
        margin:20px;
        width:80px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:hover{
            animation: rubberBand 1s linear both;
            .logos-text{
                color:red;
            }
        }
        @-webkit-keyframes rubberBand{

        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
        }
        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
        }
        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
        }
        65% {
            -webkit-transform: scale3d(.95, 1.05, 1);
            transform: scale3d(.95, 1.05, 1);
        }
        75% {
            -webkit-transform: scale3d(1.05, .95, 1);
            transform: scale3d(1.05, .95, 1);
        }
        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        }
        
        .logos-img{
            display:block;
            width:56px;
            height:56px;
            background-size:56px 56px;
            background-repeat:no-repeat;
            background-position:center center;
        } 
        .client-img{
            width:85px;
            height:65px;
            background-size:85px 65px;
        }
        .client-big{
            width:85px;
            height:65px;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .client-bigimg{
            width:89px;
            height:36px;
            background-size:89px 36px;
        }
        .other-img{
            width:65px;
            height:65px;
            background-size:65px 65px;
        }
        .logos-text{
            margin-top: 10px;
        }
    }
}
.line{
    border-bottom:2px solid #eee;
    margin-bottom:20px;
}
</style>
