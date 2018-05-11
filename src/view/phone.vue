<template>
    <div class="phone-wrapper">
        <h6 class="demo-tips">组件在PC端展示与移动端可能有差异，且部分组件只能在手机上使用，因此建议扫码在手机上查看DEMO。</h6>
        <div class="phone">
            <iframe src="./demo.html#/index" frameborder="0" class="demo-page"></iframe>      
        </div>
       <div class="qc-box">
            <img src="../asset/img/qrcode/qc_demo.png" alt="" title="手机扫描查看组件实例"/>
            <a class="button button-primary" href="/demo.html#/index" target="_blank">手机扫码或点此按钮查看组件示例</a>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            srcData:'/index',
        }
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>

<style>
    .phone-wrapper{
    }
    .phone{
        display:inline-block;
        vertical-align: middle;
        margin: 40px 150px 20px 50px;
        background-image: url(../asset/img/phone_bg.png);
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 104px 16px;
        box-sizing: border-box;
        width: 365px;
        margin-bottom: 50px;
    }
    .demo-page{
        width: 100%;
        height: 580px;
        background-color: #fff;
    }
    .qc-box{
        display:inline-block;
        text-align:center;
        vertical-align: middle;
    }
    .qc-box img{
        display:block;
        margin:10px auto;
        margin-bottom: 20px;
    }
    @media (max-width: 415px){
        .phone-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            flex:1;
        }
        .phone,.demo-tips{
            display:none;
        }
    }
</style>
