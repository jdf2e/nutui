import { NutComponent } from './../../common/component.ts'
import { requestAnimationFrame, isObj } from './../../utils'

NutComponent({

  classes: [
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class',
  ],

  props: {
    show: {
      type: Boolean,
      value: false,
      observer: 'observeShow',
    },
    // 动画类型  fade fade-up
    name: {
      type: String,
      value: 'fade'
    },
    duration: {
      type: null,
      value: 300
    },
    customStyle: String,
  },

  data:{
    classes:[],
    inited: false,
    display: false,
    currentDurtion: 300
  },

  ready() {
    if (this.data.show === true) {
      this.observeShow(true, false);
    }
  },

  methods: {
    // 监听 show 
    observeShow(value: boolean, old: boolean) {
      if (value === old) {
        return;
      }
      value ? this.enter() : this.leave();
    },

    // 进入
    enter(){
      const { name, duration } = this.data
      const currentDuration = isObj(duration) ? duration.enter : duration;

      this.$emit('before-enter')
      requestAnimationFrame(()=>{

        this.setData({
          inited: true,
          display: true,
          classes: [`nut-${name}-enter`,`nut-${name}-enter-active`, 'enter-class', 'enter-active-class',],
          currentDuration
        });


        requestAnimationFrame(() => {
          this.setData({
            classes: [`nut-${name}-enter-active`,`nut-${name}-enter-to`,'enter-active-class','enter-to-class'],
          });
        });

      })
      
      
    },

    // 离开
    leave(){

      const { name ,duration } = this.data
      const currentDuration = isObj(duration) ? duration.leave : duration;
 
      requestAnimationFrame(()=>{
        this.setData({
          classes: [`nut-${name}-leave`,`nut-${name}-leave-active`,'leave-class', 'leave-active-class',],
          currentDuration
        });

        requestAnimationFrame(()=>{

          setTimeout(()=>{
            this.onTransitionEnd()
          }, currentDuration)

          this.setData({
            classes: [`nut-${name}-leave-to`,`nut-${name}-leave-active`,'leave-active-class','leave-to-class'],
          });
        })
      })
    },
    // 动画结束
    onTransitionEnd(){

      const { show, display } = this.data

      if(!show && display){
        this.setData({
          display:false
        })
      }
    }
  },
});
