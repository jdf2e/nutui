<template>
    <div>
       <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Filter" 
        desc=""
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <nut-codebox :code="demo1"></nut-codebox>

        <h5>Props</h5>
        <div class="tbl-wrapper">
            <table class="u-full-width">
            <thead>
                <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
                <th>可选值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>viewport</td>
                    <td>组件所在的视口，如果组件是在页面容器内滚动，视口就是该容器</td>
                    <td>HTMLElement</td>
                    <td>null，代表视图最外层</td>
                    <td>HTMLElement</td>
                </tr>
                <tr>
                    <td>direction</td>
                    <td>视口的滚动方向</td>
                    <td>HTMLElement</td>
                    <td>vertical（竖直），horizontal（横向）</td>
                    <td>vertical</td>
                </tr>
                <tr>
                    <td>threshold</td>
                    <td>预加载暴露值, css单位</td>
                    <td>String</td>
                    <td>'0px'</td>
                    <td>'--px'</td>
                </tr>
                <tr>
                    <td>tagName</td>
                    <td>组件外层的元素</td>
                    <td>HTMLElement</td>
                    <td>div</td>
                    <td>--</td>
                </tr>
            </tbody>
            </table>
        </div>
        
        <h5>Events</h5>
        <div class="tbl-wrapper">
            <table class="u-full-width">
            <thead>
                <tr>
                <th>事件名</th>
                <th>说明</th>
                <th>回调参数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>before-enter</td>
                    <td>懒加载模块开始进入</td>
                    <td>最外层包裹元素</td>
                </tr>
                <tr>
                    <td>before-enter</td>
                    <td>懒加载模快已经进入</td>
                    <td>最外层包裹元素</td>
                </tr>
                <tr>
                    <td>before-leave</td>
                    <td>等待元素开始离开</td>
                    <td>最外层包裹元素</td>
                </tr>
                <tr>
                    <td>after-leave</td>
                    <td>等待元素已经离开</td>
                    <td>最外层包裹元素</td>
                </tr>
                <tr>
                    <td>after-init</td>
                    <td>组件开始显示</td>
                    <td>最外层包裹元素</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            demo1:`        <nut-lazycomponent class="demo">
             <!--预加载loading可以自定义不传则系统默认 -->
            <div class="loading" slot="loading" v-html="svg"></div>   
            <!--需要预加载的模块 -->
            <div class="cp-box">
                 我是模块13
            </div>
        </nut-lazycomponent> `
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
</style>
