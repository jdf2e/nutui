<template>
    <div class="nut-choose">
    <nut-mask 
		:visible.sync="maskShow"
		></nut-mask>
    </div>
</template>
<script>
export default {
    name:'nut-choose',
    props: {
    },
    data() {
        return {
        	maskShow: false
        };
    },
    methods: {
    }
}
</script>
<style lang="scss">
</style>