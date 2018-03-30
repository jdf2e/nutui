<template>
    <div class="nut-datepicker nut-datepicker-red">
    	<nut-popup :popupVisible="isFold" :configItems="popupParams" @cancel-btn-click="cancel" @ok-btn-click="confirm" @close-popup="cancel">
			<div class="nut-datepicker-wrap">
				<div class="nut-datepicker-header">
					<div class="nut-datepicker-year">
						<em @click="switchYear('prev')">&lt;</em>
						<span>{{swtichDateParams.year}}年</span>
						<em @click="switchYear('next')">&gt;</em>
					</div>
					<div class="nut-datepicker-months">
						<em @click="switchMonth('prev')">&lt;</em>
						<span>{{swtichDateParams.month}}月</span>
						<em @click="switchMonth('next')">&gt;</em>
					</div>
				</div>
				<div class="nut-datepicker-week">
					<span v-for="week of weekArr">{{week}}</span>
				</div>
				<!-- <nut-swiper
		            :pagination-visible="false"
		            :stopAutoPlay="true"
		            :autoPlay= "false"
		            :loop="true"
		            direction="horizontal"
		            @slideChangeStart="slideChange"
		            ref="picker"> -->
		            <div class="nut-datepicker-days nut-swiper-silde">
						<div class="nut-datepicker-item">
							<template v-for="obj of currMonthData">
								<span :class="[obj.type, {'active': obj.active}]" @click="chooseDays(obj);">{{obj.day}}</span>
							</template>
						</div>
					</div>
					<!-- <div class="nut-datepicker-days nut-swiper-silde">
						<div class="nut-datepicker-item">
							<template v-for="obj of currMonthData">
								<span :class="[obj.type, {'active': obj.active}]" @click="chooseDays(obj);">{{obj.day}}#{{test}}</span>
							</template>
						</div>
					</div>
		        </nut-swiper> -->
			</div>
    	</nut-popup>
    </div>
</template>
<script>
import Vue from 'vue';
import popup from './../../popup/index.js';
//import swiper from './../../swiper/index.js';
import Utils from './utils.js';
popup.install(Vue);
export default {
    name:'nut-datepicker',
    props: {
		'params':{
            type: Object,
            default: null
        },
        'isFold': {
            type: Boolean,
            default: false
        },
        'isConfirmBtn': {
        	type: Boolean,
            default: true
        },
    },
    data() {
        return {
        	popupParams: {
        		popupHeaderVisible: false,
        		popupFooterVisible: this.isConfirmBtn,
        		hasCloseBtn: false,
        		cancelAutoClose: false,
              	btnAmount: 2,
              	autoClose: false,
              	popupHeight: {
                	height: this.isConfirmBtn ? '6.36rem' : '5.5rem',
               },
        	},
        	weekArr: ['日', '一', '二', '三', '四', '五', '六'],
        	curDate: null,
        	currDateParams: {},
        	swtichDateParams: {},
        	currMonthData:[]
        };
    },
    methods: {
    	breakUpDate() {
    		let _this = this;
    		/*let currDate = /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/.test(_this.params.curDate) ? _this.params.curDate : Utils.date2Str(new Date());
    		if(_this.params.minDate && Utils.compareDate(currDate, _this.params.minDate)) {
    			currDate = _this.params.minDate;
    		}
    		if(_this.params.maxDate && Utils.compareDate(_this.params.maxDate, currDate)) {
    			currDate = _this.params.maxDate;
    		}*/
    		let currDate = /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/.test(_this.params.curDate) ? _this.params.curDate : null;
    		currDate && (_this.curDate = currDate);
    		currDate = currDate ? new Date(currDate) : new Date();
			_this.currDateParams.year = _this.swtichDateParams.year = currDate.getFullYear();
			_this.currDateParams.month = _this.swtichDateParams.month =  currDate.getMonth() + 1;
			_this.currDateParams.day = _this.swtichDateParams.day =  currDate.getDate();
			_this.initRenderMonth();
    	},

    	initRenderMonth() {
    		let _this = this;
    		let preMonthRemainDays = Utils.getMonthFirstDay(_this.swtichDateParams.year, _this.swtichDateParams.month);
    		let currMonthDays = Utils.getMonthDays(_this.swtichDateParams.year, _this.swtichDateParams.month);
    		let nextMonthDays = 42 - preMonthRemainDays -currMonthDays;
    		let currMonthData = [];
    		let preMonthDays = 0;

    		// 获取上一个月的天数
    		if(_this.swtichDateParams.month == 1) {
    			preMonthDays = Utils.getMonthDays((_this.swtichDateParams.year - 1), 12);
    		} else {
    			preMonthDays = Utils.getMonthDays(_this.swtichDateParams.year, (_this.swtichDateParams.month - 1));
    		}

			// 上个月
            for (let i = (preMonthDays - preMonthRemainDays); i < preMonthDays; i++) {
                currMonthData.push({'type': 'prev', 'day': i + 1, 'active': false});
            }

            // 当前月
            for (let i = 1; i <= currMonthDays; i++) {
            	var dateline = _this.swtichDateParams.year + '-' + Utils.getNumTwoBit(this.swtichDateParams.month) + '-' + i;
            	if((_this.params.minDate && Utils.compareDate(dateline, _this.params.minDate)) || (_this.params.maxDate && Utils.compareDate(_this.params.maxDate, dateline))) {
					currMonthData.push({'type': 'prev', 'day': i, 'active': false});
            	} else {
            		var isActive = (dateline == _this.curDate) ? true : false;
            		currMonthData.push({'type': 'cur', 'day': i, 'active': isActive});
            	}

            }

            // 下个月
            for (let i = 1; i <= nextMonthDays; i++) {
                currMonthData.push({'type': 'next', 'day': i, 'active': false});
            }

            _this.currMonthData.splice(0);
            _this.currMonthData = [..._this.currMonthData, ...currMonthData];
    	},

    	switchYear(params, isSlideChange) {
            let _this = this;
			switch(params) {
				case 'prev':
					_this.swtichDateParams.year = _this.swtichDateParams.year == 1 ? _this.swtichDateParams.year: -- _this.swtichDateParams.year;
					_this.initRenderMonth();
					//!isSlideChange && _this.$refs.picker.prev();
					break;
				case 'next':
					++ _this.swtichDateParams.year;
					_this.initRenderMonth();
					//!isSlideChange && _this.$refs.picker.next();
					break;
			}
    	},

    	switchMonth(params, isSlideChange) {
			let _this = this;
			switch(params) {
				case 'prev':
					//!isSlideChange && _this.$refs.picker.prev();
					if (_this.swtichDateParams.month == 1) {
						_this.swtichDateParams.month = 12;
						_this.switchYear('prev', isSlideChange);
					} else {
						-- _this.swtichDateParams.month;
						_this.initRenderMonth();
					}
					break;
				case 'next':
					//!isSlideChange && _this.$refs.picker.next();
					if (_this.swtichDateParams.month == 12) {
						_this.swtichDateParams.month = 1;
						_this.switchYear('next', isSlideChange);
					} else {
						++ _this.swtichDateParams.month;
						_this.initRenderMonth();
					}
					break;
			}
    	},

    	slideChange(number, el, type) {
    		let _this = this;
    		switch(type) {
    			case 'prev':
    				_this.switchMonth('prev', true);
    				break;
    			case 'next':
    				_this.switchMonth('next', true);
    				break;
    		}
    	},

    	chooseDays(params) {
    		let _this = this;
			if (params.type != 'cur' || params.active) {
				return false;
			}
			for (let obj of _this.currMonthData) {
				obj.active = false;
			}
			params.active = !params.active;
			_this.currDateParams.year = _this.swtichDateParams.year;
			_this.currDateParams.month = Utils.getNumTwoBit(_this.swtichDateParams.month);
			_this.currDateParams.day = params.day;
			!this.isConfirmBtn && this.confirm();
    	},

    	cancel() {
            this.$emit('cancel');
        },

        confirm() {
        	this.$emit('confirm', this.currDateParams);
        }
    },

    created(){
    	this.breakUpDate();
    }
}
</script>
<style lang="scss">
.nut-popup-cancel{
	background-color: #ddd !important;
}
.nut-popup-content{
    display: flex;
    height: 100%;
}
.nut-datepicker-red{
	.nut-datepicker-year, .nut-datepicker-months, .nut-datepicker-week{
		color: #e4393c;
	}
	.nut-datepicker-week{
		border-color: #e4393c;
	}
}

.nut-datepicker-wrap{
    flex: 1;
}
.nut-datepicker-header{
	padding-top: 0.1rem;
	height: 0.6rem;
}
.nut-datepicker-year, .nut-datepicker-months{
	float: left;
	display: flex;
	width: 50%;
	font-size: 0.28rem;
	em{
		height: 0.4rem;
		padding: 0.1rem 0.2rem;
		font-size: 0.36rem;
		font-style: normal;
		line-height: 0.36rem;
	}
	span{
		flex: 1;
		height: 0.4rem;
		padding: 0.1rem 0.2rem;
		color: #666;
		text-align: center;
		line-height: 0.4rem;
	}
}
.nut-datepicker-week{
	display: flex;
	padding: 0.2rem 0 0.1rem;
	height: 0.4rem;
	border-bottom: 1px solid #e4393c;
	text-align: center;
	font-size: 0.28rem;
	span{
		flex: 1;
	}
}
.nut-datepicker-days{
	padding: 0.2rem 0;
}
.nut-datepicker-item{
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	height: 0.6rem;
	line-height: 0.6rem;
	font-size: 0.24rem;
	color: #ccc;
	span{
		width: 14.28%;
	}
	.cur{
		color: #666;
	}
	.active{
		color: #fff;
		background-color: #e4393c;
	}
}
</style>