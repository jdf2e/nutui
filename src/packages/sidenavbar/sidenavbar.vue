<template>
    <div class="nut-sidenavbar">
        <nut-popup
            :position="position"
            v-model="show"
            :style="{ width, height }"
        >
            <div class="sidenavbar-content">
                <div class="sidenavbar-list">
                    <slot></slot>
                </div>
            </div>
        </nut-popup>
    </div>
</template>
<script>
export default {
    name:'nut-sidenavbar',
    props: {
        show:{
            type: Boolean,
            default: true
        },
        position:{
            type: String,
            default: 'right'
        },
        width:{
            type:[String,Number],
            default: '80%'
        },
        height:{
            type:[String,Number],
            default: '100%'
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