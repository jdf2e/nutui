// import 'babel-polyfill';
const config = require('../custom.json');

const components = {};
const methods = {};
const filters = {};
const directives = {};
config.packages.map(item=>{
/*   const pkg = require('./package/' + (item.name.toLowerCase()) + '/index.js').default;*/
    const loName = item.name.toLowerCase();
  if (!pkg[loName]) return; 
    if (item.type =='component'){
        if (pkg[loName].name) {
            components[item.name] = pkg[loName];
        } else {
            for (let n in pkg[loName]) {
              components[n] = pkg[loName][n];
            }
        }
    } else if (item.type == 'method'){
            methods[item.name] = pkg[loName];
    } else if (item.type == 'filter') {
            filters[item.name] = pkg[loName];
    } else if (item.type == 'directive') {
            directives[item.name] = pkg[loName];
    }
});


const install = function(Vue, opts = {}) {
  if (install.installed) return;

  for (let cptName in methods){
    Vue.prototype['$' + cptName.toLowerCase()] = methods[cptName];
  }

  for (let cptName in components) {
    if (components[cptName] && components[cptName].name) {
      Vue.component(components[cptName].name, components[cptName]);
    }
  }

  for (let cptName in filters) {
    if (filters[cptName] && filters[cptName].name) {
      Vue.filter(filters[cptName].name, filters[cptName]);
    }
  }

  for (let cptName in directives) {
    if (directives[cptName] && directives[cptName].name) {
      Vue.directive(directives[cptName].name, directives[cptName]);
    }
  }
  /* Vue.prototype.$dialog = components['Dialog'];
  Vue.prototype.$toast = components['Toast'];
  Vue.prototype.$loading = components['Loading']; */
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = Object.assign({
    //version: version,
    install
},components,filters,directives,methods);

export default API;