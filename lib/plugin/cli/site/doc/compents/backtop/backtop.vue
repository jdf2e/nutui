<template>
	<div :class="['nut-backtop', { show: backTop }]" :style="styles" @click="goto">
		<slot>
			<div class="nut-backtop-main"></div>
		</slot>
	</div>
</template>
<script>
export default {
	name: 'nut-backtop',
	props: {
		distance: {
			type: Number,
			default: 200,
		},
		bottom: {
			type: Number,
			default: 20,
		},
		right: {
			type: Number,
			default: 10,
		},
		duration: {
			type: Number,
			default: 1000,
		},
		zIndex: {
			type: Number,
			default: 1111,
		},
	},
	data() {
		return {
			backTop: false,
		};
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll, false);
		window.addEventListener('resize', this.handleScroll, false);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll, false);
		window.removeEventListener('resize', this.handleScroll, false);
	},
	computed: {
		styles() {
			return {
				bottom: `${this.bottom}px`,
				right: `${this.right}px`,
				'z-index': this.zIndex,
			};
		},
	},
	methods: {
		handleScroll() {
			this.backTop = window.pageYOffset >= this.distance;
		},
		goto() {
			const sTop = document.documentElement.scrollTop || document.body.scrollTop;
			this.scrollTop(window, sTop, 0, this.duration);
			this.$emit('click');
		},
		scrollTop(el, from = 0, to, duration = 500, endCallback) {
			this.el = el;
			let lastTime = 0;
			let vendors = ['webkit', 'moz'];
			for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
			}

			if (!window.requestAnimationFrame) {
				window.requestAnimationFrame = function (callback, element) {
					let currTime = new Date().getTime();
					let timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
					let id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			}
			if (!window.cancelAnimationFrame) {
				window.cancelAnimationFrame = function (id) {
					clearTimeout(id);
				};
			}
			const difference = Math.abs(from - to);
			const step = Math.ceil((difference / duration) * 50);

			this.scroll(from, to, step, endCallback);
		},
		scroll(start, end, step, endCallback) {
			if (start === end) {
				endCallback && endCallback();
				return;
			}

			let d = start + step > end ? end : start + step;
			if (start > end) {
				d = start - step < end ? end : start - step;
			}
			if (this.el === window) {
				window.scrollTo(d, d);
			} else {
				this.el.scrollTop = d;
			}
			window.requestAnimationFrame(() => this.scroll(d, end, step));
		},
	},
};
</script>
