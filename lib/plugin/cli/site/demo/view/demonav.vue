<template>
	<div class="demo-nav" v-if="showFlag">
		<div class="goback" @click="goback">
			<b class="go-btn"></b>
		</div>
		<div class="title">{{ title }}</div>
		<a class="home" :href="'https://github.com/jdf2e/nutui/tree/master/src/packages/' + title.toLowerCase() + '/demo.vue'"></a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showPath: '',
		};
	},
	methods: {
		goback() {
			location.href = './demo.html#/index';
			// if (self != top || history.length===1) {
			//     this.$router.push('./index');
			// }else{
			//    history.back();
			//}
		},
	},
	computed: {
		showFlag() {
			if (this.showPath == '/index') {
				return false;
			} else {
				return true;
			}
		},
		title() {
			return this.showPath.substring(1);
		},
		hrefUrl() {
			return './demo.html#' + this.showPath;
		},
	},
	watch: {
		$route: {
			immediate: true,
			handler: function (to, from) {
				this.showPath = to.path;
				//document.documentElement.scrollTop = document.body.scrollTop = 0;
			},
		},
	},
	mounted() {},
};
</script>

<style>
.demo-nav {
	width: 100%;
	height: 40px;
	background-color: #f8f8f8;
	border-bottom: 1px solid #eee;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 8px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	box-sizing: border-box;
}
.goback {
	cursor: pointer;
	width: 45px;
	height: 40px;
	display: flex;
	align-items: center;
}
.go-btn {
	display: block;
	width: 26px;
	height: 26px;
	background: url("data:image/svg+xml, %3Csvg class='icon' width='200' height='200' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb(153,153,153)' d='M959.39 527.762c0 23.128-18.419 41.874-41.138 41.874-12.336 0-23.277-5.64-30.818-14.394L541.09 202.729a40.629 40.629 0 0 0-58.18 0L237.802 452.204c2.878 5.636 4.654 11.927 4.654 18.69v165.477c0 .328-.089.635-.097.961h.298v163.004c0 23.126 18.506 41.872 41.337 41.872h82.569v-164.47c0-22.85 18.52-41.368 41.369-41.368h206.844c22.848 0 41.369 18.518 41.369 41.369 0 22.846-18.52 41.369-41.37 41.369H449.3v165.474c0 22.427-17.875 40.583-40.142 41.246v.122h-146.01c-57.116 0-103.418-46.864-103.418-104.678v-183.94h.085c-.006-.327-.097-.634-.097-.962V531.68l-23.163 23.576c-7.542 8.745-18.476 14.38-30.808 14.38-22.719 0-41.139-18.746-41.139-41.874 0-11.862 4.896-22.52 12.688-30.141l-.237-.242L439.275 128.71c40.164-40.88 105.286-40.88 145.45 0l361.57 368.011-.3.306c8.18 7.653 13.395 18.536 13.395 30.735zM614.734 842.207c.443 0 .854.12 1.294.132v-.132h122.683c22.83 0 41.338-18.746 41.338-41.872V637.33h.534c-.016-.496-.145-.961-.145-1.464 0-23.126 18.417-41.874 41.139-41.874 22.72 0 41.137 18.748 41.137 41.874 0 .503-.126.968-.146 1.464h.406v183.94c0 57.813-46.3 104.679-103.419 104.679H616.026v-.132c-.44.014-.852.132-1.294.132-22.72 0-41.14-18.744-41.14-41.87.003-23.124 18.422-41.873 41.142-41.873z'/%3E%3C/svg%3E")
		no-repeat center;
	background-size: contain;
}
.title {
	flex: 1;
	font-size: 16px;
	text-align: center;
	font-weight: bold;
	line-height: 40px;
}
.home {
	display: inline-block;
	width: 24px;
	height: 100%;
	text-decoration: none;
	color: #000;
	padding-left: 20px;
	background: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgb(153,153,153)' %3E%3Cpath d='M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82A7.672 7.672 0 0 1 8 4.066c.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384A8 8 0 0 0 8.001.196z'/%3E%3C/svg%3E")
		no-repeat center;
	background-size: 100% auto;
	background-origin: content-box;
}
</style>
