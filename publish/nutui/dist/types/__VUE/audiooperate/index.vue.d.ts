import { type PropType } from 'vue';
import { type AudioOperateType } from '../audio/types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: PropType<AudioOperateType>;
        default: () => string;
    };
}, {
    customSlot: import("vue").Ref<import("vue").Slot<any> | undefined>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    children: import("vue").Ref<[]>;
    audioData: import("vue").Ref<any>;
    handleMute: import("vue").Ref<(payload: MouseEvent) => void>;
    forward: import("vue").Ref<(payload: MouseEvent) => void>;
    fastBack: import("vue").Ref<(payload: MouseEvent) => void>;
    changeStatus: import("vue").Ref<(payload: MouseEvent) => void>;
    type: import("vue").Ref<AudioOperateType>;
    onClick: import("vue").Ref<((...args: any[]) => any) | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<AudioOperateType>;
        default: () => string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    type: AudioOperateType;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAudioOperate: typeof _default;
    }
}