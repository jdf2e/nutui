import Notify from './index.vue';
declare const showNotify: {
    text(msg: string, obj?: {}): {
        [x: string]: unknown;
    } | undefined;
    primary(msg: string, obj?: {}): {
        [x: string]: unknown;
    } | undefined;
    success(msg: string, obj?: {}): {
        [x: string]: unknown;
    } | undefined;
    danger(msg: string, obj?: {}): {
        [x: string]: unknown;
    } | undefined;
    warn(msg: string, obj?: {}): {
        [x: string]: unknown;
    } | undefined;
    hide(): void;
    install(app: any): void;
};
export { showNotify };
export default Notify;
