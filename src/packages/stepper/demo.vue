<template>
    <div class="demo-list">
        <h4>默认用法</h4>
        <div>
            <nut-cell>
                <span slot="title">
                    <nut-stepper init=1></nut-stepper>
                </span>
            </nut-cell>
        </div>
        <h4>设置最大最小值</h4>
        <div>
            <nut-cell>
                <span slot="title">
                    <nut-stepper init=25 min=1 max=100></nut-stepper>
                </span>
            </nut-cell>
        </div>
        <h4>设置加减的步长</h4>
        <div>
            <nut-cell>
                <span slot="title">
                    <nut-stepper init=10 step=5></nut-stepper>
                </span>
            </nut-cell>
        </div>
        <h4>设置只读</h4>
        <div>
            <nut-cell>
                <span slot="title">
                    <nut-stepper readonly></nut-stepper>
                </span>
            </nut-cell>
        </div>
        <h4>显示边框</h4>
        <div>
            <nut-cell>
                <span slot="title">
                    <nut-stepper :simple="false"></nut-stepper>
                </span>
            </nut-cell>
        </div>
        <h4>关闭动画过渡</h4>
        <div>
            <nut-cell>
                <span slot="title">
                    <nut-stepper :transition="false" :simple="false"></nut-stepper>
                </span>
            </nut-cell>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
</style>
