import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Sku from '../index.vue';
import { Sku as SkuData, Goods } from '../data';

test('sku init render', async () => {
  const wrapper = mount(Sku, {
    props: {
      visible: true,
      sku: SkuData,
      goods: Goods
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-sku-select').exists()).toBeTruthy();
});

test('sku select event', async () => {
  const wrapper = mount(Sku, {
    props: {
      visible: true,
      sku: SkuData,
      goods: Goods
    }
  });
  await nextTick();
  const skuItem = wrapper.findAll('.nut-sku-select-item-skus-sku');
  skuItem[1].trigger('click');
  expect(wrapper.emitted()['select-sku'][0]).toMatchSnapshot();
});

test('do not sell', async () => {
  const wrapper = mount(Sku, {
    props: {
      visible: true,
      sku: SkuData,
      goods: Goods,
      btnExtraText: '抱歉，此商品在所选区域暂无存货'
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-sku-operate-desc').exists()).toBeTruthy();
  expect(wrapper.find('.nut-sku-operate-desc').text()).toEqual('抱歉，此商品在所选区域暂无存货');
});

test('button event', async () => {
  const wrapper = mount(Sku, {
    props: {
      visible: true,
      sku: SkuData,
      goods: Goods
    }
  });
  await nextTick();
  const confirm = wrapper.find('.nut-sku-operate-btn-confirm');
  expect(confirm.exists()).toBeTruthy();
  confirm.trigger('click');
  expect(wrapper.emitted()['click-btn-operate'][0]).toEqual([{ type: 'confirm', value: 1 }]);
});
