<template>

    <div class="nut-parallaxscroll">        
        <slot></slot>       
    </div>
</template>
<script>

export default {
    name:'nut-parallaxscroll',
    props: {
    },
    data() {
        
        let slots = this.$slots.default;
        let newSlots = []
        for(let i=0,item;item=slots[i];i++){           
                item.tag&&newSlots.push(item);          
        }        
        return {
           // slots:newSlots
        };
    },
    methods: {
    }
}
</script>
<style lang="scss">
[speed="0"]{
    
}
</style>