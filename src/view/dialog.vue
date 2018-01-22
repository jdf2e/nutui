<template>
    <div>
        <h1>Dialog</h1>
        <p>一种对话框，支持按钮交互。</p>
        <a class="button button-primary" href="/demo.html#/dialog" target="_blank">Demo</a>
        <h5>基本用法</h5>
        <pre><code v-highlight>this.$dialog(options);</code></pre>
        <h5>示例</h5>
        <p>自定义标题和内容</p>
        <a class="button button-primary" href="javascript:;" @click="showDialog1">自定义标题和内容</a>
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
        <p>移除右上角关闭按钮、标题栏、按钮栏</p>
        <a class="button button-primary" href="javascript:;" @click="showDialog2">移除右上角关闭按钮</a>  <a class="button button-primary" href="javascript:;" @click="showDialog3">移除标题栏</a>  <a class="button button-primary" href="javascript:;" @click="showDialog4">移除按钮栏</a>
                <pre><code v-highlight>@click="showDialog2" | @click="showDialog3" | @click="showDialog4"</code></pre>
        <pre><code v-highlight>export default {
    methods:{
      'showDialog2':function(){
            const options = {
                    'title':'自定义Dialog标题',
                    'content':'小屏或移动端浏览效果最佳',
                    'noCloseBtn': true
                  };

            this.$dialog(options);
      },
      'showDialog3':function(){
            const options = {
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
    }
}</code></pre>
        <p>事件</p>
        <a class="button button-primary" href="javascript:;" @click="showDialog5">事件</a>
        <pre><code v-highlight>export default {
    methods:{
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
                    //关闭对话框回调，任何地方关闭对话框都会调用
                    'closeCallback'(target){
                      alert('will close');
                    }
                  };

            this.$dialog(options);
      }
}</code></pre>

        <h5>Options</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值/备注</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>对话框ID</td>
              <td>String</td>
              <td>''</td>
              <td>相同ID的对话框共享一个实例</td>
            </tr>
            <tr>
              <td>content</td>
              <td>对话框内容，支持HTML</td>
              <td>String</td>
              <td></td>
              <td>--</td>
            </tr>
            <tr>
              <td>title</td>
              <td>对话框标题</td>
              <td>String</td>
              <td></td>
              <td>--</td>
            </tr>
            <tr>
              <td>noCloseBtn</td>
              <td>是否隐藏关闭按钮</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>closeOnClickModal</td>
              <td>是否允许点击蒙层关闭对话框</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>noHeader</td>
              <td>是否隐藏头部标题栏区域（不影响关闭按钮）</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>noFooter</td>
              <td>是否隐藏底部按钮区域</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>noOkBtn</td>
              <td>是否隐藏确定按钮</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>noCancelBtn</td>
              <td>是否隐藏取消按钮</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>okBtnTxt</td>
              <td>确定按钮文字</td>
              <td>String</td>
              <td>确 定</td>
              <td>--</td>
            </tr>
            <tr>
              <td>cancelBtnTxt</td>
              <td>取消按钮文字</td>
              <td>String</td>
              <td>取 消</td>
              <td>--</td>
            </tr>
            <tr>
              <td>okBtnDisabled</td>
              <td>把确定按钮设为禁用状态</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>cancelAutoClose</td>
              <td>点击取消按钮是否默认关闭对话框</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>onOkBtn</td>
              <td>确定按钮点击事件</td>
              <td>Function</td>
              <td>null</td>
              <td>唯一参数为原生事件对象</td>
            </tr>
            <tr>
              <td>onCancelBtn</td>
              <td>取消按钮点击事件</td>
              <td>Function</td>
              <td>null</td>
              <td>唯一参数为原生事件对象</td>
            </tr>
            <tr>
              <td>onCloseBtn</td>
              <td>关闭对话框按钮点击事件</td>
              <td>Function</td>
              <td>null</td>
              <td>唯一参数为原生事件对象</td>
            </tr>
            <tr>
              <td>closeCallback</td>
              <td>对话框关闭回调函数</td>
              <td>Function</td>
              <td>null</td>
              <td>可通过唯一参数判断关闭对话框的行为来自哪个元素，'modal'表示蒙层，'closeBtn'表示关闭按钮</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
      'showDialog1':function(){
            const options = {
                    'title':'自定义Dialog标题',
                    'content':'小屏或移动端浏览效果最佳'
                  };

            this.$dialog(options);
      },
      'showDialog2':function(){
            const options = {
                    'title':'自定义Dialog标题',
                    'content':'小屏或移动端浏览效果最佳',
                    'noCloseBtn': true
                  };

            this.$dialog(options);
      },
      'showDialog3':function(){
            const options = {
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
