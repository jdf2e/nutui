<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <!-- DEMO区域 --> 
        <nut-slider  :value="0" :step="10" :min="0" @touch-end="afterTouch"></nut-slider>  
        
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed: {
    },
    methods:{
        afterTouch(val){
            
            console.log(val)
        }
    }
}
</script>

<style lang="scss">

</style>
