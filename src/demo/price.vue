<template>
    <div>
        <h1>Price</h1>
        <p>商品价格组件，支持小数点前后应用不同样式、千位分隔、人民币符号等功能。</p>
        <br>
        <div><nut-price  :price="10010" :needSymbol="false" :thousands="true"></nut-price></div>
        <br>
        <div><nut-price  :price="10010.01" :needSymbol="true" :thousands="false"></nut-price></div>
        <br>
        <div><nut-price  :price="15213.122" :decimalDigits="3" :needSymbol="true" :thousands="true"></nut-price></div>
       
    </div>


</template>

<script>
export default {
    data(){
      return {
        demo1:`<nut-price  :price="10010" :needSymbol="false" :thousands="true"></nut-price>`,
        demo2:`<nut-price  :price="10010.01" :needSymbol="true" :thousands="false"></nut-price>`,
        demo3:`<nut-price  :price="15213.122" :decimalDigits="3" :needSymbol="true" :thousands="true"></nut-price>`,
      }
    },
    methods:{
    }
}
</script>

<style>

</style>
