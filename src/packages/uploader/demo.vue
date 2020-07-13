<template>
  <div class="demo-list">
    <h4>通用方法</h4>
    <p>自定义样式，和图片预览</p>
    <div>
      <div class="preview-img-box">
        <div class="img-list">
          <img-cell
            v-for="(item, index) in previewImg"
            :key="index"
            :src="item"
            :clear="
              () => {
                clearImg(index);
              }
            "
          />

          <nut-uploader
            class="demo-1"
            :name="name"
            :url="url"
            :xhrState="stateNum"
            :acceptType="['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
            :isPreview="true"
            @preview="preview"
            @success="demo1Success"
            @failure="demo1Fail"
            @start="demo1UploadStart"
            @showMsg="showMsg"
            :multiple="true"
            >+</nut-uploader
          >
        </div>
      </div>
    </div>

    <h4>其它用法</h4>
    <p>结合 Button 组件和 Toast 组件使用</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-uploader
            :name="name"
            :url="url"
            :xhrState="stateNum"
            @start="demo2UploadStart"
            @success="demo2Success"
            @failure="demo2Fail"
            @showMsg="showMsg1"
          >
            <nut-button size="small">{{ demo2Name }}</nut-button>
          </nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div>

    <p>自定义 headers & formData </p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-uploader
            :name="name"
            :url="url"
            :xhrState="stateNum"
            :headers="headers"
            :attach="formData"
            @success="demoSuccess"
            @fail="demoFail"
            @showMsg="showMsg1"
          >
            <nut-button size="small">上传</nut-button>
          </nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div>

    <!-- <p>预览上传图片</p>
    <transition name="fade">
        <div class="img-list" v-if="previewImg">
          <img-cell v-for="(item,index) in previewImg" :key="index"   :src="item" /> 
        </div>
    </transition>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-uploader
            :name="name"
            :url="url"
            :xhrState="stateNum"
            :isPreview="true"
            @success="demoSuccess"
            @fail="demoFail"
            @preview="preview"
            @showMsg="showMsg1"
            :multiple="true"
          >
            <nut-button size="small">上传</nut-button>
          </nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div> -->
    <p>上传图片前处理图片内容</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-uploader
            :beforeUpload="test"
            :name="name"
            :url="url"
            :xhrState="stateNum"
            :acceptType="['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
            @success="demo1Success"
            @failure="demo1Fail"
            @start="demo1UploadStart"
            @showMsg="showMsg"
          >
            <nut-button size="small">上传图片前处理图片内容</nut-button>
          </nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div>
    <p>自定义增加上传图片数据</p>
    <nut-cell>
      <span slot="title">
        <nut-uploader
          :selfData="selfData"
          :name="name"
          :url="url"
          :xhrState="stateNum"
          :acceptType="['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
          @success="demo1Success"
          @failure="demo1Fail"
          @start="demo1UploadStart"
          @showMsg="showMsg"
        >
          <nut-button size="small">自定义增加上传图片数据</nut-button>
        </nut-uploader>
      </span>
      <div slot="desc"></div>
    </nut-cell>
  </div>
</template>

<script>
import imgCell from './img-cell';
export default {
  components: {
    imgCell,
  },
  data() {
    return {
      selfData: {
        test1: '自定义数据',
      },
      url: 'https://my-json-server.typicode.com/linrufeng/demo/posts',
      demo1Name: '点击选择文件',
      demo2Name: '点击选择文件',
      name: 'test1',
      stateNum: 201,
      block: 'block',
      headers: {
        token: 'test',
      },
      formData: {
        f1: 'test',
        f2: 'test1',
      },
      progressNum: 0,
      previewImg: [],
    };
  },
  methods: {
    clearImg(index) {
      // console.log(index)
      // let ary =  JSON.parse(JSON.stringify(this.previewImg));
      this.previewImg.splice(index, 1);
      // console.log(ary)
    },
    test(event) {
      console.log(event, '可以处理input选择的内容');
      return {
        event: event,
        data: '',
      };
    },
    demo1UploadStart() {
      this.demo1Name = '上传中...';
      this.progressNum1 = 0;
    },
    demo1Success() {
      this.demo1Name = '上传成功';
    },
    demo1Fail() {
      this.demo1Name = '上传失败';
    },
    demo2UploadStart() {
      this.demo2Name = '上传中...';
    },
    demo2Success() {
      this.demo2Name = '选择文件';
      this.$toast.success('上传成功');
    },
    demo2Fail() {
      this.demo2Name = '选择文件';
      this.$toast.fail('上传失败');
    },
    demoSuccess(file, res) {
      this.$toast.success('上传成功');
    },
    demoFail() {
      this.$toast.fail('上传失败');
    },
    progress(file, loaded, total) {
      this.progressNum = parseInt((100 * loaded) / total);
    },
    preview(file) {
      let previewImg = this.previewImg;
      this.previewImg = [...previewImg, ...file];
    },
    showMsg1(msg) {
      this.$toast.text(msg);
    },
    showMsg(msg) {
      alert(msg);
    },
  },
};
</script>

<style lang="scss" scoped>
.img-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.demo-1 {
  width: 75px;
  height: 75px;
  line-height: 75px;
  text-align: center;
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 3px;
  background: #fff;
}
.preview-img-box {
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
}
</style>
