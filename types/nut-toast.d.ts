import Vue from 'vue';

interface NutToast extends Vue {
    hide: () => void;
}

interface NutToastInstance {
    text: (msg: string, option?: NutToastOption) => NutToast;
    success: (msg: string, option?: NutToastOption) => NutToast;
    fail: (msg: string, option?: NutToastOption) => NutToast;
    warn: (msg: string, option?: NutToastOption) => NutToast;
    loading: (msg: string, option?: NutToastOption) => NutToast;
}

interface NutToastOption {
    id?: string | number;
    duration?: number;
    center?: boolean;
    bottom?: boolean;
    textAlignCenter?: boolean;
    bgColor?: string;
    customClass?: string;
    icon?: string;
    size?: string;
    cover?: boolean;
    loadingRotate?: boolean;
    onClose?: () => void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $toast: NutToastInstance;
    }
}
