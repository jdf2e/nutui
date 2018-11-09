import DropDown from './src/dropdown.vue';

DropDown.install = function(Vue) {
  Vue.component(DropDown.name, DropDown);
};

export default DropDown