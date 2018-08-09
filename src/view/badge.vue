<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="数字或状态标记，一般展示在按钮或文字旁。" 
        :showQrCode="true"></nut-docheader>
        <!-- <h6>出现在按钮、图标旁的数字或状态标记</h6>         -->
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-badge :value="12" class="item"><button>普通模式</button></nut-badge>
        <nut-codebox :code="demo1"></nut-codebox>

        <h6>Max用法</h6>
        <nut-badge :value="200" :max="99" class="item"><button>max模式</button></nut-badge>
        <nut-codebox :code="demo2"></nut-codebox>

        <h6>文字用法</h6>
        <nut-badge value="new" class="item"><button>文字用法</button></nut-badge>
        <nut-codebox :code="demo3"></nut-codebox>

        <h6>小圆点</h6>
        <nut-badge :isDot="true" class="item"><button>小圆点</button></nut-badge>
        <nut-codebox :code="demo4"></nut-codebox>

        <h6>文字内容</h6>
        <nut-badge :isDot="true" class="item">文字内容</nut-badge>
        <nut-codebox :code="demo5"></nut-codebox>

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
              <td>value</td>
              <td>显示值</td>
              <td>String,Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>max</td>
              <td>最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>isDot</td>
              <td>小圆点</td>
              <td>Boolean</td>
              <td>--</td>
              <td>false</td>
            </tr>
            <tr>
              <td>hidden</td>
              <td>隐藏 badge</td>
              <td>Boolean</td>
              <td>--</td>
              <td>false</td>
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
          demo1: `<nut-badge :value="1"><div>我是按钮</div></nut-badge>`,
          demo2: `<nut-badge :value="200" :max="99" class="item"><button>max模式</button></nut-badge>`,
          demo3: `<nut-badge value="new" class="item"><button>文字用法</button></nut-badge>`,
          demo4: `<nut-badge :isDot="true" class="item"><button>小圆点</button></nut-badge>`,
          demo5: `<nut-badge :isDot="true" class="item">文字内容</nut-badge>`
        }
    },
    methods:{
      showMask(){
        this.maskShow = true;
      },
      hideMask(){
        this.maskShow = false;
      }
    }
}
</script>

<style>
    .item {
        display: inline-block;
    }
</style>
