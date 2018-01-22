<template>
    <div>
        <h1>Badge</h1>
        <p>出现在按钮、图标旁的数字或状态标记。</p>        

        <p>默认用法</p>
        <nut-badge :value="12" class="item"><button>普通模式</button></nut-badge>
        

        <p>Max用法</p>
        <nut-badge :value="200" :max="99" class="item"><button>max模式</button></nut-badge>
        

        <p>文字用法</p>
        <nut-badge value="new" class="item"><button>文字用法</button></nut-badge>
        

        <p>小圆点</p>
        <nut-badge :isDot="true" class="item"><button>小圆点</button></nut-badge>
        

        <p>文字内容</p>
        <nut-badge :isDot="true" class="item">文字内容</nut-badge>
        
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
