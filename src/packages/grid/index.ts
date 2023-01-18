import { NutComponent } from './../../common/component.ts'
import { useChildren } from '../../common/relation.ts'

NutComponent({
  relation: useChildren('grid-item'),
  classes: ['grid-demo'],
  props: {
    // 列数
    columnNum: {
      type: Number,
      value: 4
    },
    // 图标大小
    iconSize: {
      type: Number,
      value: 28
    },
    // 图标颜色
    iconColor: String,
    // 是否显示边框
    border: {
      type: Boolean,
      value: true
    },
    // 格子之间间隔距离
    gutter: {
      type: Number,
      value: 0
    },
    // 是否内容居中
    center: {
      type: Boolean,
      value: true
    },
    // 是否固定正方形
    square: {
      type: Boolean,
      value: false
    },
    // 内容与文字翻转
    reverse: {
      type: Boolean,
      value: false
    },
    // 内容排列方向
    direction: String,
    // 是否开启点击反馈
    clickable: {
      type: Boolean,
      value: false
    }
  },

  observers: {
    '**': function (val) {
      let that = this
      setTimeout(() => {
        that.children.forEach((child) => {
          child.updateParent();
        });
      }, 0)

    }
  },

  methods: {

  },
});
