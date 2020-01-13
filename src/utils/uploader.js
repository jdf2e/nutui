
class IdaUploader {
   constructor (settings) {
       this.options = {
           url: '',
           formData: null,
           headers: {}, //自定义headers
           withCredentials:false,//支持发送 cookie 凭证信息
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
           xhrStatus:200, //默认上传成功是200
           readyState:4,
           xmlError:null, 
           typeError:null, 
           limitError:null 
       };
       Object.assign(this.options, settings);
       this[this.options.isPreview ? 'preview' : 'uploader']()
   }
   triggerFunc(func) {
        if (typeof(func)==='function') {
            return func.bind(this);
        } else {
            console.warn(func + 'is not a function!');
            return function() {};
        }
    }
   showMsg (msg) {
       if (typeof(this.options.showMsgFn)=='function') {
           this.options.showMsgFn(msg);
       } else {
           console.log(msg);
       }
   }
   check (file) {
       if(Array.isArray(file)){           
           for(let key in file){
                if (this.options.maxSize && (file[key].size > this.options.maxSize)) {
                    this.showMsg(this.limitError);
                    return false;
                }
                if (this.options.acceptType.length && this.options.acceptType.indexOf(file[key].type) === -1) {           
                    this.showMsg(this.typeError);
                    return false;
                }
           }
       }else{
            if (this.options.maxSize && (file.size > this.options.maxSize)) {
                this.showMsg(this.limitError);
                return false;
            }
            if (this.options.acceptType.length && this.options.acceptType.indexOf(file.type) === -1) {           
                this.showMsg(this.typeError);
                return false;
            }
       }       
       return true;
   }
   preview () {  
       const file = this.options.previewData;    
       if (!this.check(file)) return;
       const reader = new FileReader();       
       reader.onload = (e) => {
        this.uploader();
           this.triggerFunc.call(this.options, this.options.onPreview)(e.target.result);           
       }
       reader.readAsDataURL(file);       
   }
   uploader () {
       const xhr = new XMLHttpRequest();
       let options = this.options;
       let formData = options.formData;      
       
       
       if (xhr.upload) {    
           xhr.upload.addEventListener('progress', (e) => {
               this.triggerFunc.call(options, options.onProgress)(formData, e.loaded, e.total);
           }, false);
           xhr.onreadystatechange = (e) => {              
               if (xhr.readyState === 4) {                  
                   if (xhr.status === options.xhrState) {
                        this.triggerFunc.call(options, options.onSuccess)(formData, xhr.responseText);
                   } else {
                        this.triggerFunc.call(options, options.onFailure)(formData, xhr.responseText);
                   }
               }
           };
           xhr.withCredentials = options.withCredentials;
           xhr.open('POST', options.url, true);
           // headers
           for (let key in options.headers) {
                xhr.setRequestHeader(key, options.headers[key])
           }
           this.triggerFunc.call(options, options.onStart)();          
           xhr.send(formData);
           if(options.clearInput){
                options.$el.value = ''  ;
           }           
       } else {
           this.showMsg(this.xmlError)
       }
   }
}
export default IdaUploader;
