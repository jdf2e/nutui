import {Row, Col} from './_flex';
import './flex.scss';

Row.install = function(Vue) {
  Vue.component(Flex.name, Row);
};

Col.install = function(Vue) {
  Vue.component(Flex.name, Col);
};

export default {
	Row,
	Col
};