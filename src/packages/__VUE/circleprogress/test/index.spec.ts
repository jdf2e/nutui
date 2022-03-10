import { mount } from '@vue/test-utils';
import Circleprogress from '../index.vue';

test('should render component  when using require prop', async () => {
  // 默认圆弧半径为50  2πR为314  默认圆弧宽度为10 所以整个元素宽高为(10+50)*2
  const wrapper = mount(Circleprogress, {
    props: {
      progress: 30
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should change stoke when use width props', async () => {
  // 圆弧宽度为20 所以整个元素宽高为(20+60)*2
  const wrapper = mount(Circleprogress, {
    props: {
      progress: 40,
      strokeInnerWidth: 20,
      progressOption: {
        radius: 60,
        strokeOutWidth: 20
      }
    }
  });
  let element = wrapper.element as HTMLElement;
  expect(element.style.width).toEqual('160px');
  expect(element.style.height).toEqual('160px');
});
test('should change color when use color props', async () => {
  // 圆弧宽度为20 所以整个元素宽高为(20+60)*2
  const wrapper = mount(Circleprogress, {
    props: {
      progress: 40,
      strokeInnerWidth: 20,
      progressOption: {
        backColor: 'blue',
        progressColor: 'yelllow'
      }
    }
  });
  let circle = wrapper.findAll('circle');
  expect(circle[0].html()).toContain('blue');
  expect(circle[1].html()).toContain('yelllow');
});
