
<template lang="html">
	<div class="yo-scroll" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
		<div class="scroll-container" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }" >
			<header class="pull-refresh" :style="{marginTop: -pullH + 'px'}">
				<span v-show="state === -1 || state === 0">{{refreshText}}</span>
				<span v-show="state === 1">{{freedRefreshText}}</span>
				<span v-show="state === 2">
					<slot name="refresh">
						<svg data-v-ecaca2b0="" viewBox="0 0 64 64" class="spinner" style="fill: rgb(170, 170, 170); stroke: rgb(170, 170, 170); width: 30px"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
					</slot>
				</span>
			</header>
			<section class="inner" ref="scroller">
				<slot></slot>
			</section>
			<footer class="load-more">
				<div v-show="state === 3 && !noMore">
					<slot name="load-more">
						<svg data-v-ecaca2b0="" viewBox="0 0 64 64" class="spinner" style="fill: rgb(170, 170, 170); stroke: rgb(170, 170, 170); width: 30px"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
					</slot>
				</div>
				<div class="no-more" v-show="loaded && noMore">{{noDataText}}</div>
			</footer>
		</div>
	</div>
</template>
<script>
	/*
	state各个状态
		-1: 默认
	下拉刷新	
		0: 开始拉动
		1: 到达下拉刷新的距离值
		2: 松开下拉，正在刷新
	上拉加载更多
		3: 加载中
	没有更多
	*/
	export default {
		name: 'nut-scroller',
		props: {
			// 触发下拉刷新的阈值
			offset: {
				type: Number,
				default: 100 //默认高度
			},
			// 是否开启上拉加载，默认开启
			enableInfinite: {
				type: Boolean,
				default: true
			},
			// 是否开启下拉刷新
			enableRefresh: {
				type: Boolean,
				default: true
			},
			// 下拉刷新执行的函数
			onRefresh: {
				type: Function,
				default: undefined,
				required: false
			},
			// 加载更多执行的函数
			onInfinite: {
				type: Function,
				default: undefined,
				require: false
			},
			// 没有更多数据时的提示语
			noDataText: {
				type: String,
				default: '没有更多数据了',
				require: false
			},
			// 下拉刷新提示
			refreshText: {
				type: String,
				default: '下拉刷新',
				require: false
			},
			// 释放下拉提示语
			freedRefreshText: {
				type: String,
				default: '松开刷新数据',
				require: false
			}
		},
		data() {
			return {
				top: 0, // 控制inner元素的top偏移值
				state: -1, // 控制加载的状态
				startY: 0, // touch事件的开始位置
				prevTop: 0, // touch事件开始时候inner元素的top值
				fetching: false, // 是否正在进行刷新或者加载
				noMore: false, // 是否还有更多数据
				loaded: false, // 是否进行过加载更多操作
				moveY: 0, // touch过程中y方向移动的距离
				innerH: 0, // inner元素的高度值
				pullH: 0, // pull-refresh元素的高度值
			}
		},
		mounted () {
			this.pullH = this.$el.querySelector('.pull-refresh').clientHeight;
			this.innerH = this.$el.querySelector('.inner').clientHeight;
			this.outerH = this.$el.clientHeight;
			this.noMore = this.innerH < this.outerH ? true : false;
		},
		methods: {
			touchStart(e) {
				e.preventDefault();
				this.startY = e.targetTouches[0].pageY;
				this.prevTop = this.top;
			},
			touchMove(e) {
				e.preventDefault();
				if(this.fetching) return;
				let moveY = e.targetTouches[0].pageY - this.startY;
				if (moveY > 0 && this.top >= 0  && !this.enableRefresh) return;
				if (this.innerH < this.outerH && moveY < 0) return;
				let _top = moveY + this.prevTop;
				let isBottom = Math.abs(_top) + this.outerH > this.innerH ? true : false;
				this.top = _top;
				this.moveY = moveY;
				if (moveY > 0) {
					this.state = _top >= this.offset ? 1 : 0
				} else {
					if (!isBottom || this.noMore) return; 
					if (!this.enableInfinite) return;
					this.top = this.outerH - this.innerH;
					this.infinite();
				}
			},
			touchEnd(e) {
				if(this.fetching || this.top === 0) return;
				// !this.enableRefresh
				let _top = this.top;
				let _normalEndTop = this.outerH - this.innerH;
				let isBottom = Math.abs(_top) + this.outerH > this.innerH ? true : false;
				// if (_top > 0) 
				// 如果满足下拉刷新的条件
				if (_top >= this.offset) {
					this.top = this.pullH;
					this.refresh();
					return
				}
				// 如果是上拉，但是还没到达底部
				if (_top < 0 && !isBottom) return;
				// 如果是满足上拉加载更多的距离
				if (_top < 0 && isBottom) {
					// 没有更多了
					if (this.noMore || !this.enableInfinite || this.fetching) {
						this.top = _normalEndTop;
						this.state = -1;
						return;
					} 
					// 还有更多
					this.top = _normalEndTop 
					this.infinite();
					return;
				} 
				// 下拉了，但没到刷新的条件
				this.state = -1;
				this.top = 0;
			},
			refresh() {
				this.state = 2;
				this.fetching = true;
				this.checkError(this.onRefresh);
				this.onRefresh(this.refreshDone);
			},
			refreshDone() {
				this.state = -1;
				this.top = 0;
				this.loaded = false;
				this.fetching = false;
				this.$nextTick(() => {
					this.innerH = this.$el.querySelector('.inner').clientHeight;
					this.noMore = this.innerH < this.outerH ? true : false;
				})
			},
			infinite() {
				this.state = 3;
				this.fetching = true;
				this.checkError(this.onInfinite);
				this.onInfinite(this.infiniteDone);
			},
			infiniteDone() {
				this.loaded = true;
				this.fetching = false;
				this.$nextTick(() => {
					let innerHeight = this.$el.querySelector('.inner').clientHeight;
					let hasLoad = this.innerH < innerHeight ? true : false;
					this.innerH = innerHeight;
					if (!hasLoad) {
						this.noMore = true;
						this.$nextTick(() => {
							this.top = this.outerH - innerHeight;
						})
					}
				})
			},
			checkError(fn) {
				if (typeof fn !== 'function') {
					throw new Error('参数错误')
				}
			}
		}
	}
</script>
<style lang="scss">
.yo-scroll {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 100;
    height: auto;
    -webkit-overflow-scrolling: touch;
	
		.pull-refresh, .load-more {
			width: 100%;
			display: flex;
			text-align: center;
			align-items: center;
			justify-content: center;
			span {
				line-height: 40px;
			}
		}
		.no-more {
			text-align: center;
			line-height: 30px;
			font-size: 14px;
		}
		
}
</style>