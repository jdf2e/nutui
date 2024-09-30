import { PropType } from 'vue';
import { FileItem, MediaType, SizeType, SourceType } from './type';
import { Interceptor } from '@/packages/utils/util';
import { Photograph, Failure, Loading, Del, Link } from '@nutui/icons-vue-taro';

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
    sizeType: {
        type: PropType<SizeType[]>;
        default: () => string[];
    };
    sourceType: {
        type: PropType<SourceType[]>;
        default: () => string[];
    };
    mediaType: {
        type: PropType<MediaType[]>;
        default: () => string[];
    };
    camera: {
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
    maxDuration: {
        type: NumberConstructor;
        default: number;
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
    mode: {
        type: StringConstructor;
        default: string;
    };
}>, {
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
    disabled: import("vue").ComputedRef<boolean>;
    chooseImage: () => void;
    fileItemClick: (fileItem: FileItem) => void;
    clearUploadQueue: (index?: number) => void;
    submit: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "change" | "progress" | "delete" | "start" | "oversize" | "failure" | "update:fileList" | "fileItemClick")[], "success" | "change" | "progress" | "delete" | "start" | "oversize" | "failure" | "update:fileList" | "fileItemClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    sizeType: {
        type: PropType<SizeType[]>;
        default: () => string[];
    };
    sourceType: {
        type: PropType<SourceType[]>;
        default: () => string[];
    };
    mediaType: {
        type: PropType<MediaType[]>;
        default: () => string[];
    };
    camera: {
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
    maxDuration: {
        type: NumberConstructor;
        default: number;
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
    mode: {
        type: StringConstructor;
        default: string;
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
    mode: string;
    data: Record<string, any>;
    maximum: string | number;
    multiple: boolean;
    url: string;
    camera: string;
    sizeType: SizeType[];
    sourceType: SourceType[];
    mediaType: MediaType[];
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
    autoUpload: boolean;
    maxDuration: number;
    beforeUpload: Function;
    beforeXhrUpload: Function;
    beforeDelete: Interceptor;
}, {}, {
    NutProgress: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: PropType<import("../progress/types").ProgressSize>;
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
                type: PropType<import("../progress/types").ProgressStatus>;
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
                type: PropType<import("../progress/types").ProgressSize>;
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
                type: PropType<import("../progress/types").ProgressStatus>;
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
            size: import("../progress/types").ProgressSize;
            percentage: string | number;
            status: import("../progress/types").ProgressStatus;
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
                type: PropType<import("../progress/types").ProgressSize>;
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
                type: PropType<import("../progress/types").ProgressStatus>;
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
            size: import("../progress/types").ProgressSize;
            percentage: string | number;
            status: import("../progress/types").ProgressStatus;
            textInside: boolean;
            showText: boolean;
            isShowPercentage: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: PropType<import("../progress/types").ProgressSize>;
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
            type: PropType<import("../progress/types").ProgressStatus>;
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
        size: import("../progress/types").ProgressSize;
        percentage: string | number;
        status: import("../progress/types").ProgressStatus;
        textInside: boolean;
        showText: boolean;
        isShowPercentage: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            "icon-name"?(_: {}): any;
        };
    });
    NutButton: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: PropType<string>;
                default: string;
            };
            shape: {
                type: PropType<import("../button/types").ButtonShape>;
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
                type: PropType<import("../button/types").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button/types").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
            formType: {
                type: PropType<import("../button/types").ButtonFormType>;
                default: string;
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
                type: PropType<import("../button/types").ButtonShape>;
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
                type: PropType<import("../button/types").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button/types").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
            formType: {
                type: PropType<import("../button/types").ButtonFormType>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            color: string;
            shape: import("../button/types").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button/types").ButtonType;
            size: import("../button/types").ButtonSize;
            block: boolean;
            formType: import("../button/types").ButtonFormType;
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
                type: PropType<import("../button/types").ButtonShape>;
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
                type: PropType<import("../button/types").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button/types").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
            formType: {
                type: PropType<import("../button/types").ButtonFormType>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            color: string;
            shape: import("../button/types").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button/types").ButtonType;
            size: import("../button/types").ButtonSize;
            block: boolean;
            formType: import("../button/types").ButtonFormType;
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
            type: PropType<import("../button/types").ButtonShape>;
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
            type: PropType<import("../button/types").ButtonType>;
            default: string;
        };
        size: {
            type: PropType<import("../button/types").ButtonSize>;
            default: string;
        };
        block: {
            type: PropType<boolean>;
            default: boolean;
        };
        formType: {
            type: PropType<import("../button/types").ButtonFormType>;
            default: string;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
    }, string, {
        color: string;
        shape: import("../button/types").ButtonShape;
        plain: boolean;
        loading: boolean;
        disabled: boolean;
        type: import("../button/types").ButtonType;
        size: import("../button/types").ButtonSize;
        block: boolean;
        formType: import("../button/types").ButtonFormType;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
        };
    });
    Photograph: typeof Photograph;
    Failure: typeof Failure;
    Loading: typeof Loading;
    Del: typeof Del;
    Link: typeof Link;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutUploader: typeof _default;
    }
}