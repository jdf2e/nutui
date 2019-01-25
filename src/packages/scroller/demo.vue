<template>
    <div class="demo-list">
        <nut-noticebar
            :closeMode="true"
            v-if="!isMobile"
        >此 Demo 在 PC 端浏览器与移动端浏览器体验差异较大，建议在 Android 或 iOS 设备上体验。</nut-noticebar>
        <h4>横向用法</h4>
        <div class="hor-panel">
            <nut-scroller :list-data="listData"  
                :is-un-more="isUnMore" 
                :is-loading="isLoading"
                @loadMore="loadMoreHor"
                @jump="jump()"
            >
                <div slot="list" class="nut-hor-list-item" v-for="(item, index) of listData" :key="index">{{index}}</div>
                <slot slot="more"><div class="nut-hor-jump-more">释放查看更多</div></slot>
            </nut-scroller>
        </div>
        <h4>竖向用法</h4>
        <div class="vert-panel">
            <nut-scroller
                :is-un-more="isUnMore1" 
                :is-loading="isLoading1"
                :type="'vertical'"
                @loadMore="loadMoreVert"
                @pulldown="pulldown"
            > 
                <div slot="list" class="nut-vert-list-panel">
                    <div class="nut-vert-list-item" v-for="(item, index) of listData1" :key="index">
                        {{index}}
                    </div>
                </div>
            </nut-scroller>
        </div>
        <h4>竖向不满一屏用法</h4>
        <div class="vert-panel">
            <nut-scroller
                :is-un-more="isUnMore2" 
                :is-loading="isLoading2"
                :type="'vertical'"
                @loadMore="loadMoreVert2"
                @pulldown="pulldown2"
            > 
                <div slot="list" class="nut-vert-list-panel">
                    <div class="nut-vert-list-item" v-for="(item, index) of listData2" :key="index">
                        {{index}}
                    </div>
                </div>
            </nut-scroller>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            listData1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            listData2: [1, 2],
            isUnMore: false,
            isLoading: false,
            maxPages: 3,
            page: 2,
            timers: null,
            isUnMore1: false,
            isLoading1: false,
            page1: 2,
            maxPages2: 1,
            isUnMore2: false,
            isLoading2: false,
            page2: 2
        };
    },

    methods: {
        loadMoreHor() {
            this.isLoading = true;
            if (this.page > this.maxPages) {
                this.isUnMore = true;
                this.isLoading = false;
            } else {
                this.timer = setTimeout(() => {
                    this.page == ++this.page;
                    this.listData = [...this.listData, ...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
                    console.log(this.listData);
                    this.isLoading = false;
                }, 300);
            }
        },

        jump() {
            console.log('跳转');
            location.href = 'http://www.jd.com';
        },

        loadMoreVert() {
            this.isLoading1 = true;
            if (this.page1 > this.maxPages) {
                this.isUnMore1 = true;
                this.isLoading1 = false;
            } else {
                this.timer = setTimeout(() => {
                    this.page1 = ++this.page1;
                    this.listData1 = [...this.listData1, ...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
                    console.log(this.listData1);
                    this.isLoading1 = false;
                }, 2000);
            }
        },

        pulldown() {
            this.isLoading1 = true;
            this.timer = setTimeout(() => {
                this.page1 = 2;
                this.listData1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                this.isLoading1 = false;
                this.isUnMore1 = false;
            }, 2000);
        },


        loadMoreVert2() {
            this.isLoading2 = true;
            if (this.page2 > this.maxPages2) {
                this.isUnMore2 = true;
                this.isLoading2 = false;
            } else {
                this.timer = setTimeout(() => {
                    this.page2 = ++this.page1;
                    this.listData2 = [...this.listData1, ...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
                    console.log(this.listData1);
                    this.isLoading2 = false;
                }, 2000);
            }
        },

        pulldown2() {
            this.isLoading2 = true;
            this.timer = setTimeout(() => {
                this.page2 = 2;
                this.listData2 = [11, 12];
                this.isLoading2 = false;
                this.isUnMore2 = false;
            }, 2000);
        }
    },
    
    destroyed() {
        clearTimeout(this.timer);
    }
};
</script>

<style lang="scss" scoped>
.hor-panel{
    height: 100px;
    background-color: mix($primary-color, #FFF, 10%);
}
.nut-hor-list{
    .nut-hor-list-item{
        display: flex;
        align-content: center;
        justify-content: center;
        flex-shrink: 0;
        width: 200px;
        height: 100px;
        background-color: mix($primary-color, #FFF, 90%);
        color: #FFF;
        line-height: 100px;
        margin-left: 10px;
    }
}
.nut-hor-jump-more{
    height: 100%;
    width: 20px;
    padding: 5px 10px;
    font-size: 12px;
    text-align: center;
    color: $primary-color;
}

.vert-panel{
    height: 400px; 
    padding: 10px; 
    background-color: mix($primary-color, #FFF, 10%);
}
.nut-vert-list-panel{
    .nut-vert-list-item{
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
        background-color: mix($primary-color, #FFF, 90%);
        font-size: 12px;
        text-align: center;
        line-height: 100px;
        color: #FFF;
    }
}
</style>
