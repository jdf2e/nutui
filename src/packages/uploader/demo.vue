<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-uploader
            :name="name"
            :url="url"
            :xhrState="stateNum"
            :acceptType = "['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
            @success="demo1Success"
            @failure="demo1Fail"
            @start="demo1UploadStart"
            @showMsg="showMsg"
          >{{demo1Name}}</nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div>

    <h4>高级用法</h4>
    <p>结合Button组件和Toast组件使用</p>
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
            <nut-button small>{{demo2Name}}</nut-button>
          </nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div>

    <p>结合进度条Progress组件使用，展示上传进度</p>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-uploader
            :name="name"
            :url="url"
            :xhrState="stateNum"
            :headers="headers"
            @success="demoSuccess"
            @fail="demoFail"
            @progress="progress"
            @showMsg="showMsg1"
            :clearInput="true"
          >
            <nut-button small>上传</nut-button>
          </nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
      <nut-cell>
        <span slot="title">
          <nut-progress
            class="progress-style"
            :percentage="progressNum"
            :showText="true"
            strokeWidth="12"
          />
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div>

    <p>自定义headers&formData</p>
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
            @preview="preview"
            @showMsg="showMsg1"
          >
            <nut-button small>上传</nut-button>
          </nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div>

    <p>预览上传图片</p>
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
          >
            <nut-button small>上传</nut-button>
          </nut-uploader>
        </span>
        <div slot="desc"></div>
      </nut-cell>
    </div>

    <transition name="fade">
      <div class="img-outbox">
        <img class="img-box" v-if="previewImg" :src="previewImg" alt>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: "https://my-json-server.typicode.com/linrufeng/demo/posts",
      demo1Name: "点击选择文件",
      demo2Name: "点击选择文件",
      name: "test1",
      stateNum: 201,
      block: "block",
      headers:{
        token:'test'
      },
      formData:{
        f1:'test',
        f2:'test1'
      },
      progressNum: 0,
      previewImg: null,
      previewImg2: null,
      progressNum2: null,
      upOver: false,
      demo3Type: ["application/zip"]
    };
  },
  methods: {
    demo1UploadStart() {
      this.demo1Name = "上传中...";
      this.progressNum1 = 0;
    },
    demo1Success() {
      this.demo1Name = "上传成功";
    },
    demo1Fail() {
      this.demo1Name = "上传失败";
    },
    demo2UploadStart() {
      this.demo2Name = "上传中...";
    },
    demo2Success() {
      this.demo2Name = "选择文件";
      this.$toast.success("上传成功");
    },
    demo2Fail() {
      this.demo2Name = "选择文件";
      this.$toast.fail("上传失败");
    },
    demoSuccess(file, res) {
      this.$toast.success("上传成功");
    },
    demoFail() {
      this.$toast.fail("上传失败");
    },
    progress(file, loaded, total) {
      this.progressNum = parseInt((100 * loaded) / total);
    },
    preview(file) {
      this.previewImg = file;
    },
    showMsg1(msg) {
      this.$toast.text(msg);
    },
    showMsg(msg){
      alert(msg);
    }
  }
};
</script>

<style lang="scss" scoped>
.img-outbox {
  margin-top: 20px;
  margin-left:20px;
  width: 100px;
  height: 100px;
  border-radius: 6px;
  position: relative;
  border: 1px solid #f2f2f2;
  line-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-box {
    margin-top: 0;
  }
  .icon {
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
  }
  .pr {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 100px;
    background: rgba(0, 0, 0, 0.2);
  }
}
.img-box {
  margin-top: 20px;
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
}
</style>
