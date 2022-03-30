let subpackages = [
  {
    root: 'layout',
    pages: ['pages/layout/index', 'pages/divider/index', 'pages/sticky/index', 'pages/grid/index']
  },
  {
    root: 'feedback',
    pages: [
      'pages/swipe/index',
      'pages/backtop/index',
      'pages/actionsheet/index',
      'pages/dialog/index',
      'pages/toast/index',
      'pages/notify/index',
      'pages/switch/index',
      'pages/drag/index',
      'pages/infiniteloading/index'
    ]
  },
  {
    root: 'base',
    pages: ['pages/cell/index', 'pages/icon/index', 'pages/button/index', 'pages/overlay/index', 'pages/popup/index']
  },
  {
    root: 'nav',
    pages: [
      'pages/navbar/index',
      'pages/tabbar/index',
      'pages/tabs/index',
      'pages/fixednav/index',
      'pages/elevator/index',
      'pages/menu/index',
      'pages/pagination/index',
      'pages/indicator/index',
      'pages/sidenavbar/index'
    ]
  },
  {
    root: 'dentry',
    pages: [
      'pages/range/index',
      'pages/inputnumber/index',
      'pages/checkbox/index',
      'pages/input/index',
      'pages/uploader/index',
      'pages/rate/index',
      'pages/radio/index',
      'pages/calendar/index',
      'pages/form/index',
      'pages/shortpassword/index',
      'pages/picker/index',
      'pages/datepicker/index',
      'pages/textarea/index',
      'pages/numberkeyboard/index',
      'pages/cascader/index',
      'pages/oldpicker/index',
      'pages/searchbar/index'
    ]
  },
  {
    root: 'exhibition',
    pages: [
      'pages/avatar/index',
      'pages/price/index',
      'pages/imagepreview/index',
      'pages/collapse/index',
      'pages/empty/index',
      'pages/noticebar/index',
      'pages/steps/index',
      'pages/progress/index',
      'pages/circleprogress/index',
      'pages/list/index',
      'pages/countdown/index',
      'pages/countup/index',
      'pages/badge/index',
      'pages/tag/index',
      'pages/popover/index',
      'pages/skeleton/index',
      'pages/table/index',
      'pages/swiper/index'
    ]
  },
  {
    root: 'business',
    pages: [
      'pages/address/index',
      'pages/signature/index',
      'pages/barrage/index',
      'pages/timeselect/index',
      'pages/sku/index',
      'pages/card/index'
    ]
  }
];
export default {
  pages: ['pages/index/index'],
  subpackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI',
    navigationBarTextStyle: 'black'
  }
};
