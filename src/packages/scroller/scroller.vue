<template>
    <div class="nut-scroller">
        <template v-if="type === 'vertical'">
            <nut-vert-scroll 
                :stretch="stretch"
                :is-un-more="isUnMore"
                :is-loading="isLoading"
                @loadMore="loadMore"
                @pulldown="pulldown"
            >
                <slot name="list"  slot="list"></slot>
            </nut-vert-scroll>
        </template>
        <template v-else-if="type === 'horizontal'">
            <nut-hor-scroll :list-data="listData"
                :line-spacing="lineSpacing"
                :stretch="stretch"
                :is-un-more="isUnMore"
                :is-loading="isLoading"
                @loadMore="loadMore"
                @jump="jump"
            >
                <slot name="list"  slot="list"></slot>
                <slot name="more"  slot="more"></slot>
            </nut-hor-scroll>
        </template>
    </div>
</template>
<script>
import nutVertScroll from "./vertical-scroll.vue";
import nutHorScroll from "./horizontal-scroll.vue";
export default {
    name:'nut-scroller',
    props: {
        type: {
            type: String,
            default: 'horizontal' // horizontal vertical
        },
        listData: {
            type: Array,
            default: () => []
        },
        lineSpacing: {
            type: Number,
            default: 210
        },
        stretch: {
            type: Number,
            default: 200
        },
        isUnMore: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    components: {
        [nutVertScroll.name]: nutVertScroll,
        [nutHorScroll.name]: nutHorScroll
    },
    methods: {
        loadMore() {
            this.$emit('loadMore');
        },

        jump() {
            this.$emit('jump');
        },

        pulldown() {
            this.$emit('pulldown');
        }
    }
}
</script>