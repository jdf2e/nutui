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
        'pages/swipe/index',
        'pages/collapse/index',
        'pages/backtop/index',
        'pages/actionsheet/index',
        'pages/dialog/index',
        'pages/toast/index',
        'pages/notify/index',
        'pages/noticebar/index',
        'pages/range/index',
        'pages/popup/index',
        'pages/switch/index',
        'pages/swiper/index',
        'pages/drag/index',
        'pages/steps/index',
        'pages/infiniteloading/index',
        'pages/progress/index',
        'pages/circleprogress/index'
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
        'pages/overlay/index'
      ]
    },
    {
      root: 'nav',
      pages: [
        'pages/navbar/index',
        'pages/tabbar/index',
        'pages/tab/index',
        'pages/fixednav/index',
        'pages/elevator/index'
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
        'pages/shortpassword/index',
        'pages/picker/index',
        'pages/datepicker/index',
        'pages/textarea/index',
        'pages/countdown/index',
        'pages/countup/index',
        'pages/numberkeyboard/index'
      ]
    },
    {
      root: 'business',
      pages: ['pages/address/index', 'pages/barrage/index']
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'NutUI',
    navigationBarTextStyle: 'black'
  }
};
