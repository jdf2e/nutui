var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { B as BaseLang } from "./baseLang-Bnfy6fTl.js";
class Lang extends BaseLang {
  constructor() {
    super(...arguments);
    __publicField(this, "save", "保存");
    __publicField(this, "confirm", "確認");
    __publicField(this, "cancel", "取消");
    __publicField(this, "done", "完成");
    __publicField(this, "noData", "暫無數據");
    __publicField(this, "placeholder", "請輸入");
    __publicField(this, "select", "請選擇");
    __publicField(this, "video", {
      errorTip: "視頻加載失敗",
      clickRetry: "點擊重試"
    });
    __publicField(this, "fixednav", {
      activeText: "收起導航",
      unActiveText: "快速導航"
    });
    __publicField(this, "pagination", {
      prev: "上一頁",
      next: "下一頁"
    });
    __publicField(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "結束",
      start: "開始",
      title: "行事曆選擇",
      monthTitle: (year, month) => `${year}年${month}月`,
      today: "今天"
    });
    __publicField(this, "calendarcard", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "結束",
      start: "開始",
      title: "行事曆選擇",
      monthTitle: (year, month) => `${year}年${month}月`,
      today: "今天"
    });
    __publicField(this, "shortpassword", {
      title: "請輸入密碼",
      desc: "您使用了虛擬資產,請進行驗證",
      tips: "忘記密碼"
    });
    __publicField(this, "uploader", {
      ready: "準備完成",
      readyUpload: "準備上傳",
      waitingUpload: "等待上傳",
      uploading: "上傳中",
      success: "上傳成功",
      error: "上傳失敗"
    });
    __publicField(this, "countdown", {
      day: "天",
      hour: "時",
      minute: "分",
      second: "秒"
    });
    __publicField(this, "address", {
      selectRegion: "請選擇所在地區",
      deliveryTo: "配送至",
      chooseAnotherAddress: "選擇其他地址"
    });
    __publicField(this, "signature", {
      reSign: "重簽",
      unSupportTpl: "對不起,當前瀏覽器不支持Canvas,無法使用本控制項！"
    });
    __publicField(this, "ecard", {
      chooseText: "請選擇電子卡面值",
      otherValueText: "其他面值",
      placeholder: "請輸入1-5000整數"
    });
    __publicField(this, "timeselect", {
      pickupTime: "取件時間"
    });
    __publicField(this, "sku", {
      buyNow: "立即購買",
      buyNumber: "購買數量",
      addToCart: "加入購物車"
    });
    __publicField(this, "skuheader", {
      skuId: "商品編號"
    });
    __publicField(this, "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    __publicField(this, "comment", {
      complaintsText: "我要投訴",
      additionalReview: (day) => `購買${day}天後追評`,
      additionalImages: (length) => `${length}張追評圖片`
    });
    __publicField(this, "infiniteloading", {
      loading: "加載中...",
      pullTxt: "鬆開刷新",
      loadMoreTxt: "哎呀，這裡是底部了啦"
    });
    __publicField(this, "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "時",
      min: "分",
      seconds: "秒"
    });
    __publicField(this, "audiooperate", {
      back: "倒退",
      start: "開始",
      pause: "暫停",
      forward: "快進",
      mute: "靜音"
    });
    __publicField(this, "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "釋放刷新",
      loading: "加載中...",
      complete: "刷新成功"
    });
  }
}
export {
  Lang as default
};
