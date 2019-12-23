<template>
    <div>
        <h4>基本用法</h4>
        <nut-imagepicker @imgMsg="imgMsg" :imgList.sync="imgList1"></nut-imagepicker>
        <h4>指定宽度和高度都是120px,图片间距是10px</h4>
        <nut-imagepicker @imgMsg="imgMsg"  :width="120" :height="120" :margin="10" :imgList.sync="imgList2"></nut-imagepicker>
        <h4>允许上传的最大数量是4张</h4>
        <nut-imagepicker @imgMsg="imgMsg" :max="4"></nut-imagepicker>
        <h4>支持多图选择</h4>
        <nut-imagepicker @imgMsg="imgMsg" :ismultiple=true></nut-imagepicker>
        <h4>支持长按删除图片</h4>
        <nut-imagepicker @imgMsg="imgMsg" :imgList.sync="imgList2" delMode="longtap"></nut-imagepicker>
        <h4>选择完成图片之后自动上传</h4>
        <nut-imagepicker @imgMsg="imgMsg" autoUpload="true"></nut-imagepicker>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgList1:[
        {
          id:1,
          src:"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
        }
      ],
      imgList2:[
        {
          id:1,
          src:"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
        }
      ]
    };
  },
  methods: {
    imgMsg(data){
      if(data.code == 1) {
        alert('upload');
      }
      console.log(this.imgList2)
      console.log(data);//code 1 自动上传  2 不上传只展示图片  3 删除图片  4 预览图片
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
