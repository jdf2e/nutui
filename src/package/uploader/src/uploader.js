    function triggerFunc(func) {
         if (typeof(func)==='function') {
             return func.bind(this);
         } else {
             console.warn(func + 'is not a function!');
             return function() {};
         }
     }
    //文件上传模块
    class IdaUploader {
        constructor (settings) {
            this.options = {
                url: '',
                formData: null,
                isPreview: true, //是否开启本地预览
                previewData: null,
                maxSize: 0, //允许上传的文件最大字节,0为不限制
                acceptType: [], //允许上传的文件类型,如'image/jpeg'
                showMsgFn: null,
                onStart: null,
                onProgress: null,
                onPreview: null,
                onSuccess: null,
                onFailure: null,
            };

            Object.assign(this.options, settings);
            this[this.options.isPreview ? 'preview' : 'uploader']()
        }
        showMsg (msg) {
            if (typeof(this.options.showMsgFn)=='function') {
                this.options.showMsgFn(msg);
            } else {
                console.log(msg);
            }
        }
        check (file) {
            if (this.options.maxSize && (file.size > this.options.maxSize)) {
                this.showMsg('文件大小超过限制！');
                return false;
            }

            if (this.options.acceptType.length && this.options.acceptType.indexOf(file.type) === -1) {
                this.showMsg('不支持此文件类型！');
                return false;
            }

            return true;
        }
        preview () {
            //let file = this.options.formData.get('imgData');
            const file = this.options.previewData;

            if (!this.check(file)) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                triggerFunc.call(this.options, this.options.onPreview)(e.target.result);
            }
            reader.readAsDataURL(file);
            this.uploader();
        }
        uploader () {
            const xhr = new XMLHttpRequest();
            let formData = this.options.formData;
            if (xhr.upload) {
                xhr.upload.addEventListener('progress', (e) => {
                    triggerFunc.call(this.options, this.options.onProgress)(formData, e.loaded, e.total);
                }, false);

                xhr.onreadystatechange = (e) => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            triggerFunc.call(this.options, this.options.onSuccess)(formData, xhr.responseText);
                        } else {
                            triggerFunc.call(this.options, this.options.onFailure)(formData, xhr.responseText);
                        }
                    }
                };

                xhr.withCredentials = true;

                xhr.open('POST', this.options.url, true);
                triggerFunc.call(this.options, this.options.onStart)();
                xhr.send(formData);
            } else {
                this.showMsg('对不起，您的浏览器不支持本组件！')
            }
        }
    }

    export default IdaUploader;
    