<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-codebox code="<nut-progress 
percent='15'
height='10px' />" />
        <div class="cont">
          <nut-progress percent="15" height="10px" />
        </div>
        <h6>设置高度和颜色</h6>
        <nut-codebox code="<nut-progress 
height='10px' 
color='#F54C12' />" />
        <div class="cont">
          <nut-progress height="10px" color="#F54C12" percent="23" />
        </div>
        <h6>显示进度数</h6>
        <nut-codebox code="<nut-progress height='0.25rem' percent='20' showText='out' />" />
        <div class="cont">
          <nut-progress percent="20" showText="out" height="20px" />
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style>
.cont{
  width: 450px;
}
</style>
