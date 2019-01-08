<template>
    <div class="nut-radiogroup">
        <slot></slot>
        <!-- <nut-radio v-for="rdo in gData" :key="rdo.id" :label="rdo.label">{{rdo.text}}</nut-radio> -->
    </div>
</template>
<script>
export default {
    name:'nut-radiogroup',
    props: {
        groupData:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data() {
        return {
            gData:this.groupData
        };
    },
    methods: {
    },
    mounted(){
        console.log(1234,this);
    }
}
</script>