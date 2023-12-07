import type { InjectionKey, ComponentInternalInstance } from 'vue';
type ParentProvide<T> = T & {
    add(child: ComponentInternalInstance): void;
    remove(child: ComponentInternalInstance): void;
    internalChildren: ComponentInternalInstance[];
};
export declare function useInject<T>(key: InjectionKey<ParentProvide<T>>): {
    parent: ParentProvide<T>;
    index: import("vue").ComputedRef<number>;
} | {
    parent: null;
    index: import("vue").Ref<number>;
};
export {};
