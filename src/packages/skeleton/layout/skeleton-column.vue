<template>
    <div
        class="vue-skeleton-column"
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
        name:'column',
        data(){
            return{
            }
        },
        props:{
            width:{
                type:String,
                width:'auto'
            },
            padding:{
                type:String,
                default:"0 0 0 0"
            }
        },
    }
</script>


