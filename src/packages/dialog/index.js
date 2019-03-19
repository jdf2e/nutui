import DialogVue from './dialog.vue';
import Dialog from './_dialog';
import './dialog.scss';

const DialogArr = [Dialog, DialogVue];

DialogArr.install = function(Vue){
    Vue.prototype['$dialog'] = Dialog;
    Vue.component(DialogVue.name, DialogVue);
}

export default DialogArr;
