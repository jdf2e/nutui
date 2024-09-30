import { PropType } from 'vue';
import { FileItem } from './type';
import { Interceptor } from '@/packages/utils/util';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    timeout: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fileList: {
        type: PropType<any[]>;
        default: () => never[];
    };
    isPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: StringConstructor;
        default: string;
    };
    isDeletable: {
        type: BooleanConstructor;
        default: boolean;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    capture: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maximum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    clearInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: ObjectConstructor;
        default: {};
    };
    data: {
        type: ObjectConstructor;
        default: {};
    };
    xhrState: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeUpload: {
        type: FunctionConstructor;
        default: null;
    };
    beforeXhrUpload: {
        type: FunctionConstructor;
        default: null;
    };
    beforeDelete: {
        type: PropType<Interceptor>;
        default: () => boolean;
    };
    onChange: {
        type: FunctionConstructor;
    };
}>, {
    onChange: (event: InputEvent) => void;
    onDelete: (file: FileItem, index: number) => void;
    fileList: import("vue").Ref<{
        status: import("./type").FileItemStatus;
        message: string;
        uid: string;
        name?: string | undefined;
        url?: string | undefined;
        type?: string | undefined;
        path?: string | undefined;
        percentage: string | number;
        formData: any;
    }[], FileItem[] | {
        status: import("./type").FileItemStatus;
        message: string;
        uid: string;
        name?: string | undefined;
        url?: string | undefined;
        type?: string | undefined;
        path?: string | undefined;
        percentage: string | number;
        formData: any;
    }[]>;
    fileItemClick: (fileItem: FileItem) => void;
    clearUploadQueue: (index?: number) => void;
    submit: () => void;
    renderInput: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "change" | "progress" | "delete" | "start" | "oversize" | "failure" | "update:fileList" | "fileItemClick")[], "success" | "change" | "progress" | "delete" | "start" | "oversize" | "failure" | "update:fileList" | "fileItemClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    timeout: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fileList: {
        type: PropType<any[]>;
        default: () => never[];
    };
    isPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: StringConstructor;
        default: string;
    };
    isDeletable: {
        type: BooleanConstructor;
        default: boolean;
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    capture: {
        type: BooleanConstructor;
        default: boolean;
    };
    maximize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    maximum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    clearInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: ObjectConstructor;
        default: {};
    };
    data: {
        type: ObjectConstructor;
        default: {};
    };
    xhrState: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    withCredentials: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeUpload: {
        type: FunctionConstructor;
        default: null;
    };
    beforeXhrUpload: {
        type: FunctionConstructor;
        default: null;
    };
    beforeDelete: {
        type: PropType<Interceptor>;
        default: () => boolean;
    };
    onChange: {
        type: FunctionConstructor;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onFailure?: ((...args: any[]) => any) | undefined;
    onSuccess?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onOversize?: ((...args: any[]) => any) | undefined;
    "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
    onFileItemClick?: ((...args: any[]) => any) | undefined;
}>, {
    name: string;
    disabled: boolean;
    timeout: string | number;
    data: Record<string, any>;
    url: string;
    maximum: string | number;
    multiple: boolean;
    fileList: any[];
    isPreview: boolean;
    listType: string;
    isDeletable: boolean;
    method: string;
    capture: boolean;
    maximize: string | number;
    clearInput: boolean;
    accept: string;
    headers: Record<string, any>;
    xhrState: string | number;
    withCredentials: boolean;
    autoUpload: boolean;
    beforeUpload: Function;
    beforeXhrUpload: Function;
    beforeDelete: Interceptor;
}, {}, {
    NutProgress: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: PropType<import("../progress").ProgressSize>;
                default: string;
            };
            strokeWidth: {
                type: PropType<string | number>;
            };
            percentage: {
                type: PropType<string | number>;
                default: number;
            };
            status: {
                type: PropType<import("../progress").ProgressStatus>;
                default: string;
            };
            textInside: {
                type: PropType<boolean>;
                default: boolean;
            };
            showText: {
                type: PropType<boolean>;
                default: boolean;
            };
            strokeColor: {
                type: PropType<string>;
            };
            textColor: {
                type: PropType<string>;
            };
            textBackground: {
                type: PropType<string>;
            };
            isShowPercentage: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: PropType<import("../progress").ProgressSize>;
                default: string;
            };
            strokeWidth: {
                type: PropType<string | number>;
            };
            percentage: {
                type: PropType<string | number>;
                default: number;
            };
            status: {
                type: PropType<import("../progress").ProgressStatus>;
                default: string;
            };
            textInside: {
                type: PropType<boolean>;
                default: boolean;
            };
            showText: {
                type: PropType<boolean>;
                default: boolean;
            };
            strokeColor: {
                type: PropType<string>;
            };
            textColor: {
                type: PropType<string>;
            };
            textBackground: {
                type: PropType<string>;
            };
            isShowPercentage: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            size: import("../progress").ProgressSize;
            percentage: string | number;
            status: import("../progress").ProgressStatus;
            textInside: boolean;
            showText: boolean;
            isShowPercentage: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: PropType<import("../progress").ProgressSize>;
                default: string;
            };
            strokeWidth: {
                type: PropType<string | number>;
            };
            percentage: {
                type: PropType<string | number>;
                default: number;
            };
            status: {
                type: PropType<import("../progress").ProgressStatus>;
                default: string;
            };
            textInside: {
                type: PropType<boolean>;
                default: boolean;
            };
            showText: {
                type: PropType<boolean>;
                default: boolean;
            };
            strokeColor: {
                type: PropType<string>;
            };
            textColor: {
                type: PropType<string>;
            };
            textBackground: {
                type: PropType<string>;
            };
            isShowPercentage: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {
            size: import("../progress").ProgressSize;
            percentage: string | number;
            status: import("../progress").ProgressStatus;
            textInside: boolean;
            showText: boolean;
            isShowPercentage: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: PropType<import("../progress").ProgressSize>;
            default: string;
        };
        strokeWidth: {
            type: PropType<string | number>;
        };
        percentage: {
            type: PropType<string | number>;
            default: number;
        };
        status: {
            type: PropType<import("../progress").ProgressStatus>;
            default: string;
        };
        textInside: {
            type: PropType<boolean>;
            default: boolean;
        };
        showText: {
            type: PropType<boolean>;
            default: boolean;
        };
        strokeColor: {
            type: PropType<string>;
        };
        textColor: {
            type: PropType<string>;
        };
        textBackground: {
            type: PropType<string>;
        };
        isShowPercentage: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
        size: import("../progress").ProgressSize;
        percentage: string | number;
        status: import("../progress").ProgressStatus;
        textInside: boolean;
        showText: boolean;
        isShowPercentage: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            "icon-name"?(_: {}): any;
        };
    });
    Photograph: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
    Failure: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
    Loading: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
    Del: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
    Link: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutUploader: typeof _default;
    }
}