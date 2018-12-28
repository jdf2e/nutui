<template>
    <div
        class="vue-skeleton-row"
        :style="{
            width:width,
            padding:padding,
        }"    
    >
        <slot></slot>

    </div>

</template>
<script>
    export default{
        name:'row',
        data(){
            return{
            }
        },
        props:{
            width:{
                type:String,
                default:"100%"
            },
            padding:{
                type:String,
                default:"0 0 0 0"
            }
        },
    }
</script>

