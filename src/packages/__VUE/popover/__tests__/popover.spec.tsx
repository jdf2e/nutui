import { mount } from '@vue/test-utils';
import Popover from '../index.vue';
import { ref } from 'vue';

const list = [{ name: 'option1' }, { name: 'option2' }, { name: 'option3' }];

const listDisabled = [{ name: 'option1', disabled: true }, { name: 'option2', disabled: true }, { name: 'option3' }];

test('Popover: first render', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={list} />;
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  );
  expect(wrapper.find('.nut-popover-menu-item').exists()).toBeTruthy();
});

test('Popover: theme=dark', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={list} theme="dark" />;
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  );
  expect(wrapper.find('.nut-popover--dark').exists()).toBeTruthy();
});

test('Popover: disabled', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={listDisabled} theme="dark" />;
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  );
  expect(wrapper.findAll('.nut-popover-menu-disabled').length).toEqual(2);

  wrapper.find('.nut-popover-menu-item').trigger('click');
  expect(wrapper.emitted('choose')).toBeFalsy();
});

test('Popover: should close popover when clicking the action', async () => {
  const show = ref(true);
  const wrapper = mount(
    () => {
      return <Popover v-model:visible={show.value} list={list} closeOnClickAction={false} />;
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  );
  const items = wrapper.findAll('.nut-popover-menu-item');
  await items[0].trigger('click');
  expect(wrapper.emitted('choose')).toBeFalsy();
  expect(show.value).toEqual(true);
});

test('Popover: position', async () => {
  const wrapper = mount(
    () => {
      return <Popover visible={true} list={list} location="top-start" />;
    },
    {
      global: {
        stubs: {
          teleport: true
        }
      }
    }
  );
  expect(wrapper.find('.nut-popover-arrow--top-start').exists()).toBeTruthy();
});
