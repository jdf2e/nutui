import Vue from 'vue';
import znCH from './lang/zn-CH';

let defaultMessages = {};

let merged = false;
const vueI18nHandler = function() {
  const vuei18n = Object.getPrototypeOf(this || Vue).$t;
  if (typeof vuei18n === 'function' && !!Vue.locale) {
    if (!merged) {
      merged = true;
      Vue.locale(Vue.config.lang, Object.assign(Vue.config.lang === 'zn-CH' ? znCH : {}, Vue.locale(Vue.config.lang) || {}, defaultMessages));
    }
    return vuei18n.apply(this, arguments);
  }
};

function i18n(keysStr, params) {
  let value = vueI18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  let message = Object.assign({}, Vue.config.lang === 'zn-CH' ? znCH : {}, defaultMessages);
  let keys = (keysStr && keysStr.split('.')) || [];
  let result = null;

  if (keys.length) {
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (key && message[key]) {
        message = message[key];
        result = message;
      } else {
        result = null;
        break;
      }
    }
  }
  return simpleTemplate(result, params);
}

function locale(lang, messages) {
  if (typeof lang === 'object') {
    messages = lang;
    lang = Vue.config.lang;
  }
  Vue.config.lang = lang;
  Object.assign(defaultMessages, messages);
}

function getArgType(arg) {
  return Object.prototype.toString
    .call(arg)
    .toLowerCase()
    .match(/\s(\w+)/)[1];
}

function simpleTemplate(templ, conf) {
  let pars = templ && templ.match(/{.+?}/g);
  if (pars && conf) {
    pars = pars.map(p => p.replace(/\{\s*(\w+|\d+).*?\}/, '$1'));
    pars.forEach((c, i) => {
      let reg = new RegExp('{\\s*' + c + '\\s*(?:=\\s*(\\S*?))?\\s*?}', 'g');
      templ = templ.replace(reg, (a, b) => {
        return getArgType(conf[c]) == 'function' ? conf[c]() : conf[c] !== undefined ? conf[c] : b ? b : a;
      });
    });
  }
  return templ;
}

export { i18n, locale };
