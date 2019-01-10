<template>
    <button :class="clsStyle" :disabled="disabled" @click="clickHandler">
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
    computed: {
        clsStyle() {
            let cls = 'nut-button ';
            cls += `${this.type} ${this.shape}`;
            cls += this.small ? ' small': '';
            cls += this.block ? ' block': '';
            cls += this.label ? ' label': '';
            if(!this.$slots.default) {
                if(this.small) {
                    cls += ' no-txt-small';
                }else {
                    cls += ' no-txt';
                }
            }
            return cls;
        }
    },
    methods: {
        clickHandler() {
            this.$emit('click');
        }
    }
}
</script>