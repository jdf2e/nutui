<template>
    <div class="wrapper">
        <h1 class="title-box">实践案例</h1>
        <p>从NUTUI诞生起，就逐渐应用在多个项目中，相信以后会有越来越多的项目接入到NUTUI中。以下是应用了NUTUI的项目示例。</p>
        <h4 class="nav-box"><b class="icon"></b>京东&nbsp;APP</h4>
        <div class="app-box">
            <div class="pre-btn" v-on:click="nextPage"><b class="pre-btn-icon"></b></div>
            <div class="next-btn" v-on:click="prePage"><b class="next-btn-icon"></b></div>
            <nut-swiper
               :pagination-visible="true"
               direction="horizontal"
               :performanceMode="true"
               ref="appShow"
               :speed="1000"
               @slideChangeStart="slideChangeStart">
                <div v-for="item in appList" class="nut-swiper-slide box">
                    <div class="box-image">
                        <img :src='item.imageSrc' class="images" />
                    </div>
                    <div class="box-info">
                        <div class="info">
                            <p class="box-title"><b class="title-round"></b>{{item.title}}<b class="title-round-sec"></b></p>
                            <div class="box-entry"><b class="entry-icon"></b>{{item.entry}}</div>
                            <div class="introduce">
                                <p class="introduce-title">业务简介</p>
                                <p class="introduce-content">{{item.intro}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="phone-bg"></div>
                    <div class="intro-part">
                        <h2>{{item.title}}</h2>
                        <p class="intro-entry">{{item.entry}}</p>
                        <p class="intro-content">{{item.intro}}</p>
                    </div>
                </div>
            </nut-swiper>            
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
          currentPage:1,
          screenWidth: document.body.clientWidth,
          move:1,
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
            },
            {
              title:'TELink联合校招',
              entry:'京东APP-校园生活-大学生活-校园招聘',
              intro:'Telink无界选人移动端业务旨在联合企业、校园、学生，进行无界联合招聘，为联合招聘提供移动端的支持。与校园业务结合达成合作。',
              imageSrc:'//img14.360buyimg.com/uba/jfs/t21133/306/1869282378/85523/4acb84e9/5b3c8ca6Nec7cf1b3.jpg'
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
            },
            {
                title:'访客预约',
                imageSrc:'../asset/img/cases/visitor.png',
            },
            {
                title:'京东福利',
                imageSrc:'../asset/img/cases/fuli.png',
            },
            {
                title:'生活圈',
                imageSrc:'../asset/img/cases/life_icon.png',
            },
            {
                title:'桌面极速报障',
                imageSrc:'../asset/img/cases/maintain.png',
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
    mounted () {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
    },
    watch: {
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        that.$refs.appShow.updateSlidesBindEvent(this.currentPage);
                        that.timer = false
                    }, 400)
                }
            }
    },
    methods:{
        nextPage(){
            this.$refs.appShow.prev();
        },
        prePage(){
            this.$refs.appShow.next();
        },
        slideChangeStart:function(currentPage,el,type){
          this.currentPage = currentPage;
         },
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
    margin-bottom:20px;
    padding-bottom:40px;
    display: flex;
    position: relative;
    .box-title{
        font-size: 20px;
        margin-bottom:0px;
        font-weight:bold;
        background: #B1C07B;
        height: 75px;
        line-height: 75px;
        border-radius: 10px;
        color: #fff;
        text-align: center;
        .title-round{
            display:inline-block;
            width:10px;
            height:10px;
            background:#fff;
            border-radius:50%;
            margin:0 10px 2px 10px;
            position: relative;
            &:before{
                content: '';
                width: 180px;
                position: absolute;
                top: 3px;
                left: -192px;
                height: 2px;
                background: #fff;
            };
        }
        .title-round-sec{
            display:inline-block;
            width:10px;
            height:10px;
            background:#fff;
            border-radius:50%;
            margin:0 10px 2px 10px;
            position: relative;
            &:after{
                content: '';
                width: 180px;
                position: absolute;
                top: 3px;
                left: 20px;
                height: 2px;
                background: #fff;
            };
        }
        &:hover{
            background: #7eb026;
        };
    }
    .box-entry, .box-intro{
        font-size: 16px;
    }
    .box-intro{
        margin-bottom:35px;
    }
    .box-entry{
        color:#2d336a;
        display: flex;
        align-items: center;
        height: 70px;
        font-size: 18px;
        .entry-icon{
           display: inline-block;
           width: 30px;
           height: 30px;
           background: url('../asset/img/cases/entry.png'); 
           background-size: 100% 100%;
           margin-right: 20px;
           &:hover{
             animation: shake 1s linear both;
           };
        }
        @-webkit-keyframes shake{
            from, to {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
            10%, 30%, 50%, 70%, 90% {
                -webkit-transform: translate3d(-10px, 0, 0);
                transform: translate3d(-10px, 0, 0);
            }
            20%, 40%, 60%, 80% {
                -webkit-transform: translate3d(10px, 0, 0);
                transform: translate3d(10px, 0, 0);
            }
        }
    }
    .introduce{
        border:1px solid #dfd9e7;
        background:#fff;
        p{
            padding: 10px 20px;
            margin-bottom: 0;
        }
    }
    .introduce-title{
        border-bottom: 1px solid #dfd9e7;
        font-size:15px;
    }
    .introduce-content{
        font-size:14px;
    }
    .box-image{
        width: 391px;
    padding: 108px 0px 0 19px;

        img{
            float: right;
            display:block;
            //box-shadow: 0px 15px 38px 1px #eee;
        }
        .images{
            width: 277px
        }
    }
    .box-info{
        flex: 1;
        display: flex;
        padding-left: 90px;
        padding-right:110px;
        align-items: center;
        .info{
            //height: 410px;
            flex: 1;
            background:rgba(239,244,242,0.7);
            border-radius: 10px;
            border-top:2px solid #799303;
            padding: 20px 30px;
        }
    }
    .phone-bg{
            position: absolute;
            width: 312px;
            height: 567px;
            background: url('../asset/img/cases/phone_icon.png'); 
            background-size: 100% 100%;
            left: 114px;
            top: 72px;
            z-index: -1;
    }


}
.logos{
    padding:0px 30px;
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
        //width:80px;
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
.app-box{
    position: relative;
}
.pre-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 57px;
    width: 65px;
    height: 80px;
    background:rgba(0,0,0,0.1);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .pre-btn-icon{
        display: block;
        background:url('../asset/img/cases/dir_btn.png');
        background-position: 0px -66px;
        width: 37px;
        height: 74px;
    }
    &:hover{
        background:rgba(0,0,0,0.2);
    }
    &:hover .pre-btn-icon{
        background:url('../asset/img/cases/dir_btn.png');
        background-position: 0px -265px;
    };
}
.next-btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 45px;
    width: 65px;
    height: 80px;
    background:rgba(0,0,0,0.1);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .next-btn-icon{
        display: block;
        background:url('../asset/img/cases/dir_btn.png');
        background-position: 38px -66px;
        width: 37px;
        height: 74px;
    }
    &:hover{
        background:rgba(0,0,0,0.2);
    }
    &:hover .next-btn-icon{
        background:url('../asset/img/cases/dir_btn.png');
        background-position: 38px -265px;
    };
}
.intro-part{
    display: none;
    width: 275px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 124px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 101;
    padding: 15px;
    height: 176px;
    box-sizing: border-box;
    h2{
        color: #fff;
        font-size: 18px;
        padding: 0;
        margin:0;
        letter-spacing: 1px;
    }
    .intro-entry{
        color: #fff;
        font-size: 14px;
        padding: 0;
        margin:0;
        border-bottom: 1px solid #fff;
        padding-bottom: 5px;
    }
    .intro-content{
        color: #fff;
        font-size: 12px;
        padding: 0;
        margin:0;
        line-height: 18px;
        margin-top: 8px;
    }
}



//swiper

.nut-swiper{
    height:750px;
    border-bottom: 2px solid #eee;
    //padding-bottom: 87px;
}
@media (max-width: 450px) {
    .box .box-info{
        display: none;
    }
    .box .phone-bg{
        width: 302px;
        height: 561px;
        top: 10px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .box .box-image .images{
        width: 267px;
        height: 454px;
    }
    .nut-swiper .nut-swiper-silde{
        display: flex;
        justify-content: center;
    }
    .box .box-image{
        width: 100%;
        padding: 44px 0 0 3px;
        display: flex;
        justify-content: center;
    }
    .nut-swiper{
        height: 620px;
    }
    .next-btn{
        display: none;
    }
    .pre-btn{
        display: none;
    }
    .intro-part{
        display: block;

    }
}
</style>
