import { Ref } from 'vue';
export interface rectTaro {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}
export declare const useTaroRectById: (id: string) => Promise<unknown>;
export declare const useTaroRect: (elementRef: (Element | Window | any) | Ref<Element | Window | any>) => any;
