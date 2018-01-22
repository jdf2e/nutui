<template>
    <transition name="currentTransition">
        <div id="randomId" class="nut-popup-wrapper" v-show="visible" @click="closePopup">
            <div class="nut-popup" @click.stop @touchmove.stop>
                <div v-if="configItems.popupHeaderVisible == undefined ? true : configItems.popupHeaderVisible" class="nut-popup-header">
                    <div v-if="configItems.hasCloseBtn == undefined ? true : configItems.hasCloseBtn">
                        <span @click="closePopup" class="nut-popup-close">×</span>
                    </div>
                    <div v-else class="header-oper-container">
                        <span class="oper-text text-cancel" @click="cancelClick(cancelClose, $event)">{{configItems.cancelText == undefined ? '取消' : configItems.cancelText}}</span>
                        <span class="oper-text text-ok" @click="okClick($event)">{{configItems.okText == undefined ? '确定' : configItems.okText}}</span>
                    </div>
                </div>
                <div class="nut-popup-content">
                    <slot></slot>
                </div>
                <div v-if="configItems.popupFooterVisible == undefined ? true : configItems.popupFooterVisible" class="nut-popup-footer">
                    <div v-if="configItems.btnAmount < 2" class="footer-btn-container">
                        <button class="nut-popup-btn nut-popup-onlyone" @click="onlyOneBtnClick($event)">
                            {{configItems.onlyOneBtnText == undefined ? '去购买' : configItems.onlyOneBtnText}}
                        </button>
                    </div>
                    <div v-else class="footer-btn-container">
                        <button class="nut-popup-btn nut-popup-cancel" @click="cancelBtnClick(cancelAutoClose,$event)">
                            {{configItems.cancelBtnText == undefined ? '取 消' : configItems.cancelBtnText}}
                        </button>
                        <button class="nut-popup-btn nut-popup-ok" @click="okBtnClick($event)">
                            {{configItems.okBtnText == undefined ? '确 定' : configItems.okBtnText}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name:'nut-popup',
    props: {
        popupVisible: {
            default: false,
            type: Boolean
        },
        configItems: {
            default: null,
            type: Object
        }
    },
    mounted: function() {
    },
    data() {
        return {
            visible: this.popupVisible,
            randomId: ''
        };
    },
    methods: {
        isFunction(fn) {
            return Object.prototype.toString.call(fn) === '[object Function]';
        },
        maskClick() {
            this.closePopup();
        },
        closePopup() {
            this.visible = false;
        },
        cancelClick(event) {
            this.$emit('cancel-click', event);
            this.closePopup();
        },
        okClick(event) {
            this.$emit('ok-click', event);
        },
        onlyOneBtnClick(event) {
            this.$emit('onlyone-btn-click', event);
        },
        cancelBtnClick(event) {
            this.$emit('cancel-btn-click', event);
            this.closePopup();
        },
        okBtnClick(event) {
            this.$emit('ok-btn-click', event);
        }
    },
    watch: {
        popupVisible: function(val) {
            console.log(`popupVisible ${val}`);
            this.visible = val;
        },
        visible: function(val) {
            console.log(`visible ${val}`);
            this.$emit('update:popupVisible', val)
        }
    }
}
</script>
<style lang="scss">
.nut-popup-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .5);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.nut-popup{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 70%;
    background-color: #fff;
    border-top: 1px solid #dadada;
    z-index: 250;
    display: block;
    -webkit-animation: spec-menu-move .5s 1 ease 0s;
    -moz-animation: spec-menu-move .5s 1 ease 0s;
    -ms-animation: spec-menu-move .5s 1 ease 0s;
    -o-animation: spec-menu-move .5s 1 ease 0s;
    animation: spec-menu-move .5s 1 ease 0s;
}
.header-oper-container{
    height: 30px;
    line-height: 30px;
    position: relative;
}
.text-cancel{
    position: absolute;
    left: 15px;
}
.text-ok{
    position: absolute;
    right: 15px;
    color: #e4393c;
}
.nut-popup-close{
    position: absolute;
    top: 5px;
    right: 12px;
    width: 14px;
    height: 14px;
    display: inline-block;
    font-size: 26px;
}
.footer-btn-container{
    width: 100%;
    font-size: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.nut-popup-btn{
    display: block;
    height: 43px;
    width: 50%;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 15px;
    line-height: 43px;
    color: #fff;
    text-align: center;
    margin: 0;
    border: 0;
    border-radius: 0;
}
.nut-popup-cancel{
    background-color: #ffb03f;
}
.nut-popup-ok{
    background-color: #f23030;
}
.nut-popup-onlyone{
    background-color: #f23030;
    color: #fff;
}
@-webkit-keyframes spec-menu-move{0%{height:0}100%{height:70%}}
@-moz-keyframes spec-menu-move{0%{height:0}100%{height:70%}}
@-ms-keyframes spec-menu-move{0%{height:0}100%{height:70%}}
@-o-keyframes spec-menu-move{0%{height:0}100%{height:70%}}
@keyframes spec-menu-move{0%{height:0}100%{height:70%}}
</style>