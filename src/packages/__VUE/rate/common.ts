import { computed, Ref, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { pxCheck } from '@/packages/utils/pxCheck';
import { useTouch } from '@/packages/utils/useTouch';
const { componentName } = createComponent('rate');
const useComponent = (touchable: Boolean = true) => {
  return {
    props: {
      count: {
        type: [String, Number],
        default: 5
      },
      modelValue: {
        type: [String, Number],
        default: 0
      },
      iconSize: {
        type: [String, Number],
        default: 18
      },
      activeColor: {
        type: String,
        default: ''
      },
      voidColor: {
        type: String,
        default: ''
      },
      uncheckedIcon: {
        type: String,
        default: 'star-n'
      },
      checkedIcon: {
        type: String,
        default: 'star-fill-n'
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      allowHalf: {
        type: Boolean,
        default: false
      },
      touchable: {
        type: Boolean,
        default: true
      },
      spacing: {
        type: [String, Number],
        default: 14
      },
      classPrefix: {
        type: String,
        default: 'nut-icon'
      },
      fontClassName: {
        type: String,
        default: 'nutui-iconfont'
      }
    },
    emits: ['update:modelValue', 'change'],
    setup(props: any, { emit }: any) {
      const rateRefs = ref<HTMLElement[]>([]);
      const classes = computed(() => {
        const prefixCls = componentName;
        return {
          [prefixCls]: true
        };
      });
      const updateVal = (value: number) => {
        emit('update:modelValue', value);
        emit('change', value);
      };
      const onClick = (e: number, index: number) => {
        if (props.disabled || props.readonly) return;
        let value = 0;
        if (index === 1 && props.modelValue === index) {
        } else {
          value = index;
          if (props.allowHalf && e == 2) {
            value -= 0.5;
          }
        }
        updateVal(value);
      };
      const getScoreByPosition = (x: number, rateRefs: Ref<HTMLElement[]>, allowHalf: boolean) => {
        let v = 0;
        for (let index = rateRefs.value.length - 1; index >= 0; index--) {
          const item = rateRefs.value[index];
          if (x > item.offsetLeft) {
            if (allowHalf) {
              v = index + (x > item.offsetLeft + item.clientWidth / 2 ? 1 : 0.5);
            } else {
              v = index + 1;
            }
            break;
          }
        }
        return v;
      };
      const touch = useTouch();
      const touchMethods = {
        onTouchStart(event: Event) {
          if (!props.touchable) return;
          touch.start(event);
        },
        onTouchMove(event: Event) {
          if (!props.touchable || !touchable) return;
          touch.move(event);
          if (touch.isHorizontal()) {
            if (rateRefs.value) {
              event.preventDefault();
              updateVal(getScoreByPosition(touch.moveX.value, rateRefs, props.allowHalf));
            }
          }
        }
      };
      const refRandomId = Math.random().toString(36).slice(-8);
      return {
        classes,
        ...touchMethods,
        onClick,
        pxCheck,
        rateRefs,
        refRandomId
      };
    }
  };
};

// import { useTaroRect } from '@/packages/utils/useTaroRect';
// const getScoreByPositionTaro = async (x: number, rateRefs: Ref<HTMLElement[]>, allowHalf: boolean) => {
//     let v = 0;
//     for (let index = rateRefs.value.length - 1; index >= 0; index--) {
//         const _item = rateRefs.value[index];
//         let item = await useTaroRect(_item, Taro);
//         if (x > (item.left)) {
//             if (allowHalf) {
//                 v = index + (x > item.left + item.width / 2 ? 1 : 0.5);
//             } else {
//                 v = index + 1;
//             }
//             break;
//         }
//     }
//     return v;
// };
export const component = useComponent();
export const taroComponent = useComponent(false);
