<template>
    <div class="nut-row" :class="classObject" :style="styleObject">
    	<slot></slot>
    </div>
</template>
<script>
export default {
    name:'nut-row',
    props: {
        'type':{
            type:String,
            default:''
        },
        'gutter':{
            type:[String,Number],
            default:''
        },
        'tag':{
            type:String,
            default:'div'
        },
        'justify':{
            type:String,
            default:'start'
        },
        'align':{
            type:String,
            default:'flex-start'
        },
        'flexWrap':{
            type:String,
            default:'nowrap'
        }
    },
    data() {
        return {
            classObject:{
                'nut-row-flex' : this.type == 'flex',
                'nut-row-justify-center':this.justify == 'center',
                'nut-row-justify-end':this.justify == 'end',
                'nut-row-justify-space-between':this.justify == 'space-between',
                'nut-row-justify-space-around':this.justify == 'space-around',
                'nut-row-align-center':this.align == 'center',
                'nut-row-align-flex-end':this.align == 'flex-end',
                'nut-row-flex-wrap':this.flexWrap == 'wrap',
                'nut-row-flex-reverse':this.flexWrap == 'reverse'
            },
            styleObj:{
                'margin-left':-this.gutter+'px',
                'margin-right':-this.gutter+'px'
            }
        };
    },
    computed:{
        styleObject(){
            if(this.gutter!=''){
                return function(){
                    this.styleObj;
                }
            }
        }
    },
    methods: {
        initCol:function(slot){
            for(let i = 0;i<slot.length;i++){
                let tag = slot[i].tag;
                if(typeof tag == 'string'){
                    if(tag.indexOf('nut-col') != -1) {
                        var slotElm = slot[i].elm;
                        slotElm.style.paddingLeft = this.gutter+'px';
                        slotElm.style.paddingRight = this.gutter+'px';
                    }
                }
            }
        }
    },
    mounted() {
        let slot = [...this.$slots.default];
        this.initCol(slot);
    },
}
</script>