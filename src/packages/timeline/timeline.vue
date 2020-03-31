<template>
    <div class="nut-timeline">
        <slot :isLast="false"></slot>
    </div>
</template>
<script>

export default {
    name:'nut-timeline',
    props: {

    },
    data() {
        return {};
    },
    mounted(){
        console.log(this.$slots)
    },
    methods: {
    }
}
</script>