<template>
    <div class="nut-actionsheet">
        <transition :name="isAnimation?'nutFade':''">
            <div class="nut-actionsheet-mask"  
                @click="clickActionSheetMask" 
                v-show="isVisible"
            ></div>
        </transition>
        <transition :name="isAnimation?'nutSlideUp':''">
            <div class="nut-actionsheet-panel"  
                v-show="isVisible"
            >
                <div class="nut-actionsheet-custom"  v-if="$slots.custom">
                    <slot name="custom" v-html="custom"></slot>
                </div>
                <dl class="nut-actionsheet-modal" v-if="$slots.title || $slots.subTitle ">
                    <dt class="nut-actionsheet-title"><slot name="title" v-html="title"></slot></dt>
                    <dd class="nut-actionsheet-sub-title"><slot name="sub-title" v-html="subTitle"></slot></dd>
                </dl>
                <ul class="nut-actionsheet-menu" >
                    <li class="nut-actionsheet-item" 
                        :class="{'nut-actionsheet-item-active': isHighlight(item)}"
                        v-for="(item, index) of menuItems"
                        :key="index"
                        @click="chooseItem(item)"
                    >{{item[optionTag]}}</li>
                </ul>
                <div class="nut-actionsheet-cancel" 
                    v-if="cancelTxt"
                    @click="closeActionSheet" 
                >{{cancelTxt}}</div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name:'nut-actionsheet',
    props: {
        isAnimation: {
            type: Boolean,
            default: true
        },
        isVisible: {
            type: Boolean,
            default: false
        },
        isClickCloseMask: {
            type: Boolean,
            default: true
        },
        cancelTxt: {
            type: String,
            default: ''
        },
        optionTag: {
            type: String,
            default: 'name'
        },
        chooseTagValue: {
            type: String,
            default: ''
        },
        menuItems: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {};
    },
    watch: {
        isVisible (value) {
            !!value && this.$emit('open');
        }
    },
    methods: {
        isHighlight(item) {
            return (this.chooseTagValue && this.chooseTagValue == item[this.optionTag]) || this.chooseTagValue === 0;
        },
        closeActionSheet() {
            this.$emit('close');
        },

        clickActionSheetMask() {
            !!this.isClickCloseMask && this.closeActionSheet();
        },

        chooseItem(item) {
            this.closeActionSheet();
            this.$emit('choose', item);
        }
    }
}
</script>