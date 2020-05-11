import Vue from 'vue';
import VueRouter from 'vue-router';
import { packages } from '@/config.json';

import frontCover from './index.vue';

const Index = () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'info' */ './info.vue');
const Intro = () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'intro' */ './page/intro.vue');
const Start = () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'start' */ './page/start.vue');
const International = () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'international' */ './page/international.vue');
const Theme = () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'theme' */ './page/theme.vue');
const JoinUs = () => import(/* webpackPrefetch: true */ /* webpackChunkName: 'joinus' */ './page/joinus.vue');
//const Update = () => import('./page/changelog.vue');

Vue.use(VueRouter);

const routes = [
	{
		path: '*',
		redirect: '/index'
	},
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'frontcover',
		component: frontCover
	},
	{
		path: '/intro',
		name: 'intr',
		components: {
			default: Index,
			main: Intro
		}
	},
	{
		path: '/international',
		name: 'international',
		components: {
			default: Index,
			main: International
		}
	},
	{
		path: '/start',
		name: 'start',
		components: {
			default: Index,
			main: Start
		}
	},
	{
		path: '/theme',
		name: 'theme',
		components: {
			default: Index,
			main: Theme
		}
	},
	{
		path: '/joinus',
		name: 'joinus',
		components: {
			default: Index,
			main: JoinUs
		}
	}
];
//组件md文件展示
packages.map(item => {
	if (item.showDemo === false) return;
	const pkgName = item.name.toLowerCase();
	routes.push({
		path: '/' + item.name,
		components: {
			default: Index,
			main: () => import('./view/' + pkgName + '.vue')
		},
		name: item.name
	});
});

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.path == '/index') {
			return null;
		} else {
			return { x: 0, y: 0 };
		}
	}
});

export default router;
