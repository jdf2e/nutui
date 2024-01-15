import { PropType } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    times: {
        type: PropType<any[]>;
        default: () => never[];
    };
}, {
    getClass: (item: string) => {
        'nut-time-detail__detail__list__item': boolean;
        'nut-time-detail__detail__list__item--curr': boolean;
    } | undefined;
    renderData: import("vue").ComputedRef<any>;
    handleTime: (time: string) => void;
    currentKey: import("vue").Ref<unknown>;
    currentTime: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    times: {
        type: PropType<any[]>;
        default: () => never[];
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    times: any[];
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTimeDetail: typeof _default;
    }
}