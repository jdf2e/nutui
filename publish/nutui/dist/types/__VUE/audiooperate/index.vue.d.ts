import { type PropType } from 'vue';
import { type AudioOperateType } from '../audio/types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<AudioOperateType>;
        default: () => string;
    };
}>, {
    customSlot: import("vue").Ref<import("vue").Slot<any> | undefined, import("vue").Slot<any> | undefined>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    children: import("vue").Ref<[], []>;
    audioData: import("vue").Ref<any, any>;
    handleMute: import("vue").Ref<(payload: MouseEvent) => void, (payload: MouseEvent) => void>;
    forward: import("vue").Ref<(payload: MouseEvent) => void, (payload: MouseEvent) => void>;
    fastBack: import("vue").Ref<(payload: MouseEvent) => void, (payload: MouseEvent) => void>;
    changeStatus: import("vue").Ref<(payload: MouseEvent) => void, (payload: MouseEvent) => void>;
    type: import("vue").Ref<AudioOperateType, AudioOperateType>;
    onClick: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<AudioOperateType>;
        default: () => string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: AudioOperateType;
}, {}, {
    NutButton: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: PropType<string>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            type: {
                type: PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: PropType<string>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            type: {
                type: PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: PropType<string>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            type: {
                type: PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: PropType<string>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
            default: string;
        };
        plain: {
            type: PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        type: {
            type: PropType<import("../button").ButtonType>;
            default: string;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
            default: string;
        };
        block: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
    }, string, {
        color: string;
        shape: import("../button").ButtonShape;
        plain: boolean;
        loading: boolean;
        disabled: boolean;
        type: import("../button").ButtonType;
        size: import("../button").ButtonSize;
        block: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAudioOperate: typeof _default;
    }
}