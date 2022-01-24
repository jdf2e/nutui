export default {
  pages: ['pages/index/index'],
  subpackages: [
    {
      root: 'layout',
      pages: ['pages/layout/index', 'pages/imagepreview/index']
    },
    {
      root: 'feedback',
      pages: [
        'pages/swipe/index',
        'pages/collapse/index',
        'pages/backtop/index',
        'pages/actionsheet/index',
        'pages/dialog/index',
        'pages/toast/index',
        'pages/notify/index',
        'pages/empty/index',
        'pages/noticebar/index',
        'pages/range/index',
        'pages/popup/index',
        'pages/switch/index',
        'pages/swiper/index',
        'pages/drag/index',
        'pages/steps/index',
        'pages/infiniteloading/index',
        'pages/progress/index',
        'pages/circleprogress/index',
        'pages/searchbar/index'
      ]
    },
    {
      root: 'base',
      pages: [
        'pages/cell/index',
        'pages/icon/index',
        'pages/price/index',
        'pages/button/index',
        'pages/avatar/index',
        'pages/overlay/index',
        'pages/divider/index'
      ]
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
        'pages/grid/index',
        'pages/sidenavbar/index'
      ]
    },
    {
      root: 'dentry',
      pages: [
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
        'pages/countdown/index',
        'pages/countup/index',
        'pages/numberkeyboard/index',
        'pages/badge/index',
        'pages/tag/index',
        'pages/popover/index',
        'pages/skeleton/index',
        'pages/cascader/index'
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
        'pages/card/index',
        'pages/table/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI',
    navigationBarTextStyle: 'black'
  }
};
