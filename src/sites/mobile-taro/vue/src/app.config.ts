export default {
  pages: ['pages/index/index'],
  subpackages: [
    {
      root: 'layout',
      pages: [
        'pages/button/index',
        'pages/collapse/index',
        'pages/layout/index'
      ]
    },
    {
      root: 'feedback',
      pages: [
        'pages/backtop/index',
        'pages/actionsheet/index',
        'pages/toast/index',
        'pages/notify/index',
        'pages/picker/index',
        'pages/datepicker/index'
      ]
    },
    {
      root: 'base',
      pages: [
        'pages/cell/index',
        'pages/uploader/index',
        'pages/icon/index',
        'pages/price/index',
        'pages/checkbox/index',
        'pages/swiper/index',
        'pages/avatar/index',
        'pages/popup/index',
        'pages/dialog/index',
        'pages/radio/index',
        'pages/overlay/index',
        'pages/infiniteloading/index',
        'pages/range/index',
        'pages/drag/index',
        'pages/steps/index'
      ]
    },
    {
      root: 'nav',
      pages: ['pages/navbar/index', 'pages/tabbar/index']
    },
    {
      root: 'dentry',
      pages: [
        'pages/inputnumber/index',
        'pages/input/index',
        'pages/switch/index',
        'pages/rate/index',
        'pages/calendar/index',
        'pages/shortpassword/index',
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
