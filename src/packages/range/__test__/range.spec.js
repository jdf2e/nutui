import { shallowMount } from '@vue/test-utils'
import Range, {toRGBA} from '../range.vue';

describe('Range.vue', () => {

    const wrapper = shallowMount(Range);
    
    it('设置区间值', () => {
        const {vm} = wrapper;
        let rangeVal = [0, 100];
        wrapper.setProps({
            range: rangeVal,
            rangeValues: rangeVal
        });
        const _range = vm.range;
        expect(_range.length === 2).toBe(true);
        expect(_range[0]).toBe(rangeVal[0]);
        expect(_range[1]).toBe(rangeVal[1]);

        const newRange = [12, 98];
        vm.$emit('rangeValues', newRange);
        expect(wrapper.emitted('rangeValues')).toBeTruthy();
        expect(wrapper.emitted().rangeValues[0][0]).toEqual(newRange);
    });

    it('显示标签文字', () => {
        const rangeVal = [0, 100];
        wrapper.setProps({
            range: rangeVal,
            showRangeTxt: true
        });
        const leftEl = wrapper.find('.nut-range-left-text');
        const rightEl = wrapper.find('.nut-range-right-text');

        expect(leftEl.exists()).toBe(true);
        expect(rightEl.exists()).toBe(true);
        expect(+leftEl.text()).toBe(rangeVal[0]);
        expect(+rightEl.text()).toBe(rangeVal[1]);
    });

    it('修改主题风格', () => {
        const rangeVal = [0, 100];
        const themeColor = "#31ccec";
        wrapper.setProps({
            range: rangeVal,
            color: themeColor
        });

        const {mainColor, boxColor, subColor} = wrapper.vm;

        expect(mainColor).toBe(toRGBA(themeColor));
        expect(boxColor).toBe(toRGBA(themeColor, 0.3));
        expect(subColor).toBe(toRGBA(themeColor, 0.5));
    });
});