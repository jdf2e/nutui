<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <p>DPG是京东推出的图片压缩技术，经过DPG压缩后的图片兼容jpeg，同时全平台、全部浏览器都支持。该技术可以有效地减少图片大小50%，减少cdn带宽流量50%，加快图片用户在设备上的渲染速度，直接节省用户浏览流量，提升用户购物体验。</p>
        <h5>示例</h5>
        <p>传入jpg图片，请求对应的dpg图片</p>
        <div style="width:100%;overflow:hidden;">
            <img :src="'//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/1456804243/302655/1e93032/5951e7ecNafb50399.jpg' | dpg" alt=""/>
        </div>
        <br>
        <br>
        <p>传入原始图片是jpg格式的webp图片，请求对应的dpg图片</p>
        <div style="width:100%;overflow:hidden;">
            <img :src="'http://img10.360buyimg.com/n1/s368x368_jfs/t14533/126/2072200806/342302/3602464d/5a69359bNd2297228.jpg.webp' | dpg" alt=""/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    }
}
</script>

<style>

</style>
