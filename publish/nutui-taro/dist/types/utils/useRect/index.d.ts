import { Ref } from 'vue';
export interface rect {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}
export declare const useRect: (elementRef: (Element | Window) | Ref<Element | Window | undefined>) => DOMRect | {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};
