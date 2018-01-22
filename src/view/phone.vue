<template>
    <div class="phone-wrapper">
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex:1;
    }
    @media (max-width: 400px){
        .phone-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            flex:1;
        }
    }
    .phone{
        margin: 20px 20px 0;
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
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .qc-box img{
        display:block;
        margin:10px auto;
        margin-bottom: 20px;
    }
</style>
