import { BaseLang } from './baseLang';
class Lang extends BaseLang {
  save = 'Save';
  confirm = 'Confirm';
  cancel = 'Cancel';
  done = 'Done';
  noData = 'No Data';
  placeholder = 'Placeholder';
  select = 'Select';
  video = {
    errorTip: 'Error Tip',
    clickRetry: 'Click Retry'
  };
  fixednav = {
    activeText: 'Close Nav',
    unActiveText: 'Open Nav'
  };
  pagination = {
    prev: 'Previous',
    next: 'Next'
  };
  calendaritem = {
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    today: 'Today'
  };
  shortpassword = {
    title: 'Please input a password',
    desc: 'Verify',
    tips: 'Forget password'
  };
  uploader = {
    ready: 'Ready',
    readyUpload: 'Ready to upload',
    waitingUpload: 'Waiting for upload',
    uploading: 'Uploading',
    success: 'Upload successful',
    error: 'Upload failed'
  };
  countdown = {
    day: ' Day ',
    hour: ' Hour ',
    minute: ' Minute ',
    second: ' Second '
  };
  address = {
    selectRegion: 'Select Region',
    deliveryTo: 'Delivery To',
    chooseAnotherAddress: 'Choose Another Address'
  };
  signature = {
    reSign: 'Re Sign',
    unSupportTpl: `Sorry, the current browser doesn't support canvas, so we can't use this control!`
  };
  ecard = {
    chooseText: 'Select',
    otherValueText: 'Other Value',
    placeholder: 'Placeholder'
  };
  timeselect = {
    pickupTime: 'Pickup Time'
  };
  sku = {
    buyNow: 'Buy Now',
    buyNumber: 'Buy Number',
    addToCart: 'Add to Cart'
  };
  skuheader = {
    skuId: 'Sku Number'
  };
  addresslist = {
    addAddress: 'Add New Address',
    default: 'default'
  };
  comment = {
    complaintsText: 'I have a complaint',
    additionalReview: (day: number) => `Review after ${day} days of purchase`,
    additionalImages: (length: number) => `There are ${length} follow-up comments`
  };
  infiniteloading = {
    loading: 'Loading...',
    pullTxt: 'Loose to refresh',
    loadMoreTxt: 'Oops, this is the bottom'
  };
  datepicker = {
    year: 'Year',
    month: 'Month',
    day: 'Day',
    hour: 'Hour',
    min: 'Minute',
    seconds: 'Second'
  };
  audiooperate = {
    back: 'Back',
    start: 'Start',
    pause: 'Pause',
    forward: 'Forward',
    mute: 'Mute'
  };
}
export default Lang;
