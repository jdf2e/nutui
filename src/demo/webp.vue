<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>
        <div style="width:100%;overflow:hidden;">
            <img :src="imgUrl | webp" alt=""/>
        </div>
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
