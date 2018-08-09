<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <p>默认用法</p>
        <nut-progress percent="15" height="10px"/>
        <p>设置高度和颜色</p>
        <nut-progress height="18px" color="#33C3F0" percent="23" />
        <p>内联显示进度数</p>
        <nut-progress percent="20" showText="in" height="20px" />
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

</style>
