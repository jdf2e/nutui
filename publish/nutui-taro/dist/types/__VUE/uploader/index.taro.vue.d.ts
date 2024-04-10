import { PropType } from 'vue';
import { FileItem, MediaType, SizeType, SourceType } from './type';
import { Interceptor } from '@/packages/utils/util';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
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
    }[]>;
    disabled: import("vue").ComputedRef<boolean>;
    chooseImage: () => void;
    fileItemClick: (fileItem: FileItem) => void;
    clearUploadQueue: (index?: number) => void;
    submit: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "progress" | "delete" | "start" | "change" | "oversize" | "failure" | "update:fileList" | "fileItemClick")[], "success" | "progress" | "delete" | "start" | "change" | "oversize" | "failure" | "update:fileList" | "fileItemClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onFailure?: ((...args: any[]) => any) | undefined;
    onSuccess?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onOversize?: ((...args: any[]) => any) | undefined;
    "onUpdate:fileList"?: ((...args: any[]) => any) | undefined;
    onFileItemClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    data: Record<string, any>;
    maximum: string | number;
    multiple: boolean;
    mode: string;
    url: string;
    timeout: string | number;
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
    beforeXhrUpload: Function;
    beforeDelete: Interceptor;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutUploader: typeof _default;
    }
}