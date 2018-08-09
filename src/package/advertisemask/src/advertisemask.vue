<template>
    <div class="nut-advertisemask">
    	<nut-mask :visible.sync="initShow" :closeOnClickModal="clickMask" @close-mask="maskClose" @open-mask="maskOpen">
            <div class="pic-box" :style="{width:picWidth+'rem',height:picHeight+'rem'}">
                <a :href="linkHref"  v-on:click="jumpTo">
                <img :src="imgSrc" class="image-box" :style="{width:picWidth+'rem',height:picHeight+'rem'}"/>
                </a>
            </div>
            <svg class='close-btn' v-on:click="closeMask" v-if="showClose" :style="{top:closeTop+'rem',right:closeRight+'rem',        transform:'scale('+closeScale+')'}">
              <circle cx="10" cy="10" r="8" stroke="#fff"
              stroke-width="1"  style="fill-opacity:0.1;fill:#000" v-if="circleShow"/>
                <line x1="5" y1="5" x2="15" y2="15" style="stroke:#fff;stroke-width:1" />
                <line x1="5" y1="15" x2="15" y2="5" style="stroke:#fff;stroke-width:1" />
            </svg>  
        </nut-mask>
    </div>
</template>
<script>
import Mask from '../../mask/index.js';
export default {
    name:'nut-advertisemask',
    props: {
        imgSrc:{
            type:String,
            default:'',
            required:true,
        },
        clickMask:{
            type:Boolean,
            default:false,
        },
        showClose:{
            type:Boolean,
            default:true,
        },
        picWidth:{
            type:Number,
            required:true,
        },
        picHeight:{
            type:Number,
            required:true,
        },
        linkHref:{
            type:String,
            default:'javascript:void(0)',
        },
        closeTop:{
            type:Number,
            default:3,
        },
        closeRight:{
            type:Number,
            default:0.8,
        },
        closeScale:{
            type:Number,
            default:1,
        },
        circleShow:{
            type:Boolean,
            default:true,
        },
        initShow:{
            type:Boolean,
            default:true,
        }
    },
    components: {
        'nut-mask':Mask,
    },
    data() {
        return {
        	maskShow: this.initShow,
        };
    },
    methods: {
        closeMask(){
            this.$emit('update:initShow',false);
            this.$emit('closeMask');
        },
        jumpTo(){
            this.$emit('jumpTo');
        },
        maskClose(){
            this.$emit('update:initShow',false);
            this.$emit('maskClose');
        },
        maskOpen(){
            this.$emit('maskOpen');
        }
    }
}
</script>
<style lang="scss">
	.nut-mask{
		z-index:9997 !important;
	}
    .close-btn{
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        z-index: 9999; 
    }
    .pic-box{
        z-index: 9998;
        position:relative;
    }
    .jump-btn{
        width:2.5rem;
        height:0.5rem;
        background:yellow;
        position:absolute;
        bottom:1rem;
        border-radius:0.1rem;
        left:50%;
        transform:translate(-50%,0);
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
    }
</style>