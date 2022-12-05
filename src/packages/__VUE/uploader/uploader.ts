export class UploadOptions {
  url = '';
  name = 'file';
  fileType? = 'image';
  formData?: FormData;
  sourceFile: any;
  method = 'post';
  xhrState = 200;
  timeout = 30 * 1000;
  headers = {};
  withCredentials = false;
  onStart?: Function;
  taroFilePath?: string;
  onProgress?: Function;
  onSuccess?: Function;
  onFailure?: Function;
  beforeXhrUpload?: Function;
}
export class Uploader {
  options: UploadOptions;
  constructor(options: UploadOptions) {
    this.options = options;
  }
  upload() {
    const options = this.options;
    const xhr = new XMLHttpRequest();
    xhr.timeout = options.timeout;
    if (xhr.upload) {
      xhr.upload.addEventListener(
        'progress',
        (e: ProgressEvent<XMLHttpRequestEventTarget>) => {
          options.onProgress?.(e, options);
        },
        false
      );
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status == options.xhrState) {
            options.onSuccess?.(xhr.responseText, options);
          } else {
            options.onFailure?.(xhr.responseText, options);
          }
        }
      };
      xhr.withCredentials = options.withCredentials;
      xhr.open(options.method, options.url, true);
      // headers
      for (const [key, value] of Object.entries(options.headers)) {
        xhr.setRequestHeader(key, value as string);
      }
      options.onStart?.(options);
      if (options.beforeXhrUpload) {
        options.beforeXhrUpload(xhr, options);
      } else {
        xhr.send(options.formData);
      }
    } else {
      console.warn('浏览器不支持 XMLHttpRequest');
    }
  }
}

export class UploaderTaro extends Uploader {
  constructor(options: UploadOptions) {
    super(options);
  }
  uploadTaro(uploadFile: Function, env: string) {
    const options = this.options;
    if (env === 'WEB') {
      this.upload();
    } else {
      if (options.beforeXhrUpload) {
        options.beforeXhrUpload(uploadFile, options);
      } else {
        const uploadTask = uploadFile({
          url: options.url,
          filePath: options.taroFilePath,
          fileType: options.fileType,
          header: {
            'Content-Type': 'multipart/form-data',
            ...options.headers
          }, //
          formData: options.formData,
          name: options.name,
          success(response: { errMsg: any; statusCode: number; data: string }) {
            if (options.xhrState == response.statusCode) {
              options.onSuccess?.(response, options);
            } else {
              options.onFailure?.(response, options);
            }
          },
          fail(e: any) {
            options.onFailure?.(e, options);
          }
        });
        options.onStart?.(options);
        uploadTask.progress((res: { progress: any; totalBytesSent: any; totalBytesExpectedToSend: any }) => {
          options.onProgress?.(res, options);
        });
      }
    }
  }
}
