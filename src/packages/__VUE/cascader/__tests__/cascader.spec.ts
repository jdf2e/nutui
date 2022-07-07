import { CascaderOption } from './../types';
import { mount } from '@vue/test-utils';
import Cascader from '../index.vue';
import Tree from '../tree';
import { formatTree, convertListToOptions } from '../helper';
import Popup from '../../popup/index.vue';
import Icon from '../../icon/index.vue';
import Tabs from '../../tabs/index.vue';
import TabPane from '../../tabpane/index.vue';

const mountCascader = (options = {}) =>
  mount(Cascader, {
    attachTo: 'body',
    global: {
      components: {
        [Popup.name]: Popup,
        [Icon.name]: Icon,
        [TabPane.name]: TabPane,
        [Tabs.name]: Tabs
      },
      stubs: {
        teleport: true
      }
    },
    ...options
  });
const later = (t = 0) => new Promise((r) => setTimeout(r, t));
const mockOptions = [
  {
    value: '浙江',
    text: '浙江',
    children: [
      {
        value: '杭州',
        text: '杭州',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区' },
          { value: '余杭区', text: '余杭区' }
        ]
      },
      {
        value: '温州',
        text: '温州',
        children: [
          { value: '鹿城区', text: '鹿城区' },
          { value: '瓯海区', text: '瓯海区' }
        ]
      }
    ]
  },
  {
    value: '湖南',
    text: '湖南',
    disabled: true
  },
  {
    value: '福建',
    text: '福建',
    children: [
      {
        value: '福州',
        text: '福州',
        children: [
          { value: '鼓楼区', text: '鼓楼区' },
          { value: '台江区', text: '台江区' }
        ]
      }
    ]
  }
];
const mockKeyConfigOptions = [
  {
    name: '浙江',
    items: [
      {
        name: '杭州',
        disabled: true,
        items: [{ name: '西湖区' }, { name: '余杭区' }]
      },
      {
        name: '温州',
        items: [{ name: '鹿城区' }, { name: '瓯海区' }]
      }
    ]
  },
  {
    name: '湖南',
    disabled: true
  },
  {
    name: '福建',
    items: [
      {
        name: '福州',
        items: [{ name: '鼓楼区' }, { name: '台江区' }]
      }
    ]
  }
];
const mockConvertOptions = [
  { value: '北京', text: '北京', nodeId: 1, nodePid: 0, sort: 2 },
  { value: '朝阳区', text: '朝阳区', nodeId: 11, nodePid: 1 },
  { value: '亦庄', text: '亦庄', nodeId: 111, nodePid: 11 },
  { value: '广东省', text: '广东省', nodeId: 2, nodePid: 0, sort: 1 },
  { value: '广州市', text: '广州市', nodeId: 21, nodePid: 2 }
];

describe('helpers', () => {
  test('formatTree', () => {
    const fromatedTree = formatTree(mockKeyConfigOptions, null, {
      children: 'items',
      text: 'name',
      value: 'name'
    });

    expect(fromatedTree).toMatchObject(mockOptions);
  });

  test('convertListToOptions', () => {
    const convertList = convertListToOptions(mockConvertOptions, {
      topId: 0,
      idKey: 'nodeId',
      pidKey: 'nodePid',
      sortKey: 'sort'
    });
    expect(convertList).toMatchObject([
      {
        nodePid: 0,
        nodeId: 2,
        text: '广东省',
        value: '广东省',
        children: [
          {
            nodePid: 2,
            nodeId: 21,
            text: '广州市',
            value: '广州市'
          }
        ]
      },
      {
        nodePid: 0,
        nodeId: 1,
        text: '北京',
        value: '北京',
        children: [
          {
            nodePid: 1,
            nodeId: 11,
            text: '朝阳区',
            value: '朝阳区',
            children: [{ nodePid: 11, nodeId: 111, text: '亦庄', value: '亦庄' }]
          }
        ]
      }
    ]);
  });
});

describe('Tree', () => {
  test('tree', () => {
    const tree = new Tree([
      {
        text: '浙江',
        value: '浙江'
      },
      {
        text: '福建',
        value: '福建'
      }
    ]);
    expect(tree.nodes).toMatchObject([
      {
        text: '浙江',
        value: '浙江'
      },
      {
        text: '福建',
        value: '福建'
      }
    ]);
  });

  test('tree with config', () => {
    const tree = new Tree(mockKeyConfigOptions, {
      value: 'name',
      text: 'name',
      children: 'items'
    });
    expect(tree.nodes).toMatchObject(mockOptions);
  });

  const tree = new Tree(mockOptions);

  test('getPathNodesByValue', () => {
    const pathNodes = tree.getPathNodesByValue(['浙江', '杭州', '西湖区']);
    const mappedPathNodes = pathNodes.map(({ text, value }) => ({
      text,
      value
    }));

    expect(mappedPathNodes).toMatchObject([
      { text: '浙江', value: '浙江' },
      { text: '杭州', value: '杭州' },
      { text: '西湖区', value: '西湖区' }
    ]);
  });

  test('isLeaf', () => {
    const node = tree.getNodeByValue('西湖区');

    let isLeaf = tree.isLeaf(node as CascaderOption, false);
    expect(isLeaf).toBeTruthy();

    isLeaf = tree.isLeaf(node as CascaderOption, true);
    expect(isLeaf).toBeFalsy();
  });

  test('hasChildren', () => {
    let node = tree.getNodeByValue('西湖区');

    let hasChildren = tree.hasChildren(node as CascaderOption, false);
    expect(hasChildren).toBeFalsy();

    hasChildren = tree.hasChildren(node as CascaderOption, true);
    expect(hasChildren).toBeFalsy();

    node = tree.getNodeByValue('杭州');

    hasChildren = tree.hasChildren(node as CascaderOption, false);
    expect(hasChildren).toBeTruthy();

    hasChildren = tree.hasChildren(node as CascaderOption, true);
    expect(hasChildren).toBeTruthy();
  });

  test('updateChildren', () => {
    let node = tree.getNodeByValue('福建');
    expect(node).toBeTruthy();

    tree.updateChildren([{ text: '福州', value: '福州' }], node as CascaderOption);
    node = tree.getNodeByValue('福州') as CascaderOption;
    expect(node).toBeTruthy();
    expect(node.value).toBe('福州');

    tree.updateChildren([{ text: '鼓楼区', value: '鼓楼区' }], node as CascaderOption);
    node = tree.getNodeByValue('鼓楼区') as CascaderOption;
    expect(node).toBeTruthy();
    expect(node.value).toBe('鼓楼区');
  });

  test('updateChildren with CascaderConfig', () => {
    const tree = new Tree(
      [
        {
          name: '福建',
          items: [{ name: '福州' }]
        }
      ],
      {
        value: 'name',
        text: 'name',
        children: 'items'
      }
    );
    expect(tree.nodes).toMatchObject([
      {
        text: '福建',
        value: '福建',
        children: [{ text: '福州', value: '福州' }]
      }
    ]);

    let node = tree.getNodeByValue('福州') as CascaderOption;
    expect(node).toBeTruthy();
    tree.updateChildren([{ name: '鼓楼区' }], node);
    node = tree.getNodeByValue('鼓楼区') as CascaderOption;
    expect(node).toBeTruthy();
    expect(node).toMatchObject({
      text: '鼓楼区',
      value: '鼓楼区'
    });
  });
});

describe('Cascader', () => {
  it('options', async () => {
    const wrapper = mountCascader({
      propsData: {
        modelValue: ['福建', '福州', '鼓楼区'],
        options: mockOptions
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('options with valueKey/textKey/childrenKey', async () => {
    const wrapper = mountCascader({
      propsData: {
        modelValue: ['福建', '福州', '鼓楼区'],
        options: mockKeyConfigOptions,
        valueKey: 'name',
        textKey: 'name',
        childrenKey: 'items'
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('options with convertConfig', async () => {
    const wrapper = mountCascader({
      propsData: {
        modelValue: ['广东省', '广州市'],
        options: mockConvertOptions,
        convertConfig: {
          topId: 0,
          idKey: 'nodeId',
          pidKey: 'nodePid',
          sortKey: 'sort'
        }
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('visible', async () => {
    const wrapper = mountCascader({
      props: {
        visible: false,
        modelValue: [],
        options: mockOptions
      }
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.nut-cascader__popup').isVisible()).toBe(false);

    await wrapper.setProps({
      visible: true
    });
    expect(wrapper.find('.nut-cascader__popup').isVisible()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();

    // TODO: 无法通过，每次更新props都重新执行了setup，原因待发现
    // // value为空时，会保留上次的选择记录
    // await wrapper.find('.nut-cascader-item').trigger('click');
    // expect(wrapper.html()).toMatchSnapshot();
    // expect(wrapper.findAll('.nut-tabs__titles-item__text').length).toBe(2);
    // await wrapper.setProps({
    //   visible: false
    // });
    // expect(wrapper.html()).toMatchSnapshot();
    // await wrapper.setProps({
    //   visible: true
    // });
    // await wrapper.vm.$nextTick();
    // expect(wrapper.html()).toMatchSnapshot();
    // expect(wrapper.findAll('.nut-tabs__titles-item__text').length).toBe(2);

    // 点击叶子节点时关闭popup
    await wrapper.setProps({
      modelValue: ['福建', '福州', '台江区']
    });
    await wrapper.findAll('.nut-cascader-pane')[2].find('.nut-cascader-item').trigger('click');
    // expect((wrapper.emitted('update:visible') as any)[0][0]).toBe(false);
    expect(
      wrapper
        .findAll('.nut-cascader-pane')[2]
        .find('.nut-cascader-item.active')
        .find('.nut-cascader-item__title')
        .html()
    ).toContain('鼓楼区');
  });

  it('modelValue', async () => {
    const wrapper = mountCascader({
      props: {
        modelValue: [],
        options: mockOptions
      }
    });

    expect(wrapper.findAll('.nut-cascader-item[aria-checked="true"]').length).toBe(0);
    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.setProps({
      modelValue: ['福建', '福州', '鼓楼区']
    });
    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.setProps({
      modelValue: ['湖南']
    });
    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.setProps({
      modelValue: []
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('select', async () => {
    const wrapper = mountCascader({
      props: {
        options: mockOptions
      }
    });

    // 模拟点击
    await wrapper.findAll('.nut-cascader-item')[2].trigger('click');
    let pathChange: any = wrapper.emitted().pathChange[0];
    expect(pathChange[0][0].value).toBe('福建');
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.setProps({
      modelValue: ['福建']
    });
    await wrapper.findAll('.nut-cascader-pane')[1].find('.nut-cascader-item').trigger('click');
    pathChange = wrapper.emitted().pathChange[1];
    expect(pathChange[0][1].value).toBe('福州');
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.setProps({
      modelValue: ['福建', '福州']
    });
    await wrapper.findAll('.nut-cascader-pane')[2].find('.nut-cascader-item').trigger('click');
    pathChange = wrapper.emitted().pathChange[2];
    expect(pathChange[0][2].value).toBe('鼓楼区');
    expect(wrapper.emitted().pathChange.length).toBe(3);
    expect(wrapper.emitted().change.length).toBe(1);
    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.setProps({
      modelValue: []
    });
    await wrapper.findAll('.nut-cascader-item')[1].trigger('click');
    expect(wrapper.emitted().pathChange.length).toBe(3);
    expect(wrapper.emitted().change.length).toBe(1);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('modelValue with lazy', async () => {
    const wrapper = mountCascader({
      props: {
        modelValue: ['A0', 'A12', 'A21'],
        lazy: true,
        async lazyLoad(node: any, resolve: (children: any) => void) {
          setTimeout(() => {
            // root表示第一层数据
            if (node.root) {
              resolve([
                { value: 'A0', text: 'A0' },
                { value: 'B0', text: 'B0' },
                { value: 'C0', text: 'C0' }
              ]);
            } else {
              const { value, level } = node;
              const text = value.substring(0, 1);
              const value1 = `${text}${level + 1}1`;
              const value2 = `${text}${level + 1}2`;
              resolve([
                { value: value1, text: value1, leaf: level >= 1 },
                { value: value2, text: value2, leaf: level >= 1 }
              ]);
            }
          }, 50);
        }
      }
    });
    await later(60);
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.setProps({
      modelValue: ['A0', 'A12', 'A21']
    });
    await later(160);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('select with lazy', async () => {
    const wrapper = mountCascader({
      props: {
        lazy: true,
        async lazyLoad(node: any, resolve: (children: any) => void) {
          setTimeout(() => {
            // root表示第一层数据
            if (node.root) {
              resolve([
                { value: 'A0', text: 'A0' },
                { value: 'B0', text: 'B0' }
              ]);
            } else {
              const { value, level } = node;
              const text = value.substring(0, 1);
              const value1 = `${text}${level + 1}1`;
              const value2 = `${text}${level + 1}2`;
              resolve([
                { value: value1, text: value1, leaf: level >= 1 },
                { value: value2, text: value2, leaf: level >= 1 }
              ]);
            }
          }, 50);
        }
      }
    });
    expect(wrapper.html()).toMatchSnapshot();

    await later(60);

    // 模拟点击
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.findAll('.nut-cascader-item')[1].trigger('click');
    await later(10);
    await wrapper.findAll('.nut-cascader-item')[0].trigger('click');
    await later(60);
    let pathChange: any = wrapper.emitted().pathChange[0];
    expect(pathChange[0][0].value).toBe('A0');
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.setProps({
      modelValue: ['A0']
    });
    await later();
    await wrapper.findAll('.nut-cascader-pane')[1].findAll('.nut-cascader-item')[0].trigger('click');
    await later(10);
    await wrapper.findAll('.nut-cascader-pane')[1].findAll('.nut-cascader-item')[1].trigger('click');
    await later(60);
    pathChange = wrapper.emitted().pathChange[1];
    expect(pathChange[0][1].value).toBe('A12');
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.setProps({
      modelValue: ['A0', 'A12']
    });
    await later();
    await wrapper.findAll('.nut-cascader-pane')[2].findAll('.nut-cascader-item')[0].trigger('click');
    pathChange = wrapper.emitted().pathChange[2];
    expect(pathChange[0][2].value).toBe('A21');
    expect(wrapper.emitted().pathChange.length).toBe(3);
    expect(wrapper.emitted().change.length).toBe(1);
    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.setProps({
      modelValue: []
    });
    await later();
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.findAll('.nut-cascader-item')[1].trigger('click');
    await later(60);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.emitted().pathChange.length).toBe(4);
    expect(wrapper.emitted().change.length).toBe(1);
  });

  it('change tab', async () => {
    const wrapper = mountCascader({
      props: {
        visible: true,
        modelValue: ['福建', '福州', '鼓楼区'],
        options: mockOptions
      }
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.findAll('.nut-tabs__titles-item__text')[1].trigger('click');
    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.findAll('.nut-tabs__titles-item__text')[0].trigger('click');
    expect(wrapper.html()).toMatchSnapshot();

    await wrapper.find('.nut-tabs__content .nut-cascader-item').trigger('click');
    expect(wrapper.findAll('.nut-tabs__titles-item__text').length).toBe(2);

    await wrapper.setProps({
      visible: false
    });

    // 重新打开时，绑定值和显示一致
    await wrapper.setProps({
      visible: true
    });
    expect(wrapper.findAll('.nut-tabs__titles-item__text').length).toBe(3);
    expect(wrapper.findAll('.nut-tabs__titles-item__text')[2].text()).toBe('鼓楼区');
  });
});
