<template>
    <div  :class="['footer-wrap',{'for-three-style':forThreeStyle}]" id="footer">
        <div :class= "['box',{'no-text-style':noText}]"  v-for='(item,index) in menuList' :key='item.id' @click= changeMenu(index) >
           <span :style="{ color:(select == index ? '#006FFF':'') , background: ( select == index ? 'url(' + item.iconselect || '' + ')  0% 0% / contain no-repeat' :'url(' + item.icon || '' + ')  0% 0% / contain')}" class="item">{{item.text || ""}}</span>
        </div> 
    </div>
</template>

<script>
export default {
  name: "nut-footer",
  data() {
    return {
      select: 0,
      forThreeStyle: false,
      noText: null
    };
  },
  props: {
    menuList: {
      //菜单图标文案 数组对象  使用须知：
      // 1， 数组内对象可用属性共有： iconselect(选中图标)  icon(默认图标)   url(跳转地址)  text(文案)
      // 2， text(文案) 要配置请全部配置。
      // 3,  url(跳转地址) 不配置则不做跳转
      // 4, iconselect(选中图标)  icon(默认图标)  为必选属性
      type: Array,
      default: function() {
        return [
          {
            iconselect:
              "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
            icon:
              "http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
            url: "/orderDetail",
            text:'首页'
          },
          {
            iconselect:
              "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
            icon:
              "http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
            url: "/orderDetail",
            text:'首页'
          },
          {
            iconselect:
              "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
            icon:
              "http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
            url: "/orderDetail",
            text:'首页'
          },

          {
            iconselect:
              "http://img12.360buyimg.com/uba/jfs/t26998/32/1861936/1307/776501d8/5b7fc73dNf725ab6d.png",
            icon:
              "http://img13.360buyimg.com/uba/jfs/t22762/195/2428374466/1450/70f02b6/5b7fc73dN45d94c02.png",
            text:'首页'
          }
        ];
      }
    }
  },
  created() {},
  mounted() {
    let len = this.menuList.length;
    if (len == 3 || len == 2) {
      this.forThreeStyle = true;
    }
    this.menuList.map((item, i) => {
      if (!item.text) {
        this.noText = true;
      }
    });
  },
  methods: {
    changeMenu(index) {
      this.select = index;
      this.menuList.map((item, i) => {
        if (index === i) {
          if (item.url) {
            this.$router.push({ path: item.url });
          }
          this.$emit("changeMenuFn", item);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.box:nth-child(3) span {
  background-position: 0.13rem 0rem !important;
      text-align: center !important;
}
.box:nth-child(4) {
    text-indent: -0.07rem !important;
}
.for-three-style {
  padding-left: 0.6rem !important;
}
.no-text-style {
  margin-top: -0.2rem;
}
.footer-wrap {
  height: 0.98rem;
  line-height: 0.98rem;
  background: #fafafa;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  border-bottom: 0.01rem solid #e8e8e8;
  z-index: 999;
  width: 100%;
  padding-left: 0.3rem;
  flex-direction: row;
  justify-content: space-between;

  .box {
    height: 0.9rem;
    margin-right: 18%;
    width: 10%;
    text-indent: -0.02rem;
    span {
      width: 0.8rem;
    }
    .item {
      height: 0.42rem;
      background-size: contain !important;
      font-size: 0.2rem;
      color: #666666;
      line-height: 1.4rem;
      display: inline-block;
      background-repeat: no-repeat !important;
    }
  }
}
</style>
