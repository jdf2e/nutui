<template>
    <div>
         <nut-docheader
        :name="$route.name"
        :chName="$route.params.chnName"
        type="Component"
        desc="优惠券，包括京券、东券、运费券、不可用券，支持领取、选中事件。"
        :showQrCode="true"></nut-docheader>

        <h5>示例</h5>
        <!-- <a class="button button-primary" href="/demo.html#/Coupon" target="_blank">Demo</a> -->

        <h6>优惠券展示：京券,立即使用</h6>
        <nut-codebox :code="demo1" :imgUrl="['../asset/img/demo/coupon1.png']"></nut-codebox>
        <nut-codebox :code="demo11"></nut-codebox>
        <h6>优惠券展示：东券,立即使用</h6>
        <nut-codebox :code="demo2" :imgUrl="['../asset/img/demo/coupon2.png']"></nut-codebox>
        <nut-codebox :code="demo21"></nut-codebox>
        <h6>优惠券展示：运费券,立即使用</h6>
        <nut-codebox :code="demo3" :imgUrl="['../asset/img/demo/coupon3.png']"></nut-codebox>
        <nut-codebox :code="demo31"></nut-codebox>
        <h6>优惠券展示：不可用券</h6>
        <nut-codebox :code="demo4" :imgUrl="['../asset/img/demo/coupon4.png']"></nut-codebox>
        <nut-codebox :code="demo41"></nut-codebox>
        <h6>优惠券展示：切换状态</h6>
        <nut-codebox :code="demo5" :imgUrl="['../asset/img/demo/coupon5.png']"></nut-codebox>
        <nut-codebox :code="demo51"></nut-codebox>
        <h6>优惠券展示：有活动角标</h6>
        <nut-codebox :code="demo6" :imgUrl="['../asset/img/demo/coupon6.png']"></nut-codebox>
        <nut-codebox :code="demo61"></nut-codebox>


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
              <td>datas</td>
              <td>券数据</td>
              <td>Object</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>datas.id</td>
              <td>优惠券Id</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>datas.discount</td>
              <td>折扣金额</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>datas.quota</td>
              <td>满额值</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>datas.couponType</td>
              <td>0京券 1东券 2免运费券</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>datas.couponLimitInfo</td>
              <td>该券不可使用或者可以使用的说明</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>datas.beginTime</td>
              <td>优惠券使用的起始日期</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>datas.endTime</td>
              <td>优惠券使用的截止日期</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>datas.isUsed</td>
              <td>是否可用</td>
              <td>Boolean</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>isSwitch</td>
              <td>是否切换到选择功能</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>isBadge</td>
              <td>是否有角标</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
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
              <td>immediate-use</td>
              <td>点击立即使用时触发</td>
              <td>返回当前优惠券数据</td>
            </tr>
            <tr>
              <td>switch-use</td>
              <td>选中或不选中时触发</td>
              <td>返回当前优惠券数据和是否选中状态</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            demo1: `<nut-coupon
  :datas="beanData"
  @immediate-use="immediateUse">
</nut-coupon>`,
            demo2: `<nut-coupon
  :datas="beanData"
  @immediate-use="immediateUse">
</nut-coupon>`,
            demo3: `<nut-coupon
  :datas="beanData"
  @immediate-use="immediateUse">
</nut-coupon>`,
            demo4: `<nut-coupon
  :datas="beanData"
  @immediate-use="immediateUse">
</nut-coupon>`,
            demo5: `<nut-coupon
  :datas="beanData"
  :is-switch="true"
  @switch-use="switchUse">
</nut-coupon>`,
            demo6: `<nut-coupon
  :datas="beanData"
  :is-switch="true"
  @switch-use="switchUse"
  :is-badge="true">
</nut-coupon>`,
            demo11: `export default {
    data(){
        return{
            beanData: {
                'id': 1,
                'discount': 100,
                'quota': 400,
                'couponType': 0,
                'couponLimitInfo': '限自营好丽友商品',
                'beginTime': '2015.07.07',
                'endTime': '2015.07.07',
                'isUsed': true
            }
        }
    },
    methods:{
        immediateUse(datas){
            console.log('立即使用,数据如下：' + JSON.stringify(datas));
        }
    }
}`,
            demo21: `export default {
    data(){
        return{
            beanData: {
                  'id': 2,
                  'discount': 10,
                  'quota': 60,
                  'couponType': 1,
                  'couponLimitInfo': '限自营盼盼品牌部分饼干类商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': true
              }
        }
    },
    methods:{
        immediateUse(datas){
            console.log('立即使用,数据如下：' + JSON.stringify(datas));
        }
    }
}`,
            demo31: `export default {
    data(){
        return{
            beanData: {
                  'id': 3,
                  'discount': 10,
                  'quota': 400,
                  'couponType': 2,
                  'couponLimitInfo': '限自营好丽友、盼盼品牌部分饼干类商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': true
              }
        }
    },
    methods:{
        immediateUse(datas){
            console.log('立即使用,数据如下：' + JSON.stringify(datas));
        }
    }
}`,
            demo41: `export default {
    data(){
        return{
            beanData: {
                  'id': 4,
                  'discount': 10,
                  'quota': 400,
                  'couponType': 1,
                  'couponLimitInfo': '限自营好丽友、盼盼品牌部分饼干类商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': false
              }
        }
    },
    methods:{
        immediateUse(datas){
            console.log('立即使用,数据如下：' + JSON.stringify(datas));
        }
    }
}`,
            demo51: `export default {
    data(){
        return{
            beanData: {
                  'id': 3,
                  'discount': 10,
                  'quota': 400,
                  'couponType': 2,
                  'couponLimitInfo': '限自营好丽友商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': true
              }
        }
    },
    methods:{
        switchUse(datas, isChecked) {
            console.log('是否选中：' + isChecked);
        }
    }
}`,
            demo61: `export default {
    data(){
        return{
            beanData: {
                  'id': 3,
                  'discount': 10,
                  'quota': 400,
                  'couponType': 2,
                  'couponLimitInfo': '限自营好丽友商品',
                  'beginTime': '2015.07.07',
                  'endTime': '2015.07.07',
                  'isUsed': true
              }
        }
    },
    methods:{
        switchUse(datas, isChecked) {
            console.log('是否选中：' + isChecked);
        }
    }
}`
        }
    },
    methods:{
        immediateUse(datas){
            console.log('立即使用,数据如下：' + JSON.stringify(datas));
        },
        switchUse(datas, isChecked) {
            console.log('是否选中：' + isChecked);
        }
    }
}
</script>

<style>
</style>
