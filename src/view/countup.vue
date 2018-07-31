<template>
    <div>
       <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Filter" 
        desc=""
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <nut-codebox :code="demo1" imgUrl="../asset/img/demo/count_up.gif"></nut-codebox>

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
                <td>initNum</td>
                <td>初始数字，必填项</td>
                <td>Number</td>
                <td>--</td>
                <td>--</td>
                </tr>
                <tr>
                <td>endNum</td>
                <td>结束数字，必填项</td>
                <td>Number</td>
                <td>--</td>
                <td>--</td>
                </tr>
                <tr>
                <td>speed</td>
                <td>间隔数字</td>
                <td>Number</td>
                <td>2</td>
                <td>--</td>
                </tr>
                <tr>
                <td>toFixed</td>
                <td>保留小数点后几位</td>
                <td>Number</td>
                <td>0</td>
                <td>0/1/2/3</td>
                </tr>
                <tr>
                <td>startFlag</td>
                <td>外界触发数字开始滚动,若不想加载页面时数字滚动，可设置为false</td>
                <td>Boolean</td>
                <td>true</td>
                <td>true/false</td>
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
            demo1:
`<nut-countup :initNum='0' :endNum='200'>
</nut-countup>

<nut-countup :initNum='150.00' 
:endNum='0.00' 
:speed='2.62' 
:toFixed='2'>
</nut-countup>

<nut-countup :initNum='1000.00' 
:endNum='0.00'
:speed='6.3'  
:startFlag='startNum'
:toFixed='2'>
</nut-countup>`
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
</style>
