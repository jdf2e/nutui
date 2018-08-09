import Vue from 'vue';
let DialogConstructor = Vue.extend(require('./dialog.vue'));

let instanceArr = {};

let instance;

let Dialog = function (options) {
    if(options['id'] && instanceArr[options['id']]){
        instance = instanceArr[options['id']];
    }else{
        instance = new DialogConstructor({
            data: options
        });
        if(options['id']){
            instanceArr[options['id']] = instance;
        }
        instance.vm = instance.$mount();
        document.body.appendChild(instance.$el);
    }
    Vue.nextTick(() => {
        instance.visible = true;
    });
};

export default Dialog;