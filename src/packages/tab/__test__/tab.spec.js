import { shallowMount, mount } from '@vue/test-utils'
import Tab from '../tab.vue';
import Vue from 'vue';


describe('Tab.vue', () => {
    const wrapper = mount(Tab);
    
    it('页签类型为based', () => {
        wrapper.setProps({ type: 'based' });
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.based')).toBe(true);
        })
    });

    it('当前tab的位置', () => {
        wrapper.setProps({ positionNav: 'left' });
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-tab-title-leftnav')).toBe(true);
            
        })
    });

    it('是否显示内容区域', () => {
        wrapper.setProps({ contentShow: true });
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.nut-tab-item')).toBe(true);
            
        })
    });

    it('禁止选择第一个标签', () => {
        wrapper.setData({ tabTitleList: [
            {
              tabTitle: "衣物",
              disable: true,
              iconUrl:
                "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
              content: "<p>衣物内容</p>"
            },
            {
              tabTitle: "日用品",
              iconUrl:
                "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
              content: "<p>日用品内容</p>"
            },
            {
              tabTitle: "运动器材",
              iconUrl:
                "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
              content: "<p>运动器材内容</p>"
            },
            {
              tabTitle: "电影票",
              iconUrl:
                "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
              content: "<p>电影票内容</p>"
            }
          ] });
          return Vue.nextTick().then(function () {
              expect(wrapper.findAll('.nut-title-nav-leftnav').at(0).is('.nut-tab-disable')).toBe(true)
          }) 
    });
    it('是否显示关闭按钮', () => {
        wrapper.setProps({ closable: true });
        return Vue.nextTick().then(function () {
            expect(wrapper.contains('.close-btn')).toBe(true);
            
        })
    });
    it('当前默认选中的tab', () => {
        wrapper.setProps({ positionNav: 'top' });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-title-nav-list').at(0).is('.nut-tab-active')).toBe(true)
        })
    });
    it('tab标签标题', () => {
      return Vue.nextTick().then(function () {
         expect(wrapper.findAll('.nut-tab-link').at(0).text()).toBe('衣物');
      })
    });
    it('点击tab标签', () => {
    	return Vue.nextTick().then(function () {
            wrapper.findAll('.nut-title-nav-list').at(1).trigger('click');
            expect(wrapper.findAll('.nut-title-nav-list').at(1).is('.nut-tab-active')).toBe(true)
      })
        
    });
});


