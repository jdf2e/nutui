export class UploadOptions {
  url = '';
  formData: FormData = new FormData();
  method = 'post';
  xhrState = 200;
  headers = {};
  withCredentials = false;
  onStart?: Function;
  onProgress?: Function;
  onSuccess?: Function;
  onFailure?: Function;
}
export class Uploader {
  options: UploadOptions;
  constructor(options: UploadOptions) {
    this.options = options;
  }
  upload() {
    const options = this.options;
    const xhr = new XMLHttpRequest();
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
          if (xhr.status === options.xhrState) {
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
      xhr.send(options.formData);
    } else {
      console.warn('浏览器不支持 XMLHttpRequest');
    }
  }
}
