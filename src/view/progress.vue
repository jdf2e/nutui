<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <p>默认用法</p>
        <nut-codebox code="<nut-progress percent='15' />" />
        <nut-progress percent="15" />
        <p>设置高度和颜色</p>
        <nut-codebox code="<nut-progress height='0.15rem' color='#F54C12' />" />
        <nut-progress height="0.15rem" color="#F54C12" />
        <p>显示进度数</p>
        <nut-codebox code="<nut-progress height='0.25rem' percent='20' :showText='true' />" />
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
