<template>
    <div class="demo-list">
        <h4>基本用法</h4>
        <nut-cell :showIcon="true">
            <span slot="title"><label>日期选择</label></span>
            <span slot="sub-title">没有默认日期~~~</span>
            <div slot="desc" class="selected-option" >
                <span class="show-value"  @click="switchPicker('isVisible')">{{date ? `${date} ${dateWeek}` : '请选择日期'}}</span>
            </div>
        </nut-cell>
        <nut-cell :showIcon="true">
            <span slot="title"><label>日期选择</label></span>
            <span slot="sub-title">有默认日期，选择后自动回填的~~~</span>
            <div slot="desc" class="selected-option" >
                <span class="show-value"  @click="switchPicker('isVisible2')">{{date2 ? date2 : '请选择日期'}}</span>
            </div>
        </nut-cell>
        <nut-cell :showIcon="true">
            <span slot="title"><label>日期区间选择</label></span>
            <span slot="sub-title">有默认日期~~~</span>
            <div slot="desc" class="selected-option" >
                <span class="show-value"  @click="switchPicker('isVisible1')">{{date1 ? `${date1[0]}至${date1[1]}`  : '请选择日期'}}</span>
            </div>
        </nut-cell>
        <nut-cell :showIcon="true">
            <span slot="title"><label>日期区间选择</label></span>
            <span slot="sub-title">不限制开始结束时间~~~</span>
            <div slot="desc" class="selected-option" >
                <span class="show-value"  @click="switchPicker('isVisible3')">{{date3 ? `${date3[0]}至${date3[1]}`  : '请选择日期'}}</span>
            </div>
        </nut-cell>
        <!-- demo-->
        <nut-calendar :is-visible="isVisible"
            :default-value="date"
            @close="switchPicker('isVisible')"
            @choose="setChooseValue"
            :start-date="`2018-10-11`"
            :end-date="`2019-11-11`"
        >
        </nut-calendar>
        <nut-calendar :is-visible="isVisible2"
            :default-value="date2"
            :is-auto-back-fill="true"
            @close="switchPicker('isVisible2')"
            @choose="setChooseValue2"
        >
        </nut-calendar>
        <nut-calendar :is-visible="isVisible1"
            :default-value="date1"
            type="range"
            @close="switchPicker('isVisible1')"
            @choose="setChooseValue1"
        >
        </nut-calendar>
        <nut-calendar :is-visible="isVisible3"
            :default-value="date3"
            type="range"
            :start-date="null"
            :end-date="null"
            @close="switchPicker('isVisible3')"
            @choose="setChooseValue3"
        >
        </nut-calendar>
    </div>
</template>

<script>
import nutcell from "../cell/cell.vue";
import nutcalendar from "../calendar/calendar.vue";
import "../cell/cell.scss";
import "../calendar/calendar.scss";
export default {
    components: {
        [nutcell.name]: nutcell,
        [nutcalendar.name]: nutcalendar
    },
    data() {
        return {
            isVisible: false,
            isVisible1: false,
            isVisible2: false,
            isVisible3: false,
            date: null,
            dateWeek: null,
            date1: ['2018-12-22', '2019-01-08'],
            date2: '2018-11-22',
            date3: null
            
        };
    },
    methods: {
       switchPicker(param) {
            this[`${param}`] = !this[`${param}`];
        },
        setChooseValue(param) {
            this.date = param[3];
            this.dateWeek = param[4];
        },
        setChooseValue1(param) {
            this.date1 = [...[param[0][3],param[1][3]]];
        },
        setChooseValue2(param) {
            this.date2 = param[3];
        },
        setChooseValue3(param) {
            this.date3 = [...[param[0][3],param[1][3]]];
        },
        setChooseValue4(param) {
            
        },
        setChooseValue5(param) {
            
        } 
    }
};
</script>

<style lang="scss" scoped>

</style>
