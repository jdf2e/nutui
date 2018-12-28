<template>
    <div class="nut-rating">
        <span 
            class="nut-rating-item" 
            :class="['nut-rating-item',{'nut-rating-active':n<=current}]" 
            v-for="n in total" :key="n" @click="onClick($event,n)" 
            :style="{'height':size+'px','width':size+'px','backgroundImage':n<=current?checkedIcon:uncheckedIcon}">
        </span>
    </div>
</template>
<script>
import  './rating.scss';
export default {
    name:'nut-rating',
    props: {
        total:{
            type:[String,Number],
            default:5
        },
        value:{
            type:[String, Number],
            default:3
        },
        size:{
            type:[String,Number],
            default:25
        },
        uncheckedIcon:{
            type:String,
            default:null
        },
        checkedIcon:{
            type:String,
            default:null
        },
        testProp:{
            type:String,
            default:null
        } 
    },
    data() {
        return {
            current: 3,
        };
    },
    created(){
        this.current = this.value;
    },
    methods: {
        onClick($event,idx){
            this.current = idx;
            this.$emit('input',idx);
            this.$emit('click',idx);
        }
    }
}
</script>
