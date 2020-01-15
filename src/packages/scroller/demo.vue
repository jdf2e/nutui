<template>
    <div class="demo-list">
        <nut-noticebar
            :closeMode="true"
            v-if="!isMobile"
        >此 Demo 在 PC 端浏览器与移动端浏览器体验差异较大，建议在 Android 或 iOS 设备上体验。</nut-noticebar>
        <h4>横向滑动</h4>
        <p>支持惯性和吸边回弹，支持滑动到底跳转链接。</p>
        <p><nut-button type="light" shape="circle" small @click="scrollToPosHor()">返回第一个</nut-button></p>
        <div class="hor-panel">
            <nut-scroller @jump="jump()" @scrollToCbk="scrollToCbkHor" :scrollTo="scrollToHor">
                <div slot="list" class="nut-hor-list-item" v-for="(item, index) of listData" :key="index">
                    <dl class="nut-scroller-item-info">
                        <dt>防水升级版 蓝 迷你小音</dt>
                        <dd>2018-02-25</dd>
                    </dl>
                </div>
                <slot slot="more"><div class="nut-hor-jump-more">查看更多</div></slot>
            </nut-scroller>
        </div>
        <h4>横向小于一屏</h4>
        <div class="hor-panel">
            <nut-scroller @jump="jump()">
                <div slot="list" class="nut-hor-list-item" v-for="(item, index) of listData3" :key="index">
                    <dl class="nut-scroller-item-info">
                        <dt>防水升级版 蓝牙音箱 小音</dt>
                        <dd>2018-02-25</dd>
                    </dl>
                </div>
            </nut-scroller>
        </div>
        <h4>纵向滑动</h4>
        <p>支持下拉刷新、上拉加载更多。</p>
        <p><nut-button type="light" shape="circle" small @click="scrollToPos()">返回列表顶部</nut-button></p>
        <div class="vert-panel">
            <nut-scroller
                :is-un-more="isUnMore1" 
                :is-loading="isLoading1"
                :type="'vertical'"
                :propsTime="0"
                :scrollTo="scrollTo"
                @loadMore="loadMoreVert"
                @pulldown="pulldown"
                @scrollToCbk="scrollToCbk"
            > 
                <div slot="list" class="nut-vert-list-panel">
                    <div class="nut-vert-list-item" v-for="(item, index) of listData1" :key="index">
                        <dl class="nut-scroller-item-info">
                            <dt>{{index}}防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音</dt>
                            <dd>2018-02-25</dd>
                        </dl>
                    </div>
                </div>
            </nut-scroller>
        </div>
        <h4>纵向不满一屏</h4>
        <p>支持下拉刷新、上拉加载更多。</p>
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
                        <dl class="nut-scroller-item-info">
                            <dt>{{index}}防水升级版 蓝牙音箱 低音炮 IPX7设计 户外便携音响 迷你小音</dt>
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
            listData: new Array(20),
            listData1: new Array(20),
            listData2: [1, 2],
            listData3: [1],
            maxPages: 4,
            isUnMore1: false,
            isLoading1: false,
            page1: 2,
            maxPages2: 1,
            isUnMore2: false,
            isLoading2: false,
            page2: 2,
            timers: null,
            scrollTo: 1,
            scrollToHor: 1
        };
    },

    methods: {
        jump() {
            location.href = 'http://www.jd.com';
        },

        scrollToCbk() {
            this.scrollTo = 1;
        },

        scrollToCbkHor() {
            this.scrollToHor = 1;
        },

        scrollToPosHor() {
            this.scrollToHor = 0;
            
        },

        scrollToPos() {
            this.scrollTo = 0;
        },

        loadMoreVert() {
            this.isLoading1 = true;
            if (this.page1 > this.maxPages) {
                this.isUnMore1 = true;
                this.isLoading1 = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.isLoading1 = false;
                    this.isUnMore1 = false;
                    this.listData1 = new Array(20 * this.page1);
                    this.page1 = ++this.page1;
                }, 300);
            }
        },

        pulldown() {
            this.isLoading1 = true;
            clearTimeout(this.timers);
            this.timer = setTimeout(() => {
                this.isLoading1 = false;
                this.isUnMore1 = false;
                this.listData1 = new Array(20);
                this.page1 = 2;
            }, 3000);
        },


        loadMoreVert2() {
            this.isLoading2 = true;
            if (this.page2 > this.maxPages2) {
                this.isUnMore2 = true;
                this.isLoading2 = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.isLoading2 = false;
                     this.isUnMore2 = false;
                    this.listData2 = new Array(20 * this.page2);
                    this.page2 = ++this.page1;
                }, 300);
            }
        },

        pulldown2() {
            this.isLoading2 = true;
            clearTimeout(this.timers);
            this.timer = setTimeout(() => {
                this.isLoading2 = false;
                this.isUnMore2 = false;
                this.listData2 = new Array(10);
                this.page2 = 2;
            }, 300);
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
    background-color: #e0e0e0;
    display: flex;
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
        background-color: #FFF;
        color: #000;
        line-height: 100px; 
    }
}
.nut-hor-jump-more{
    display: flex;
    align-items: center;
    height: 100%;
    width: 20px;
    padding: 0 5px;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    color: $primary-color;
    background-color: #fff;
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
    background-color: #e1e1e1;
}
.nut-vert-list-panel{
    .nut-vert-list-item{
        display: flex;
        height: 60px;
        padding: 10px;
        margin-bottom: 10px;
        //background-color: mix($primary-color, #FFF, 90%);
        background-color: #FFF;
        color: #000;
    }
}
</style>


 