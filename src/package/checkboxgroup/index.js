import CheckboxGroup from './src/checkboxgroup.vue';

CheckboxGroup.install = function(Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup);
};

export default CheckboxGroup