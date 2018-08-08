<template>

    <div class="wrapper">
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <br>
        <a href="javascript:;" @click="showShortpwd" class="button button-primary" >点击打开短密码框</a>
        <nut-shortpwd  :show="isShow"  @close="shortpwdClose"/>
    </div>
</template>

<script>


export default {
    data(){
        return{
            isShow:false,
        }
    },
    components: {
       
    },
    methods:{
        
        showShortpwd(){
            this.isShow = true;
        },
        shortpwdClose(password){
            this.isShow = false;
            alert('您输入的密码是：'+password);
        }
    },
    mounted(){
       
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    .box{
        font-size:.5rem;
    }
    h3{
        font-size:.3rem;
    }
}
</style>
