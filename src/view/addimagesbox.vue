<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="图片选取组件。" 
        :showQrCode="true"></nut-docheader>
        <h5>功能</h5>
        <ul>
            <li>本组件用于选择添加图片，可结合上传组件实现图片上传功能。</li>
            <li>可以配置上传图片的大小。</li>
            <li>可以配置选择图片最大数量。</li>
            <li>支持删除图片。</li>
            <li>支持图片选择完成事件。</li>
            <li>提供上传图片的接口配置，若不配置则可以通过提供的事件接口自行处理图片上传等操作。</li>
        </ul>
        <!-- <a class="button-primary button" href="/demo.html#/addimagesbox" target="_blank">DEMO</a>      -->
        <h5>示例</h5>
        <h6>基本用法，选择添加图片</h6>

        <nut-codebox :code="demo1" imgUrl="../asset/img/demo/addImagesBox1.png"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo1"></code></pre>         -->
        <h6>限制图片大小及数量</h6>
        <nut-codebox :code="demo2"></nut-codebox>
        <!-- <pre><code v-highlight v-text="demo2"></code></pre>         -->
        <h6>图片删除，提供了delete接口可以直接选取要删除的图片，单击图片删除</h6>
        <nut-codebox :code="demo3"></nut-codebox>
        
        <!-- <pre><code v-highlight v-text="demo3"></code></pre>          -->
        <h6>大图预览</h6>
        <p>该功能主要结合nut-pictureview组件一起使用，代码示例:</p>
        <nut-codebox :code="demo5"></nut-codebox>
        
        <!-- <pre><code v-highlight v-text="demo1"></code></pre>               -->
        <div class="tbl-wrapper">
            <h5>Props</h5>
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
              <td>size</td>
              <td>添加图片大小，默认不限大小，单位KB</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>maxImg</td>
              <td>可选添加图片的最大值</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>delete</td>
              <td>传入需要删除图片的序号</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>                    
          </tbody>
        </table>
         <h5>Events</h5>
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
              <td>imgMsg</td>
              <td>添加图片按钮触发后回调，返回图片信息，可以根据实际情况处理</td>
              <td>图片信息</td>
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
            demo1:  `<nut-addimagesbox 
class="btn"  
@imgMsg="addimg1"
></nut-addimagesbox>`,
            demo2:`<nut-addimagesbox 
class="btn"
:size="8000" 
:maxImg="6" 
:isUpload="true" 
:ajax="option"  
@imgMsg="addimg" 
></nut-addimagesbox>`,
            demo3:`<ul class="img-box">
    <li v-for="(img,key) in imgs3" :key="key" @click="deleteImg(key)">
        <img :src="img" alt="">
    </li>
</ul>

<nut-addimagesbox class="btn"
:delete="delete3"
@imgMsg="addimg3"
></nut-addimagesbox>`,
            demo5:`<ul class="img-box">
    <li v-for="(img,key) in imgs5" :key="key"  @click="setPicShow(key)">
        <img :src="img" alt="">
    </li>
</ul>

<nut-pictureview 
:visible.sync="picShow" 
:bgColor="coverColor" 
:imgArr="imgs5" 
:initNum="picShowNum" 
:pagination="showPage" 
@close-pic="closeDo"
></nut-pictureview>

<nut-addimagesbox 
class="btn"  
@imgMsg="addimg5"
></nut-addimagesbox>`
        }
    },
    methods:{
        addimg1(data){
            let that = this;
            if(data.code == 3) {
                that.imgs1 = data.msg.imgs;
            }            
        },
        addimg3(data){
            let that = this;
            if(data.code == 3) {
                that.imgs3 = data.msg.imgs;
            }            
        },
        addimg5(data){
             let that = this;
            if(data.code == 3) {
                that.imgs5 = data.msg.imgs;
            }  
        },
        addimg(data){
            console.log("图片信息：",data)
            let that = this;
            if(data.code == 3) {
                that.imgs = data.msg.imgs;
            }
        },
        deleteImg(key){
            console.log(key)
            let that = this;
            //增加时间戳
            let times = Number(new Date())
            that.delete3 = key +'-'+ times;
            console.log(that.delete3)
        },
        setPicShow(key){
            this.picShowNum = key+1;
            this.picShow = true;
        }

    }
}
</script>

<style lang="scss">
.btn{
    width: 40px;
    height: 40px;
    border-radius: 6px;    
    background:#1EAEDB url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNkYzQUM2NjQ3NkYxMUU4ODY0OEIwQjI4QzQyOUVDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNkYzQUM2NzQ3NkYxMUU4ODY0OEIwQjI4QzQyOUVDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM2RjNBQzY0NDc2RjExRTg4NjQ4QjBCMjhDNDI5RUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM2RjNBQzY1NDc2RjExRTg4NjQ4QjBCMjhDNDI5RUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aEqTHAAAA3pJREFUeNrsms1rE0EYxneLl7QpKn40eotgK+IhitJLtX4gPQgmPdhjsSe9pfZuJfYvsAftTenBgoKpEKhR/Kh6KYoKitB66M1WqzRB+yEtxGfhGZlMd5PNZjedgC/8GMiyM887Ox/vzBuzUCgY9WwNRp3bFp/qaQQd4CQ4CFpBCwjz+W/wDcyAz+AFeA2Wq27ZGkIeMUEXuAuWC5XbMt/tYl2edJge50AcXAOHRT+AD+AZeAumwRx73uCX2APawFFwGsSAyefvwXUwHvQX2AcmpF6cB4P83Utdg6xD2ESldVXS4AWQZ0OL4AoIVTEEBSHWtci682zLVwdSUi+lQcQH4SoR1i0s5ZcDw6xwHQxUM+FcLgwDbMuyG9U6IHr+D+gOULhKN9ss+yXKjXnR8+drKF4Ql75ET6UOWCtBji/3e2g8DLYrhD3U008NOafVyelFsVQ+8DjmMzYbV8bjnEhLS6wrBxLSUul1tfHLAbE6iSU2oT5XgzmTO6zBnXFeg3htnloMajNLRaNnucVbgdeIRkHnCB2JUaOjA30sb4EVjRxYkTq0z8mBRgZpVmA2qmHoP0ptcWrd4MBxEGJUOauhA7PUFqLWDQ6cYPlU4wOY0NZp58AhllMaOzClaC06UraynC5zdLzjoqEjDr/dc/HuxRJHzRmW+/+t+9KJ7AfYAXaDBYcKtoJcwL28DeQdnu0C38FPsFMdQs3SAVxX+6Vorf9rlQYb78Ia621WtBZN4gXOgUiJObAG7rtoqIO3ELLN8S6onK2VeBaRtG5wwJrhB3j18dGhAmt16HEhIgPOKb+9c/luKWtj+cVuCH1i2a7xEGpXtBY58JLlGY0dENom7Rx4BVYZskY1FB+ltlV5LjUo43ucB4ZeDR3opbaHYMlpH7jN8jKjPl0sRE2yRlsHnjBkjUgv6GCXqMnS9rjc5a7Oh/rucod6g/PgEYOqm+ohusZm8nhracmCtNvrdd0utvKVXmwZvM6r26tFwZAGl7tDfl6vJ2twvZ6Uen44qARHSwDiW4JKcDilmJI+ppiSQaeY5NUpqyT5roKoB+FRvisn+bKVJvm8plkTvGiNSWlWK1X6HLzh2eKrFLM0gb28+TgGTjFFK/YYa4dN1SLNapfoHqsi0T22WYlu1Zp4jOxU/mogn2HlvxpMMiReqnqr/v9vlU22vwIMAAmKvJ+7otQzAAAAAElFTkSuQmCC) no-repeat center;
    background-size:30px 30px;
}
.img-box{
    min-height: 110px;
    line-height: 100px;
    padding-top:10px;
    background: #f2f2f2;
    li{
        float: left;
        list-style: none;
        width: 100px;
        height: 100px;
        margin-right: 10px;
        border:1px solid #ddd;        
        img{
            float: left;
            width: 100%;
            height: 100%;
        }
    }
    &:after{
        content: '';
        display: block;
        clear: both;
    }
}
#pictureView{
    .nut-swiper{
        width: 750px;        
        img{
            width: 750px;
            height: 750px;
        }
    }
    .pv-con .nut-swiper{
        height: auto;
    }
}
</style>
