<template>
    <div>
	    <h1>PictureView</h1>
	    <p>浏览大图组件</p>
      <div class="pic-box">
          <span v-for="(item, index) in picBox" @click="setPicShow(index)"><img :src="item"></span>
      </div>
	    <nut-pictureview :visible="picShow" :bgColor="coverColor" :imgArr="picBox" :initNum="picShowNum" :pagination="showPage" @close-pic="setPicHide"></nut-pictureview>
      
     
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
