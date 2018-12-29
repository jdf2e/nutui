<template>
    <nut-picker :is-visible="isVisible" 
        :title="title"
        :list-data="listData"
        :default-value-data="defaultValueData"
        :custom-class-name="`nut-datepicker`"
        @close="switchPicker('isVisible')"
        @confirm="setChooseValue"
        @choose="updateChooseValue"
        @close-update="closeUpdateChooseValue"
    >
    </nut-picker>
</template>
<script>
import nutpicker from "../picker/picker.vue";
import "../picker/picker.scss";
import Utils from "../../utils/date.js";

export default {
    name:'nut-datepicker',
    props: {
        type: {
            type: String,
            default: 'date'
        },
        isVisible: {
            type: Boolean,
            default: true
        },
        isUse12Hours: {
            type: Boolean,
            default: false
        },
        isAm: {
            type: Boolean,
            default: true
        },
        minuteStep: {
            type: Number,
            default: 1
        },
        isShowChinese: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: null
        },
        defaultValue: {
            type: String,
            default: null
        },
        startDate: {
            type: String,
            default: '2000-01-01'
        },
        endDate: {
            type: String,
            default: Utils.date2Str(new Date())
        },
        startHour: {
            type: Number|String,
            default: 0
        },
        endHour: {
            type: Number|String,
            default: 23
        }
    },
    data() {
        return {
            listData: [],
            defaultValueData: null,
            startDateArr: null,
            endDateArr: null,
            startYear: null,
            endYear: null,
            cacheDefaultData: [],
            cacheListData: [],
            updateYear: null,
            use12Hours: ['上午', '下午'], 
            chinese: !this.isShowChinese ? new Array(5).fill('') : this.type == 'time' ? ['时', '分', ''] : ['年', '月', '日', '时', '分']
        };
    },
    components: {
        [nutpicker.name]: nutpicker
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            // 结束时间小于开始时间，结束时间重置为开始时间
            if (Utils.compareDate(this.endDate, this.startDate)) {
                this.endDate = this.startDate;
            }
            this.startDateArr = this.startDate.replace(/-/g, '/').split('/');
            this.endDateArr = this.endDate.replace(/-/g, '/').split('/');
            this.initListData();
        },

        initListData() {
            this.resetDefaultValue();
            switch (this.type) {
                case 'date': 
                    this.cacheListData = [...[this.getYears(), this.getMonths(this.defaultValueData[0]), this.getDays(this.defaultValueData[0], this.defaultValueData[1])]];
                    break;
                case 'datetime': 
                    this.cacheListData = [...[this.getYears(), this.getMonths(this.defaultValueData[0]), this.getDays(this.defaultValueData[0], this.defaultValueData[1]), this.getHours(), this.getMinutes()]];
                    break;
                case 'time': 
                    this.cacheListData = [...[this.getHours(), this.getMinutes()]];
                    if (this.isUse12Hours) {
                        this.cacheListData = [...this.cacheListData, this.use12Hours];
                    }
                    break;
            }            
            this.listData = [...this.cacheListData]; 
        },

        resetDefaultValue() {
            let cacheDefaultValue = null;
            if (!this.defaultValue) { 
                switch (this.type) {
                    case 'time': 
                        cacheDefaultValue = `00:00`;
                        break;
                    case 'date': 
                    case 'datetime': 
                        cacheDefaultValue = `${this.startDateArr[0]}-${this.startDateArr[1]}-${this.startDateArr[2]} 00:00`;
                        break;
                }
            } else {
                cacheDefaultValue = this.defaultValue;
            }

            let splitArr = cacheDefaultValue.split(' ');
            if (this.type === 'time') {
                let timeArr = splitArr[0].split(':');
                this.isUse12Hours && (timeArr.push(this.isAm ? this.use12Hours[0] : this.use12Hours[1]))
                this.cacheDefaultData = this.getCacheData(timeArr);
            } else {
                let cacheData = [...splitArr[0].replace(/-/g, '/').split('/')];
                if (this.type == 'datetime') {
                    cacheData = [...cacheData, ...splitArr[1].split(':')];
                }
                this.cacheDefaultData = this.getCacheData(cacheData);  
                this.updateYear =  this.cacheDefaultData[0];  
            }
            this.defaultValueData = [...this.cacheDefaultData];
        },

        getCacheData(data) {
            let cacheData = [];
            data.map((item, index) => {
                (item < 10) && (item = item.replace(/^0/g, ''));
                cacheData.push((`${item}${this.chinese[index]}`));
            });
            return cacheData;
        },

        getYears() {
            let cacheYears = [];
            for (var i = this.startDateArr[0]; i <= this.endDateArr[0]; i++) {
                cacheYears.push(`${i}${this.chinese[0]}`);
            }
            return cacheYears;
        },

        getMonths(year) {
            year = this.removeChinese(year);
            let cacheMonths = [];
            for (var i = 1; i <= 12; i++) {
                if (!(year == this.startDateArr[0] &&  i < this.startDateArr[1]) &&  !(year == this.endDateArr[0] &&  i > this.endDateArr[1]) ){
                     cacheMonths.push(`${i}${this.chinese[1]}`);
                }
            }
            return cacheMonths;
        },

        getDays(year, month) { 
            year = this.removeChinese(year);
            month = this.removeChinese(month);
            let days =  Array.from(Array(Utils.getMonthDays(year, month)), (v,k) => {
                if (!(year == this.startDateArr[0] && month == this.startDateArr[1] && (k + 1) < this.startDateArr[2])
                && !(year == this.endDateArr[0] && month == this.endDateArr[1] && (k + 1) > this.endDateArr[2]) ){
                    return `${k + 1}${this.chinese[2]}`;
                }
            });
            return days.filter(item => item);
        },

        getHours() {
            let endHour = this.endHour;
            if (this.isUse12Hours) {
                endHour = 11;
            }
            let hours =  Array.from(Array(parseInt(endHour) + 1), (v,k) => {
                if (this.isUse12Hours && k == 0) {
                    k = 12;
                }
                if (k >= this.startHour) {
                    return `${k}${this.type=='time' ? this.chinese[0] : this.chinese[3]}`;
                }
            });
            return hours.filter(item => item);
        },
        getMinutes() {
            let minutes = Array.from(Array(60), (v,k) => {
                if (k == 0 || k % this.minuteStep == 0) {
                    return `${k}${this.type=='time' ? this.chinese[1] : this.chinese[4]}`;
                }
            });
            return minutes.filter(item => item);
        },

        setChooseValue(chooseData) {
            let cacheChooseData = [];
            chooseData.map((item , index) => {
                if (this.isUse12Hours && this.type == 'time' && index == 2) {
                    cacheChooseData.push(item);
                } else {
                    cacheChooseData.push(Utils.getNumTwoBit(this.removeChinese(item)));
                }
            });
            if (/^date/.test(this.type)) {
                switch(this.type) {
                    case 'date':
                        cacheChooseData.push(`${cacheChooseData[0]}-${cacheChooseData[1]}-${cacheChooseData[2]}`);
                        break;
                    case 'datetime':
                        cacheChooseData.push(`${cacheChooseData[0]}-${cacheChooseData[1]}-${cacheChooseData[2]} ${cacheChooseData[3]}:${cacheChooseData[4]}`);
                        break;
                }
                let week = Utils.getWhatDay(cacheChooseData[0], cacheChooseData[1], cacheChooseData[2]);
                cacheChooseData.push(week);
            } else {
                cacheChooseData.push(`${cacheChooseData[0]}:${cacheChooseData[1]}`);
            }
            this.$emit('choose', cacheChooseData)
        },

        removeChinese(value) {
            return value.toString().replace(/([^\u0000-\u00FF])/g, '');
        },

        updateLinkage(self, index, value, chooseValue, cacheValueData) {
            if (!value || !cacheValueData[index] || this.type == 'time') {
                return false;
            }
            value = this.removeChinese(value);
            switch (index) {
                case 1:
                    this.updateYear = value;
                    this.listData.splice(index, 1, this.getMonths(value));
                    chooseValue = chooseValue ? chooseValue : cacheValueData[index];
                    let curMonthsData = this.listData[index];
                    if (curMonthsData.indexOf(chooseValue) === -1) {
                        chooseValue = curMonthsData[0];
                    }
                    self && self.updateChooseValue(self, index, chooseValue);
                    this.updateLinkage(self, 2, cacheValueData[index], null, cacheValueData)
                    break;
                case 2:
                    this.listData.splice(index, 1, this.getDays(parseInt(this.updateYear), value));
                    chooseValue = chooseValue ? chooseValue : cacheValueData[index];
                    let curDaysData = this.listData[index];
                    if (curDaysData.indexOf(chooseValue) === -1) {
                        if (curDaysData.length < 28) {
                            chooseValue = curDaysData[0];
                        } else { 
                            let curChooseDay = parseInt(this.removeChinese(chooseValue));
                            let days = curDaysData.length;
                            chooseValue = (curChooseDay > days ? days : curChooseDay) + this.chinese[2];
                        }
                    }
                    
                    self && self.updateChooseValue(self, index, chooseValue);
                    break;
            }
        },

        updateChooseValue(self, index, value, cacheValueData) {
            switch (index) {
                case 0:
                case 1:
                    this.updateLinkage(self, (index + 1), value, null, cacheValueData);
                    break;
            }
        },

        closeUpdateChooseValue(self, chooseData) {
            this.updateLinkage(self, 1, chooseData[0], chooseData[1], chooseData);
        },

        switchPicker(param) {
            this.$emit('close');
        }
    }
}
</script>