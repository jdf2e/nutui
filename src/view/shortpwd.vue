<template>
    <div>
        <nut-docheader 
        :name="$route.name"
        :chName="$route.params.chnName" 
        type="Component" 
        :showQrCode="true"
        ></nut-docheader>
        <h5>示例</h5>
        <h6>使用实例</h6>
        <nut-codebox code="<nut-shortpwd  :show=‘isShow’ @close=‘shortpwdClose’/>" 
        imgUrl="http://img14.360buyimg.com/uba/jfs/t25372/227/245284728/74774/296adb9/5b69732eNad2c0231.png"></nut-codebox>
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
              <td>show</td>
              <td>显示6位密码弹层</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            
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
              <td>close</td>
              <td>关闭弹层</td>
              <td>password（关闭如果是6位填满的，将会返回密码）</td>
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
          demo1:`<nut-shortpwd  :show="isShow"  @close="shortpwdClose"/>`,
         
        }
    },
    methods:{
      
    }
}
</script>

<style>

</style>
