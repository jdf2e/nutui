import formatDateTime from './src/formatdatetime.vue';

formatDateTime.install = function(Vue) {
  Vue.component(formatDateTime.name, formatDateTime);
};

export default formatDateTime