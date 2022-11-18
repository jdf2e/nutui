import { config, mount } from '@vue/test-utils';
import Menu from '../index.vue';
import MenuItem from '../../menuitem/index.vue';
import NutIcon from '../../icon/index.vue';
import { mockScrollTop } from './../../../utils/unit';
import { h, nextTick } from 'vue';

const options1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
];

const options2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' }
];

const options3 = [
  { text: '全部商品', value: 0 },
  { text: '家庭清洁/纸品', value: 1 },
  { text: '个人护理', value: 2 },
  { text: '美妆护肤', value: 3 },
  { text: '食品饮料', value: 4 },
  { text: '家用电器', value: 5 },
  { text: '母婴', value: 6 },
  { text: '数码', value: 7 },
  { text: '电脑、办公', value: 8 },
  { text: '运动户外', value: 9 },
  { text: '厨具', value: 10 },
  { text: '医疗保健', value: 11 },
  { text: '酒类', value: 12 },
  { text: '生鲜', value: 13 },
  { text: '家具', value: 14 },
  { text: '传统滋补', value: 15 },
  { text: '汽车用品', value: 16 },
  { text: '家居日用', value: 17 }
];

// 所有的测试用例之前执行一次
beforeAll(() => {
  config.global.components = {
    NutIcon,
    MenuItem,
    NutMenuItem: MenuItem,
    NutMenu: Menu
  };
});

test('menu item cols props: nut-menu-item__option flex-basis should be 50%', () => {
  const wrapper = mount(Menu, {
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        cols: 2,
        options: options3
      })
    }
  });

  expect(wrapper.find<HTMLElement>('.nut-menu-item__option').element.style.flexBasis).toEqual('50%');
});

test('menu item options props: html should contain options3 text', () => {
  const wrapper = mount(Menu, {
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        options: options3
      })
    }
  });

  expect(wrapper.html()).toContain('全部商品');
});

test('menu item custom text: nut-menu-item__content html should contain custom text', () => {
  const component = {
    template: `<nut-menu>
      <nut-menu-item v-model="value1" :options="options1" />
      <nut-menu-item>
        <div>custom text</div>
      </nut-menu-item>
    </nut-menu>`,
    data() {
      return {
        options1,
        value1: 0
      };
    }
  };

  const wrapper = mount(component);

  expect(wrapper.html()).toContain('custom text');
});

test('menu item disabled props: nut-menu__item classes should contain disabled', async () => {
  const wrapper = mount(Menu, {
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        disabled: true,
        options: options1
      })
    }
  });
  await nextTick();

  const barItem: any = wrapper.find('.nut-menu__item');
  expect(barItem.classes()).toContain('disabled');
});

test('menu item title props: nut-menu__title-text html should contain custom title', async () => {
  const wrapper = mount(Menu, {
    slots: {
      default: h(MenuItem, {
        title: 'custom title',
        options: options1
      })
    }
  });
  await nextTick();

  expect(wrapper.find('.nut-menu__title-text').html()).toContain('custom title');
});

test('menu item title icon props: nut-menu__title i classes should contain nut-icon-joy-smile', async () => {
  const wrapper = mount(Menu, {
    props: {
      titleIcon: 'joy-smile'
    },
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        options: options1
      })
    }
  });
  await nextTick();

  const titleIcon: any = wrapper.find('.nut-menu__item .nut-menu__title i');
  expect(titleIcon.classes()).toContain('nut-icon-joy-smile');
});

test('menu item option icon props: nut-menu-item__option i classes should contain nut-icon-checklist', async () => {
  const wrapper = mount(Menu, {
    slots: {
      default: h(MenuItem, {
        optionIcon: 'checklist',
        modelValue: 0,
        options: options1
      })
    }
  });

  await nextTick();

  const optionIcon: any = wrapper.find<HTMLElement>('.nut-menu-item__option i');
  expect(optionIcon.classes()).toContain('nut-icon-checklist');
});

test('menu direction props: nut-menu__title i classes should contain nut-icon-arrow-up', async () => {
  const wrapper = mount(Menu, {
    props: {
      direction: 'up'
    },
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        options: options1
      })
    }
  });

  await nextTick();

  const titleIcon: any = wrapper.find<HTMLElement>('.nut-menu__title i');
  expect(titleIcon.classes()).toContain('nut-icon-arrow-up');
});

test('active color props: i in active nut-menu-item__option color and active nut-menu__item color should be both green', async () => {
  const wrapper = mount(Menu, {
    props: {
      activeColor: 'green'
    },
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        options: options1
      })
    }
  });

  await nextTick();
  wrapper.find('.nut-menu__item').trigger('click');
  await nextTick();

  expect(wrapper.find<HTMLElement>('.nut-menu__item.active').element.style.color).toEqual('green');
  expect(wrapper.find<HTMLElement>('.nut-menu-item__option.active i').element.style.color).toEqual('green');
});

test('menu item change props: value2 should be b after click', async () => {
  const wrapper = mount({
    components: {
      NutMenu: Menu,
      NutMenuItem: MenuItem
    },
    template: `
    <nut-menu>
    <nut-menu-item v-model="value2" @change="handleChange" :options="options2" />
  </nut-menu>
    `,
    data: () => {
      return {
        value2: 'a',
        options2
      };
    },
    methods: {
      handleChange(val: any) {
        (this as any).value2 = val;
      }
    }
  });

  await nextTick();
  const tabbarItem: any = wrapper.findAll('.nut-menu-item__option');

  tabbarItem[1].trigger('click');

  expect(wrapper.vm.value2).toBe('b');
});

test('menu close-on-click-overlay props: ', async () => {
  const wrapper = mount(Menu, {
    props: {
      closeOnClickOverlay: true
    },
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        options: options1
      })
    }
  });
  await nextTick();
  wrapper.find('.nut-menu__item').trigger('click');
  await nextTick();

  wrapper.find('.nut-overlay').trigger('click');
  await nextTick();

  expect(wrapper.find<HTMLElement>('.nut-overlay').element.style.display).toEqual('none');
});

test('menu scroll-fixed props: nut-menu classes should contain scroll-fixed', async () => {
  const wrapper = mount(Menu, {
    props: {
      scrollFixed: 50
    },
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        options: options1
      })
    }
  });

  await mockScrollTop(100);

  expect(wrapper.find('.nut-menu').classes()).toContain('scroll-fixed');
});

test('menu title-class props: nut-menu__title classes should contain custom-title-class', async () => {
  const wrapper = mount(Menu, {
    props: {
      titleClass: 'custom-title-class'
    },
    slots: {
      default: h(MenuItem, {
        modelValue: 0,
        options: options1
      })
    }
  });

  await nextTick();

  const menuTitle: any = wrapper.find<HTMLElement>('.nut-menu__title');

  expect(menuTitle.classes()).toContain('custom-title-class');
});

test('menu item open and close events: should be both emitted', async () => {
  const wrapper = mount({
    components: {
      NutMenu: Menu,
      NutMenuItem: MenuItem
    },
    template: `
    <nut-menu>
    <nut-menu-item v-model="value2" @open="handleOpen" @close="handleClose" :options="options2" />
  </nut-menu>
    `,
    data: () => {
      return {
        value2: 'a',
        options2
      };
    },
    methods: {
      handleOpen(val: any) {
        (this as any).value2 = 'b';
      },
      handleClose(val: any) {
        (this as any).value2 = 'c';
      }
    }
  });

  await nextTick();
  wrapper.find('.nut-menu__item').trigger('click');
  expect(wrapper.vm.value2).toBe('b');

  wrapper.find('.placeholder-element').trigger('click');
  expect(wrapper.vm.value2).toBe('c');
});
