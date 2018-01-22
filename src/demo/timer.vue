<template>
    <div>
        <h1>Timer</h1>
        <p>倒计时组件。</p>

        <nut-timer :timespacer="6000000000"></nut-timer>
               
    </div>


</template>

<script>
export default {
    data(){
      return {
        demo:`<nut-timer :timespacer="6000000000"></nut-timer>`
      }
    },
    methods:{
    }
}
</script>

<style>

</style>
