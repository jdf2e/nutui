import Progress from './src/progress';

Progress.install = function(Vue) {
    Vue.component(Progress.name, Progress);
}

export default Progress;