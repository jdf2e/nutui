<template>
    <div>

        <h1>Backtop</h1>
        <p>返回页面顶部的快捷按钮，点击后会立即返回页面顶部。多用于页面过长时，方便用户返回头部查看信息。</p>
        <a class="button button-primary" href="/demo.html#/backtop" target="_blank">Demo</a>

        <pre><code v-highlight v-text="demo1"></code></pre>

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
              <td>bottom</td>
              <td>距离底部的距离</td>
              <td>String</td>
              <td>80</td>
              <td>--</td>
            </tr>
            <tr>
              <td>right</td>
              <td>距离窗口右侧的距离</td>
              <td>String</td>
              <td>30</td>
              <td>--</td>
            </tr>
            <tr>
              <td>screenNum</td>
              <td width="30%">滚动距离。默认0.5时为窗口高度的一半，参数为1时页面滚动一屏出现返回按钮，为2时以此类推</td>
              <td>Number</td>
              <td>0.5</td>
              <td>--</td>
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
          demo1:'<nut-gotop :bottom="80" :right="30" :screenNum="0.5"></nut-gotop>',
        }
    },
    methods:{
      
    }
}
</script>

<style>

</style>
