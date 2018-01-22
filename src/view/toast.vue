<template>
    <div>
        <h1>Toast</h1>
        <p>一种无焦点的消息提示框，显示一段时间后会自行消失，多用于主动操作后的反馈提示。</p>
        <h5>基本用法</h5>
        <pre><code v-highlight>this.$toast(msg,during);</code></pre>
        或者传入一个参数对象（唯一）
        <pre><code v-highlight>this.$toast(object);</code></pre>
        <h5>示例</h5>
        <a class="button button-primary" href="/demo.html#/toast" target="_blank">Demo</a>
        <pre><code v-highlight>@click="showToast('测试toast文字',3000)"</code></pre>
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
}</code></pre>

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
              <td>展示时长</td>
              <td>Number</td>
              <td>3000</td>
              <td>--</td>
            </tr>
            <tr>
              <td>object</td>
              <td>参数对象</td>
              <td>Object</td>
              <td>--</td>
              <td>以对象形式传参时，不应再传其他参数。对象的key除了msg和during之外，还支持传id，相同id的Toast将共享一个实例。</td>
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
