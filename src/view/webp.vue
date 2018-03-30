<template>
    <div>
        <h1>Webp</h1>
        <p>过滤器。在支持webp格式的浏览器上给图片url加上“.webp”扩展名。</p>
        <h5>示例</h5>
        <div style="width:100%;overflow:hidden;">
            <img :src="imgUrl | webp" alt=""/>
        </div>
        <pre><code v-highlight v-text="demo1"></code></pre>
        <pre><code v-highlight>export default {
    data(){
        return{
            imgUrl:'//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/
            1456804243/302655/1e93032/5951e7ecNafb50399.jpg'
        }
    }
}</code></pre>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl:'//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/1456804243/302655/1e93032/5951e7ecNafb50399.jpg',
            demo1:`<img :src="imgUrl | webp" alt=""/>`
        }
    }
}
</script>

<style>

</style>
