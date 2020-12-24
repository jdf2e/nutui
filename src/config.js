module.exports = {
  versions: [
    {
      name: '1.x',
      link: '/1x/'
    },
    {
      name: '2.x',
      link: '/'
    },
    {
      name: '3.x',
      link: '/3x/'
    }
  ],
  header: [
    {
      name: 'guide',
      cName: '指南',
      path: '/'
    },
    {
      name: '/',
      cName: '组件',
      path: '/'
    },
    {
      name: 'example',
      cName: '示例',
      path: '/'
    },
    {
      name: 'resource',
      cName: '资源',
      path: '/resource'
    }
  ],
  docs: {
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
  },
  nav: [
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
        },
        {
          name: 'Layout',
          sort: 4,
          cName: '布局',
          type: 'component',
          show: true,
          desc: '简便地创建布局',
          author: 'undo'
        },
        {
          name: 'col',
          sort: 5,
          cName: '布局-Col',
          type: 'component',
          show: false,
          desc: '布局组件Col',
          author: 'undo'
        },
        {
          name: 'row',
          sort: 6,
          cName: '布局-Row',
          type: 'component',
          show: false,
          desc: '布局组件Row',
          author: 'undo'
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
        },
        {
          name: 'Swiper',
          sort: 6,
          cName: '轮播',
          type: 'component',
          show: true,
          desc: '轮播',
          author: 'ailululu'
        },
        {
          name: 'Avatar',
          sort: 7,
          cName: '头像',
          type: 'component',
          show: true,
          desc: '头像',
          author: 'ailululu'
        },
        {
          version: '3.0.0',
          name: 'Radio',
          type: 'component',
          cName: '单选按钮',
          desc: '单选按钮',
          sort: 9,
          show: true,
          author: 'Ymm0008'
        },
        {
          version: '3.0.0',
          name: 'RadioGroup',
          type: 'component',
          cName: '单选按钮组',
          desc: '单选按钮组',
          sort: 10,
          show: false,
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
        },
        {
          name: 'menu',
          sort: 2,
          cName: '菜单组件',
          type: 'component',
          show: true,
          desc: '下拉菜单组件',
          author: 'vickyYE'
        },
        {
          name: 'tabbar',
          sort: 2,
          cName: '标签栏组件',
          type: 'component',
          show: true,
          desc: '标签栏组件',
          author: 'Drjingfubo'
        }
      ]
    },
    {
      name: '数据录入',
      packages: [
        {
          name: 'InputNumber',
          sort: 1,
          cName: '数字输入框',
          type: 'component',
          show: true,
          desc: '数字输入框组件',
          author: 'szg2008'
        },
        {
          name: 'Input',
          sort: 2,
          cName: '输入框',
          type: 'component',
          show: true,
          desc: '输入框组件',
          author: 'gxx158'
        },
        {
          version: '3.0.0',
          name: 'Switch',
          type: 'component',
          cName: '开关组件',
          desc: '用来打开或关闭选项',
          sort: 3,
          show: true,
          author: 'zongyue3'
        },
        {
          version: '3.0.0',
          name: 'Rate',
          sort: 4,
          cName: '评分',
          type: 'component',
          show: true,
          desc: '评分组件',
          author: 'undo'
        }
      ]
    },
    {
      name: '业务组件',
      packages: []
    }
  ]
};
