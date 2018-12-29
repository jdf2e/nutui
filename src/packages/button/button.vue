<template>
    <button :class="btnCls" :disabled="disabled" @click="clickHandler">
        <nut-icon class="txt-icon" v-if="icon != ''" :type="icon" :color="this.color"></nut-icon>
        <span :style="{color:this.color}"><slot></slot></span>
    </button>
</template>
<script>
import Icon from './../icon/icon.vue';
export default {
    name:'nut-button',
    props: {
        type: {
            type: String,
            default: ''
        },
        shape: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean
        },
        block: {
            type: Boolean
        },
        small: {
            type: Boolean
        },
        label: {
            type: Boolean
        },
        color: {
            type: String,
            default: ''
        }
    },
    components: {
        'nut-icon': Icon
    },
    data() {
        return {
            btnCls: ''
        };
    },
    mounted() {
        this.initStyle();
        this.initIcon();
    },
    methods: {
        initStyle() {
            this.btnCls = `nut-button ${this.type} ${this.shape}`;
            this.btnCls += this.small ? ' small': '';
            this.btnCls += this.block ? ' block': '';
            this.btnCls += this.label ? ' label': '';
        },
        initIcon() {
            if(!this.$slots.default) {
                if(this.small) {
                    this.btnCls += ' no-txt-small';
                }else {
                    this.btnCls += ' no-txt';
                }
            }            
        },
        clickHandler() {
            this.$emit('click');
        }
    }
}
</script>