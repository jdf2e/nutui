<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <div class="o-s">这是一个展示展位位,下面一个模块来模拟视差滚动，我以一个图片为例子，在上面加不同的色彩和文字，来展示整个组件</div>
        <!-- DEMO区域 -->
        <nut-parallaxscroll class="demo1">
            <!-- 我是主视觉我希望我的层级最低 我希望在我可以定在这里-->
             
                 <!-- 我是主视觉我希望我的层级最低 我希望在我可以定在这里我里面有很多东西所以我希望我是一个标签 -->
             <img  speed="0" class="main" src="http://img20.360buyimg.com/uba/jfs/t22933/181/1899324210/290531/322bd2b1/5b6b9eeeN7f41c78e.jpg" alt="">
             
             <!--需要做视差滚动的各个元素   我们只想按原来的层级位置排序-->             
             <!-- <div  speed="0.8">我是元素1</div> -->
             <!-- 我不想定义出使位置 我就在我原来的位置 当 这个层曝光时候我才开始动-->
             <!-- <div  speed="0.6">我是元素2</div> -->
             <!--  我可以定义一个初始位置 虽然我在第三 但是我要很快展示出来-->
             <!-- <div initTop="0" initLeft="0" speed="0.4">我是元素3</div> -->
             <!-- 我想有层级 因为我们需要重叠在一起-->            
             <div speed="0.8" layer="1" class="grean">我是元素1 加一个绿色的这招</div>
             <div speed="0.6" layer="2">我是元素2</div>
             <div speed="0.4" layer="3">我是元素3</div>
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

<style lang="scss" scoped>
.bg-box{   
    background-image:url(../asset/img/nutui-logo3.png);  
    background-attachment: fixed;
}
.o-s{
    height: 900px;
    background: #000;
    color:#fff;   
    line-height: 900px;
    text-align: center;
}
.demo1{    
    div{
        width: 100%;
        min-height: 400px;
        line-height: 400px;
        text-align: center;
        background: #d5d5d5;
    }
    div:nth-of-type(2n){
        background: #a51414;
        color:#fff;
    }
    .main{
        width: 100%;
        line-height: 0;
        img{
            width: 100%;
        }
    }
    .grean{
        background: #d5d5d5;
    }
}
</style>
