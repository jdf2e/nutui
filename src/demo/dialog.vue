<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <!-- <h1>{{$route.name}}</h1>
        <p>带遮罩层的网页对话框，支持按钮交互。</p> -->
        <a class="button button-primary" href="javascript:;" @click="showDialog1">自定义标题和内容</a>
        <div style="display:none">
        <pre><code v-highlight>@click="showDialog1"</code></pre>
        <pre><code v-highlight>export default {
    methods:{
      'showDialog1'(){
            const options = {
                    'title':'自定义Dialog标题',
                    'content':'小屏或移动端浏览效果最佳'
                  };

            this.$dialog(options);
      }
    }
}</code></pre>
        </div>

        <a class="button button-primary" href="javascript:;" @click="showDialog2">移除右上角关闭按钮</a>
        <a class="button button-primary" href="javascript:;" @click="showDialog3">移除标题栏</a>
        <a class="button button-primary" href="javascript:;" @click="showDialog4">移除按钮栏</a>
        <a class="button button-primary" href="javascript:;" @click="showDialog5">事件</a>
    </div>
</template>

<script>
export default {
    methods:{
      'showDialog1':function(){
            const options = {
                    'id':'demo1',
                    'title':'自定义Dialog标题',
                    'content':'小屏或移动端浏览效果最佳'
                  };

            this.$dialog(options);
      },
      'showDialog2':function(){
            const options = {
                    'id':'demo2',
                    'title':'自定义Dialog标题',
                    'content':'小屏或移动端浏览效果最佳',
                    'noCloseBtn': true
                  };

            this.$dialog(options);
      },
      'showDialog3':function(){
            const options = {
                    'id':'demo3',
                    'content':'小屏或移动端浏览效果最佳',
                    'noHeader': true
                  };

            this.$dialog(options);
      },
      'showDialog4':function(){
            const options = {
                    'title':'自定义Dialog标题',
                    'content':'小屏或移动端浏览效果最佳',
                    'noFooter': true
                  };

            this.$dialog(options);
      },
      'showDialog5':function(){
            const options = {
                    'title':'自定义Dialog标题',
                    'content':'小屏或移动端浏览效果最佳',
                    'onOkBtn'(event){
                      alert('okBtn');
                      this.close(); //关闭对话框
                    },
                    'onCancelBtn'(event){
                      alert('cancelBtn');
                      //return false;  //阻止默认“关闭对话框”的行为
                    },
                    'onCloseBtn'(event){
                      alert('closeBtn');
                      //return false;  //阻止默认“关闭对话框”的行为
                    },
                    'closeCallback'(target){
                      alert('will close');
                    }
                  };

            this.$dialog(options);
      },
    }
}
</script>

<style lang="scss">
</style>
