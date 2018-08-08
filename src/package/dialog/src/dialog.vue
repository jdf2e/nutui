<template>
    <transition name="fade">
        <div :class="['nut-dialog-wrapper',customClass]" :id="id" v-show="visible" @click="modalClick">
            <div class="nut-dialog" :class="{'nut-dialog-no-header':noHeader}" @click.stop @touchmove.stop>
                <div class="nut-dialog-header">
                    <span class="nut-dialog-title">{{title}}</span>
                    <a href="javascript:;" v-if="!noCloseBtn" @click="closeBtnClick($event)" class="nut-dialog-close">
                        <svg>
                            <use xlink:href="#close2" />
                        </svg>
                    </a>
                </div>
                <div class="nut-dialog-body" v-html="content">
                </div>
                <div class="nut-dialog-footer" v-if="!noFooter">
                    <button class="nut-dialog-btn nut-dialog-cancel" v-if="!noCancelBtn" @click="cancelBtnClick(cancelAutoClose,$event)">{{cancelBtnTxt}}</button>
                    <button class="nut-dialog-btn nut-dialog-ok" v-if="!noOkBtn" :class="{'disabled':okBtnDisabled}" :disabled="okBtnDisabled" @click="okBtnClick($event)">{{okBtnTxt}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import closeIcon from '../../../asset/img/svg/close2.svg';
export default {
    name: 'nut-dialog',
    data() {
        return {
            'id':'',
            'title': '',
            'content': '',
            'visible': false,
            'noCloseBtn': false,
            'closeOnClickModal': true,
            'noHeader': false,
            'noFooter': false,
            'noOkBtn': false,
            'noCancelBtn': false,
            'cancelBtnTxt': '取 消',
            'okBtnTxt': '确 定',
            'okBtnDisabled': false,
            'cancelAutoClose': true,
            'onOkBtn': null,
            'onCloseBtn': null,
            'onCancelBtn': null,
            'closeCallback':null,
            'customClass':'',
        }
    },
    methods: {
        modalClick() {
            if (!this.closeOnClickModal) return;
            this.close('modal');
        },
        close(target) {
            if(typeof(this.closeCallback) === 'function'){
                if(this.closeCallback(target) === false) return;
            }
            this.visible = false;
        },
        okBtnClick(event) {
            if(typeof(this.onOkBtn) === 'function'){
                this.onOkBtn(event);
            }
        },
        cancelBtnClick(autoClose,event) {
            if(typeof(this.onCancelBtn) === 'function'){
                if(this.onCancelBtn(event) === false) return;
            }
            autoClose && this.close();
        },
        closeBtnClick(event){
            if(typeof(this.onCloseBtn) === 'function'){
                if(this.onCloseBtn(event) === false) return;
            }
            this.close('closeBtn');
        }
    },
    watch: {
        'visible': {
            handler(val) {
            },
            immediate: true
        }
    }
}
</script>
<style lang="scss">
.no-scroll {
    height: 100%;
    width: 100%;
    overflow: hidden;
    body {
        display: block;
        position: absolute;
        height: auto;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }
}

.nut-dialog-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .5);
    font-size: .32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:9998;
}

.nut-dialog {
    width: 74%;
    max-height: 70vh;
    background: #FFF;
    border-radius: .2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.nut-dialog-no-header {
    position: relative;
    .nut-dialog-header {
        height: 0;
        line-height: 0;
        border: none;
    }
    .nut-dialog-title {
        height: 0;
        line-height: 0;
        font-size: 0;
    }
    .nut-dialog-close {
        height: .8rem;
        line-height: .8rem;
    }
    .nut-dialog-body {
        padding: .6rem .2rem .2rem;
    }
}

.nut-dialog-header {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #E0E0E0;
    display: flex;
}

.nut-dialog-title {
    display: block;
    height: 100%;
    flex: 1;
    padding: 0 .2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.nut-dialog-close {
    display: inline-block;
    width: .8rem;
    height: 100%;
    font-size: .4rem;
    text-align: center;
    text-decoration: none;
    svg {
        width: .2rem;
        height: .24rem;
    }
    line {
        stroke: #6a6f7b;
        stroke-width: 1px;
    }
}

.nut-dialog-body {
    padding: .4rem .2rem;
    overflow: auto;
    word-break: break-all;
}

.nut-dialog-footer {
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    display: flex;
    border-radius: 0 0 .2rem .2rem;
    overflow: hidden;
    flex-direction: row;
}

.nut-dialog-btn {
    display: block;
    width: 100%;
    height: 100%;
    flex: 1;
    font-size: .32rem;
    border: none;
    background: transparent;
    &.disabled {
        background: #DADADA;
        color: #A3A3A3;
    }
    &:only-child{
        border-radius: 0 0 .2rem .2rem;
    }
}

.nut-dialog-ok {
    border-radius: 0 0 .2rem 0;
    background: #F23030;
    color: #FFF;
}

.nut-dialog-cancel {
    border-radius: 0 0 0 .2rem;
    border-top: 1px solid #E0E0E0;
}

.fade-enter-active {
    animation:zoomIn 0.3s forwards;
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        transform: scale3d(1.3, 1.3, 1.3);
    }
    50% {
        opacity: 1;
    }
}

@keyframes zoomOut {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
        transform: scale3d(1.3, 1.3, 1.3);
    }
    100% {
        opacity: 0;
    }
}

.fade-leave-active {
    animation:zoomOut 0.3s forwards;
}
</style>
