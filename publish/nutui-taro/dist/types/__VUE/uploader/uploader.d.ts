export declare class UploadOptions {
    url: string;
    name: string;
    fileType?: string | undefined;
    formData?: FormData;
    sourceFile: any;
    method: string;
    xhrState: number;
    timeout: number;
    headers: {};
    withCredentials: boolean;
    onStart?: Function;
    taroFilePath?: string;
    onProgress?: Function;
    onSuccess?: Function;
    onFailure?: Function;
    beforeXhrUpload?: Function;
}
export declare class Uploader {
    options: UploadOptions;
    constructor(options: UploadOptions);
    upload(): void;
}
export declare class UploaderTaro extends Uploader {
    constructor(options: UploadOptions);
    uploadTaro(uploadFile: Function, env: string): void;
}
