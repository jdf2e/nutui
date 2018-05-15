<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>

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
