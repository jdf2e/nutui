<template>
    <div class="nut-navbar">
        <div class="nav-left" v-show="leftShow">
            <div class="back" @click="$emit('on-click-back')">
                <slot name="back-icon">
                    <i class="back-icon"></i>
                </slot>
            </div>
            <slot name="left"></slot>
        </div>
        <div class="nav-center">
            <h3 class="nav-title" @click="$emit('on-click-title')">
                <slot>
                    <span v-show="title">{{title}}</span>
                </slot>
            </h3>
        </div>
        <div class="nav-right" v-show="rightShow">
            <slot name="right"></slot>
            <div class="more" @click="$emit('on-click-more')">
                <slot name="more-icon">
                    <i class="more-icon"></i>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-navbar',
    props: {
        title: {
            type: String,
            default: 'NavBar'
        },
        leftShow: {
            type: Boolean,
            default: true
        },
        rightShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {};
    },
    methods: {
        onClickBack(){
            // this.$emit('on-click-back');
            this.$router ? this.$router.back() : window.history.back()
        }
    }
}
</script>