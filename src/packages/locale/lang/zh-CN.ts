import { BaseLang } from './baseLang';
class Lang extends BaseLang {
  save = '保存';
  confirm = '确认';
  cancel = '取消';
  done = '完成';
  noData = '暂无数据';
  placeholder = '请输入';
  select = '请选择';
  video = {
    errorTip: '视频加载失败',
    clickRetry: '点击重试'
  };
  fixednav = {
    activeText: '收起导航',
    unActiveText: '快速导航'
  };
  pagination = {
    prev: '上一页',
    next: '下一页'
  };
  calendaritem = {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    end: '结束',
    start: '开始',
    title: '日历选择',
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    today: '今天'
  };
  shortpassword = {
    title: '请输入密码',
    desc: '您使用了虚拟资产，请进行验证',
    tips: '忘记密码'
  };
  uploader = {
    ready: '准备完成',
    readyUpload: '准备上传',
    waitingUpload: '等待上传',
    uploading: '上传中',
    success: '上传成功',
    error: '上传失败'
  };
  countdown = {
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒'
  };
  address = {
    selectRegion: '请选择所在地区',
    deliveryTo: '配送至',
    chooseAnotherAddress: '选择其他地址'
  };
  signature = {
    reSign: '重签',
    unSupportTpl: '对不起，当前浏览器不支持Canvas，无法使用本控件！'
  };
  ecard = {
    chooseText: '请选择电子卡面值',
    otherValueText: '其他面值',
    placeholder: '请输入1-5000整数'
  };
  timeselect = {
    pickupTime: '取件时间'
  };
  sku = {
    buyNow: '立即购买',
    buyNumber: '购买数量',
    addToCart: '加入购物车'
  };
  skuheader = {
    skuId: '商品编号'
  };
  addresslist = {
    addAddress: '新建地址',
    default: '默认'
  };
  comment = {
    complaintsText: '我要投诉',
    additionalReview: (day: number) => `购买${day}天后追评`,
    additionalImages: (length: number) => `${length}张追评图片`
  };
  infiniteloading = {
    loading: '加载中...',
    pullTxt: '松开刷新',
    loadMoreTxt: '哎呀，这里是底部了啦'
  };
  datepicker = {
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    min: '分',
    seconds: '秒'
  };
  audiooperate = {
    back: '倒退',
    start: '开始',
    pause: '暂停',
    forward: '快进',
    mute: '静音'
  };
}
export default Lang;
