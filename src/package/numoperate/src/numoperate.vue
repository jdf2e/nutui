<template>
    <div class="num-operate">
        <span @click="reduce()" :class="{grey:(maxNum==1 )? true:isGrey}">-</span>
        <input type="text" v-model="num" readonly="readonly">
        <span @click="add()" :class="{grey:maxNum&&(num>=maxNum)}">+</span>
    </div>
</template>
<script>
export default {
    name:'num-operate',
    props: {
        'gery':{
            type:Boolean,
            default:false,
        },
        'init': {
            type:Number,
            default:1,
        },
        'max':{
            type:[Number,String],
            default:0,
        }
    },
    data() {
        return {
            num:this.init,
            maxNum:this.max,
            isGrey:false,
        }
    },
    created(){
        this.isGrey = this.gery;
    },
    methods: {
        add() {

            if(this.maxNum){
                if(this.num < this.maxNum && this.maxNum != 1){
                    this.num++;
                    this.isGrey = false;
                    this.$emit('add', this.num); 
                }else if(this.num == this.maxNum){
                    this.$emit('add', this.num);
                }else{
                	this.isGrey = true;
                }
            }else{
                this.num++;
                this.isGrey = false;
                this.$emit('add', this.num); 
            }
        },
        reduce(){
            this.num--;
            if(this.num < 1){
                this.num = 1;
            }
            if(this.num == 1){
                this.isGrey = true;
            }
            this.$emit('reduce', this.num);

            /*if(this.num > 1 ){
                this.num--;
                this.$emit('reduce', this.num);
            }else if(this.num == 1){
                this.isGrey = true;
            }
            console.log(this.num);*/


        },

    }
}
</script>
<style lang="scss">

.num-operate{
    width: 2rem;
    height: 0.6rem;
    display: flex;
    span{
        border:1px solid #ececee;
        color: #666;
        width: 25%;
        text-align: center;
        cursor: pointer;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0;
        box-sizing: border-box; 
        -webkit-user-select: none;
        user-select: none;
    }
    span:first-child{
        border-top-left-radius: 15%;
        border-bottom-left-radius: 15%;
    }
    span:last-child{
        border-top-right-radius: 15%;
        border-bottom-right-radius: 15%;
    }
    input{
        border:none;
        border-top:1px solid #ececee;
        border-bottom:1px solid #ececee;
        width:50%;
        text-align: center;
        border-radius: 0;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0;
        appearance:none;
        box-sizing: border-box; 
    }
    .grey{
        color: #ececee;
    }
}
</style>