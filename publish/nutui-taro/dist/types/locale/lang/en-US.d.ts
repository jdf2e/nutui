import { BaseLang } from './baseLang';
declare class Lang extends BaseLang {
    save: string;
    confirm: string;
    cancel: string;
    done: string;
    noData: string;
    placeholder: string;
    select: string;
    video: {
        errorTip: string;
        clickRetry: string;
    };
    fixednav: {
        activeText: string;
        unActiveText: string;
    };
    pagination: {
        prev: string;
        next: string;
    };
    calendaritem: {
        weekdays: string[];
        end: string;
        start: string;
        title: string;
        monthTitle: (year: number, month: number) => string;
        today: string;
    };
    calendarcard: {
        weekdays: string[];
        end: string;
        start: string;
        title: string;
        monthTitle: (year: number, month: number) => string;
        today: string;
    };
    shortpassword: {
        title: string;
        desc: string;
        tips: string;
    };
    uploader: {
        ready: string;
        readyUpload: string;
        waitingUpload: string;
        uploading: string;
        success: string;
        error: string;
    };
    countdown: {
        day: string;
        hour: string;
        minute: string;
        second: string;
    };
    address: {
        selectRegion: string;
        deliveryTo: string;
        chooseAnotherAddress: string;
    };
    signature: {
        reSign: string;
        unSupportTpl: string;
    };
    ecard: {
        chooseText: string;
        otherValueText: string;
        placeholder: string;
    };
    timeselect: {
        pickupTime: string;
    };
    sku: {
        buyNow: string;
        buyNumber: string;
        addToCart: string;
    };
    skuheader: {
        skuId: string;
    };
    addresslist: {
        addAddress: string;
        default: string;
    };
    comment: {
        complaintsText: string;
        additionalReview: (day: number) => string;
        additionalImages: (length: number) => string;
    };
    infiniteloading: {
        loading: string;
        pullTxt: string;
        loadMoreTxt: string;
    };
    datepicker: {
        year: string;
        month: string;
        day: string;
        hour: string;
        min: string;
        seconds: string;
    };
    audiooperate: {
        back: string;
        start: string;
        pause: string;
        forward: string;
        mute: string;
    };
    pullrefresh: {
        pulling: string;
        loosing: string;
        loading: string;
        complete: string;
    };
}
export default Lang;
