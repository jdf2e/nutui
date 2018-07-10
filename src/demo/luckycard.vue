<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <p>默认用法</p>
        <nut-luckycard content="1000万"></nut-luckycard>
        <p>刮开层和背景层都支持自定义颜色，奖品信息支持HTML</p>
        <nut-luckycard coverColor="#F9CC9D" backgroundColor="#C3D08B" content="<em>1000<em><strong>元</strong>"></nut-luckycard>
        <p>刮开层支持图片</p>
        <nut-luckycard content="1000万" :coverImg="coverImage"></nut-luckycard>
        <p>刮开面积超过设定比值（ratio）触发事件，可调用clearCover方法清除刮开层</p>
        <nut-luckycard content="再来一瓶" :ratio="0.3" @open= "cardOpen"></nut-luckycard>
    </div>
</template>

<script>
export default {
  name:'luckycard',
  data() {
    return {
        coverImage:'../asset/img/luckycard-demo.png'
    };
  },
  methods: {
    cardOpen(card){
        card.clearCover();
    }
  }
};
</script>

<style>
.nut-luckycard{
    margin:20px auto;
}
</style>
