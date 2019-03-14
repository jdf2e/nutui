import DialogVue from './dialog.vue';
import Dialog from './_dialog';
import './dialog.scss';

Dialog.install = function(Vue){
    Vue.prototype['$dialog'] = Dialog;
    Vue.component(DialogVue.name, DialogVue);
}

export default [Dialog, DialogVue];
