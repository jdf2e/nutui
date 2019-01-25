<template>
    <div class="nut-rate">
        <span 
            class="nut-rate-item" 
            :class="['nut-rate-item',{'nut-rate-active':n<=current}]" 
            v-for="n in total" :key="n" @click="onClick($event,n)" 
            :style="{
                'height':size+'px',
                'width':size+'px',
                'marginRight':spacing+'px',
                'backgroundImage':n<=current?checkedIcon:uncheckedIcon
            }">
        </span>
    </div>
</template>
<script>
import  './rate.scss';
export default {
    name:'nut-rate',
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
        readOnly:{
            type:Boolean,
            default: false
        },
        spacing:{
            type:[String,Number],
            default: 20
        },
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
            if(this.readOnly){
                this.$emit('input',this.current);
                this.$emit('click',this.current);
            }else{
                this.current = idx;
                this.$emit('input',idx);
                this.$emit('click',idx);
            }
        }
    }
}
</script>
