const subPackages = [
  {
    root: 'basic',
    pages: [
      'pages/button/index',
      'pages/cell/index',
      'pages/icon/index',
      'pages/overlay/index',
      'pages/popup/index',
      'pages/configprovider/index',
      'pages/image/index'
    ]
  },
  {
    root: 'layout',
    pages: ['pages/layout/index', 'pages/sticky/index', 'pages/divider/index', 'pages/grid/index']
  },
  {
    root: 'nav',
    pages: [
      'pages/navbar/index',
      'pages/fixednav/index',
      'pages/menu/index',
      'pages/tabbar/index',
      'pages/elevator/index',
      'pages/pagination/index',
      'pages/tabs/index',
      'pages/indicator/index',
      'pages/sidenavbar/index'
    ]
  },
  {
    root: 'dentry',
    pages: [
      'pages/range/index',
      'pages/searchbar/index',
      'pages/cascader/index',
      'pages/calendar/index',
      'pages/checkbox/index',
      'pages/datepicker/index',
      'pages/inputnumber/index',
      'pages/input/index',
      'pages/radio/index',
      'pages/rate/index',
      'pages/picker/index',
      'pages/shortpassword/index',
      'pages/textarea/index',
      'pages/uploader/index',
      'pages/numberkeyboard/index',
      'pages/form/index'
    ]
  },
  {
    root: 'feedback',
    pages: [
      'pages/swipe/index',
      'pages/actionsheet/index',
      'pages/backtop/index',
      'pages/drag/index',
      'pages/dialog/index',
      'pages/notify/index',
      'pages/switch/index',
      'pages/toast/index'
    ]
  },
  {
    root: 'exhibition',
    pages: [
      'pages/avatar/index',
      'pages/list/index',
      'pages/progress/index',
      'pages/circleprogress/index',
      'pages/noticebar/index',
      'pages/empty/index',
      'pages/steps/index',
      'pages/swiper/index',
      'pages/price/index',
      'pages/imagepreview/index',
      'pages/countup/index',
      'pages/countdown/index',
      'pages/badge/index',
      'pages/tag/index',
      'pages/popover/index',
      'pages/skeleton/index',
      'pages/collapse/index',
      'pages/table/index',
      'pages/animate/index',
      'pages/ellipsis/index',
      'pages/watermark/index',
      'pages/trendarrow/index'
    ]
  },
  {
    root: 'business',
    pages: [
      'pages/address/index',
      'pages/barrage/index',
      'pages/signature/index',
      'pages/timeselect/index',
      'pages/sku/index',
      'pages/card/index',
      'pages/ecard/index',
      'pages/addresslist/index',
      'pages/category/index',
      'pages/comment/index',
      'pages/invoice/index'
    ]
  }
];

export default {
  pages: ['pages/index/index'],
  subPackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI',
    navigationBarTextStyle: 'black'
  }
};
