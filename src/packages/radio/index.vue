<template >
<div class="nut-radio">
    <div class="nut-label">
        <nut-radio   v-for="(item,index) in list" 
            :key="item[effectKey]"
            :type="'list'"           
            :name="name" 
            :text="item[effectText]"
            :value="item[effectKey]"
            :checked="checkedIndex===index"  
            />
    </div>
</div>    
</template>
<script>


export default {
    name:"radio-group",    
    props:{
        list:{
            type:Array,
            default(){
                
            }
        },
        checkedIndex:Number,
        effectKey:String,
        effectText:String,
        name:String
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>