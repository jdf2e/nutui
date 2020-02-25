<template>
    <a :class="['nut-cell',{'nut-cell-link':isLink}]" 
    :href="linkUrl" 
    :style="{'background-color':bgColor}"
    :target="target"
    @click="jumpPage">
        <div class="nut-cell-box" @click="clickCell">
            <slot name='avatar'></slot>
            <div class="nut-cell-left">
                <span class="nut-cell-title"><slot name="title">{{title}}</slot></span>
                <span class="nut-cell-sub-title"><slot name="sub-title">{{subTitle}}</slot></span>
            </div>
            <div class="nut-cell-right">
                <span class="nut-cell-desc"><slot name="desc">{{desc}}</slot></span>
                <span class="nut-cell-icon">
                <slot name="icon" v-if="showIcon">
                  <nut-icon type="right" size="15px" color="#848484"></nut-icon>
                </slot>
                </span>
            </div>
        </div>
    </a>
</template>
<script>
import Icon from '../icon/icon.vue';

export default {
  name: "nut-cell",
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    isLink: {
      type: Boolean,
      default: false
    },
    linkUrl: {
      type: String,
      default: "javascript:void(0)"
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    bgColor:{
      type:String,
      default:"#fff"
    },
    to:{
      type:String,
      default:""
    },
    target:{
      type:String,
      default:"_self"
    }
  },
  components:{
    'nut-icon':Icon
  },
  data() {
    return {};
  },
  methods:{
    clickCell(){
      this.$emit('click-cell')
    },
    jumpPage(){
      if(!this.to) return false;
      this.$router.push(this.to)
    }
  }

};
</script>