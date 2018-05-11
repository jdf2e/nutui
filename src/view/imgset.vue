<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Filter" 
        desc="京东图片系统图片过滤器，可配置访问渠道、尺寸、业务等。" 
        :showQrCode="true"></nut-docheader>
        <!-- <h1>ImgSet</h1> -->
        <h6>处理类似'jfs/t169/69/654078710/298522/f1faa01a/53951722N73ecf645.jpg'这种图片路径的数据，可配置访问渠道、尺寸、业务，前提是该图片必须是在京东的图片系统上，具体更多细节参数设置可移步以下文档查看：<a href="http://storage.jd.com/doc/jd-image.pdf" target="_blank">http://storage.jd.com/doc/jd-image.pdf</a></h6>
        <h5>示例</h5>
        <h6>图片按照100px*100px的尺寸展示</h6>
        <div style="width:100%;overflow:hidden;">
            <img :src="imgUrl | imgSet({width:100,height:100})" alt="" style="border: 1px solid #ddd;"/>
        </div>
        <nut-codebox :code="demo1"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo1"></code></pre> -->
        <nut-codebox code="export default {
    data(){
        return{
            imgUrl:'jfs/t169/69/654078710/298522/f1faa01a/53951722N73ecf645.jpg'
        }
    }
}"></nut-codebox>
        
        <h6>图片是移动端pop业务</h6>
        <div style="width:100%;overflow:hidden;">
            <img :src="imgUrl | imgSet({width:200,height:200,host:2,business:'pop'})" alt="" style="border: 1px solid #ddd;"/>
        </div>
        <nut-codebox :code="demo2"></nut-codebox>

        <h6>图片以直径为400px的圆形裁剪，以200px*200px的尺寸展示</h6>
        <div style="width:100%;overflow:hidden;">
            <img :src="imgUrl | imgSet({width:200,height:200,postfix:'!c400'})" alt=""  style="border: 1px solid #ddd;"/>
        </div>
        <nut-codebox :code="demo3"></nut-codebox>

        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>width</td>
              <td>宽度缩放尺寸</td>
              <td>Number/String</td>
              <td>null</td>
              <td>--</td>
            </tr>
            <tr>
              <td>height</td>
              <td>高度缩放尺寸</td>
              <td>Number/String</td>
              <td>null</td>
              <td>--</td>
            </tr>
            <tr>
              <td>host</td>
              <td>访问域名，分四种：<br>1 主站：img10.360buyimg.com <br>2 移动端：m.360buyimg.com <br>3 印尼：img10.jd.id <br>4 内网访问：img10.360buyimg.local</td>
              <td>Number/String</td>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>postfix</td>
              <td>后缀处理，后缀可添加：<br>!75 降质处理 <br>!cr_200x100_20_30 裁剪任意矩形 <br>!c200 原型图片的访问<br>.webp 转为webp格式 <br>等</td>
              <td>String</td>
              <td>&nbsp;</td>
              <td>--</td>
            </tr>
            <tr>
              <td>business</td>
              <td>业务，有两种 <br>主站商品的业务（一共12种：n0、n1、n2、n3、n4、n5、n6、n7、n8、n9、n11、n12） <br>普通业务（如 test、pop等）</td>
              <td>String</td>
              <td>&nbsp;</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl:'jfs/t2362/199/2707005502/100242/616257ce/56e66b21N7b8c2be8.jpg',
            demo1:`<img :src="imgUrl | imgSet({width:100,height:100})" alt="" style="border: 1px solid #ddd;"/>`,
            demo2:`<img :src="imgUrl | imgSet({width:200,height:200,host:2,business:'pop'})" alt="" style="border: 1px solid #ddd;"/>`,
            demo3:`<img :src="imgUrl | imgSet({width:200,height:200,postfix:'!c400'})" alt=""  style="border: 1px solid #ddd;"/>`
        }
    }
}
</script>

<style>

</style>
