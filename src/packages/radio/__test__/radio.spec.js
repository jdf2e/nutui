import { shallowMount } from '@vue/test-utils'
import Radio from '../radio.vue';
import Vue from 'vue';


// describe('Radio.vue', () => {
//     const wrapper = shallowMount(Radio, {
//         propsData: {
//             value:'a',
            
//         }
//     });


//     it('选中状态', () => {
//         wrapper.setProps({ label: 'a' });

//         return Vue.nextTick().then(function () {
//             expect(wrapper.find('input').attributes('checked')).toBe(true);
//         })
//     });

// });