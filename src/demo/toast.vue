<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <a class="button button-primary" href="javascript:;" @click="showToast('我只传了文案一个参数')">只传文案</a>
        <a class="button button-primary" href="javascript:;" @click="showToast('我传了文案和显示时长两个参数，多行文字默认居中展示',4000)">设置显示时长</a>
        <a class="button button-primary" href="javascript:;" @click="showToast3">传对象，包含ID，不居中</a>
        <a class="button button-primary" href="javascript:;" @click="showToast4">与上一个示例ID相同</a>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    components: {
    },
    methods:{
      showToast(msg,during){
            this.$toast(msg,during);
        },
      showToast3(){
          this.$toast({
              msg:'我传了一个对象，包括id属性值，显示位置不居中，多行文字居左展示',
              id:'demo',
              center:false,
              textAlignCenter:false,
              fontSize:0.24,
              bgColor:'rgba(0,0,0,.6)',
              bottom:1
          });
      },
      showToast4(){
          this.$toast({
              msg:'我传了一个对象，且id值与上一个示例的id值相同，将与上一个示例共享一个实例。',
              id:'demo'
          });
      }
    }
}
</script>

<style>
</style>
