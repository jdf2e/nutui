<template>
    <transition :name="animation">
        <div class="nut-calendar" v-show="childIsVisible">
            <div class="nut-calendar-control">
                <span class="nut-calendar-confirm-btn" @click="confirm" v-if="(type == 'range' && currDate && currDate.length == 2) || type != 'range'">{{nutTranslate('lang.okBtnTxt')}}</span>
                <span class="nut-calendar-cancel-btn"  @click="closeActionSheet">{{nutTranslate('lang.cancelBtnTxt')}}</span>
                <div class="nut-calendar-title">{{title || nutTranslate('lang.calendar.title')}}</div>
                <div class="nut-calendar-week">
                    <span v-for="(item, index) of week" :key="index">{{item}}</span>
                </div>
            </div>
            <div class="nut-calendar-months" @touchstart.stop="touchStart" @touchmove.stop.prevent="touchMove" @touchend.stop="touchEnd">
                <div class="nut-calendar-months-panel"  ref="months">
                    <div class="nut-calendar-loading-tip">{{!unLoadPrev ? nutTranslate('lang.calendar.loadPrevMonth') : nutTranslate('lang.calendar.noMoreMonth')}}</div>
                    <div class="nut-calendar-month"  v-for="(month, index) of monthsData " :key="index">
                        <div class="nut-calendar-month-title">{{month.title}}</div>
                        <div class="nut-calendar-month-con">
                            <div class="nut-calendar-month-item">
                                <template v-for="(day, i) of  month.monthData" >
                                    <div class="nut-calendar-month-day" :class="getClass(day, month)" :key="i" @click="chooseDay(day, month)">
                                        <span>{{day.type == 'curr' ? day.day : ''}}</span>
                                        <span class="nut-calendar-day-tip" v-if="isStartTip(day, month)">{{nutTranslate('lang.calendar.start')}}</span>
                                        <span class="nut-calendar-day-tip" v-else-if="isEndTip(day, month)">{{nutTranslate('lang.calendar.end')}}</span>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import Utils from "../../utils/date.js";
import locale from "../../mixins/locale";
export default {
    name:'nut-calendar',
    mixins: [locale],
    props: {
        type: {
            type: String,
            default: 'one'
        },
        animation: {
            type: String,
            default: 'nutSlideUp'
        },
        isAutoBackFill: {
            type: Boolean,
            default: false
        },
        isOpenRangeSelect: {
            type: Boolean,
            default: false
        },
        isVisible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String
        },
        defaultValue: {
            type: String | Array,
            default: null
        },
        startDate: {
            type: String,
            //default: null
            default: Utils.getDay(0)
        },
        endDate: {
            type: String,
            //default: null
            default: Utils.getDay(365)
        },
    },
    watch:{
        isVisible(newValue,oldValue){
            this.childIsVisible = newValue;
        }
    },
    data() {
        const week = this.nutTranslate('lang.calendar.week');
        return {
            childIsVisible: false,
            currDate: null,
            week: week.split(','),
            unLoadPrev: false,
            unLoadNext: false,
            touchParams: {
                startY: 0, 
                endY: 0, 
                startTime: 0, 
                endTime: 0
            },
            transformY: 0,
            scrollDistance: 0,
            defaultData: null,
            startData: this.startDate ? this.splitDate(this.startDate) : null,
            endData: this.endDate ? this.splitDate(this.endDate) : null,
            chooseData: [],
            monthsData: [],
            dayPrefix: 'nut-calendar-month-day'
        };
    },
    computed: {
        isRange: function() {
            return this.type === 'range';
        }
    },
    methods: {
        isActive(day, month) {
            return  this.isRange && day.type == 'curr' && this.getClass(day, month) == 'nut-calendar-month-day-active';
        },

        isStartTip(day, month) {
            if (this.isActive(day, month)) {
                return this.isStart(this.getCurrDate(day, month));
            } else {
                return false;
            }
        },

        isEndTip(day, month) {
           return this.isActive(day, month);
        },

        getCurrData(type) {
            let monthData = type == 'prev' ? this.monthsData[0] : this.monthsData[this.monthsData.length - 1];
            let year = parseInt(monthData.curData[0]);
            let month = parseInt(monthData.curData[1].toString().replace(/^0/, ''));
			switch(type) {
                case 'prev':
                    month == 1 && (year -= 1);
                    month = month == 1 ? 12 : --month;
					break;
                case 'next':
                    month == 12 && (year += 1);
					month = month == 12 ? 1 : ++month;
					break;
            }
            return [year, Utils.getNumTwoBit(month), monthData.curData[2]];
        },

        getDaysStatus(days, type) {
            // 修复：当某个月的1号是周日时，月份下方会空出来一行
            if (type == 'prev' && days >= 7) {
                days -= 7;
            }  
            return Array.from(Array(days), (v,k) => { 
                return {
                    day: (k + 1),
                    type: type
                }
            });
        },
        
        getMonth(curData, type) {
            
            let preMonthDays = Utils.getMonthPreDay(curData[0], curData[1]);
            let currMonthDays = Utils.getMonthDays(curData[0], curData[1]);
            let nextMonthDays = 42 - preMonthDays - currMonthDays;
            let title = this.nutTranslate('lang.calendar.monthTitle', {year: curData[0], month: curData[1]});
            let monthInfo = {
                curData: curData,
                title: title,
                monthData: [...this.getDaysStatus(preMonthDays, 'prev'), ...this.getDaysStatus(currMonthDays, 'curr')]
            };
            if (type == 'next') {
                if (!this.endData || !Utils.compareDate(`${this.endData[0]}-${this.endData[1]}-${Utils.getMonthDays(this.endData[0], this.endData[1])}`, `${curData[0]}-${curData[1]}-${curData[2]}`)) {
                    this.monthsData.push(monthInfo);
                } else {
                    this.unLoadNext = true;
                }   
            } else {
                if (!this.startData || !Utils.compareDate(`${curData[0]}-${curData[1]}-${curData[2]}`, `${this.startData[0]}-${this.startData[1]}-01`)) {
                    this.monthsData.unshift(monthInfo);
                } else {
                    this.unLoadPrev = true;
                }
            }
        },

        getCurrDate(day, month, isRange) {
            return isRange ? month.curData[3] + '-' + month.curData[4] + '-' + Utils.getNumTwoBit(day.day) :  month.curData[0] + '-' + month.curData[1] + '-' + Utils.getNumTwoBit(day.day);
        },

        isStart(currDate) {
            return Utils.isEqual(this.currDate[0], currDate);
        },
        
        isEnd(currDate) {
            return  Utils.isEqual(this.currDate[1], currDate);
        },

        splitDate(date) {
            return date.split('-');
        },

        getClass(day, month, isRange) {
            let currDate = this.getCurrDate(day, month, isRange);
            if (day.type == 'curr') {
                if ((!this.isRange && Utils.isEqual(this.currDate, currDate)) || (this.isRange && (this.isStart(currDate) || this.isEnd(currDate)))) {
                    return `${this.dayPrefix}-active`;
                } else if (( this.startDate && Utils.compareDate(currDate, this.startDate)) || (this.endDate && Utils.compareDate(this.endDate, currDate))) {
                    return `${this.dayPrefix}-disabled`;
                } else if(this.isRange & this.currDate.length == 2  && Utils.compareDate(this.currDate[0], currDate) && Utils.compareDate(currDate, this.currDate[1])) {
                    return `${this.dayPrefix}-choose`;
                } else {
                    return null;
                }
            } else {
                return `${this.dayPrefix}-disabled`;
            }
        },

        chooseDay(day, month, isFirst, isRange) {
            if (this.getClass(day, month, isRange) != `${this.dayPrefix}-disabled`) {
                let days = [...month.curData];
                days = isRange ? days.splice(3) : days.splice(0,3);
                days[2] = typeof day.day == 'number' ? Utils.getNumTwoBit(day.day) : day.day;
                days[3] = `${days[0]}-${days[1]}-${days[2]}`;
                days[4] = Utils.getWhatDay(days[0], days[1], days[2]);
                if (!this.isRange) {
                    this.currDate = days[3];
                    this.chooseData = [...days];
                } else {
                    if (this.currDate.length == 2) {
                        this.currDate = [days[3]];
                    } else {
                        if (Utils.compareDate(this.currDate[0], days[3])) {
                            this.currDate.push(days[3]);
                        } else {
                            this.currDate.unshift(days[3]);
                        }
                    }
                    if (this.chooseData.length == 2 || !this.chooseData.length) {
                        this.chooseData = [...days];
                    } else {
                        if (Utils.compareDate(this.chooseData[3], days[3])) {
                            this.chooseData = [[...this.chooseData], [...days]];
                        }  else {
                            this.chooseData = [[...days], [...this.chooseData]];
                        }
                    }  
                }
                if (this.isAutoBackFill && !isFirst) {
                    this.confirm();
                }
            }
        },

        confirm() {
            if ((this.isRange && this.chooseData.length == 2) || !this.isRange) {
                this.$emit('choose', this.chooseData);  
                this.childIsVisible = false;
                this.$emit('update:is-visible', false);
            }
        },

        resetRender() {
            this.chooseData.splice(0);
            this.monthsData.splice(0);
            this.scrollDistance = 0;
            this.translateY = 0;
            this.setTransform(this.scrollDistance);
            this.initData();
        },

        closeActionSheet() {
            this.childIsVisible = false;
            this.$emit('update:is-visible', false);
            this.$emit('close');
            this.resetRender();
        },

        touchStart(event) {
            let changedTouches = event.changedTouches[0];
            this.touchParams.startY = changedTouches.pageY;
            this.touchParams.startTime = event.timestamp || Date.now();
            this.transformY = this.scrollDistance;
        },

        touchMove(event) {
            //event.preventDefault();
            let changedTouches = event.changedTouches[0];
            this.touchParams.lastY = changedTouches.pageY;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastY - this.touchParams.startY;
            if (Math.abs(move) < 5) {
                return false;
            }
            this.setMove(move);
        },

        touchEnd(event) {
            let changedTouches = event.changedTouches[0];
            this.touchParams.lastY = changedTouches.pageY;
            this.touchParams.lastTime = event.timestamp || Date.now();
            let move = this.touchParams.lastY - this.touchParams.startY;
            if (Math.abs(move) < 5) {
                return false;
            }
            let updateMove = move + this.transformY;
            let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            let offsetHeight = this.$refs.months.offsetHeight;
            if (updateMove > 0) {
                this.getMonth(this.getCurrData('prev'), 'prev');
            } else if (updateMove < -offsetHeight + h * 2) {
                this.getMonth(this.getCurrData('next'), 'next');
                if (Math.abs(move) >= 300) {
                    this.getMonth(this.getCurrData('next'), 'next');
                }
            }

            let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
            if (moveTime <= 300) {
                move = move * 2;
                moveTime = moveTime + 1000;
                this.setMove(move, 'end', moveTime);
            } else {
                this.setMove(move, 'end');
            }
        },

        setTransform(translateY = 0, type, time = 1000) {
            if (type === 'end') {
                
                this.$refs.months.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
                //this.$refs.months.style.transition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
            } else {
                this.$refs.months.style.webkitTransition = '';
                //this.$refs.months.style.transition = '';
            }
            
            this.$refs.months.style.webkitTransform = `translateY(${translateY}px)`;
            //this.$refs.months.style.transform = `translateY(${translateY}px)`;
            this.scrollDistance = translateY;
        },

        setMove(move, type, time) {
            let updateMove = move + this.transformY;
            let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            
            let offsetHeight = this.$refs.months.offsetHeight;
            if (type === 'end') {
                // 限定滚动距离
                if (updateMove > 0) {
                    updateMove = 0;
                }
                if (updateMove < 0 && updateMove < -offsetHeight + h - 70) {
                    updateMove = -offsetHeight + h - 70;
                }
                if (offsetHeight <= h && this.monthsData.length == 1) {
                    updateMove = 0;
                }
                let endMove = updateMove;
                this.setTransform(endMove, type, time);
            } else {
                if (updateMove > 0 && updateMove > 100) {
                    updateMove = 100;
                }
                if (updateMove < -offsetHeight + h - 170 && this.monthsData.length > 1) {
                    updateMove = -offsetHeight + h -170;
                }
                if (updateMove < 0 && updateMove < - 100 && this.monthsData.length == 1) {
                    updateMove = -100;
                }
                this.setTransform(updateMove);
            }
        },

        initData() {
            if (!this.defaultValue) {
                this.currDate = this.isRange ? [Utils.date2Str(new Date()), Utils.getDay(2)] : Utils.date2Str(new Date());
            } else {
                this.currDate = this.isRange ? [...this.defaultValue] : this.defaultValue;
            }

            if (this.isRange) {
                if (this.startDate && Utils.compareDate(this.currDate[0], this.startDate)) {
                    this.currDate.splice(0, 1, this.startDate);
                }
                if (this.endDate && Utils.compareDate(this.endDate, this.currDate[1])) {
                    this.currDate.splice(1, 1, this.endDate);
                }
                this.defaultData = [...this.splitDate(this.currDate[0]), ...this.splitDate(this.currDate[1])];
            } else {
                if (this.startDate && Utils.compareDate(this.currDate, this.startDate)) {
                    this.currDate = this.startDate;
                } else if (this.endDate && !Utils.compareDate(this.currDate, this.endDate)) {
                    this.currDate = this.endDate;
                }
                this.defaultData = [...this.splitDate(this.currDate)];
            }
            
            this.getMonth(this.defaultData, 'next');

            let i = 1;
            do {
                this.getMonth(this.getCurrData('next'), 'next');
            } while (i++ < 4);

            if (this.isRange) {
                this.chooseDay({'day': this.defaultData[2], 'type': 'curr'}, this.monthsData[0], true);
                this.chooseDay({'day': this.defaultData[5], 'type': 'curr'}, this.monthsData[0], true, true);
            } else {
                this.chooseDay({'day': this.defaultData[2], 'type': 'curr'}, this.monthsData[0], true);
            }
        }
    },

    mounted() {
        this.initData();
    }
}
</script>