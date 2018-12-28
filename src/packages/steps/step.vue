<template>
    <div class="nut-step clearfix" :class="'nut-step-status-' + currentStatus">
        <div class="nut-step-line"></div>
        <div class="nut-step-index">{{stepNumber}}</div>
        <div class="nut-step-main">
            <div class="nut-step-title">{{title || nutTranslate('lang.steps.step')}}</div>
            <div class="nut-step-content">{{content || nutTranslate('lang.steps.stepDesc')}}</div>
        </div>
    </div>
</template>
<script>
import locale from "../../mixins/locale";
export default {
    name:'nut-step',
    mixins: [locale],
    props: {
      title: {
        type: String
      },
      content: {
        type: String
      }
    },
    data() {
        return {
           currentStatus: '',
           stepNumber: 0,
           stepStatus: 'nut-step-status'
        };
    },
    methods: {
    },
    mounted() {

    }
}
</script>