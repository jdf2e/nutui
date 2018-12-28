import skeleton from './_skeleton.js';
import './skeleton.scss';

const {
    skeletonCircle,
    skeletonSquare,
    skeletonRow,
    skeletonColumn
} = skeleton;

skeleton.install = function(Vue){
    Vue.component(skeleton.name,skeleton);
}
skeletonCircle.install = function(Vue){
    Vue.component(skeletonCircle.name,skeletonCircle);
}
skeletonSquare.install = function(Vue){
    Vue.component(skeletonSquare.name,skeletonSquare);
}
skeletonRow.install = function(Vue){
    Vue.component(skeletonRow.name,skeletonRow);
}
skeletonColumn.install = function(Vue){
    Vue.component(skeletonColumn.name,skeletonColumn);
}
    
export default {
    skeleton,
    skeletonCircle,
    skeletonSquare,
    skeletonRow,
    skeletonColumn
};
