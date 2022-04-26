import { ComponentDesc } from './componentDesc';

export const componentMap: Record<string, ComponentDesc> = {
  actionsheet: {
    site: '/actionsheet',
    props: ["v-model:visible=''"]
  },
  address: {
    site: '/address',
    props: ["v-model:visible=''"]
  },
  addresslist: {
    site: '/addresslist',
    props: ["data=''"]
  },
  audio: {
    site: '/audio',
    props: ["url=''"]
  },
  audiooperate: {
    site: '/audiooperate',
    props: ['']
  },
  avatar: {
    site: '/avatar',
    props: ["size=''"]
  },
  backtop: {
    site: '/backtop',
    props: ["el-id=''"]
  },
  badge: {
    site: '/badge',
    props: ["value=''"]
  },
  barrage: {
    site: '/barrage',
    props: ["danmu=''"]
  },
  button: {
    site: '/button',
    props: ["type=''"]
  },
  calendar: {
    site: '/calendar',
    props: ["v-model:visible=''"]
  },
  card: {
    site: '/card',
    props: ["img-url=''"]
  },
  cascader: {
    site: '/cascader',
    props: ["v-model=''"]
  },
  category: {
    site: '/category',
    props: ["type=''"]
  },
  cell: {
    site: '/cell',
    props: ["title=''"]
  },
  checkbox: {
    site: '/checkbox',
    props: ["v-model=''"]
  },
  circleprogress: {
    site: '/circleprogress',
    props: ["progress=''"]
  },
  collapse: {
    site: '/collapse',
    props: ["v-model=''"]
  },
  comment: {
    site: '/comment',
    props: ["headerType=''"]
  },
  countdown: {
    site: '/countdown',
    props: ["v-model=''"]
  },
  countup: {
    site: '/countup',
    props: ["init-num=''"]
  },
  datepicker: {
    site: '/datepicker',
    props: ["v-model=''"]
  },
  dialog: {
    site: '/dialog',
    props: ["title=''"]
  },
  divider: {
    site: '/divider',
    props: ["dashed=''"]
  },
  drag: {
    site: '/drag',
    props: ["attract=''"]
  },
  ecard: {
    site: '/ecard',
    props: ["modelValue=''"]
  },
  elevator: {
    site: '/elevator',
    props: ["height=''"]
  },
  empty: {
    site: '/empty',
    props: ["image=''"]
  },
  fixednav: {
    site: '/fixednav',
    props: ["visible=''"]
  },
  form: {
    site: '/form',
    props: ["model-value=''"]
  },
  grid: {
    site: '/grid',
    props: ["column-num=''"]
  },
  icon: {
    site: '/icon',
    props: ["name=''"]
  },
  imagepreview: {
    site: '/imagepreview',
    props: ["show=''"]
  },
  indicator: {
    site: '/indicator',
    props: ["current=''"]
  },
  infiniteloading: {
    site: '/infiniteloading',
    props: ["has-more=''"]
  },
  input: {
    site: '/input',
    props: ["v-model=''"]
  },
  inputnumber: {
    site: '/inputnumber',
    props: ["v-model=''"]
  },
  layout: {
    site: '/layout',
    props: ["type=''"]
  },
  list: {
    site: '/list',
    props: ["height=''"]
  },
  menu: {
    site: '/menu',
    props: ["active-color=''"]
  },
  navbar: {
    site: '/navbar',
    props: ["title=''"]
  },
  noticebar: {
    site: '/noticebar',
    props: ["direction=''"]
  },
  notify: {
    site: '/notify',
    props: ["type=''"]
  },
  numberkeyboard: {
    site: '/numberkeyboard',
    props: ["v-model:visible=''"]
  },
  oldpicker: {
    site: '/oldpicker',
    props: ["v-model:visible=''"]
  },
  overlay: {
    site: '/overlay',
    props: ["v-model:visible=''"]
  },
  pagination: {
    site: '/pagination',
    props: ["v-model=''"]
  },
  picker: {
    site: '/picker',
    props: ["v-model:value=''"]
  },
  popover: {
    site: '/popover',
    props: ["list=''"]
  },
  popup: {
    site: '/popup',
    props: ["v-model:visible=''"]
  },
  price: {
    site: '/price',
    props: ["price=''"]
  },
  progress: {
    site: '/progress',
    props: ["percentage=''"]
  },
  pullrefresh: {
    site: '/pullrefresh',
    props: ["useWindow=''"]
  },
  radio: {
    site: '/radio',
    props: ["disabled=''"]
  },
  range: {
    site: '/range',
    props: ["v-model=''"]
  },
  rate: {
    site: '/rate',
    props: ["v-model=''"]
  },
  searchbar: {
    site: '/searchbar',
    props: ["max-length=''"]
  },
  shortpassword: {
    site: '/shortpassword',
    props: ["v-model=''"]
  },
  sidenavbar: {
    site: '/sidenavbar',
    props: ["offset=''"]
  },
  signature: {
    site: '/signature',
    props: ["custom-class=''"]
  },
  skeleton: {
    site: '/skeleton',
    props: ["loading=''"]
  },
  sku: {
    site: '/sku',
    props: ["v-model:visible=''"]
  },
  steps: {
    site: '/steps',
    props: ["direction=''"]
  },
  sticky: {
    site: '/sticky',
    props: ["position=''"]
  },
  swipe: {
    site: '/swipe',
    props: ["name=''"]
  },
  swiper: {
    site: '/swiper',
    props: ["width=''"]
  },
  swiperitem: {
    site: '/swiperitem',
    props: ['']
  },
  switch: {
    site: '/switch',
    props: ["v-model=''"]
  },
  tabbar: {
    site: '/tabbar',
    props: ["v-model:visible=''"]
  },
  table: {
    site: '/table',
    props: ["bordered=''"]
  },
  tabs: {
    site: '/tabs',
    props: ["v-model=''"]
  },
  tag: {
    site: '/tag',
    props: ["type=''"]
  },
  temp: {
    site: '/temp',
    props: ["name=''"]
  },
  textarea: {
    site: '/textarea',
    props: ["v-model=''"]
  },
  timedetail: {
    site: '/timedetail',
    props: ["height=''"]
  },
  timepannel: {
    site: '/timepannel',
    props: ["height=''"]
  },
  timeselect: {
    site: '/timeselect',
    props: ["visible=''"]
  },
  toast: {
    site: '/toast',
    props: ["Toast.text=''"]
  },
  uploader: {
    site: '/uploader',
    props: ["auto-upload=''"]
  },
  video: {
    site: '/video',
    props: ["source=''"]
  }
};
