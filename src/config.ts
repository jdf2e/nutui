export const versions = [
  { name: '1.x', link: '/1x/' },
  { name: '2.x', link: '/' },
  { name: '3.x', link: '/3x/' }
];

export const docs = {
  name: '指南',
  packages: [
    {
      name: 'intro',
      cName: '介绍',
      show: true
    },
    {
      name: 'start',
      cName: '快速上手',
      show: true
    },
    {
      name: 'theme',
      cName: '主题定制',
      show: true
    },
    {
      name: 'international',
      cName: '国际化',
      show: true
    },
    {
      name: 'https://github.com/jdf2e/nutui/releases',
      cName: '更新日志',
      show: true,
      isLink: true
    }
  ]
};

export const nav = [
  {
    name: '布局组件',
    packages: [
      {
        name: 'Button',
        sort: 1,
        cName: '按钮组件',
        type: 'component',
        show: true,
        desc: '按钮用于触发一个操作，如提交表单。',
        author: 'richard1015'
      },
      {
        name: 'collapse',
        sort: 2,
        cName: '折叠面板',
        type: 'component',
        show: true,
        desc: '折叠面板',
        author: 'Ymm0008'
      },
      {
        name: 'collapse',
        sort: 3,
        cName: '折叠面板-item',
        type: 'component',
        show: false,
        desc: '折叠面板-item',
        author: 'Ymm0008'
      }
    ]
  },
  {
    name: '操作反馈',
    packages: [
      {
        name: 'BackTop',
        sort: '1',
        cName: '回到顶部',
        type: 'component',
        show: true,
        desc: '较长页面快捷回到顶部',
        author: 'liqiong43'
      }
    ]
  },
  {
    name: '基础组件',
    packages: [
      {
        name: 'Temp',
        sort: 1,
        cName: '模板组件',
        type: 'component',
        show: true,
        desc: '组件模板示例',
        author: 'richard1015'
      },
      {
        name: 'Cell',
        sort: 1,
        cName: '单元格组件',
        type: 'component',
        show: true,
        desc: '展示列表',
        author: 'richard1015'
      },
      {
        name: 'Uploader',
        sort: 2,
        cName: '上传组件',
        type: 'component',
        show: true,
        desc: '上传文件、图片',
        author: 'richard1015'
      },
      {
        name: 'Icon',
        sort: 3,
        cName: '图标组件',
        type: 'component',
        show: true,
        desc: '图标',
        author: 'richard1015'
      },
      {
        name: 'Price',
        sort: 4,
        cName: '价格组件',
        type: 'component',
        show: true,
        desc: '价格组件',
        author: 'ailululu'
      },
      {
        name: 'Checkbox',
        sort: 5,
        cName: '复选按钮',
        type: 'component',
        show: true,
        desc: '复选按钮',
        author: 'Ymm0008'
      }
    ]
  },
  {
    name: '导航组件',
    packages: [
      {
        name: 'Navbar',
        sort: 3,
        cName: '导航组件',
        type: 'componment',
        show: true,
        desc: '导航组件',
        author: 'liqiong43'
      },
      {
        name: 'tab',
        sort: 1,
        cName: '标签组件',
        type: 'component',
        show: true,
        desc: '标签组件',
        author: 'zhenyulei'
      }
    ]
  },
  {
    name: '业务组件',
    packages: []
  }
];
