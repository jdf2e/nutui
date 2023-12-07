import { Ref } from 'vue';
type ScrollElement = HTMLElement | Window;
export declare function getScrollParent(el: Element, root?: ScrollElement | undefined): Window | Element;
export declare function useScrollParent(el: Ref<Element | undefined>, root?: ScrollElement | undefined): Ref<Window | Element | undefined>;
export {};
