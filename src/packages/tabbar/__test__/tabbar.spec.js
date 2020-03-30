import { shallowMount, mount } from '@vue/test-utils'
import Tabbar from '../tabbar.vue';
import Vue from 'vue';


describe('Tabbar.vue', () => {
    const wrapper = mount(Tabbar,{
		propsData:{
			tabList: [
				{
					'tabTitle':'百度',
					'curr':false,
					'icon':'',
					'num':5,
				},
				{
					'tabTitle':'京东',
					'curr':true,
					'icon':''
				},
				{
					'tabTitle':'知乎',
					'curr':false,
					'icon':'',
				}
			]
		}
	});
	wrapper.setData({ tabList: [
		{
			'tabTitle':'百度',
			'curr':false,
			'icon':'',
			'num':5,
		},
		{
			'tabTitle':'京东',
			'curr':true,
			'icon':''
		},
		{
			'tabTitle':'知乎',
			'curr':false,
			'icon':'',
		}
	]});
    it('页签类型为based', () => {
        wrapper.setProps({ type: 'based' });
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.bor-right')).toBe(false);
        })

    });

    it('页签位于页面底部', () => {
        wrapper.setProps({ bottom: true });
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.bottom')).toBe(true);
        })
    });

    // it('点击tab标签', () => {
    // 	return Vue.nextTick().then(function () {
	// 		wrapper.findAll('.tabbar-nav').at(1).trigger('click');
	// 		expect(wrapper.findAll('.tabbar-nav').at(1).contains('.curr')).toBe(true)
	// 	})
	// });
	it('设置tab标签标题', () => {
		return Vue.nextTick().then(function () {
		   expect(wrapper.findAll('.tabbar-nav-word').at(0).text()).toBe('百度');
		})
	});

});