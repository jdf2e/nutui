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

    setTimeout(() => {
        //  设置z-index保证最新的弹窗再最上面
        let dialogThis = document.querySelector('#'+options.id);
        var nutDialogWrapper = document.getElementsByClassName('nut-dialog-wrapper');
        var zIndexNum = 100 + (10 * (nutDialogWrapper.length));
        dialogThis.style.zIndex = zIndexNum;
        setTimeout(function() {
            for(var i = 0;i < nutDialogWrapper.length;i++) {
                nutDialogWrapper[i].style.zIndex = zIndexNum - 1 - i;
            }
        }, 0);
    }, 10);

    Vue.nextTick(() => {
        inst.visible = true;
    });
};

export default Dialog;
