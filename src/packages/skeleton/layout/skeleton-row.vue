<template>
    <div
        class="vue-skeleton-row"
        :style="{
            width:width,
            padding:padding,
            'justify-content': center
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
                default:"auto"
            },
            padding:{
                type:String,
                default:"0 0 0 0"
            },
            center:{
                type:String,
                default:"flex-start"
            }
        },
    }
</script>

