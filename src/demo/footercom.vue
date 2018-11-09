<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>
        <p>默认用法</p>
       <nut-footercom :menuList='footerMenuList1' @changeMenuFn="changeMenuFn"></nut-footercom>
        <p>仅显示图标</p>
        <nut-footercom :menuList='footerMenuList2' @changeMenuFn="changeMenuFn"></nut-footercom>
    </div>
</template>

<script>
import Vue from "vue";
import FooterCom from '../package/footercom/index.js';
export default {
  data() {
    return {
      code: `
            //菜单图标文案 数组对象  使用须知：
            // 1， 数组内对象可用属性共有： iconselect(选中图标)  icon(默认图标)   url(跳转地址)  text(文案)
            // 2， text(文案) 要配置请全部配置。
            // 3,  url(跳转地址) 不配置则不做跳转
            // 4, iconselect(选中图标)  icon(默认图标)  为必选属性
            export default {
              data() {
                return  {
                  footerMenuList:[
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
                        text:'测试1'
                      },
                      {
                        iconselect:
                          "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
                        icon:
                          "http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
                        url: "/orderDetail",
                        text:'测试2'
                      },

                      {
                        iconselect:
                          "http://img12.360buyimg.com/uba/jfs/t26998/32/1861936/1307/776501d8/5b7fc73dNf725ab6d.png",
                        icon:
                          "http://img13.360buyimg.com/uba/jfs/t22762/195/2428374466/1450/70f02b6/5b7fc73dN45d94c02.png",
                        text:'测试3'
                      }
                    ]
                }
              },
              methods: {
                changeMenuFn(item) {
                  console.log(item)
                },
              }
            }
          `,
      footerMenuList1: [
           {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
             url: "/orderDetail",
             text:'首页'
           },
           {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img13.360buyimg.com/uba/jfs/t22762/195/2428374466/1450/70f02b6/5b7fc73dN45d94c02.png",
             url: "/orderDetail",
             text:'菜单'
           },
           {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
             url: "/orderDetail",
             text:'我的1'
           },
              {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img13.360buyimg.com/uba/jfs/t22762/195/2428374466/1450/70f02b6/5b7fc73dN45d94c02.png",
             url: "/orderDetail",
             text:'我的'
           }
           ],
      footerMenuList2: [
           {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
             url: "/orderDetail"
           },
           {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
             url: "/orderDetail"
           },
           {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
             url: "/orderDetail"
           }
           ]
    };
  },
  methods: {
    changeMenuFn(item) {
      console.log(item);
    }
  },
   components: {
      'nut-footercom': FooterCom
    },
};
</script>

<style lang="scss" scoped>
.footer-wrap{
    position: relative !important;
}
</style>


