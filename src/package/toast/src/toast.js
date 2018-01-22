import Vue from 'vue';
let ToastConstructor = Vue.extend(require('./toast.vue'));
let instanceArr = [];
let instance;

let Toast = function (...params) {
    if(params.length===1){
        if(!params[0]['msg']) return;
        if(params[0]['id'] && instanceArr[params[0]['id']]){
            instance = instanceArr[params[0]['id']];
            instance.msg = params[0]['msg'];
            instance.during = params[0]['during'] || 2000;
            instance.visible = true;
            instance.showMsg(true);            
            return;
        }else{
            instance = new ToastConstructor({
                data: params[0]
            });
            instanceArr[params[0]['id']] = instance;
        }
    }else{
        if(!params[0]) return;
        instance = new ToastConstructor({
            data: {
                msg: params[0] || '',
                during: params[1] || 2000
            }
        });
    }

    instance.vm = instance.$mount();
    document.body.appendChild(instance.$el);


    Vue.nextTick(() => {
        instance.visible = true;
    });
};

export default Toast;