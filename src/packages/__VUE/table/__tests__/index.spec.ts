import { mount, config } from '@vue/test-utils';
import Table from '../index.vue';
import { nextTick, h } from 'vue';
import NutIcon from '../../icon/index.vue';
import NutButton from '../../button/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutButton
  };
});

afterAll(() => {
  config.global.components = {};
});

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const columns = [
  {
    title: '姓名',
    key: 'name',
    align: 'center'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '学历',
    key: 'record'
  }
];

const data = [
  {
    sex: '男',
    name: 'Tom',
    record: '小学'
  },
  {
    name: 'Lucy',
    sex: '女',
    record: '本科'
  },
  {
    name: 'Jack',
    sex: '男',
    record: '高中'
  }
];

const column2 = [
  {
    title: '姓名',
    key: 'name',
    align: 'center'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '学历',
    key: 'record'
  },
  {
    title: '操作',
    key: 'render'
  }
];

const data2 = [
  {
    name: 'Tom',
    sex: '男',
    record: '小学',
    render: () => {
      return h(
        NutButton,
        {
          onClick: () => {},
          size: 'small',
          type: 'primary'
        },
        () => h('div', {}, 'Hello')
      );
    }
  },
  {
    name: 'Lucy',
    sex: '女',
    record: '本科',
    render: () => {
      return h(NutIcon, { name: 'dongdong', size: '14px' });
    }
  },
  {
    name: 'Jack',
    sex: '男',
    record: '高中',
    render: () => {
      return h(
        NutButton,
        {
          type: 'success',
          size: 'small',
          onClick: () => {
            window.open('https://www.jd.com');
          }
        },
        () => h('div', {}, '跳转到京东')
      );
    }
  }
];

test('render bordered props', async () => {
  const wrapper = mount(Table, {
    props: {
      bordered: true,
      columns,
      data
    }
  });

  await nextTick();

  const headBorder = wrapper.findAll('.nut-table__main__head__tr--border');

  expect(headBorder.length).toBeGreaterThan(0);
});

test('render align props', async () => {
  const wrapper = mount(Table, {
    props: {
      bordered: true,
      columns,
      data
    }
  });

  await nextTick();

  const headTh = wrapper.findAll('.nut-table__main__head__tr__th');
  const bodyTd = wrapper.findAll('.nut-table__main__body__tr__td');

  expect(headTh[0].classes()).toContain('nut-table__main__head__tr--aligncenter');
  expect(bodyTd[0].classes()).toContain('nut-table__main__head__tr--aligncenter');
  expect(bodyTd[3].classes()).toContain('nut-table__main__head__tr--aligncenter');
  expect(bodyTd[6].classes()).toContain('nut-table__main__head__tr--aligncenter');
});

test('show summary', async () => {
  const wrapper = mount(Table, {
    props: {
      bordered: true,
      columns,
      data,
      summary: () => {
        return {
          value: '这是总结栏',
          colspan: 5
        };
      }
    }
  });

  await nextTick();

  const tableSummary = wrapper.find('.nut-table__summary');

  expect(tableSummary.exists()).toBe(true);
});

test('render striped props', async () => {
  const wrapper = mount(Table, {
    props: {
      bordered: true,
      columns,
      data,
      striped: true
    }
  });

  await nextTick();

  const tableMain = wrapper.find('.nut-table__main');

  expect(tableMain.classes()).toContain('nut-table__main--striped');
});

test('render no data', async () => {
  const wrapper = mount(Table, {
    props: {
      bordered: true,
      columns,
      data
    }
  });

  wrapper.setProps({
    data: []
  });

  await nextTick();

  const tableNoData = wrapper.find('.nut-table__nodata');

  expect(tableNoData.exists()).toBe(true);
});

test('render no data of user defined', async () => {
  const wrapper = mount(Table, {
    props: {
      bordered: true,
      columns,
      data
    },
    slots: {
      nodata: h('div', { class: 'no-data' }, '这里是自定义展示')
    }
  });

  wrapper.setProps({
    data: []
  });

  await nextTick();

  const tableNoData = wrapper.find('.no-data');

  expect(tableNoData.html()).toContain('这里是自定义展示');
});

test('user defined td content', async () => {
  const wrapper = mount(Table, {
    props: {
      bordered: true,
      columns: column2,
      data: data2
    }
  });

  await nextTick();

  const bodyTd = wrapper.findAll('.nut-table__main__body__tr__td');

  expect(bodyTd[3].find('.nut-button').exists()).toBe(true);
});

test('render async', async () => {
  const wrapper = mount(Table, {
    props: {
      bordered: true,
      columns: columns,
      data: []
    }
  });

  await nextTick();

  const bodyTr = wrapper.findAll('.nut-table__main__body__tr');

  expect(bodyTr.length).toBe(0);

  await sleep(2000);

  wrapper.setProps({
    data
  });

  await nextTick();

  expect(wrapper.findAll('.nut-table__main__body__tr').length).toBe(3);
});
