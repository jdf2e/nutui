<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
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
