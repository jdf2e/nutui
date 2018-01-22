<template>
    <div>
        <h1>Drag</h1>
        <p>一种Icon拖动吸边组件。</p>
        <!-- DEMO区域 -->
        <nut-drag :direction="direction"
                  :boundary="boundary"
                  :isSide="isSide"
        ></nut-drag>
        <!-- DEMO代码 -->
        <div>
            <a class="button-primary curr" href="javascript:;" @click="changeMove('h', $event)">垂直移动</a>
            <a class="button-primary" href="javascript:;" @click="changeMove('v', $event)">水平移动</a>
            <a class="button-primary" href="javascript:;" @click="changeMove('n', $event)">任意方向移动</a>
        </div>
        
        <div style="margin-top:20px">
            <a class="button-primary curr" href="javascript:;" @click="changeBoundary('y', $event)">有边距</a>
            <a class="button-primary" href="javascript:;" @click="changeBoundary('n', $event)">无边距</a>
        </div>

        <div>
            <a class="button-primary curr" href="javascript:;" @click="changeSide(false, $event)">不吸边</a>
            <a class="button-primary" href="javascript:;" @click="changeSide(true, $event)">吸边</a>
        </div>

        
    </div>
</template>

<script>
export default {
    data(){
        return{
            direction: 'h',
            boundary: {top: 50, bottom: 20, left: 0, right: 0},
            isSide: false,
            demo1:`<nut-drag direction="h"></nut-drag>`,
            demo2:`<nut-drag :boundary="{top: 20, bottom: 20}"></nut-drag>`,
            demo3:`<nut-drag :isSide="false"></nut-drag>`,
        }
    },
    methods:{
        changeMove(x, e){
            let dom = e.currentTarget;
            let siblings = dom.parentElement.children;
            this.removeClass(siblings);
            dom.classList.add('curr');
            this.direction = x;
        },
        changeBoundary(x, e){
            let dom = e.currentTarget;
            let siblings = dom.parentElement.children;
            this.removeClass(siblings);
            dom.classList.add('curr');
            if (x=='y') {
                this.boundary = {top: 50, bottom: 20, left: 0, right: 0};
            }else{

                this.boundary = {top: 50, bottom: 0, left: 0, right: 0};
            }
            
        },
        changeSide(b, e){
            let dom = e.currentTarget;
            let siblings = dom.parentElement.children;
            this.removeClass(siblings);
            dom.classList.add('curr');
            dom.classList.add('curr');
            this.isSide = b;
        },
        removeClass(siblings){  //去除同级的class
            for ( let i in siblings) {
                if (siblings.hasOwnProperty(i) === true){
                    siblings[i].className = 'button-primary';
                }
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.button-primary{
    display: inline-block;
    height: 38px;
    padding: 0 10px;
    color: #555;
    text-align: center;
    font-size: 12px;
    line-height: 38px;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border-radius: 3px;
    border: 1px solid #bbb;
    cursor: pointer;
    box-sizing: border-box;
    &.curr{
        background-color: #33C3F0;
        border-color: #33C3F0; 
        color: #fff;
    }
}
</style>
