export abstract class BaseLang {
  abstract save: string;
  abstract confirm: string;
  abstract cancel: string;
  abstract done: string;
  abstract noData: string;
  abstract placeholder: string;
  abstract select: string;
  abstract video: {
    errorTip: string;
    clickRetry: string;
  };
  abstract fixednav: {
    activeText: string;
    unActiveText: string;
  };
  abstract pagination: {
    prev: string;
    next: string;
  };
  abstract calendaritem: {
    weekdays: Array<string>;
    end: string;
    start: string;
    title: string;
    monthTitle: Function;
    today: string;
  };
  abstract shortpassword: {
    title: string;
    desc: string;
    tips: string;
  };
  abstract uploader: {
    ready: string;
    readyUpload: string;
    waitingUpload: string;
    uploading: string;
    success: string;
    error: string;
  };
  abstract countdown: {
    day: string;
    hour: string;
    minute: string;
    second: string;
  };
  abstract address: {
    selectRegion: string;
    deliveryTo: string;
    chooseAnotherAddress: string;
  };
  abstract signature: {
    reSign: string;
    unSupportTpl: string;
  };
  abstract ecard: {
    chooseText: string;
    otherValueText: string;
    placeholder: string;
  };
  abstract timeselect: {
    pickupTime: string;
  };
  abstract sku: {
    buyNow: string;
    buyNumber: string;
    addToCart: string;
  };
  abstract skuheader: {
    skuId: string;
  };
  abstract addresslist: {
    addAddress: string;
    default: string;
  };
  abstract comment: {
    complaintsText: string;
    additionalReview: Function;
    additionalImages: Function;
  };
  abstract infiniteloading: {
    loading: string;
    pullTxt: string;
    loadMoreTxt: string;
  };
}
export default BaseLang;
