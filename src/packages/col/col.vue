<template>
    <div class="nut-col" :class="classObject">
    	<slot></slot>
    </div>
</template>
<script>
export default {
    name:'nut-col',
    props: {
        'span':{
            type:[String,Number],
            default:'24',
        },
        'offset':{
            type:[String,Number],
            default:'0',
        }
    },
    data() {
        return {
            classObject:{}
        };
    },
    watch:{
        span:{
          handler(val){
            if(val){
                this.classObject = Object.assign(this.classObject,{
                    ['nut-col-'+val]:this.span == val,
                })
            }
          },
          immediate: true
        },
        offset:{
          handler(val){
            if(val){
                this.classObject = Object.assign(this.classObject,{
                    ['nut-col-offset-'+val]:this.offset == val,
                })
            }
          },
          immediate: true
        }
    },
    methods: {
    }
}
</script>