var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { B as BaseLang } from "./baseLang-Bnfy6fTl.js";
class Lang extends BaseLang {
  constructor() {
    super(...arguments);
    __publicField(this, "save", "保存");
    __publicField(this, "confirm", "确认");
    __publicField(this, "cancel", "取消");
    __publicField(this, "done", "完成");
    __publicField(this, "noData", "暂无数据");
    __publicField(this, "placeholder", "请输入");
    __publicField(this, "select", "请选择");
    __publicField(this, "video", {
      errorTip: "视频加载失败",
      clickRetry: "点击重试"
    });
    __publicField(this, "fixednav", {
      activeText: "收起导航",
      unActiveText: "快速导航"
    });
    __publicField(this, "pagination", {
      prev: "上一页",
      next: "下一页"
    });
    __publicField(this, "calendaritem", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (year, month) => `${year}年${month}月`,
      today: "今天"
    });
    __publicField(this, "calendarcard", {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      end: "结束",
      start: "开始",
      title: "日期选择",
      monthTitle: (year, month) => `${year}年${month}月`,
      today: "今天"
    });
    __publicField(this, "shortpassword", {
      title: "请输入密码",
      desc: "您使用了虚拟资产，请进行验证",
      tips: "忘记密码"
    });
    __publicField(this, "uploader", {
      ready: "准备完成",
      readyUpload: "准备上传",
      waitingUpload: "等待上传",
      uploading: "上传中",
      success: "上传成功",
      error: "上传失败"
    });
    __publicField(this, "countdown", {
      day: "天",
      hour: "时",
      minute: "分",
      second: "秒"
    });
    __publicField(this, "address", {
      selectRegion: "请选择所在地区",
      deliveryTo: "配送至",
      chooseAnotherAddress: "选择其他地址"
    });
    __publicField(this, "signature", {
      reSign: "重签",
      unSupportTpl: "对不起，当前浏览器不支持Canvas，无法使用本控件！"
    });
    __publicField(this, "ecard", {
      chooseText: "请选择电子卡面值",
      otherValueText: "其他面值",
      placeholder: "请输入1-5000整数"
    });
    __publicField(this, "timeselect", {
      pickupTime: "取件时间"
    });
    __publicField(this, "sku", {
      buyNow: "立即购买",
      buyNumber: "购买数量",
      addToCart: "加入购物车"
    });
    __publicField(this, "skuheader", {
      skuId: "商品编号"
    });
    __publicField(this, "addresslist", {
      addAddress: "新建地址",
      default: "默认"
    });
    __publicField(this, "comment", {
      complaintsText: "我要投诉",
      additionalReview: (day) => `购买${day}天后追评`,
      additionalImages: (length) => `${length}张追评图片`
    });
    __publicField(this, "infiniteloading", {
      loading: "加载中...",
      pullTxt: "松开刷新",
      loadMoreTxt: "哎呀，这里是底部了啦"
    });
    __publicField(this, "datepicker", {
      year: "年",
      month: "月",
      day: "日",
      hour: "时",
      min: "分",
      seconds: "秒"
    });
    __publicField(this, "audiooperate", {
      back: "倒退",
      start: "开始",
      pause: "暂停",
      forward: "快进",
      mute: "静音"
    });
    __publicField(this, "pullrefresh", {
      pulling: "下拉刷新",
      loosing: "释放刷新",
      loading: "加载中...",
      complete: "刷新成功"
    });
  }
}
export {
  Lang as default
};
