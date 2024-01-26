import { mount } from '@vue/test-utils';
import { Add, IconFont } from '@nutui/icons-vue';

test('Icon: svg color width height', async () => {
  const wrapper = mount(() => {
    return <Add color="pink" width={30} height={30} />;
  });

  const svg = wrapper.find('.nut-icon');
  expect(svg.classes()).toContain('nut-icon-add');
  expect(svg.attributes('style')).toContain('color: pink');
  expect(svg.attributes('style')).toContain('height: 30px');
  expect(svg.attributes('style')).toContain('width: 30px');
});

test('Icon: icofnont color width height', async () => {
  const wrapper = mount(() => {
    return <IconFont name="add" color="pink" width={30} height={30} />;
  });

  const svg = wrapper.find('.nut-icon');
  expect(svg.classes()).toContain('nut-icon-add');
  expect(svg.attributes('style')).toContain('color: pink');
  expect(svg.attributes('style')).toContain('height: 30px');
  expect(svg.attributes('style')).toContain('width: 30px');
});
