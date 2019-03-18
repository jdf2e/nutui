import Vue from 'vue';
import settings from './dialog.vue';

let DialogConstructor = Vue.extend(settings);

let inst;

let Dialog = function (options) {
    options.id = options.id || 'nut-dialog-default-id';
    if (options.type === 'image' && typeof (options.closeBtn) === 'undefined'){
        options.closeBtn = true;
    }

    inst = new DialogConstructor({
        propsData: options
    });

    inst.vm = inst.$mount();

    let dialogDom = document.querySelector('#'+options.id);
    if (options.id && dialogDom){
        dialogDom.parentNode.replaceChild(inst.$el, dialogDom);
    }else{
        document.body.appendChild(inst.$el);
    }

    Vue.nextTick(() => {
        inst.visible = true;
    });
};

export default Dialog;
