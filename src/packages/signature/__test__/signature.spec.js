import { shallowMount, mount } from '@vue/test-utils'
import Signature from '../signature.vue';
import Vue from 'vue';

HTMLCanvasElement.prototype.getContext = () => { 
    // return whatever getContext has to return
};

describe('Signature.vue', () => {
    const wrapper = mount(Signature, {
        propsData: { 
            customClass: 'signature-wrap'
        }
    });
    it('设置自定义class', () => {
        return Vue.nextTick().then(function() {
            expect(wrapper.find('.nut-signature').classes()).toContain('signature-wrap');
        });
    });

    /* it('自定义不支持Canvas情况下的展示文案', () => {
        wrapper.setProps({
            unSupportTpl: '当前不可使用' 
        });
        return Vue.nextTick().then(function () {
            expect(wrapper.find('nut-signature-unsopport').text()).toBe('当前不可使用');
        })
    }); */
});
