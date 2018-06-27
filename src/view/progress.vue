<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <h6>默认用法</h6>
        <nut-codebox code="<nut-progress 
percent='15'
height='10px' />" />
        <div class="cont">
          <nut-progress percent="15" height="10px" />
        </div>
        <h6>设置高度和颜色</h6>
        <nut-codebox code="<nut-progress 
height='18px' 
color='#33C3F0' />" />
        <div class="cont">
          <nut-progress height="18px" color="#33C3F0" percent="23" />
        </div>
        <h6>内联显示进度数</h6>
        <nut-codebox code="<nut-progress 
height='0.25rem' 
percent='20' 
showText='in' />" />
        <div class="cont">
          <nut-progress percent="20" showText="in" height="20px" />
        </div>
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
                  <td>percent</td>
                  <td>百分比</td>
                  <td>String, Number</td>
                  <td>0</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>背景色</td>
                  <td>String</td>
                  <td>#f23030</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>height</td>
                  <td>高度</td>
                  <td>String</td>
                  <td>.06rem</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>showText</td>
                  <td>显示百分比的位置</td>
                  <td>String</td>
                  <td>out</td>
                  <td>--</td>
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

    }
  }
}
</script>

<style>
.cont{
  width: 450px;
}
</style>
