import { shallowMount } from '@vue/test-utils'
import ImagePicker from '../imagepicker.vue'
import Vue from 'vue';

describe('ImagePicker.vue',() => {
    const wrapper = shallowMount(ImagePicker, {
        
    });

    it('点击删除图片',() => {
        wrapper.setData({
            list:[{
                id:1,
                src:"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
            }]
        });
        return Vue.nextTick().then(function () {
            wrapper.findAll('.img-item').at(0).trigger('click');
            expect(wrapper.findAll('.img-item').exists()).toBe(false);
        })
    });

    it('允许上传最多1张',() => {
        wrapper.setData({
            list:[{
                id:1,
                src:"//img1.360buyimg.com/da/jfs/t1/4436/26/9691/78074/5bad0668E7ce89ec6/c234b749ae9e7332.jpg"
            }]
        });
        wrapper.setProps({
            max:1
        });

        return Vue.nextTick().then(function () {
            wrapper.find('.add-icon').trigger('change');
            expect(wrapper.find('.add-icon').isVisible()).toBe(false);
        })
    });
});