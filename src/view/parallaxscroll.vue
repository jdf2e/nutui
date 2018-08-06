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
        <div>当用户滚动页面时，视差引起背景图像的滚动。<br>
        页面上很多的元素在相互独立地滚动着，如果我们来对其它分层的话，可以有两到三层 ：背景层，内容层，贴图层
        <br>
        贴图层(内容层和背景层之间的元素)的滚动(次慢)
        <br>
        内容层的滚动(可以和页面的滚动速度一致)
        <br>
        背景层的滚动(最慢)
        </div>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
            </table>
        </div>   
    </div>
</template>

<script>
export default {
    data(){
        return{
            demo1:`test`
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
</style>
