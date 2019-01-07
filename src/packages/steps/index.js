import Steps from './_steps';
import './steps.scss';

const {Step} = Steps;

Steps.install = function (Vue) {
  Vue.component(Steps.name, Steps);
};

Step.install = function (Vue) {
  Vue.component(Step.name, Step);
};

export default {
  Steps,
  Step
};