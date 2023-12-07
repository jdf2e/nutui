import Toast from './index.vue';
declare const showToast: {
    text(msg: string, opts?: {}): any | undefined;
    success(msg: string, opts?: {}): any | undefined;
    fail(msg: string, opts?: {}): any | undefined;
    warn(msg: string, opts?: {}): any | undefined;
    loading(msg: string, opts?: {}): any | undefined;
    hide(id?: string): void;
    install(app: any): void;
};
export { showToast };
export default Toast;
