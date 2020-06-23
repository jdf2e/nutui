import { shallowMount, mount } from '@vue/test-utils'
import ActionSheet from '../field.vue'
import Vue from 'vue';


describe('Field.vue', () => {
    const wrapper = shallowMount(Field, {
        propsData: {
            label: '自我介绍',
            type: "text"
        }
    });

    // it('图标展示', () => {
    //     //wrapper.setProps({ type: 'top' });

    //     return Vue.nextTick().then(function() {
    //         expect(wrapper.contains('.nut-icon-top')).toBe(true);
    //     })
    // });
});