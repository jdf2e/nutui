<template>
    <div class="back-top-demo"> 
      这个页面很长...<br>       
      这个页面很长...<br>       
      这个页面很长...<br>       
      这个页面很长...<br>       
      这个页面很长...<br>       
      这个页面很长...<br>       
      这个页面很长...<br>             
      <nut-backtop @click="handleClick"></nut-backtop>
    </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {};
  },
  methods: {
      handleClick(){
        console.log('触发回到顶部')
      }
  }
};
</script>

<style lang="scss" scoped>
  .back-top-demo {
    height: 1600px;
    line-height: 400px;
    text-align: center;
  }
</style>
