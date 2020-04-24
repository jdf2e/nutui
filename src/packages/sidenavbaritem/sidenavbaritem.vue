<template>
    <div class="nut-sidenavbaritem">     
        <li>
            <a href="javascript:;" class="item-title sub-sidenavbar-item-item">
                {{ title }}
            </a>
        </li>
    </div>
</template>
<script>
export default {
    name:'nut-sidenavbaritem',
    props: {
        disabled: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            
        };
    },
    methods: {

    }
}
</script>