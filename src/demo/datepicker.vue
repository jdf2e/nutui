<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>
        <p>默认不选择日期</p>
        <div class="data-picker" @click="openDatePicker">{{dateParams.curDate}}</div>
        <nut-datepicker :params="dateParams" :is-fold="isFold" @confirm="confirm" @cancel="cancel" v-if="isFold"></nut-datepicker>
        <p>有默认选择日期和设定了开始结束日期范围</p>
        <div class="data-picker" @click="openDatePicker1">{{dateParams1.curDate}}</div>
        <nut-datepicker :params="dateParams1" :is-fold="isFold1" @confirm="confirm1" @cancel="cancel1" v-if="isFold1"></nut-datepicker>
        <p>默认不选择日期, 不存在确认取消按钮</p>
        <div class="data-picker" @click="openDatePicker2">{{dateParams2.curDate}}</div>
        <nut-datepicker :params="dateParams2" :is-fold="isFold2" :is-confirm-btn="isConfirmBtn" @confirm="confirm2" @cancel="cancel2" v-if="isFold2"></nut-datepicker>
    </div>
</template>
<script>

export default {
    data(){
        return{
            isFold: false,
            isFold1: false,
            isFold2: false,
            isConfirmBtn: false,
            dateParams: {
                curDate: '请选择日期'
            },
            dateParams1: {
                curDate: '2018-01-27',
                minDate: '2018-01-24',
                maxDate: '2018-07-26'
            },
            dateParams2: {
                curDate: '请选择日期'
            }
        }
    },
    computed:{

    },
    methods:{
        openDatePicker(){
            this.isFold = true;
        },

        openDatePicker1(){
            this.isFold1 = true;
        },

        openDatePicker2(){
            this.isFold2 = true;
        },

        cancel() {
            this.isFold = false;
        },

        confirm(params) {
            this.dateParams.curDate = params.year + '-' + params.month + '-' + params.day;
            this.cancel();
        },

        cancel1() {
            this.isFold1 = false;
        },

        confirm1(params) {
            this.dateParams1.curDate = params.year + '-' + params.month + '-' + params.day;
            this.cancel1();
        },

        cancel2() {
            this.isFold2 = false;
        },

        confirm2(params) {
            this.dateParams2.curDate = params.year + '-' + params.month + '-' + params.day;
            this.cancel2();
        }
    }
}
</script>

<style>

.data-picker{
    height: 20px;
    width: 100px;
    padding: 5px 10px;
    border: 1px solid #eee;
    border-radius: 3px;
    line-height: 20px;
    color: #666;
    font-size: 0.24rem;
}
</style>
