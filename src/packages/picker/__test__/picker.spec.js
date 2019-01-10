// import { shallowMount, mount } from '@vue/test-utils'
// import Picker from '../picker.vue'
// import Vue from 'vue';


// describe('Picker.vue', () => {
//     const wrapper = shallowMount(Picker, {
//         propsData:{
//             listData: [
//                 ['2019', '2020', '2021', '2022', '2023' ],
//                 ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
//             ],
//         }
//     });

//     it('测试条数', () => {
//         return Vue.nextTick().then(function () {
//             expect(wrapper.findAll('.nut-picker-list').length).toBe(2);
//         })
//     });

//     it('是否可见', () => {
//         wrapper.setProps({isVisible: true });
//         return Vue.nextTick().then(function () {
//             expect(wrapper.find('.nut-actionsheet-mask').isVisible()).toBe(true);
//             expect(wrapper.find('.nut-actionsheet-panel').isVisible()).toBe(true);
//         })
//     });

//     it('标题', () => {
//         wrapper.setProps({title: '选择年月' });
//         return Vue.nextTick().then(function () {
//             expect(wrapper.find('.nut-picker-title').text()).toBe('选择年月');
//         })
//     });

//     it('设置默认值', () => {
//         wrapper.setProps({defaultValueData: ['2020', '2'] });
//         return Vue.nextTick().then(function () {
//             expect(wrapper.findAll('.nut-picker-list-panel').at(0).attributes('style')).toBe('transform: translateY(-72px);');
//             expect(wrapper.findAll('.nut-picker-list-panel').at(1).attributes('style')).toBe('transform: translateY(-36px);');
//         })
//     });
// });