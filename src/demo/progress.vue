<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>默认用法</h5>
        <nut-progress percent="15" />
        <h5>设置高度和颜色</h5>
        <nut-progress height="0.15rem" color="#F54C12" />
        <h5>显示进度数</h5>
        <nut-progress percent="15" :showText="true" />
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
