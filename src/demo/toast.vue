<template>
    <div>
        <h1>Toast</h1>
        <p>一种无焦点的消息提示框，显示一段时间后会自行消失，多用于主动操作后的反馈提示。</p>
        <a class="button button-primary" href="javascript:;" @click="showToast('我只传了文案一个参数')">只传文案</a>
        <a class="button button-primary" href="javascript:;" @click="showToast('我传了文案和显示时长两个参数',4000)">设置显示时长</a>
        <a class="button button-primary" href="javascript:;" @click="showToast3">传对象，包含ID</a>
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
              msg:'我传了一个对象，包括id属性值',
              id:'demo'
          });
      },
      showToast4(){
          this.$toast({
              msg:'我传了一个对象，且id值与上一个示例的id值相同，将与上一个示例共享一个实例',
              during:4000,
              id:'demo'
          });
      }
    }
}
</script>

<style>
</style>
