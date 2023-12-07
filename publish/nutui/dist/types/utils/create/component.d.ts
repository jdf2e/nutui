import { defineComponent } from 'vue';
export declare function createComponent(name: string): {
    componentName: string;
    create: typeof defineComponent;
};
