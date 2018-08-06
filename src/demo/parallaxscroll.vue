<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>

        <!-- DEMO区域 -->
        <nut-parallaxscroll>
            <!-- 视差滚动背景 -->
            <div class="bg-box" slot="bg"> </div>      
            <!--视差滚动背景2  -->
            <div class="bg2-box"></div>
            <!-- 视差滚动3 -->
            <div>
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
            </div>
        </nut-parallaxscroll>
         <nut-parallaxscroll>
            <!-- 视差滚动背景 -->
            <div class="bg-box" slot="bg"> </div>      
            <!--视差滚动背景2  -->
            <div class="bg2-box"></div>
            <!-- 视差滚动3 -->
            <div>
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
                这里作为文字说明,这里是一个视差滚动的demo
            </div>
        </nut-parallaxscroll>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
.bg-box{
    height: 900px;
    background-image:url(../asset/img/nutui-logo3.png);
    background-color:#178d7d;
    background-position: center center;
    background-repeat: no-repeat;   
    background-attachment: fixed;
}
.bg2-box{

}
</style>
