<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="图片加载组件，支持检测环境加载webp格式图片，支持设置加载中和加载失败占位图。" 
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <h6>开启webp时，如果浏览器支持，组件尝试在给定的url后加“.webp”,若请求失败则自动重新请求一次原始url(不含“.webp”)，如果还失败则请求errorImg。</h6>
        <div style="width:100%;overflow:hidden;">
            <nut-image imgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg" :webp="true"></nut-image></div>
        <nut-codebox :code="demo1"></nut-codebox>
        
        <h6>自定义loading占位图（模拟低速网络环境可看到）</h6>
        <div style="width:100%;overflow:hidden;">
            <nut-image imgSrc="//img30.360buyimg.com/vip/jfs/t11617/103/1999233618/120608/7aff545e/5a0d6e25N89c245dd.jpg" loadingImg="//static-o2o.360buyimg.com/daojia/new/images/icon/newLoading.gif"></nut-image></div>
        
        <nut-codebox :code="demo2"></nut-codebox>
        <h6>自定义加载失败时的占位图</h6>
        <div style="width:100%;overflow:hidden;">
            <nut-image imgSrc="//img10.360buyimg.com/test" errorImg="//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg"></nut-image>
        </div>       
        <nut-codebox :code="demo3"></nut-codebox> 
        <h6>事件</h6>
        <div style="width:100%;overflow:hidden;">
            <nut-image imgSrc="http://img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg" :webp="true" @image-load-complete="imgLoadComplete"></nut-image>
        </div>
        <div>加载结果：{{rst}}</div>  
        <nut-codebox :code="demo4"></nut-codebox> 
        <nut-codebox code="export default {
    data(){
        return{
            rst:'',
        }
    },
    methods:{
        imgLoadComplete(img,result){
            this.rst = result;
        }
    }
}"></nut-codebox>
        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>imgSrc</td>
              <td>图片地址</td>
              <td>String</td>
              <td>''</td>
              <td>--</td>
            </tr>
            <tr>
              <td>webp</td>
              <td>是否尝试加载webp格式图片</td>
              <td>Boolean</td>
              <td>false</td>
              <td>若开启且浏览器支持，组件会尝试在给定的url后加“.webp”,若请求失败则自动重新请求一次原始url(不含“.webp”)，如果还失败则请求errorImg</td>
            </tr>
            <tr>
              <td>loadingImg</td>
              <td>加载中占位图url</td>
              <td>String</td>
              <td>'../../../asset/img/loading.gif'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>errorImg</td>
              <td>加载失败占位图url</td>
              <td>String</td>
              <td>'../../../asset/img/default.png'</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>

        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>image-load-start</td>
              <td>图片开始加载时触发</td>
              <td>图片对象</td>
            </tr>
            <tr>
              <td>image-loaded</td>
              <td>图片加载成功时触发</td>
              <td>图片对象</td>
            </tr>
            <tr>
              <td>image-load-fail</td>
              <td>图片加载失败时触发</td>
              <td>图片对象</td>
            </tr>
            <tr>
              <td>webp-load-fail</td>
              <td>webp格式图片加载失败时触发，接下来组件会尝试请求一次不带“.webp”的原始图片url</td>
              <td>图片对象</td>
            </tr>
            <tr>
              <td>image-load-complete</td>
              <td>图片加载完成时触发，无论成功或失败都会触发</td>
              <td>第一个参数是图片对象，第二个参数是表示结果的字符串（“success”/“fail”）</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      demo1: `<nut-image 
imgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg" 
:webp="true">
</nut-image>`,
      demo2: `<nut-image 
imgSrc="//img30.360buyimg.com/vip/jfs/t11617/103/1999233618/120608/7aff545e/5a0d6e25N89c245dd.jpg" 
loadingImg="//static-o2o.360buyimg.com/daojia/new/images/icon/newLoading.gif">
</nut-image>`,
      demo3: `<nut-image 
imgSrc="//img10.360buyimg.com/test" 
errorImg="//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg">
</nut-image>`,
      demo4: `<nut-image 
imgSrc="//img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg" 
:webp="true" 
@image-load-complete="imgLoadComplete">
</nut-image>`,
      rst: ""
    };
  },
  methods: {
    imgLoadComplete(img, result) {
      this.rst = result;
    }
  }
};
</script>

<style>

</style>
