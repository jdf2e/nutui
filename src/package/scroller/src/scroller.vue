
<template lang="html">
	<div class="yo-scroll" 
		@touchstart="touchStart($event)" 
		@touchmove="touchMove($event)" 
		@touchend="touchEnd($event)"
		@mousedown="mouseDown($event)"
    @mousemove="mouseMove($event)"
    @mouseup="mouseUp($event)"
		>
		<div class="scroll-container" >
			<header :class="['pull-refresh', enableRefresh ? 'active' : '' ]" :style="{marginTop: -pullH + 'px'}">
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
			<footer :class="['load-more', enableInfinite ? 'active' : '']">
				<div v-show="state === 3 && hasMore">
					<slot name="load-more">
						<svg data-v-ecaca2b0="" viewBox="0 0 64 64" class="spinner" style="fill: rgb(170, 170, 170); stroke: rgb(170, 170, 170); width: 30px"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
					</slot>
				</div>
				<div class="no-more" v-show="!hasMore">{{noDataText}}</div>
			</footer>
			
		</div>
	</div>
</template>
<script>
	import Scroller from './module/scroller.js'
	import containerAnimate from './module/animate.js'
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
				state: -1, // 控制加载的状态
				hasMore: true, // 是否还有更多数据
				pullH: 0, // pull-refresh元素的高度值
				scroller: null,
				content: null,
				mousedown: false
			}
		},
		mounted () {
			this.init()
		},
		methods: {
			init() {
				this.hasMore = true
				this.pullH = this.$el.querySelector('.pull-refresh').clientHeight
				let loadH = this.$el.querySelector('.load-more').clientHeight
				let outerH = this.$el.clientHeight
				let content = this.$el.querySelector('.scroll-container')
				let innerContent = this.$el.querySelector('.inner')
				let animate = containerAnimate(content)
				this.scroller = new Scroller(animate, {
					pullH: this.pullH,
					loadH: loadH,
					outerH: outerH,
					offset: this.offset,
					innerContent: innerContent,
					enableInfinite: this.enableInfinite,
					enableRefresh: this.enableRefresh
				})
				if (this.onRefresh) {
					this.scroller.initPullToRefresh(() => {
						this.state = 0
					}, () => {
						this.state = 1
					}, () => {
						this.state = 2
						this.refresh()
					})
				}
				if (this.onInfinite) {
					this.scroller.initPullToInfinite(() => {
						this.state = 3
						this.$nextTick(() => {
							this.infinite()
						})
					})
				}
			},

			touchStart(e) {
				this.scroller.doTouchStart(e.targetTouches)
			},
			touchMove(e) {
				this.scroller.doTouchMove(e.targetTouches)
			},
			touchEnd(e) {
				this.$nextTick(() => {
					this.scroller.doTouchEnd(e.changedTouches)
				})
			},

			mouseDown(e) {
				this.scroller.doTouchStart([{
					pageX: e.pageX,
          pageY: e.pageY
				}])
        this.mousedown = true
      },
      mouseMove(e) {
        if (!this.mousedown) return
        
        this.scroller.doTouchMove([{
          pageX: e.pageX,
          pageY: e.pageY
        }])
        this.mousedown = true
      },
      mouseUp(e) {
        if (!this.mousedown) return
        this.scroller.doTouchEnd(e)
        this.mousedown = false
      },

			refresh() {
				this.checkError(this.onRefresh);
				this.scroller.startRefresh()
				this.onRefresh(this.refreshDone);
			},
			refreshDone() {
				this.state = -1
				this.scroller.finishedRefesh()
				this.init()
			},
			infinite() {
				this.checkError(this.onInfinite);
				this.onInfinite(this.infiniteDone);
			},
			infiniteDone(hasMore) {
				this.state = -1 
				this.hasMore = hasMore
				this.scroller.finishedInfinite(hasMore)
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
			height: 60px;
			display: none;
			text-align: center;
			align-items: center;
			justify-content: center;
			span {
				line-height: 40px;
			}
			&.active {
				display: flex;
			}
		}
		.no-more {
			text-align: center;
			line-height: 30px;
			font-size: 14px;
		}
		.no-more {
			text-align: center;
			line-height: 30px;
			font-size: 14px;
		}
		
}
</style>