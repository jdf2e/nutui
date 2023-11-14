import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Toast from '../index.vue';

describe('component toast', () => {
  test('should render toast after using msg and id', async () => {
    const wrapper = mount(Toast, {
      props: {
        id: '12313',
        msg: 'taost'
      }
    });
    await nextTick();
    const toast = wrapper.find('.nut-toast');
    expect(toast.exists()).toBe(true);
  });

  // test('should be displayed long enough when use duration ', async () => {
  //   const wrapper = mount(Toast, {
  //     props: {
  //       msg: 'taost',
  //       duration: 3000
  //     }
  //   });
  //   await nextTick();
  //   const toast: any = wrapper.find('.nut-toast');
  //   expect(toast.exists()).toBe(true);
  //   await nextTick();
  //   expect(toast.element.style.display).toEqual('none');
  // });

  test('should change cover style after using cover-color prop', async () => {
    const wrapper = mount(Toast, {
      props: {
        cover: true,
        coverColor: 'black'
      }
    });
    await nextTick();
    const toastCover: any = wrapper.find('.nut-toast-cover');
    expect(toastCover.element.style.backgroundColor).toEqual('black');
  });
  test('should close Toast when using closeOnClickOverlay prop and clicked', async () => {
    const wrapper = mount(Toast, {
      props: {
        cover: true,
        coverColor: 'black',
        closeOnClickOverlay: true
      }
    });
    await nextTick();
    const toast: any = wrapper.find('.nut-toast');
    toast.trigger('click');
    await nextTick();
    expect(toast.element.style.display).toEqual('none');
  });
  test('should render customClass when using customClass prop ', async () => {
    const wrapper = mount(Toast, {
      props: {
        customClass: 'custom'
      }
    });
    await nextTick();
    const toast: any = wrapper.find('.custom');
    expect(toast.exists()).toBe(true);
  });
});
