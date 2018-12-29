<template>
    <div class="nut-col" :class="classObject">
    	<slot></slot>
    </div>
</template>
<script>
export default {
    name:'nut-col',
    props: {
        'span':{
            type:[String,Number],
            default:'24',
        },
        'offset':{
            type:[String,Number],
            default:'0',
        }
    },
    data() {
        return {
            classObject:{
                'nut-col-12':this.span == '12',
                'nut-col-8':this.span == '8',
                'nut-col-6':this.span == '6',
                'nut-col-4':this.span == '4',
                'nut-col-offset-12':this.offset == '12',
                'nut-col-offset-8':this.offset == '8',
                'nut-col-offset-6':this.offset == '6',
                'nut-col-offset-4':this.offset == '4'
            }
        };
    },
    methods: {
    }
}
</script>