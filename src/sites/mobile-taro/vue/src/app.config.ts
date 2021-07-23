export default {
  pages: ['pages/index/index'],
  subpackages: [
    {
      root: 'layout',
      pages: ['pages/layout/index']
    },
    {
      root: 'feedback',
      pages: [
        'pages/collapse/index',
        'pages/backtop/index',
        'pages/actionsheet/index',
        'pages/dialog/index',
        'pages/toast/index',
        'pages/notify/index',
        'pages/swiper/index',
        'pages/drag/index',
        'pages/steps/index',
        'pages/infiniteloading/index'
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
        'pages/popup/index',
        'pages/overlay/index'
      ]
    },
    {
      root: 'nav',
      pages: ['pages/navbar/index', 'pages/tabbar/index', 'pages/tab/index']
    },
    {
      root: 'dentry',
      pages: [
        'pages/inputnumber/index',
        'pages/checkbox/index',
        'pages/input/index',
        'pages/switch/index',
        'pages/uploader/index',
        'pages/rate/index',
        'pages/radio/index',
        'pages/calendar/index',
        'pages/shortpassword/index',
        'pages/picker/index',
        'pages/datepicker/index',
        'pages/range/index',
        'pages/textarea/index'
      ]
    },
    {
      root: 'business',
      pages: ['pages/address/index']
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI',
    navigationBarTextStyle: 'black'
  }
};
