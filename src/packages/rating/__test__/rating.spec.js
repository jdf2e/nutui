import { shallowMount, mount } from '@vue/test-utils'
import Rating from '../rating.vue'
import Vue from 'vue';


describe('Rating.vue', () => {
    const wrapper = shallowMount(Rating, {
        propsData: {
            value: '5'
        }
    });
   
    it('评分单元数量', () => {
        wrapper.setProps({ total: 6 });
        return Vue.nextTick().then(function () {
            expect(wrapper.findAll('.nut-rating-item').length).toBe(6);
        })
    });

    it('仿造prop带入value', () => {
        //expect(wrapper.findAll('.nut-rating-item').length).toBe(6);
        expect(wrapper.findAll('.nut-rating-item').at(4).is('.nut-rating-active')).toBe(true)
    });
    
    it('点击评分', () => {
        wrapper.findAll('.nut-rating-item').at(2).trigger('click');
        expect(wrapper.findAll('.nut-rating-item').at(2).is('.nut-rating-active')).toBe(true)
    });

});