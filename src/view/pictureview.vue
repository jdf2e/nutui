<template>
    <div>
	    <h1>PictureView</h1>
	    <p>浏览大图组件</p>
      <h5>依赖</h5>
      <p>Swiper</p>
      <a class="button button-primary" href="/demo.html#/pictureview" target="_blank">Demo</a>
      <!-- <div class="pic-box">
          <span v-for="(item, index) in picBox" @click="setPicShow(index)"><img :src="item"></span>
      </div>
            <nut-pictureview :visible="picShow" :bgColor="coverColor" :imgArr="picBox" :initNum="picShowNum" :pagination="showPage" @close-pic="setPicHide"></nut-pictureview> -->
      <pre><code v-highlight v-text="demo1"></code></pre>
      <pre><code v-highlight v-text="demo2"></code></pre>
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
              <td>visible</td>
              <td>初始状态显示或隐藏大图</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>bgColor</td>
              <td>设置黑色遮罩层透明度</td>
              <td>String</td>
              <td>rgba(0,0,0,.5)</td>
              <td>--</td>
            </tr>
            <tr>
              <td>imgArr</td>
              <td>大图数组</td>
              <td>Array</td>
              <td>[ ]</td>
              <td>--</td>
            </tr>
            <tr>
              <td>initNum</td>
              <td>显示大图时初始显示第几个</td>
              <td>Number</td>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>pagination</td>
              <td>显示大图是是否显示点点点</td>
              <td>Boolean</td>
              <td>false</td>
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
              <td>close-pic</td>
              <td>点击关闭大图时触发</td>
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
        picShow:false,
        picShowNum:1,
        showPage:true,
        coverColor:'rgba(0,0,0,.7)',
        picBox:['http://img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg','http://img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg','http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg'],
        demo1:`<div class="pic-box">
    <span v-for="(item, index) in picBox" @click="setPicShow(index)"><img :src="item"></span>
</div>
<nut-pictureview :visible="picShow" :bgColor="coverColor" :imgArr="picBox" :initNum="picShowNum" :pagination="showPage" @close-pic="setPicHide"></nut-pictureview>`,
        demo2:`export default {
  data(){
    return{
      picShow:false,
      picShowNum:1,
      showPage:true,
      coverColor:'rgba(0,0,0,.7)',
      picBox:['http://img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg',
              'http://img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg',
              'http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg'],
    }
  },
  methods:{
    setPicShow(index){
      this.picShowNum = index+1;
      this.picShow = true;
    },
    setPicHide(){
      this.picShow = false;
    }
  }
}`,
      }
    },
    methods:{
      setPicShow(index){
        this.picShowNum = index+1;
        this.picShow = true;
      },
      setPicHide(){
        this.picShow = false;
      }
    }
}
</script>

<style>
.pic-box{
  display: flex;
}
.pic-box span{
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border:1px solid #eee;
}
.pic-box span img{
  width: 100%;
  height: 100%;
}
</style>
