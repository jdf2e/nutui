import { onMounted, computed, toRefs } from 'vue';
export type avatarShape = 'round' | 'square';

export const component = {
  props: {
    //每行宽度
    width: {
      type: String,
      default: '100px'
    },
    //每行高度
    height: {
      type: String,
      default: '100px'
    },
    //是否显示动画
    animated: {
      type: Boolean,
      default: false
    },
    //头像
    avatar: {
      type: Boolean,
      default: false
    },
    //头像形状：正方形/圆形
    avatarShape: {
      type: String as import('vue').PropType<avatarShape>,
      default: 'round'
    },
    //头像大小
    avatarSize: {
      type: String,
      default: '50px'
    },
    //是否显示骨架屏
    loading: {
      type: Boolean,
      default: true
    },
    //标题/段落 圆角风格
    round: {
      type: Boolean,
      default: false
    },

    //显示段落行数
    row: {
      type: String,
      default: '1'
    },

    //是否显示段落标题
    title: {
      type: Boolean,
      default: true
    }
  },

  setup(props: any) {
    const { avatarShape, round, avatarSize } = toRefs(props);

    const avatarClass = computed(() => {
      const prefixCls = 'avatarClass';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${avatarShape.value}`]: avatarShape.value
      };
    });

    const getBlockClass = (prefixCls: string) => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--round`]: round.value
      };
    };

    const getStyle = (): import('vue').CSSProperties => {
      const style: import('vue').CSSProperties = {};
      if (avatarSize.value) {
        return {
          width: avatarSize.value,
          height: avatarSize.value
        };
      }
      return {
        width: '50px',
        height: '50px'
      };
    };

    onMounted(() => {
      // console.log('row', props.row);
    });

    return {
      avatarShape,
      avatarClass,
      getBlockClass,
      getStyle
    };
  }
};
