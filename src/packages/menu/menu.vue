<template>
    <div class="nut-menu">
        <transition :name="!isAnimation?'nutFade':''">
            <div class="nut-menu-mask"
                @click="clickMenuMask"
                v-show="isVisible"
            ></div>
        </transition>
        <transition :name="!isAnimation?'nutSlideDown':''">
            <div class="nut-menu-panel" v-show="isVisible">
                <div class="menu-simple" v-if="type === 'simple' && !$slots.custom">
                    <ul>
                        <li v-for="(item,index) in datalist" :key="index" :class="item.selected ? 'selected' : ''" @click="selectedItem(item,index)">
                            {{item.text}}
                            <span v-if="item.selected"><nut-icon type="tick" color="#f0250f"></nut-icon></span>
                        </li>
                    </ul>
                </div>
                <div class="menu-multiple-style1" v-if="type === 'multiple' && mulstyle === 'style1'" >
                    <ul>
                        <li v-for="(item,index) in datalist" :key="index" :class="{selected:item.selected ? true : false,col2:col == 2 ? true : false,col3:col == 3 ? true : false}" @click="selectMutiple(index)">
                            <nut-checkbox v-model="item.selected" size="small" :disabled="!item.selected && max <= list.filter(value => value.selected == true).length ? true : false">{{item.text}}</nut-checkbox>
                        </li>
                    </ul>
                    <nut-button-group>
                      <nut-button type="light" @click="resetMenu">{{resetBtnTxt}}</nut-button>
                      <nut-button @click="sureMenu">{{okBtnTxt}}</nut-button>
                    </nut-button-group>
                </div>
                <div class="menu-multiple-style2" v-if="type === 'multiple' && mulstyle === 'style2'">
                    <ul>
                        <li v-for="(item,index) in datalist" :key="index" :class="{selected:item.selected ? true : false,col2:col == 2 ? true : false,col3:col == 3 ? true : false}" @click="selectMutiple(index)">
                            <a href="javascript:void(0);">{{item.text}}</a>
                        </li>
                    </ul>
                    <nut-button-group>
                      <nut-button type="light" @click="resetMenu">{{resetBtnTxt}}</nut-button>
                      <nut-button @click="sureMenu">{{okBtnTxt}}</nut-button>
                    </nut-button-group>
                </div>
                <div class="menu-multiple-style3" v-if="type === 'multiple' && mulstyle === 'style3'">
                    <ul>
                        <li v-for="(item,index) in datalist" :key="index" :class="{selected:item.selected ? true : false,col2:col == 2 ? true : false,col3:col == 3 ? true : false}" @click="selectMutiple(index)">
                            <label>{{item.text}}</label>
                        </li>
                    </ul>
                    <nut-button-group>
                      <nut-button type="light" @click="resetMenu">{{resetBtnTxt}}</nut-button>
                      <nut-button @click="sureMenu">{{okBtnTxt}}</nut-button>
                    </nut-button-group>
                </div>
                <div class="menu-custom" v-if="$slots.custom">
                    <slot name="custom">{{custom}}</slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import CheckBox from '../checkbox/checkbox.vue';
import Button from '../button/button.vue';
import ButtonGroup from '../buttongroup/buttongroup.vue';
import Icon from '../icon/icon.vue';
import locale from "../../mixins/locale";
const lockMaskScroll = (bodyCls => {
  let scrollTop;
  return {
    afterOpen: function() {
      scrollTop =
        document.scrollingElement.scrollTop || document.body.scrollTop;
      document.body.classList.add(bodyCls);
      document.body.style.top = -scrollTop + "px";
    },
    beforeClose: function() {
      if (document.body.classList.contains(bodyCls)) {
        document.body.classList.remove(bodyCls);
        document.scrollingElement.scrollTop = scrollTop;
      }
    }
  };
})("dialog-open");
export default {
    name:'nut-menu',
    mixins: [locale],
    components:{
        'nut-button':  Button,
        'nut-button-group': ButtonGroup,
        'nut-checkbox':CheckBox,
        'nut-icon':Icon
    },
    props: {
        isAnimation:{//是否有动画效果
            type:Boolean,
            default:false
        },
        isVisible:{//是否显示
            type:Boolean,
            default:false
        },
        type:{//单选 simple  多选  multiple
            type:String,
            default:'simple'
        },
        col:{//显示的列数
            type:[Number,String],
            default:1
        },
        mulstyle:{//多选样式,支持三种多选样式 style1 style2 style3
            type:[String],
            default:'style1'
        },
        max:{
            type:[String,Number],
            default:5
        },
        custom:{
            type:String,
            default:""
        },
        list:{
            type:Array,
            default:() => {
                return [

                ]
            }
        }
    },
    watch: {
        isVisible(val) {
            lockMaskScroll[val ? "afterOpen" : "beforeClose"]();
        }
    },
    data() {
        return {
            datalist:[]
        };
    },
    mounted() {
        this.datalist = this.list;
    },
    computed: {
        okBtnTxt() {
            return this.nutTranslate('lang.okBtnTxt');
        },
        resetBtnTxt() {
            return this.nutTranslate('lang.menu.resetBtnTxt');
        }
    },
    methods: {
        clickMenuMask() {
            this.$emit('close');
        },
        selectedItem(item,index) {
            this.$emit('choose',item,index);
        },
        selectMutiple(index) {
            if(!this.datalist[index].selected) {
                //判断设置的最大可选项
                let count = 0;
                this.datalist.forEach(item => {
                    if(item.selected) count++;
                });
                if(count >= this.max) {
                    this.$emit('maxTip');
                    return;
                }
            }
            this.$set(this.datalist[index],'selected',!this.datalist[index].selected);
        },
        resetMenu() {
            this.datalist.map((value,key) => value.selected = false);
            this.$emit('reset',this.datalist);
        },
        sureMenu() {
            this.$emit('close');
            this.$emit('ok',this.datalist);
        }
    }
}
</script>
