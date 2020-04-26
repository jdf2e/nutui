<template>
	<div class="main-menu lt-nv">
		<div class="left-nav-fixed">
			<ol class="nav-l-1">
				<dt>指南</dt>
				<dd :class="curName == 'intr' ? 'l-1 curs' : 'l-1'">
					<a href="#/intro">介绍</a>
				</dd>
				<dd :class="curName == 'fastStart' ? 'l-1 curs' : 'l-1'">
					<a href="#/start">快速上手</a>
				</dd>
				<dd :class="curName == 'theme' ? 'l-1 curs' : 'l-1'">
					<a href="#/theme">主题定制</a>
				</dd>
				<dd :class="curName == 'international' ? 'l-1 curs' : 'l-1'">
					<a href="#/international">国际化</a>
				</dd>
				<dd :class="curName == 'update' ? 'l-1 curs' : 'l-1'">
					<a href="https://github.com/jdf2e/nutui/releases" target="_blank">更新日志</a>
				</dd>
			</ol>
			<ol class="cplist">
				<dt>组件</dt>
				<dd
					class="l-1"
					@click="selectNav(nameObj.name)"
					:class="cur.indexOf(nameObj.name) > -1 && 'cur'"
					v-for="(nameObj, index) in sortedPackages"
					:key="index"
				>
					<div class="l-c-i">
						<span>{{ nameObj.name }}</span>
						<i class="pt"></i>
					</div>
					<ul class="l-2" v-if="cur.indexOf(nameObj.name) > -1">
						<template v-for="cpt in nameObj.ary">
							<li v-on:click.stop="listCheck(cpt)" :class="curName == cpt.name ? 'curs' : ''" :key="cpt.name" v-if="cpt.showDemo">
								<router-link :to="{ name: cpt.name }">
									{{ cpt.name }}
									<span>{{ cpt.chnName }}</span>
								</router-link>
							</li>
						</template>
					</ul>
				</dd>
			</ol>
		</div>
	</div>
</template>
<script>
import { sorts, packages } from '@/config.json';
import { version } from '@/../package.json';
export default {
	name: 'index',
	data() {
		return {
			path: '',
			packages: {},
			sortedPackages: [],
			cur: [],
			curName: '',
			version: version,
		};
	},

	watch: {
		packages() {
			// const compare = (obj1, obj2) => {
			//   const val1 = obj1.name;
			//   const val2 = obj2.name;
			//   if (val1 < val2) {
			//     return -1;
			//   } else if (val1 > val2) {
			//     return 1;
			//   } else {
			//     return 0;
			//   }
			// };
			let that = this;
			let tempAry = [];
			let temp = {};
			let sorts = this.sorts;
			let sortArys = [...this.packages];
			sortArys.map((item) => {
				let name = sorts[item.sort];
				if (!temp[name]) {
					temp[name] = [];
				}
				temp[name].push(item);
			});
			for (let key in temp) {
				tempAry.push({
					name: key,
					ary: temp[key],
				});
			}
			let routeName = this.$route.name;
			this.sortedPackages = tempAry;
			tempAry.map((list) => {
				let showParentNode = false;
				list.ary.map((ary) => {
					if (ary.name == routeName) {
						showParentNode = true;
					}
				});
				if (showParentNode) {
					that.cur.push(list.name);
				}
			});
		},
		$route: 'fetchData',
	},
	methods: {
		fetchData(obj) {
			let that = this;
			this.curName = obj.name;
			let sortedPackages = this.sortedPackages;

			this.selectNav(obj.name);
		},
		listCheck(obj) {
			// this.curName = obj.name;
		},
		selectNav(val) {
			let nowCur = this.cur;
			let index = nowCur.indexOf(val);
			if (index > -1) {
				nowCur.splice(index, 1);
			} else {
				nowCur.push(val);
			}
			this.cur = nowCur;
		},
	},
	created() {
		let nameRt = this.$route.name;
		let packgs = packages;

		this.cur = sorts;
		this.curName = nameRt;
		this.packages = packgs;
		this.sorts = sorts;
	},
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	height: 0;
}
ul,
ol {
	margin: 0;
	list-style: none;
	padding: 0;
}

dt {
	font-size: 16px;
	font-weight: 500;
	text-indent: 35px;
	color: #5b657b;
	margin: 10px 0;
}

dd {
	margin: 0;
	& > a {
		display: block;
		height: 100%;
		cursor: pointer;
	}
}
.cplist {
	padding-bottom: 20px;
}
.left-nav-fixed {
	margin-top: 115px;
}
.lt-nv {
	font-size: 14px;
	width: 295px;
	border-right: 1px solid #d8d8d8;
	a,
	span {
		text-decoration: none;
		color: #666666;
	}
	.curs {
		border-right: 4px solid #5396ff;
		color: #5396ff;
		background: rgba(83, 150, 255, 0.14);
		a,
		span {
			color: #5396ff;
		}
	}
	.pt {
		width: 0;
		height: 0;
		vertical-align: middle;
		border-width: 5px 5px 0;
		border-style: solid;
		border-color: #333 transparent transparent;
		transform: rotate(-90deg);
	}
	.l-1 {
		line-height: 40px;
		a {
			padding: 0 0 0 35px;
		}
	}
	.l-c {
		a {
			padding: 0 0 0 35px;
		}
	}
	.l-c-i {
		cursor: pointer;
		position: relative;
		span {
			padding: 0 0 0 35px;
		}
		.pt {
			float: right;
			margin: 20px 20px 0 0;
		}
	}
	.l-2 {
		overflow: hidden;
		a {
			font-size: 14px;
			padding: 0 0 0 50px;
			span {
				font-size: 12px;
				padding: 0 0 0 8px;
			}
		}
	}
	.cur {
		.pt {
			transition: all 0.5s;
			transform: rotate(0deg);
		}
	}
	.l-2 {
		a {
			display: inline-block;
			box-sizing: border-box;
			width: 100%;
			border-right: 1px solid #fff;
		}
		li:hover {
			transition: all 0.5;
			background: rgba(83, 150, 255, 0.14);
			border-right: 4px solid #5396ff;
			color: #5396ff;
			a,
			span {
				color: #5396ff;
			}
		}
	}
	.nav-l-1 {
		dd:hover {
			transition: all 0.5;
			background: rgba(83, 150, 255, 0.14);
			border-right: 4px solid #5396ff;
			a,
			span {
				color: #5396ff;
			}
		}
	}
}
</style>
