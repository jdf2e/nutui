import { PropType } from 'vue';
import type { FormRules } from './types';
export declare const component: (components: any) => {
    props: {
        modelValue: {
            type: ObjectConstructor;
            default: () => {};
        };
        rules: {
            type: PropType<FormRules>;
            default: () => {};
        };
        labelPosition: {
            type: PropType<import("../formitem/types").FormItemLabelPosition>;
            default: string;
        };
        starPosition: {
            type: PropType<import("../formitem/types").FormItemStarPosition>;
            default: string;
        };
    };
    components: any;
    emits: string[];
    setup(props: any, { emit }: any): {
        validate: (customProp?: string) => Promise<unknown>;
        reset: () => void;
        submit: () => boolean;
        formErrorTip: import("vue").ComputedRef<any>;
    };
};
