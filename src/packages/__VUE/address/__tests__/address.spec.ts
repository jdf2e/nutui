import { config, mount } from '@vue/test-utils';
import { nextTick, toRefs, reactive } from 'vue';
import NutIcon from '../../icon/index.vue';
import NutPopup from '../../popup/index.vue';
import NutElevator from '../../elevator/index.vue';
import Address from '../index.vue';
import { addressListData, addressExistData } from '../address-list';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPopup,
    NutElevator
  };
});

afterAll(() => {
  config.global.components = {};
});

test('address render', async () => {
  const wrapper = mount(Address, {
    props: {
      visible: true,
      province: addressListData.province,
      city: addressListData.city,
      country: addressListData.country,
      town: addressListData.town,
      teleportDisable: false
    }
  });
  await nextTick();
  expect(wrapper.find('.arrow-close').exists()).toBeTruthy();
  expect(wrapper.findAll('.region-item').length).toBe(5);
});

test('choose address item', async () => {
  const wrapper = mount(Address, {
    props: {
      visible: true,
      province: addressListData.province,
      city: addressListData.city,
      country: addressListData.country,
      town: addressListData.town,
      teleportDisable: false
    }
  });
  wrapper.find('.region-item').trigger('click');
  await nextTick();
  expect(wrapper.find('.tab-item').text()).toEqual('北京');
});

test('default choose address', async () => {
  const wrapper = mount(Address, {
    props: {
      modelValue: [1, 7, 3],
      visible: true,
      province: addressListData.province,
      city: addressListData.city,
      country: addressListData.country,
      town: addressListData.town,
      teleportDisable: false
    }
  });
  wrapper.vm.initCustomSelected();
  await nextTick();
  expect(wrapper.findAll('.tab-item')[0].text()).toEqual('北京');
  expect(wrapper.findAll('.tab-item')[1].text()).toEqual('朝阳区');
  expect(wrapper.findAll('.tab-item')[2].text()).toEqual('八里庄街道');
});

test('Exist address', async () => {
  const wrapper = mount(Address, {
    props: {
      type: 'exist',
      visible: true,
      existAddress: addressExistData,
      isShowCustomAddress: false,
      teleportDisable: false
    }
  });
  await nextTick();
  expect(wrapper.find('.choose-other').exists()).toBeFalsy();
  expect(wrapper.findAll('.exist-item').length).toBe(3);
});

test('Exist address choose event', async () => {
  const wrapper = mount(Address, {
    props: {
      type: 'exist',
      visible: true,
      existAddress: addressExistData,
      teleportDisable: false
    }
  });
  await nextTick();
  wrapper.find('.exist-item').trigger('click');
  const chooseAddress = wrapper.emitted().selected[0];
  expect((chooseAddress as []).length).toBe(3);
});

test('Exist address & list address', async () => {
  const wrapper = mount(Address, {
    props: {
      type: 'exist',
      visible: true,
      existAddress: addressExistData,
      teleportDisable: false,
      province: addressListData.province,
      city: addressListData.city,
      country: addressListData.country,
      town: addressListData.town
    }
  });
  await nextTick();
  const changeBtn = wrapper.find('.choose-other');
  expect(changeBtn.exists()).toBeTruthy();

  changeBtn.trigger('click');
  await nextTick();
  expect(wrapper.find('.arrow-back').exists()).toBeTruthy();
  expect(wrapper.find('.custom-address').exists()).toBeTruthy();
});
