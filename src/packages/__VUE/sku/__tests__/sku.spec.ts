import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Sku from '../index.vue';
import { Sku as SkuData, Goods } from '../data';

test('sku init render', async () => {
  const wrapper = mount(Sku, {
    props: {
      visible: true,
      teleportDisable: false,
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
      teleportDisable: false,
      sku: SkuData,
      goods: Goods
    }
  });
  await nextTick();
  const skuItem = wrapper.findAll('.nut-sku-select-item-skus-sku');
  skuItem[1].trigger('click');
  const selectSkuObj = wrapper.emitted().selectSku[0] as [];
  expect(selectSkuObj.length).toBe(1);
});

test('do not sell', async () => {
  const wrapper = mount(Sku, {
    props: {
      visible: true,
      teleportDisable: false,
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
      teleportDisable: false,
      sku: SkuData,
      goods: Goods
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-sku-operate-btn-confirm').exists()).toBeTruthy();
  wrapper.find('.nut-sku-operate-btn-confirm').trigger('click');
  expect(wrapper.emitted().clickBtnOperate[0]).toEqual([{ type: 'confirm', value: 1 }]);
});
