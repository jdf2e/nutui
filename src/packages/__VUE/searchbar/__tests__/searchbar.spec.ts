import { mount } from '@vue/test-utils';
import Searchbar from '../index.vue';

test('Searchbar: basic usage', () => {
  const wrapper = mount(Searchbar, {
    props: {
      modelValue: ''
    }
  });

  expect(wrapper.find('.nut-searchbar').html()).toMatchSnapshot();
});

test('Searchbar: should limit maxlength of input value when using maxlength prop', async () => {
  const wrapper = mount(Searchbar, {
    props: {
      maxLength: 3,
      modelValue: '9999'
    }
  });

  const input = wrapper.find('input');
  input.trigger('input');
  expect((wrapper.emitted('change') as any)[0][0]).toEqual('999');
  input.element.value = '9999';
});

test('Searchbar: should format input value when type is number', () => {
  const wrapper = mount(Searchbar, {
    props: {
      type: 'number',
      modelValue: ''
    }
  });
  const input = wrapper.find('input');
  input.trigger('input');
  expect((wrapper.emitted('change') as any)[0][0]).toEqual('');
  input.element.value = '9999';
});

test('Searchbar: should format input value when type is number', () => {
  const wrapper = mount(Searchbar, {
    props: {
      type: 'number',
      modelValue: ''
    }
  });
  const input = wrapper.find('input');
  input.element.value = '1';
  input.trigger('input');
  expect((wrapper.emitted('change') as any)[0][0]).toEqual('1');

  input.element.value = '12';
  input.trigger('input');
  expect((wrapper.emitted('change') as any)[1][0]).toEqual('12');
});

test('Searchbar: backgrounds prop test', () => {
  const wrapper = mount(Searchbar, {
    props: {
      modelValue: '',
      background: 'red',
      inputBackground: 'green'
    }
  });
  const outer: any = wrapper.find('.nut-searchbar');
  const inner: any = wrapper.find('.nut-searchbar__search-input');
  expect(outer.element.style.backgroundColor).toEqual('red');
  expect(inner.element.style.backgroundColor).toEqual('green');
});

test('Searchbar: change event test', async () => {
  const wrapper = mount(Searchbar, {
    props: {
      modelValue: ''
    }
  });

  const input = wrapper.find('input');
  await input.trigger('input');
  expect(wrapper.emitted('change')).toBeTruthy();
});

test('Searchbar: change event test', async () => {
  const wrapper = mount(Searchbar, {
    props: {
      modelValue: ''
    }
  });

  const input = wrapper.find('input');
  await input.trigger('input');
  expect(wrapper.emitted('change')).toBeTruthy();
});

test('Searchbar: focus event focus', async () => {
  const wrapper = mount(Searchbar, {
    props: {
      modelValue: ''
    }
  });

  const input = wrapper.find('input');
  await input.trigger('focus');
  expect(wrapper.emitted('focus')).toBeTruthy();
});

test('Searchbar: blur event test', async () => {
  const wrapper = mount(Searchbar, {
    props: {
      modelValue: ''
    }
  });

  const input = wrapper.find('input');
  await input.trigger('blur');
  expect(wrapper.emitted('blur')).toBeTruthy();
});

test('Searchbar: clear event test', async () => {
  const wrapper = mount(Searchbar, { props: { modelValue: 3 } });
  const input = wrapper.find('input');
  const clear = wrapper.find('.nut-searchbar__input-clear');
  wrapper.find('input').trigger('input');
  expect(input.element.value).toBe('3');
  await clear.trigger('click');
  // 修改update:modelValue
  expect((wrapper.emitted('update:modelValue') as any)[1][0]).toEqual('');
  expect(clear.exists()).toBe(true);
});

test('Searchbar: props shape', async () => {
  const wrapper1 = mount(Searchbar, { props: { shape: 'square' } });
  const wrapper2 = mount(Searchbar);
  const input1 = wrapper1.find('.nut-searchbar__search-input');
  const input2 = wrapper2.find('.nut-searchbar__search-input');
  expect(input1.html()).includes('square');
  expect(input2.html()).includes('round');
});
