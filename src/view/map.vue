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
