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
                <div slot="list" class="nut-hor-list-item" v-for="(item, index) of listData" :key="index">
                    <div class="nut-scroller-item-img">
                        <img src="" alt="" data-src="//m.360buyimg.com/babel/s452x452_jfs/t17869/89/1529579560/27020/8b71651a/5aced5aeN993e3538.jpg">
                    </div>
                    <dl class="nut-scroller-item-info">
                        <dt>防水升级版 蓝 迷你小音</dt>
                        <dd>2018-02-25</dd>
                    </dl>
                </div>
                <slot slot="more"><div class="nut-hor-jump-more">释放查看更多</div></slot>
            </nut-scroller>
        </div>
        <h4>横向小于一屏</h4>
        <div class="hor-panel">
            <nut-scroller :list-data="listData3"  
                :is-un-more="isUnMore3" 
                :is-loading="isLoading3"
                @loadMore="loadMoreHor3"
            >
                <div slot="list" class="nut-hor-list-item" v-for="(item, index) of listData3" :key="index">
                    <div class="nut-scroller-item-img">
                        <img src="" alt="" data-src="//m.360buyimg.com/babel/s452x452_jfs/t17869/89/1529579560/27020/8b71651a/5aced5aeN993e3538.jpg">
                    </div>
                    <dl class="nut-scroller-item-info">
                        <dt>防水升级版 蓝牙音箱 小音</dt>
                        <dd>2018-02-25</dd>
                    </dl>
                </div>
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
                        <div class="nut-scroller-item-img">
                            <img src="" alt="" data-src="//m.360buyimg.com/babel/s452x452_jfs/t17869/89/1529579560/27020/8b71651a/5aced5aeN993e3538.jpg">
                        </div>
                        <dl class="nut-scroller-item-info">
                            <dt>防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音</dt>
                            <dd>2018-02-25</dd>
                        </dl>
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
                        <div class="nut-scroller-item-img">
                            <img src="" alt="" data-src="" class="load-err">
                        </div>
                        <dl class="nut-scroller-item-info">
                            <dt>防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音</dt>
                            <dd>2018-02-25</dd>
                        </dl>
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
            listData3: [1],
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
            page2: 2,
            isUnMore3: false,
            isLoading3: false,
            page3: 2
        };
    },

    methods: {
        loadMoreHor() {
            this.isLoading = true;
            if (this.page > this.maxPages) {
                this.isUnMore = true;
                this.isLoading = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.page = ++this.page;
                    this.listData = [...this.listData, ...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
                    console.log(this.listData);
                    this.isLoading = false;
                }, 300);
            }
        },

        loadMoreHor3() {
            this.isLoading3 = true;
            if (this.page3 > this.maxPages2) {
                this.isUnMor3 = true;
                this.isLoading3 = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.page3 = ++this.page3;
                    this.listData3 = [...this.listData3, ...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
                    console.log(this.listData3);
                    this.isLoading3 = false;
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
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.page1 = ++this.page1;
                    this.isLoading1 = false;
                    this.listData1 = [...this.listData1, ...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
                    console.log(this.listData1);
                    
                }, 2000);
            }
        },

        pulldown() {
            this.isLoading1 = true;
            clearTimeout(this.timers);
            this.timer = setTimeout(() => {
                this.page1 = 2;
                this.isLoading1 = false;
                this.isUnMore1 = false;
                this.listData1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                
            }, 2000);
        },


        loadMoreVert2() {
            this.isLoading2 = true;
            if (this.page2 > this.maxPages2) {
                this.isUnMore2 = true;
                this.isLoading2 = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.page2 = ++this.page1;
                    this.isLoading2 = false;
                    this.listData2 = [...this.listData1, ...[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
                    console.log(this.listData1);
                }, 2000);
            }
        },

        pulldown2() {
            this.isLoading2 = true;
            clearTimeout(this.timers);
            this.timer = setTimeout(() => {
                this.page2 = 2;
                this.isLoading2 = false;
                this.isUnMore2 = false;
                this.listData2 = [11, 12, 13, 14, 15, 16];
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
    height: 80px;
    background-color: mix($primary-color, #FFF, 10%);
}
.nut-hor-list{
    .nut-hor-list-item{
        display: flex;
        align-content: center;
        justify-content: center;
        flex-shrink: 0;
        width: 180px;
        height: 60px;
        padding: 10px;
        margin-left: 10px;
        background-color: mix($primary-color, #FFF, 90%);
        color: #FFF;
        line-height: 100px; 
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
.nut-scroller-item-img{
    height: 58px;
    width: 58px;
    border-radius: 10px;
    border: 1px solid #eee;
    overflow: hidden;
}
dl, dt, dd{
    margin: 0;
}
.nut-scroller-item-info{
    flex: 1;
    padding-left: 10px;
    line-height: 20px;
    dt{
        font-size: 14px;
    }
    dd{
        margin-left: 0;
        font-size: 12px;
    }
}
.vert-panel{
    height: 400px; 
    padding: 10px; 
    background-color: mix($primary-color, #FFF, 10%);
}
.nut-vert-list-panel{
    .nut-vert-list-item{
        display: flex;
        height: 60px;
        padding: 10px;
        margin-bottom: 10px;
        background-color: mix($primary-color, #FFF, 90%);
        color: #FFF;
    }
}
</style>
