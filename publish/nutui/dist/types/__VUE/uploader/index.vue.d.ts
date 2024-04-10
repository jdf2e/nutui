import { PropType } from 'vue';
import { FileItem } from './type';
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
}, {
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
    }[]>;
    fileItemClick: (fileItem: FileItem) => void;
    clearUploadQueue: (index?: number) => void;
    submit: () => void;
    renderInput: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "progress" | "delete" | "start" | "change" | "oversize" | "failure" | "update:fileList" | "fileItemClick")[], "success" | "progress" | "delete" | "start" | "change" | "oversize" | "failure" | "update:fileList" | "fileItemClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    url: string;
    maximum: string | number;
    multiple: boolean;
    timeout: string | number;
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
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutUploader: typeof _default;
    }
}