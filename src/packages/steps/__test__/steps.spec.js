import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Steps from '../steps.vue';
import Step from "../step.vue";

describe('Steps.vue', () => {
    const stepWrapper = {
        render(h) {
            return h(Step, {
                props: {
                    title: '运输中',
                    content: '您的订单已达到京东【北京旧宫营业部】',
                    time: '2020-03-03 11：09：96'
                }
            })
        }
    }
    const wrapper = shallowMount(Steps, {
        slots: {
            default: [stepWrapper, stepWrapper, stepWrapper]
        }
    });
    
    
    it('展示的步骤数', () => {
        expect(wrapper.findAll('.nut-step').length).toBe(3);
    });
    it('默认展示的方向', () => {
        expect(wrapper.contains('.nut-steps.horizontal')).toBe(false);
    });

    it('设置展示的方向', () => {
        wrapper.setProps({
            direction: 'horizontal'
        });
        expect(wrapper.contains('.nut-steps.horizontal')).toBe(true);
    });

    it('设置type为process, current', () => {
        wrapper.setProps({
            type: 'process',
            current: 1,
        });
        setTimeout(() => {
            expect(wrapper.find('.nut-step').exists()).toBe(true);
            let nutStep = wrapper.findAll('.nut-step').at(0);
            expect(nutStep.classes()).toContain('nut-step-status-finish');
        }, 300)
        
        
    });
    it('设置时间前置', () => {
        wrapper.setProps({
            timeForward: true
        });
        setTimeout(() => {
            expect(wrapper.find('.nut-step-time-forward').exists()).toBe(true);
            expect(wrapper.find('.nut-step-time').exists()).toBe(true);
        }, 300);
    });
    
});