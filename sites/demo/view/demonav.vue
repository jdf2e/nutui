<template>
    <div class="demo-nav" v-if="showFlag">
        <div class="goback" @click="goback">
            <b class="go-btn"></b>
        </div>
        <div class="title">{{title}}</div>
        <a class="home" :href="'https://github.com/jdf2e/nutui/tree/master/src/packages/'+title.toLowerCase()+'/demo.vue'"></a>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showPath:''
        }
    },
    methods:{
        goback(){
            if (self != top || history.length===1) { 
                this.$router.push('./index');
            }else{
                history.back();
            }
        },

    },
    computed:{
        showFlag(){
            if(this.showPath == '/index'){
                return false;
            }else{
                return true;
            }
        },
        title(){
            return this.showPath.substring(1);
        },
        hrefUrl(){
            return './demo.html#'+this.showPath;
        }
    },
    watch:{
        '$route':{
            immediate:true,
            handler:function(to, from){
                this.showPath = to.path;
                //document.documentElement.scrollTop = document.body.scrollTop = 0;
        }}
    },
    mounted(){     
    }
}
</script>

<style>
    .demo-nav{
        width: 100%;
        height: 40px;
        background-color: #F8F8F8;
        border-bottom: 1px solid #eee;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 0px 8px;
        position: fixed;
        top:0;
        left: 0;
        z-index: 1000000;
        box-sizing:border-box;
    }
    .goback{
        cursor: pointer;
        width: 45px;
        height: 40px;
        display: flex;
        align-items: center;
    }
    .go-btn{
        display: block;
        width: 26px;
        height: 26px;
        background: url("data:image/svg+xml, %3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23999999' d='M946.5 505L560.1 118.8l-25.9-25.9c-12.3-12.2-32.1-12.2-44.4 0L77.5 505c-12.3 12.3-18.9 28.6-18.8 46 .4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12.1-12.1 18.7-28.2 18.7-45.3 0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z'/%3E%3C/svg%3E") no-repeat center;
        background-size: contain;
    }
    .title{
        flex:1;
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        line-height: 40px;
    }
    .home{
        display:inline-block;
        width: 24px;
        height:100%;
        text-decoration:none;
        color:#000;
        padding:0 10px;
        background:url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#999' %3E%3Cpath d='M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82A7.672 7.672 0 0 1 8 4.066c.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384A8 8 0 0 0 8.001.196z'/%3E%3C/svg%3E") no-repeat center;
        background-size:100% auto;
        background-origin:content-box;
    }
</style>
