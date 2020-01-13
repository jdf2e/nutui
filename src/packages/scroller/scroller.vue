<template>
    <div class="nut-scroller">
        <template v-if="type === 'vertical'">
            <nut-vert-scroll 
                :stretch="stretch"
                :is-un-more="isUnMore"
                :is-loading="isLoading"
                :threshold="threshold"
                :pulldown-txt="pulldownTxt"
                :load-more-txt="loadMoreTxt"
                :unload-more-txt="unloadMoreTxt"
                :props-time="propsTime"
                @loadMore="loadMore"
                @pulldown="pulldown"
            >
                <slot name="list"  slot="list"></slot>

            </nut-vert-scroll>
        </template>
        <template v-else-if="type === 'horizontal'">
            <nut-hor-scroll :stretch="stretch" @jump="jump">
                <slot name="list"  slot="list"></slot>
                <slot name="more"  slot="more"></slot>
                <slot name="arrow" slot="arrow"></slot>
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
            default: 'horizontal' 
        },
        stretch: {
            type: Number,
            default: 100
        },
        isUnMore: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        threshold: {
            type: Number,
            default: 100
        },
        pulldownTxt: {
            type: String,
            default: '下拉刷新'
        },
        loadMoreTxt: {
            type: String,
            default: '上拉加载'
        },
        unloadMoreTxt: {
            type: String,
            default: '没有更多了'
        },
        propsTime: {
            type:Number,
            default: 0
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