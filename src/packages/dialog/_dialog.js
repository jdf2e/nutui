import Vue from 'vue';

let DialogConstructor = Vue.extend(require('./dialog.vue').default);

let instances = {};

let inst;

let Dialog = function (options) {
    if (options.type === 'image' && typeof (options.closeBtn) === 'undefined'){
        options.closeBtn = true;
    }

    if (options['id'] && instances[options['id']]) {
        inst = Object.assign(instances[options['id']], options);
    } else {
        inst = new DialogConstructor({
            data: options
        });
        if (options['id']) {
            instances[options['id']] = inst;
        }
        inst.vm = inst.$mount();
        document.body.appendChild(inst.$el);
    }

    Vue.nextTick(() => {
        inst.visible = true;
    });
};

export default Dialog;
