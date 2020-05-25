import { shallowMount, mount } from '@vue/test-utils'
import Uploader from '../uploader.vue';
import Vue from 'vue';


describe('Uploader.vue', () => {
    const wrapper = shallowMount(Uploader);   
    const wrappers = mount(Uploader);
    it('设置名称', () => {
        wrapper.setProps({ name: 'lilinsen'});
        return Vue.nextTick().then(function () {           
            expect(wrapper.contains('[name="lilinsen"]')).toBe(true);;            
        })
    });
    it('模拟设置 url isPreview clearInput maxSize acceptType 等,并点击上传',()=>{
        wrappers.setProps({
            url:'https://my-json-server.typicode.com/linrufeng/demo/posts',
            isPreview:true,
            clearInput:true,
            maxSize:500,
            acceptType:['application/zip']
        })
        return Vue.nextTick().then(()=>{
            wrappers.trigger('click');
            expect(true)
        })
    })
    // it('隐藏', () => {
    //     wrapper.setData({ msg: '测试文案', visible: false });

    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.isVisible()).toBe(false);
    //     });
    // });

    // it('文案展示', () => {
    //     wrapper.setData({ msg: '测试文案', visible:true });
    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.find('.nut-toast-text').text()).toBe('测试文案');
    //     });
    // });

    // it('尺寸设置', () => {
    //     wrapper.setData({ msg: '测试文案', visible: true, size: 'small' });

    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.contains('.nut-toast-small')).toBe(true);
    //     });
    // });

    // it('图标', () => {
    //     wrapper.setData({ msg: '测试文案', visible: true, type:'success' });

    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.contains('.nut-toast-has-icon')).toBe(true);
    //     });
    // });

    // it('loading类型', () => {
    //     wrapper.setData({ msg: '测试文案', visible: true, type: 'loading' });

    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.contains('.nut-loading')).toBe(true);
    //     });
    // });

    // it('loading图标不旋转', () => {
    //     wrapper.setData({ msg: '测试文案', visible: true, type: 'loading', loadingRotate:false });

    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.contains('.nut-toast-icon-rotate')).toBe(false);
    //     });
    // });

    // it('设置ID', () => {
    //     wrapper.setData({ id:'test', msg: '测试文案', visible: true, type: 'loading' });

    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.attributes('id')).toBe('test');
    //     });
    // });

});