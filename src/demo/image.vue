<template>
    <div>
        <h1>Image</h1>
        <p>图片加载组件，支持检测环境加载webp格式图片，支持设置加载中和加载失败占位图。</p>

        <p>开启webp时，如果浏览器支持，组件尝试在给定的url后加“.webp”,若请求失败则自动重新请求一次原始url(不含“.webp”)，如果还失败则请求errorImg。</p>
        <div style="width:100%;overflow:hidden;">
            <nut-image imgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg" :webp="true"></nut-image>
        
        <p>自定义loading占位图（模拟低速网络环境可看到）</p>
        <div style="width:100%;overflow:hidden;">
            <nut-image imgSrc="//img30.360buyimg.com/vip/jfs/t11617/103/1999233618/120608/7aff545e/5a0d6e25N89c245dd.jpg" loadingImg="//static-o2o.360buyimg.com/daojia/new/images/icon/newLoading.gif"></nut-image></div>
        </div>
        
        <p>自定义加载失败时的占位图</p>
        <div style="width:100%;overflow:hidden;">
            <nut-image imgSrc="//img10.360buyimg.com/test" errorImg="//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"></nut-image>
        </div>        
        
        <p>事件</p>
        <div style="width:100%;overflow:hidden;">
            <nut-image imgSrc="http://img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg" :webp="true" @image-load-complete="imgLoadComplete"></nut-image>
        </div>
        <div>加载结果：{{rst}}</div>    
    </div>
</template>

<script>
export default {
    data(){
        return{
            demo1:`<nut-image 
imgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg" 
:webp="true">
</nut-image>`,
            demo2:`<nut-image 
imgSrc="//img30.360buyimg.com/vip/jfs/t11617/103/1999233618/120608/7aff545e/5a0d6e25N89c245dd.jpg" 
loadingImg="//static-o2o.360buyimg.com/daojia/new/images/icon/newLoading.gif">
</nut-image>`,
            demo3:`<nut-image 
imgSrc="//img10.360buyimg.com/test" 
errorImg="//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg">
</nut-image>`,
            demo4:`<nut-image 
imgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg" 
:webp="true" 
@image-load-complete="imgLoadComplete">
</nut-image>`,
            rst:'',
        }
    },
    methods:{
        imgLoadComplete(img,result){
            this.rst = result;
        }
    }
}
</script>

<style>

</style>
