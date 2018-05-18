<template>
    <div class="nut-code-box" :class="{'pack-up':packUp,'unfold':unfold}" :style="{'height':isFold?foldHeight+'px':'auto','max-height':isFold?foldHeight+'px':'4000px'}">
          <div class="demo-img" v-if="imgUrl">
            <template v-if="Array.isArray(imgUrl)">
              <template v-for="item in imgUrl">
                <img :src="item" alt="" title="扫描页面右上方二维码，在手机上查看DEMO">
              </template>
            </template>
            <template v-else>
              <img :src="imgUrl" alt="" title="扫描页面右上方二维码，在手机上查看DEMO">
            </template>
          </div>
          
          <div class="demo-code">
            <pre><code v-highlight v-text="code"></code></pre></div>
          <a href="javascript:;" title="复制代码到剪切板" class="copy-btn" :class="{'copyed':copyed}"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M10 4v-4h-7l-3 3v9h6v4h10v-12h-6zM3 1.414v1.586h-1.586l1.586-1.586zM1 11v-7h3v-3h5v3l-3 3v4h-5zM9 5.414v1.586h-1.586l1.586-1.586zM15 15h-8v-7h3v-3h5v10z"></path>
            </svg></a>
          <a href="javascript:;" class="show-more" @click="toggle"></a>
    </div>
</template>
<script>
import clipboard from "../../../util/clipboard.min.js";
export default {
  name: "nut-codebox",
  props: {
    code: {
      type: String,
      default: ""
    },
    imgUrl: {
      type: [String,Array],
      default: ""
    },
    foldHeight: {
      type: [Number, String],
      default: 300
    }
  },
  data() {
    return {
      packUp: false,
      unfold: false,
      copyed: false
    };
  },
  computed: {
    isFold(){
      return this.packUp && !this.unfold;
    }
  },
  methods: {
    toggle() {
      this.unfold = !this.unfold;
    }
  },
  mounted() {
    
    if (this.$el.clientHeight > Number(this.foldHeight)) {
      this.packUp = true;
    }
    this.$nextTick(() => {
      const myClipboard = new clipboard(this.$el.querySelector('.copy-btn'), {
        text: trigger => {
          return this.code;
        }
      });

      myClipboard.on("success", () => {
        this.copyed = true;
      });
    });
  }
};
</script>
<style lang="scss">
.nut-code-box {
  position: relative;
  width: 100%;
  border: 1px solid #e2e2e2;
  background-color: #f8f8f8;
  font-size: 0;
  box-sizing: border-box;
  overflow: hidden;
  transition:max-height 1s;
  margin:5px 0;
  .copy-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 16px;
    height: 16px;
    svg {
      color: #808080;
    }
    &.copyed {
      svg {
        color: rgba(190, 190, 190, 0.5);
      }
    }
  }
  .demo-img {
    display: inline-block;
    width: 40%;
    height: 100%;
    padding: 10px;
    text-align: center;
    margin-bottom: -3000px;
    padding-bottom: 3000px;
    border-right: 1px solid #e2e2e2;
    box-sizing: border-box;
    img {
      max-width: 100%;
      margin-bottom:10px;
    }
    &+.demo-code{
      width:60%;
    }
  }
  .demo-code {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    margin-bottom: -3000px;
    padding-bottom: 3000px;
    width: 100%;
    height: 100%;
    pre {
      margin: 0;
    }
    .hljs {
      border: none;
      background-color: transparent;
      padding: 1em 0.5em;
    }
  }
  &.pack-up {
    .show-more {
      display: inline-block;
    }
    .demo-code {
      padding-bottom: 3020px;
    }
  }
  .show-more {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25px;
    z-index: 2;
    background-image: -webkit-linear-gradient(
      top,
      hsla(0, 0%, 100%, 0),
      #fafafa
    );
    &::after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: "";
      margin: -7px 0 0 -7px;
      width: 14px;
      height: 14px;
      background: url("data:image/svg+xml, %3Csvg viewBox='0 0 12 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.279 5.934c-.286.118-.635.08-.865-.129L.204 1.083A.582.582 0 0 1 .235.175a.84.84 0 0 1 1.058.026l4.676 4.237 4.745-4.22A.84.84 0 0 1 11.77.2a.598.598 0 0 1 .23.463c0 .16-.07.32-.21.445l-5.26 4.68c-.01.009-.025.012-.036.02l-.021.022c-.045.036-.099.056-.15.08-.015.007-.028.018-.044.024z' fill='%23666' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat center;
      transition: transform 300ms;
    }
  }
  &.unfold {
    .show-more {
      background-image: none;
      &::after {
        transform: rotate(180deg);
      }
    }
  }
}

@media (max-width: 415px) {
  .nut-code-box{
    .demo-img{
      display:none;
      &+.demo-code{
        width:100%;
      }
    }
    .copy-btn{
      display:none;
    }
  }
}
</style>