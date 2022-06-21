import { BaseLang } from './baseLang';
class Lang extends BaseLang {
  save = '保存';
  confirm = '確認';
  cancel = '取消';
  done = '完成';
  noData = '暫無數據';
  placeholder = '請輸入';
  select = '請選擇';
  video = {
    errorTip: '視頻加載失敗',
    clickRetry: '點擊重試'
  };
  fixednav = {
    activeText: '收起導航',
    unActiveText: '快速導航'
  };
  pagination = {
    prev: '上一頁',
    next: '下一頁'
  };
  calendaritem = {
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    end: '結束',
    start: '開始',
    title: '行事曆選擇',
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    today: '今天'
  };
  shortpassword = {
    title: '請輸入密碼',
    desc: '您使用了虛擬資產,請進行驗證',
    tips: '忘記密碼'
  };
  uploader = {
    ready: '準備完成',
    readyUpload: '準備上傳',
    waitingUpload: '等待上傳',
    uploading: '上傳中',
    success: '上傳成功',
    error: '上傳失敗'
  };
  countdown = {
    day: '天',
    hour: '時',
    minute: '分',
    second: '秒'
  };
  address = {
    selectRegion: '請選擇所在地區',
    deliveryTo: '配送至',
    chooseAnotherAddress: '選擇其他地址'
  };
  signature = {
    reSign: '重簽',
    unSupportTpl: '對不起,當前瀏覽器不支持Canvas,無法使用本控制項！'
  };
  ecard = {
    chooseText: '請選擇電子卡面值',
    otherValueText: '其他面值',
    placeholder: '請輸入1-5000整數'
  };
  timeselect = {
    pickupTime: '取件時間'
  };
  sku = {
    buyNow: '立即購買',
    buyNumber: '購買數量',
    addToCart: '加入購物車'
  };
  skuheader = {
    skuId: '商品編號'
  };
  addresslist = {
    addAddress: '新建地址',
    default: '默认'
  };
  comment = {
    complaintsText: '我要投訴',
    additionalReview: (day: number) => `購買${day}天後追評`,
    additionalImages: (length: number) => `${length}張追評圖片`
  };
  infiniteloading = {
    loading: '加載中...',
    pullTxt: '鬆開刷新',
    loadMoreTxt: '哎呀，這裡是底部了啦'
  };
  datepicker = {
    year: '年',
    month: '月',
    day: '日',
    hour: '時',
    min: '分',
    seconds: '秒'
  };
  audiooperate = {
    back: '倒退',
    start: '開始',
    pause: '暫停',
    forward: '快進',
    mute: '靜音'
  };
}
export default Lang;
