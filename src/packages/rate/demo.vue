<template>
    <div>
        <h4>基本用法</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rate v-model="val"></nut-rate></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">当前分数：{{val}}分</span>
            </nut-cell>
        </div>

        <h4>只读</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rate v-model="val2" :readOnly="true"></nut-rate></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">结果：{{val2}}</span>
            </nut-cell>
        </div>

        <h4>自定义尺寸</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rate
                :size="30"
                ></nut-rate></span>
            </nut-cell>
        </div>

        <h4>事件</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rate @click="onClick"></nut-rate></span>
            </nut-cell>
            <nut-cell>
                <span slot="title">结果：{{result}}</span>
            </nut-cell>
        </div>

        <h4>自定义ICON</h4>
        <div>
            <nut-cell>
                <span slot="title"><nut-rate
                :checkedIcon="icon1"
                :uncheckedIcon="icon2"
                ></nut-rate></span>
            </nut-cell>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            val:4,
            val2:2,
            result:'',
            result2:'',
            icon1:`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='rgb(255,0,0)' d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 3H4.34a6 6 0 0 0 11.32 0z'/%3E%3C/svg%3E")`,
            icon2:`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='rgb(255,0,0)' d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z'/%3E%3C/svg%3E")`
        }
    },
   
    methods:{
        onClick(idx){
            this.result = '您点击了第'+idx+'个!';
        },
        onClick2(idx){
            this.result2 = '您点击了第'+idx+'个!';
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

