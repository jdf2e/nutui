<template>
	<div class="demo-list-wrapper">
		<a href="https://github.com/jdf2e/nutui/" target="_blank" class="github-btn">Github</a>

		<h1 class="logo"></h1>
		<div class="version">NutUI {{ version }}</div>
		<p>一套京东风格的移动端Vue组件库</p>
		<div :class="['demo-list-box', { unfold: foldStatus[item] }]" v-for="item in sorts" :key="item">
			<h4 @click="toggleFold(item)">
				{{ oriSorts[item] }}
				<i></i>
			</h4>
			<ul>
				<template v-for="cpt in packages">
					<li v-if="cpt.showDemo !== false && cpt.sort == item" :key="cpt.name">
						<a :href="'./demo.html#/' + cpt.name">
							{{ cpt.name }}
							<span>{{ cpt.chnName }}</span>
							<nut-rate class="cpt-rec" v-if="cpt.star" :total="5" :value="cpt.star" :size="8" :spacing="3" :readOnly="true"></nut-rate>
						</a>
					</li>
				</template>
			</ul>
		</div>
		<div id="demo-footer">京东用户体验设计部（JDC） · 前端开发部 · v{{ version }}</div>
	</div>
</template>

<script>
import { version } from '@/../package.json';
import { packages, sorts } from '@/config.json';
export default {
	name: 'index',
	data() {
		return {
			path: '',
			packages: {},
			version,
			sortedPackages: [],
			oriSorts: [],
			sorts: [1, 2, 0, 3, 4, 5, 6],
			foldStatus: [],
		};
	},
	methods: {
		// showCode(){
		//     this.$dialog({
		//       type:"image",
		//       link:"",
		//       imgSrc:"https://img14.360buyimg.com/imagetools/s350x350_jfs/t1/23439/7/11643/155926/5c90d554E7f03c831/bd45cd0ee2daa2fa.jpg.dpg",
		//       onClickImageLink(){
		//         return false;  //返回false可阻止默认的链接跳转行为
		//       }
		//     });
		// },
		toggleFold(idx) {
			this.foldStatus.splice(idx, 1, !this.foldStatus[idx]);
			sessionStorage.setItem('foldStatus', JSON.stringify(this.foldStatus));
		},
	},
	created() {
		this.packages = packages;
		this.oriSorts = sorts;

		this.foldStatus = Array(this.sorts.length)
			.join(',')
			.split(',')
			.map(function (key, index) {
				return 0;
			});
	},
	activated() {
		const seVal = sessionStorage.getItem('foldStatus');
		if (seVal && seVal !== 'false') {
			this.foldStatus = JSON.parse(seVal);
		}
	},
};
</script>

<style lang="scss" scoped>
.demo-list-wrapper {
	#demo-footer {
		font-size: 10px;
		color: #bbb;
		text-shadow: 1px 1px #fff;
		text-align: center;
		margin: 10px 0;
	}
	position: relative;
	padding: 8px;
	box-sizing: border-box;
	.github-btn {
		position: absolute;
		top: -25px;
		right: 10px;
		height: 26px;
		width: 26px;
		font-size: 0;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 16 16' version='1.1' width='24' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' fill='rgb(150,150,150)' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'%3E%3C/path%3E%3C/svg%3E")
			no-repeat;
		&:hover,
		&:active {
			opacity: 0.7;
		}
	}
	.logo {
		background: url(../asset/img/logo.png) no-repeat;
		background-size: contain;
		height: 100px;
		width: 100px;
		text-align: center;
		margin: 5px auto 15px;
		animation: swing 2.5s;
	}
	.version {
		text-align: center;
		font-size: 24px;
	}
	p {
		text-align: center;
		color: #848484;
		margin: 20px 0 30px;
	}
}

.demo-list-box {
	margin: 15px auto;
	width: 95%;
	background: #fff;
	border-radius: 5px;
	overflow: hidden;
	h4 {
		position: relative;
		margin: 0;
		height: 50px;
		font-weight: normal;
		line-height: 50px;
		padding: 0 15px;
		&:active {
			background-color: rgba(200, 200, 200, 0.1);
		}
		i {
			position: absolute;
			right: 15px;
			top: 50%;
			margin-top: -5px;
			height: 10px;
			width: 10px;
			transform: rotate(0deg);
			background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgb(132,132,132)' viewBox='0 0 30 11'%3E%3Cpath d='M15 7.757L27.737.21a1.5 1.5 0 0 1 1.53 2.58c-4.5 2.668-9 5.334-13.5 8a1.503 1.503 0 0 1-1.53 0c-4.5-2.666-9-5.332-13.5-8A1.5 1.5 0 1 1 2.266.21C6.51 2.726 10.756 5.24 15 7.757' fill-rule='evenodd'/%3E%3C/svg%3E")
				no-repeat center;
			background-size: contain;
			transition: transform 0.3s;
		}
	}
	&.unfold {
		h4 i {
			transform: rotate(-180deg);
		}
		ul {
			display: block;
		}
	}
	ul {
		display: none;
		padding: 0 5px;
	}
	li {
		margin: 0 5px;
		overflow: hidden;
		border-top: 1px solid #edeef1;
		border-radius: 2px;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 30'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-11 0h30v30h-30z'/%3E%3Cpath d='M7.757 15C5.241 10.755 2.727 6.51.21 2.266A1.5 1.5 0 0 1 2.79.736l8 13.499c.28.472.28 1.058 0 1.53l-8 13.5a1.499 1.499 0 1 1-2.58-1.53L7.757 15z' fill='rgb(132,132,132)' /%3E%3C/g%3E%3C/svg%3E")
			no-repeat right 10px center;
		background-size: 10px 10px;
		a {
			display: flex;
			align-items: center;
			height: 100%;
			padding: 20px 10px 20px 10px;
			text-decoration: none;
			color: #2e2d2d;
		}
		span {
			margin-left: 10px;
			font-size: 14px;
			color: #848484;
		}
		&:active {
			background-color: rgba(200, 200, 200, 0.1);
		}
	}
}
ul,
li {
	list-style: none;
	margin: 0;
	padding: 0;
}
.cpt-rec {
	display: inline-flex;
	margin-left: 5px;
}
@-webkit-keyframes swing {
	from {
		-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
		transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
		opacity: 0;
	}
	40% {
		-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -40deg);
		transform: perspective(400px) rotate3d(0, 1, 0, -40deg);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	60% {
		-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 25deg);
		transform: perspective(400px) rotate3d(0, 1, 0, 25deg);
		opacity: 1;
	}
	80% {
		-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -10deg);
		transform: perspective(400px) rotate3d(0, 1, 0, -10deg);
	}
	to {
		-webkit-transform: perspective(400px);
		transform: perspective(400px);
	}
}
</style>
