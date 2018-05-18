<template>
    <div>
        <!-- <h1>DatePicker</h1>
        <p>一种弹窗日历组件。</p> -->
        <nut-docheader
        :name="$route.name"
        :chName="$route.params.chnName"
        type="Component"
        desc="日期弹窗选择组件。"
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <!-- <a class="button button-primary" href="/demo.html#/DatePicker" target="_blank">Demo</a> -->
        <h6>默认不选择日期</h6>
        <nut-codebox :code="demo1" :imgUrl="['../asset/img/demo/datepicker1.png']"></nut-codebox>
        <nut-codebox :code="demo11"></nut-codebox>
        <h6>有默认选择日期和设定了开始结束日期范围</h6>
        <nut-codebox :code="demo2" :imgUrl="['../asset/img/demo/datepicker2.png']"></nut-codebox>
        <nut-codebox :code="demo21"></nut-codebox>
        <h6>默认不选择日期, 不存在确认取消按钮</h6>
        <nut-codebox :code="demo3" :imgUrl="['../asset/img/demo/datepicker3.png']"></nut-codebox>
        <nut-codebox :code="demo31"></nut-codebox>
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
              <td>isFold</td>
              <td>是否默认展开日历</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>isConfirmBtn</td>
              <td>是否有确认取消按钮面板</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>dateParams</td>
              <td>传入日历规则参数</td>
              <td>Object</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>dateParams.maxDate</td>
              <td>可指定结束日期</td>
              <td>String</td>
              <td>null</td>
              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>dateParams.curDate</td>
              <td>指定默认选择日期，小于开始日期会修改开始日期</td>
              <td>String</td>
              <td>null</td>
              <td>yyyy-mm-dd</td>
            </tr>
            <tr>
              <td>dateParams.minDate</td>
              <td>可指定开始日期</td>
              <td>String</td>
              <td>null</td>
              <td>yyyy-mm-dd</td>
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
              <td>confirm</td>
              <td>点击确认按钮时触发或无按钮面板时选中日期触发</td>
              <td>--</td>
            </tr>
            <tr>
              <td>cancel</td>
              <td>点击取消按钮时触发</td>
              <td>年月日对象</td>
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
          dateParams: {

          },
          demo1:`<nut-datepicker
  :params="dateParams"
  :is-fold="isFold"
  @confirm="confirm"
  @cancel="cancel"
  v-if="isFold">
</nut-datepicker>`,
        demo2: `<nut-datepicker
  :params="dateParams"
  :is-fold="isFold"
  @confirm="confirm"
  @cancel="cancel"
  v-if="isFold">
</nut-datepicker>`,
        demo3: `<nut-datepicker
  :params="dateParams"
  :is-fold="isFold"
  :is-confirm-btn="isConfirmBtn"
  @confirm="confirm"
  @cancel="cancel"
  v-if="isFold">
</nut-datepicker>`,
        demo11: `export default {
    data(){
        return{
            isFold: false,
            dateParams: {
                curDate: '请选择日期'
            },
        }
    },
    methods:{
        openDatePicker(){
            this.isFold = true;
        },
        cancel() {
            this.isFold = false;
        },

        confirm(params) {
            this.dateParams.curDate = params.year + '-' + params.month + '-' + params.day;
            this.cancel();
        }
    }
}`,
        demo21: `export default {
    data(){
        return{
            isFold: false,
            dateParams: {
                curDate: '2018-01-12',
                minDate: '2018-01-08',
                maxDate: '2018-01-26'
            }
        }
    },
    methods:{
        openDatePicker(){
            this.isFold = true;
        },

        cancel() {
            this.isFold = false;
        },

        confirm(params) {
            this.dateParams.curDate = params.year + '-' + params.month + '-' + params.day;
            this.cancel();
        }
    }
}`,
        demo31: `export default {
    data(){
        return{
            isFold: false,
            isConfirmBtn: false,
            dateParams: {
                curDate: '请选择日期'
            }
        }
    },
    methods:{
        openDatePicker(){
            this.isFold = true;
        },

        cancel() {
            this.isFold = false;
        },

        confirm(params) {
            this.dateParams.curDate = params.year + '-' + params.month + '-' + params.day;
            this.cancel();
        }
    }
}`
        }
    },
    methods:{
    }
}
</script>

<style>

</style>
