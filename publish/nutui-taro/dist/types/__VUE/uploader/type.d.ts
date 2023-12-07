export type SizeType = 'original' | 'compressed';
export type SourceType = 'album' | 'camera';
export type MediaType = 'image' | 'video' | 'mix';
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error';
export declare class FileItem {
    status: FileItemStatus;
    message: string;
    uid: string;
    name?: string;
    url?: string;
    type?: string;
    path?: string;
    percentage: string | number;
    formData: any;
}
