import { mount } from '@vue/test-utils';
import Animate from '../index.vue';
import { nextTick } from 'vue';

const testType = [
  'shake',
  'ripple',
  'breath',
  'float',
  'slide-right',
  'slide-left',
  'slide-top',
  'slide-bottom',
  'jump',
  'twinkle',
  'flicker'
];

test('should change classname when using type prop', () => {
  for (let i = 0; i < testType.length; i++) {
    const typeProp = testType[i];
    const wrapper = mount(Animate, {
      props: {
        type: typeProp
      }
    });

    const animate: any = wrapper.find('.nut-animate__container');
    expect(animate.classes(`nut-animate-${typeProp}`)).toBe(true);
  }
});

test('trigger animate with loop', async () => {
  const handleClick = () => {
    console.log('click it');
  };
  for (let i = 0; i < testType.length; i++) {
    const typeProp = testType[i];
    const wrapper = mount(Animate, {
      props: {
        type: typeProp,
        action: 'click',
        loop: true,
        click: handleClick
      }
    });

    const animate: any = wrapper.find('.nut-animate__container');

    animate.trigger('click');
    await nextTick();
    expect(wrapper.emitted('click')).toHaveLength(1);

    expect(animate.classes('loop')).toBe(true);
    expect(animate.classes(`nut-animate-${typeProp}`)).toBe(true);
    expect(wrapper.vm.clicked).toBe(true);
  }
});

test('trigger animate', async () => {
  const handleClick = () => {
    console.log('click it');
  };
  for (let i = 0; i < testType.length; i++) {
    const typeProp = testType[i];
    const wrapper = mount(Animate, {
      props: {
        type: typeProp,
        action: 'click',
        click: handleClick
      }
    });

    const animate: any = wrapper.find('.nut-animate__container');

    animate.trigger('click');
    await nextTick();
    expect(wrapper.emitted('click')).toHaveLength(1);

    expect(animate.classes('loop')).toBe(false);
    expect(animate.classes(`nut-animate-${typeProp}`)).toBe(true);
    expect(wrapper.vm.clicked).toBe(true);
  }
});

test('animate duration', async () => {
  const wrapper = mount(Animate, {
    props: {
      type: 'jump',
      duration: 999
    }
  });

  const animate: any = wrapper.find('.nut-animate__container');
  expect(animate.element.style.animationDuration).toBe('999ms');
});
