import Steps from './src/steps.vue';
import Step from './src/step.vue';
Steps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
};
Step.install = function(Vue) {
  Vue.component(Step.name, Step);
};
export default {
	Steps,
	Step
}