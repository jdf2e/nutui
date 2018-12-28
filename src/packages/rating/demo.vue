<template>
    <div>
        <h4>基本用法</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rating v-model="val"></nut-rating></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">当前分数：{{val}}分</span>
            </nut-cell>
        </div>

        <h4>事件</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rating @click="onClick"></nut-rating></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">结果：{{result}}</span>
            </nut-cell>
        </div>

        <h4>自定义尺寸</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rating
                :size="35"
                ></nut-rating></span>
            </nut-cell>
        </div>

        <h4>自定义ICON</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rating
                :checkedIcon="icon1"
                :uncheckedIcon="icon2"
                ></nut-rating></span>
            </nut-cell>
        </div>
    </div>
</template>

<script>
import nutcell from "../cell/cell.vue";
import nutrating from "./rating.vue";
export default {
    components: {
        [nutcell.name]: nutcell,
        [nutrating.name]: nutrating,
    },
    data(){
        return{
            val:4,
            result:'',
            icon1:`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23ff0000' d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 3H4.34a6 6 0 0 0 11.32 0z'/%3E%3C/svg%3E")`,
            icon2:`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='%23ff0000' d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z'/%3E%3C/svg%3E")`
        }
    },
   
    methods:{
        onClick(idx){
            this.result = '您点击了第'+idx+'个!';
        }
    }
}
</script>

<style lang="scss" scoped>
.demo{
    padding-left:0;
    padding-right:0;
}
h4{
    padding:0 10px;
}
</style>

