<template>
    <div class="nut-datepicker nut-datepicker-red" ref="datepicker">
    	<nut-popup :popupVisible="isFold" :configItems="popupParams" @cancel-btn-click="cancel" @ok-btn-click="confirm" @close-popup="cancel">
			<div class="nut-datepicker-wrap">
				<div class="nut-datepicker-header">
					<div class="nut-datepicker-year">
						<em @click="switchYear('prev')" class="nut-datepicker-year-prev">
							<svg>
								<use xlink:href="#arrow-back" />
							</svg>
						</em>
						<span>{{swtichDateParams.year}}年</span>
						<em @click="switchYear('next')" class="nut-datepicker-year-next">
							<svg>
								<use xlink:href="#arrow-back" />
							</svg>
						</em>
					</div>
					<div class="nut-datepicker-months">
						<em @click="switchMonth('prev')" class="nut-datepicker-months-prev">
							<svg>
								<use xlink:href="#arrow-back" />
							</svg>
						</em>
						<span>{{swtichDateParams.month}}月</span>
						<em @click="switchMonth('next')"  class="nut-datepicker-months-next">
							<svg>
								<use xlink:href="#arrow-back" />
							</svg>
						</em>
					</div>
				</div>
				<div class="nut-datepicker-week">
					<span v-for="week of weekArr">{{week}}</span>
				</div>
				<div class="nut-datepicker-days" :style="{'width': width}">
					<div class="nut-datepicker-panel"
						:style="{
		                    'transform':'translate3d(' + translateX + '%, 0, 0)',
		                    'transition-duration':transitionDuration+'ms',
		                    '-webkit-transform':'translate3d(' + translateX + '%, 0, 0)',
		                    '-webkit-transition-duration':transitionDuration+'ms'
		                }">
			            <div class="nut-datepicker-silde"
			            	:style="{'width': width}"
			            	@touchstart="touchStart($event, 1)"
			            	@touchmove="touchMove($event, 1)"
			            	@touchend="touchEnd($event, 1)"
			            >
							<div class="nut-datepicker-item">
								<template v-for="obj of currMonthData">
									<span :class="[obj.type, {'active': obj.active}]" @click="chooseDays(obj);">{{obj.day}}</span>
								</template>
							</div>
						</div>
						<div class="nut-datepicker-silde"
							:style="{'width': width}"
			            	@touchstart="touchStart($event, 2)"
			            	@touchmove="touchMove($event, 2)"
			            	@touchend="touchEnd($event, 2)"
			            >
							<div class="nut-datepicker-item">
								<template v-for="obj of currMonthData">
									<span :class="[obj.type, {'active': obj.active}]" @click="chooseDays(obj);">{{obj.day}}</span>
								</template>
							</div>
						</div>
						<div class="nut-datepicker-silde"
						    :style="{'width': width}"
			            	@touchstart="touchStart($event, 3)"
			            	@touchmove="touchMove($event, 3)"
			            	@touchend="touchEnd($event, 3)"
			            >
							<div class="nut-datepicker-item">
								<template v-for="obj of currMonthData">
									<span :class="[obj.type, {'active': obj.active}]" @click="chooseDays(obj);">{{obj.day}}</span>
								</template>
							</div>
						</div>
					</div>
				</div>
			</div>
    	</nut-popup>
    </div>
</template>
<script>
import Vue from 'vue';
import popup from './../../popup/index.js';
import Utils from './utils.js';
import arrowIcon from '../../../asset/img/svg/arrow-back.svg';
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
        	width: '7.5rem',
        	curDate: null,
        	currDateParams: {},
        	swtichDateParams: {},
        	currMonthData:[],
        	translateX: -33.3,
        	transitionDuration: 200
        };
    },
    methods: {
    	updateWidth() {
			this.width = document.documentElement.clientWidth + 'px';
    	},

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
					break;
				case 'next':
					++ _this.swtichDateParams.year;
					_this.initRenderMonth();
					break;
			}
    	},

    	switchMonth(params, isSlideChange) {
			let _this = this;
			switch(params) {
				case 'prev':
					if (_this.swtichDateParams.month == 1) {
						_this.swtichDateParams.month = 12;
						_this.switchYear('prev', isSlideChange);
					} else {
						-- _this.swtichDateParams.month;
						_this.initRenderMonth();
					}
					break;
				case 'next':
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
			_this.currDateParams.day = Utils.getNumTwoBit(params.day);
			!this.isConfirmBtn && this.confirm();
    	},

    	cancel() {
            this.$emit('cancel');
        },

        confirm() {
        	this.$emit('confirm', this.currDateParams);
        },


        touchStart(e, index){
			this.startX = e.targetTouches[0].pageX;
			this.startY = e.targetTouches[0].pageY;
		},

		touchMove(e, index){
			this.endX = e.changedTouches[0].pageX;
			this.endY = e.changedTouches[0].pageY;
			let dy = this.endY - this.startY;
            let dx = this.endX - this.startX;
            if ((Math.abs(dx) > Math.abs(dy))) {
		        e.preventDefault();
		     }
        },

		touchEnd(e, index){
			let _this = this;
			this.endX = e.changedTouches[0].pageX;
			this.endY = e.changedTouches[0].pageY;
			let dy = this.endY - this.startY;
            let dx = this.endX - this.startX;


			if (dx > 20 &&  Math.abs(dx) > 20) {
				if( Math.abs(this.translateX) == '66.6') {
					this.transitionDuration = 0;
					this.translateX = 0;
				}
				setTimeout(function() {
					_this.switchMonth('prev');
					_this.transitionDuration = 200;
				    _this.translateX = index < 3 ? -33.3 * index : -33.3;
				}, 0);

			} else if (dx < -20 && Math.abs(dx) > 20) {
				if( Math.abs(this.translateX) == '0') {
					this.transitionDuration = 0;
					this.translateX = -66.6;
				}
				setTimeout(function() {
					_this.switchMonth('next');
					_this.transitionDuration = 200;
				    _this.translateX = index > 1 ? 33.3 * (2-index) : -33.3;
				}, 0);
			}
		}
    },

    created(){
    	this.breakUpDate();
    },

    mounted() {
        this.updateWidth()
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
	height: 0.8rem;
	svg{
		height: 0.25rem;
    	width: 0.25rem;
		color:#F23030;
	}
	.nut-datepicker-months-next,.nut-datepicker-year-next{
		svg{
			transform:rotate(180deg);
		}
	}
}
.nut-datepicker-year, .nut-datepicker-months{
	float: left;
	display: flex;
	width: 50%;
	font-size: 0.28rem;
	em{
		height: 0.4rem;
		font-size: 0.4rem;
		font-style: normal;
		line-height: 0.36rem;
		&.nut-datepicker-months-next{
			padding: 0.2rem 0.2rem 0.2rem 0.5rem;
		}
		&.nut-datepicker-year-prev{
			padding: 0.2rem 0.5rem 0.2rem 0.2rem;
		}
		&.nut-datepicker-months-prev, &.nut-datepicker-year-next{
			padding: 0.2rem 0.5rem;
		}
	}
	span{
		flex: 1;
		height: 0.4rem;
		padding: 0.2rem;
		color: #666;
		text-align: center;
		line-height: 0.4rem;
	}
}
.nut-datepicker-week{
	display: flex;
	padding: 0.1rem 0;
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
	height: 3.6rem;
	width: 7.5rem;
	background-color: #fff;
	overflow: hidden;
	.nut-datepicker-silde{
		width: 7.5rem;
		flex: 1;
	}
	.nut-datepicker-silde, .nut-datepicker-panel{
		height: 100%;
	}
	.nut-datepicker-panel{
		width: 22.5rem;
		display: flex;
		flex-direction: row;
		transition-timing-function: ease-in;
	}
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