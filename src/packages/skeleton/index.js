import skeleton from './_skeleton.js';
import './skeleton.scss';

const { skeletonCircle, skeletonSquare, skeletonRow, skeletonColumn } = skeleton;

skeleton.install = function (Vue) {
  Vue.component(skeleton.name, skeleton);
  Vue.component(skeletonCircle.name, skeletonCircle);
  Vue.component(skeletonSquare.name, skeletonSquare);
  Vue.component(skeletonRow.name, skeletonRow);
  Vue.component(skeletonColumn.name, skeletonColumn);
};

export default skeleton;
