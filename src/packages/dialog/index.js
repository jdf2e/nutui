import Dialog from './_dialog';
import './dialog.scss';

Dialog.install = function(Vue){
    Vue.prototype['$dialog'] = Dialog;
}

export default Dialog;
