<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="公共底部菜单" 
        :showQrCode="true"></nut-docheader>
        <!-- DEMO区域 -->
        <h6>默认用法(图标+文字)</h6>
        <nut-codebox imgUrl="../asset/img/demo/footercom4.png" :code="demo1"></nut-codebox>
        <h6>仅显示图标</h6>
        <nut-footercom :menuList='footerMenuList'></nut-footercom>
        <nut-codebox imgUrl="../asset/img/demo/footercom3.png" :code="demo2"></nut-codebox>
        <nut-footercom :menuList='footerMenuList'></nut-footercom>
        <h6>使用须知与通用数据代码和回调示例</h6>
        <nut-codebox :code="code"></nut-codebox>
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
                  <td>footerMenuList </td>
                  <td>菜单图标文案数组配置请参考上方注释</td>
                  <td>Array</td>
                  <td>如图所见选中前后的icon和文字（文字可不配置）</td>
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
              <td>changeMenuFn</td>
              <td>当点击某个菜单时触发</td>
              <td>被点击菜单的数据对象</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>


    
</template>

<script>
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
      demo1: `<nut-footercom :menuList='footerMenuList'  @changeMenuFn="changeMenuFn"></nut-footercom>//配置数据footerMenuList 数组长度支持2到4个子对象，具体看下方使用须知
            //配置数据每一项为  
           {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
             url: "/orderDetail",
             text:'首页'
           }      
          
          `,
      demo2: `<nut-footercom :menuList='footerMenuList'  @changeMenuFn="changeMenuFn"></nut-footercom>
          //配置数据每一项为
           {
             iconselect: "http://img13.360buyimg.com/uba/jfs/t27010/39/1558743/896/9e3c3096/5b7fc73dN636e01f4.png",
             icon:"http://img20.360buyimg.com/uba/jfs/t24202/290/2428485933/1010/db808515/5b7fc6afN8d31330b.png",
             url: "/orderDetail"
           }`
    };
  },
  methods: {
    changeRate(index) {
      //console.log(index);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
