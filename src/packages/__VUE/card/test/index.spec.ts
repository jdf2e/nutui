import { config, DOMWrapper, mount } from '@vue/test-utils';
import Card from '../index.vue';
import NutTag from '../../tag/index.vue';
import NutIcon from '../../icon/index.vue';
import NutPrice from '../../price/index.vue';

beforeAll(() => {
  config.global.components = {
    NutTag,
    NutPrice,
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('title props', () => {
  const wrapper = mount(Card, {
    props: {
      imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水'
    }
  });
  const title: DOMWrapper<Element> = wrapper.find('.nut-card__right__title');
  expect(title.html()).toContain('活生鲜螃蟹现');
});
test('normal props', () => {
  const wrapper = mount(Card, {
    props: {
      imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      price: '388',
      vipPrice: '378',
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>'
    }
  });
  const title: DOMWrapper<Element> = wrapper.find('.nut-card__right__title');
  const shopName: DOMWrapper<Element> = wrapper.find('.nut-card__right__shop__name');
  expect(title.html()).toContain('活生鲜螃蟹现');
  expect(shopName.html()).toContain('自营店');
  expect(wrapper.html()).toMatchSnapshot();
});

test('render prolist , price and origin slot correctly', () => {
  const wrapper = mount(Card, {
    slots: {
      prolist: () => 'Custom prolist',
      price: () => 'Custom price',
      origin: () => 'Custom origin'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render shop-tag and footer slot correctly', () => {
  const wrapper = mount(Card, {
    slots: {
      footer: () => 'Custom footer',
      shopTag: () => 'Custom shopTag'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
