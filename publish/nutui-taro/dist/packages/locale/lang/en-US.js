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
    __publicField(this, "save", "Save");
    __publicField(this, "confirm", "Confirm");
    __publicField(this, "cancel", "Cancel");
    __publicField(this, "done", "Done");
    __publicField(this, "noData", "No Data");
    __publicField(this, "placeholder", "Placeholder");
    __publicField(this, "select", "Select");
    __publicField(this, "video", {
      errorTip: "Error Tip",
      clickRetry: "Click Retry"
    });
    __publicField(this, "fixednav", {
      activeText: "Close Nav",
      unActiveText: "Open Nav"
    });
    __publicField(this, "pagination", {
      prev: "Previous",
      next: "Next"
    });
    __publicField(this, "calendaritem", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (year, month) => `${year}/${month}`,
      today: "Today"
    });
    __publicField(this, "calendarcard", {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      end: "End",
      start: "Start",
      title: "Calendar",
      monthTitle: (year, month) => `${year}/${month}`,
      today: "Today"
    });
    __publicField(this, "shortpassword", {
      title: "Please input a password",
      desc: "Verify",
      tips: "Forget password"
    });
    __publicField(this, "uploader", {
      ready: "Ready",
      readyUpload: "Ready to upload",
      waitingUpload: "Waiting for upload",
      uploading: "Uploading",
      success: "Upload successful",
      error: "Upload failed"
    });
    __publicField(this, "countdown", {
      day: " Day ",
      hour: " Hour ",
      minute: " Minute ",
      second: " Second "
    });
    __publicField(this, "address", {
      selectRegion: "Select Region",
      deliveryTo: "Delivery To",
      chooseAnotherAddress: "Choose Another Address"
    });
    __publicField(this, "signature", {
      reSign: "Re Sign",
      unSupportTpl: `Sorry, the current browser doesn't support canvas, so we can't use this control!`
    });
    __publicField(this, "ecard", {
      chooseText: "Select",
      otherValueText: "Other Value",
      placeholder: "Placeholder"
    });
    __publicField(this, "timeselect", {
      pickupTime: "Pickup Time"
    });
    __publicField(this, "sku", {
      buyNow: "Buy Now",
      buyNumber: "Buy Number",
      addToCart: "Add to Cart"
    });
    __publicField(this, "skuheader", {
      skuId: "Sku Number"
    });
    __publicField(this, "addresslist", {
      addAddress: "Add New Address",
      default: "default"
    });
    __publicField(this, "comment", {
      complaintsText: "I have a complaint",
      additionalReview: (day) => `Review after ${day} days of purchase`,
      additionalImages: (length) => `There are ${length} follow-up comments`
    });
    __publicField(this, "infiniteloading", {
      loading: "Loading...",
      pullTxt: "Loose to refresh",
      loadMoreTxt: "Oops, this is the bottom"
    });
    __publicField(this, "datepicker", {
      year: "Year",
      month: "Month",
      day: "Day",
      hour: "Hour",
      min: "Minute",
      seconds: "Second"
    });
    __publicField(this, "audiooperate", {
      back: "Back",
      start: "Start",
      pause: "Pause",
      forward: "Forward",
      mute: "Mute"
    });
    __publicField(this, "pullrefresh", {
      pulling: "Pull to refresh...",
      loosing: "Loose to refresh...",
      loading: "Loading...",
      complete: "Refresh successfully"
    });
  }
}
export {
  Lang as default
};
