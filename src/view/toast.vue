<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="一种无焦点的消息提示框，显示一段时间后会自行消失，多用于主动操作后的反馈提示。" 
        :showQrCode="true"></nut-docheader>




        <h5>基本用法</h5>
        <h6>传入提示内容文字和显示时长两个参数</h6>
        <nut-codebox code="this.$toast(msg,during);"></nut-codebox>
        <h6>传入一个参数对象（唯一）</h6>
        <nut-codebox code="this.$toast(object);"></nut-codebox>

        <h5>示例</h5>
        <!-- <a class="button button-primary" href="/demo.html#/toast" target="_blank">Demo</a> -->
        <nut-codebox code="export default {
    methods:{
      showToast(msg,during){
            this.$toast(msg,during);
        },
      showToast2(){
          //以对象形式传参支持传入一个id，id相同的Toast共享一个实例对象
          this.$toast({
              msg:'我传了一个对象，包括id属性值，显示位置不居中，多行文字居左展示',
              id:'demo',
              center:false, //Toast位置不居中（默认居中）
              textAlignCenter:false,//多行文字居左展示（默认居中）
              fontSize:0.24, //字号单位rem
              bgColor:'rgba(0,0,0,.6)', //背景颜色
              bottom:1 //距窗口底部距离（单位rem），不居中展示时有效
          });
      },
      showToast3(){
          this.$toast({
              msg:'我传了一个对象，且id值与上一个示例的id值相同，将与上一个示例共享一个实例',
              id:'demo'
          });
      }
    }
}" :imgUrl="['../asset/img/demo/toast1.png','../asset/img/demo/toast2.png']"></nut-codebox>
<!--         <pre><code v-highlight>@click="showToast('测试toast文字',3000)"</code></pre>
        <pre><code v-highlight>//以对象形式传参支持传入一个id，id相同的Toast共享一个实例对象
@click="showToast2({id:'test',msg:'测试文字',during:4000})" </code></pre>
        <pre><code v-highlight>export default {
    methods:{
      'showToast':function(msg,during){
            this.$toast(msg,during);
        },
      'showToast2':function(obj){
            this.$toast(obj);
        }
    }
}</code></pre> -->

        <h5>Options</h5>
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
              <td>msg</td>
              <td>提示文字</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>during</td>
              <td>展示时长（单位毫秒）</td>
              <td>Number</td>
              <td>3000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>object.msg</td>
              <td>提示文字</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>object.during</td>
              <td>展示时长（单位毫秒）</td>
              <td>Number</td>
              <td>3000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>object.center</td>
              <td>Toast位置是否居中</td>
              <td>Boolean</td>
              <td>true</td>
              <td>--</td>
            </tr>
            <tr>
              <td>object.bottom</td>
              <td>Toast距窗口底部距离（单位rem)</td>
              <td>Boolean</td>
              <td>true</td>
              <td>object.center为false时生效</td>
            </tr>
            <tr>
              <td>object.textAlignCenter</td>
              <td>文字折行时是否居中展示，默认居中</td>
              <td>Boolean</td>
              <td>true</td>
              <td>值为false时居左</td>
            </tr>
            <tr>
              <td>object.fontSize</td>
              <td>文字大小（单位rem)</td>
              <td>Number</td>
              <td>0.28</td>
              <td>--</td>
            </tr>
            <tr>
              <td>object.bgColor</td>
              <td>背景颜色</td>
              <td>String</td>
              <td>'rgba(0, 0, 0, 0.7)'</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{
        }
    },
    components: {
    },
    methods:{
    }
}
</script>

<style>

</style>
