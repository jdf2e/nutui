<template>
  <div id="nut-drag" class="nut-drag" @touchstart="touchStart($event)" >
    <div v-if="!visible"  class="navBtn_open" @click="openBtnClick($event)"></div>
    <div class="foot-box-wrapper" v-if="visible">
        <div class="foot-box">
            <router-link to="/index">
                <a  href="javascript:void(0)" :class="{'active': currChoose == 0}">
                    <i class="foot-home"></i>
                    <span>首页</span>
                </a>
            </router-link>
            <router-link to="/Categroy" v-if="cIndex==0">
                <a  href="javascript:void(0)" :class="{'active': currChoose == 1}">
                    <i class="foot-categroy"></i>
                    <span>分类</span>
                </a>
            </router-link>
            <router-link to="/categroy-normal" v-else>
                <a  href="javascript:void(0)" :class="{'active': currChoose == 1}">
                    <i class="foot-categroy"></i>
                    <span>分类</span>
                </a>
            </router-link>
            <router-link to="/cart">
                <a href="javascript:void(0)" :class="{'active': currChoose == 2}">
                    <i class="foot-cart"></i>
                    <span>购物车</span>
                </a>
            </router-link>
            <router-link to="/my-welfare">
                <a href="javascript:void(0)"  :class="{'active': currChoose == 3}">
                    <i class="foot-me"></i>
                    <span>我的</span>
                </a>
            </router-link>
            <a href="javascript:void(0)" >
                <i class="navBtn-close" @click="closeBtnClick($event)"></i>
            </a>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "nut-navBtn",
  props: {
    // visible: {
    //   type: Boolean,
    //   default: false
    // },
    currChoose: {
      type: Number,
      default: 0
    },
    isSide: {
      type: Boolean,
      default: true
    },
    unit: {
      type: String,
      default: "px"
    },
    direction: {
      type: String,
      default: "h"
    },
    // width: {
    //   type: [Number, String],
    //   default: 45
    // },
    height: {
      type: [Number, String],
      default: 45
    },
    zIndex: {
      type: [Number, String],
      default: 11
    },
    opacity: {
      type: [Number, String],
      default: 1
    },
    boundary: {
      type: Object,
      default: function() {
        return {
          top: 0,
          left: 0,
          right: 0,
          bottom: 50
        };
      }
    },
    callback: {
      type: Function,
      default: function() {
        return function() {};
      }
    },
    href: {
      //调转链接
      type: String
    }
    // 'bgColor':{
    //     type:String,
    //     default:'rgba(0,0,0,.5)'
    // },
    // 'closeOnClickModal': {
    //     type: Boolean,
    //     default: true
    // }
  },
  data() {
    return {
      width: null,
      // boundary: {
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   bottom:50
      // },
      visible: false,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTime: null,
      endTime: null,
      startTop: 0,
      startLeft: 0
    };
  },
  methods: {
    openBtnClick() {
      this.visible = true;
    },
    closeBtnClick() {
      this.visible = false;
      this.boundary.right = null;
    },
    // drag中的方法
    getElementInfo() {
      let el = document.querySelector(".nut-drag");
      let domElem = document.documentElement;
      this.elWidth = el.offsetWidth;
      this.elHeight = el.offsetHeight;
      this.screenWidth = domElem.clientWidth;
      this.screenHeight = domElem.clientHeight;
      let distance = this.screenWidth - this.elWidth - el.offsetLeft;
      el.style.zIndex = this.zIndex;
      el.style.opacity = this.opacity;
      el.style.width = this.width + this.unit;
      el.style.height = this.height + this.unit;
      if (this.boundary.left != 0) {
        el.style.left = this.boundary.left + "px";
      } else {
        el.style.right = this.boundary.right + "px";
      }
      if (this.boundary.top != 0) {
        el.style.top = this.boundary.top + "px";
      } else {
        el.style.bottom = this.boundary.bottom + "px";
      }
    },
    touchStart(e) {
      let target = e.currentTarget;
      this.startTime = new Date();
      this.startTop = target.offsetTop;
      this.startLeft = target.offsetLeft;
      target.addEventListener("touchmove", this.touchMove, false);
      target.addEventListener("touchend", this.touchEnd, false);
    },
    touchMove(e) {
      // e.preventDefault();
      let target = e.currentTarget;
      if (e.targetTouches.length == 1) {
        let touch = e.targetTouches[0];
        let currX = touch.clientX;
        let currY = touch.clientY;
        let rightLocation =
          this.screenWidth - this.elWidth - this.boundary.right;
        if (Math.abs(currX) > rightLocation) {
          currX = rightLocation;
        } else if (currX <= this.boundary.left) {
          currX = this.boundary.left;
        }
        if (currY < this.elHeight / 2 + this.boundary.top) {
          currY = this.elHeight / 2 + this.boundary.top;
        } else if (
          currY >
          this.screenHeight - this.elHeight - this.boundary.bottom
        ) {
          currY = this.screenHeight - this.elHeight / 2 - this.boundary.bottom;
        }
        if (this.direction != "h") {
          target.style.left = currX + this.unit;
        }
        if (this.direction != "v") {
          target.style.top = currY - this.elHeight / 2 + this.unit;
        }
      }
    },
    touchEnd(e) {
      // e.preventDefault();
      let target = e.currentTarget;
      this.endTime = new Date();
      let touch = e.changedTouches[0];
      let currX = touch.clientX;
      let currY = touch.clientY;
      let distanceTime = this.endTime - this.startTime;
      let distanceX = currX - this.startLeft;
      let distanceY = currY - this.startTop;
      if (distanceTime > 500 && distanceTime < 2000) {
        // if(this.visible){
        //   this.closeBtnClick();
        // }else{
        //   this.openBtnClick();
        // }
      }
      let rightLocation = this.screenWidth - this.elWidth - this.boundary.right;
      if (this.isSide) {
        if (currX > rightLocation) {
          currX = rightLocation;
        } else if (currX < this.boundary.left) {
          currX = this.boundary.left;
        } else {
          currX =
            currX < this.screenWidth / 2 + this.elWidth / 2
              ? this.boundary.left
              : rightLocation;
        }
        if (currY < this.elHeight / 2 + this.boundary.top) {
          currY = this.elHeight / 2 + this.boundary.top;
        } else if (
          currY >
          this.screenHeight - this.elHeight - this.boundary.bottom
        ) {
          currY = this.screenHeight - this.elHeight / 2 - this.boundary.bottom;
        }
      } else {
        if (currX > rightLocation) {
          currX = rightLocation;
        } else if (currX < this.boundary.left) {
          currX = this.boundary.left;
        }
        if (currY < this.elHeight / 2 + this.boundary.top) {
          currY = this.elHeight / 2 + this.boundary.top;
        } else if (
          currY >
          this.screenHeight - this.elHeight - this.boundary.bottom
        ) {
          currY = this.screenHeight - this.elHeight / 2 - this.boundary.bottom;
        }
      }
      if (this.direction != "h" && Math.abs(distanceX) > 20) {
        target.style.left = currX + this.unit;
      }
      if (this.direction != "v" && Math.abs(distanceY) > 20) {
        target.style.top = currY - this.elHeight / 2 + this.unit;
      }
    }
  },
  computed: {
    cIndex() {
      return this.$store.state.cIndex;
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      this.getElementInfo();
    });
  }
};
</script>
<style lang="scss" scoped>
// @import '../asset/css/common.scss';
.nut-drag {
  position: fixed;
  // bottom: 0.5rem;
}
.navBtn_open {
  width: 0.41rem;
  height: 0.41rem;
  opacity: 1;
  background-image: url("../asset/img/nav.png");
  background-size: 0.4rem 0.4rem;
  // position: fixed;
  // right: 0.2rem;
  bottom: 0.5rem;
  // 兼容的处理iphoeX
  bottom: calc(0.4rem + constant(safe-area-inset-bottom));
  bottom: calc(0.4rem + env(safe-area-inset-bottom));
}
$warmGrey: rgb(153, 153, 153);
@mixin bgpic($bgw, $bgh) {
  width: $bgw;
  height: $bgh;
  background-size: $bgw $bgh;
}
.foot-box-wrapper {
  width: 100%;
  height: 0.65rem;
  // calc动态计算长度值，safe-area-inset-bottom适配iphoneX
  height: calc(0.65rem + constant(safe-area-inset-bottom));
  height: calc(0.65rem + env(safe-area-inset-bottom));
}
.foot-box {
  display: border-box;
  max-width: 640px;
  width: 3.55rem;
  height: 0.65rem;
  // position: fixed;

  margin: 0 0.1rem;
  // 适配iphoneX,前面的小数和高度有关
  height: calc(0.65rem + constant(safe-area-inset-bottom));
  height: calc(0.65rem + env(safe-area-inset-bottom));
  border-top: 1px solid #d7d7d7;
  display: flex;
  background: #fdfdfd;
  border-radius: 0.4rem;
  padding: 0 0.1rem;
  a {
    flex: 1;
    flex-direction: column;
    display: flex;
    height: 0.65rem;
    align-items: center;
    justify-content: center;
    .foot-home {
      @include bgpic(0.25rem, 0.25rem);
      background-image: url("../asset/img/tabHomeNormal.png");
    }
    .foot-categroy {
      @include bgpic(0.25rem, 0.25rem);
      background-image: url("../asset/img/tabCategoryNormal.png");
    }
    .foot-cart {
      @include bgpic(0.25rem, 0.25rem);
      background-image: url("../asset/img/tabCartNormal.png");
    }
    .foot-me {
      @include bgpic(0.25rem, 0.25rem);
      background-image: url("../asset/img/tabMeNormal.png");
    }
    .navBtn-close {
      @include bgpic(0.45rem, 0.45rem);
      background-image: url("../asset/img/floatingClose.png");
    }
    span {
      color: $warmGrey;
      margin-top: 0.04rem;
      font-size: 10px;
    }
  }
  .active {
    .foot-home {
      background-image: url("../asset/img/tabHomeSelected.png");
    }
    .foot-categroy {
      @include bgpic(0.21rem, 0.21rem);
      background-image: url("../asset/img/tabCategorySelected.png");
    }
    .foot-cart {
      background-image: url("../asset/img/tabCartSelected.png");
    }
    .foot-me {
      background-image: url("../asset/img/tabMeSelected.png");
    }
    span {
      color: #ec3b26;
    }
  }
}
</style>