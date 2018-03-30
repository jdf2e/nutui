<template>
    <div>
        <h1>InfiniteLoading</h1>
        <p>无限加载，多用于列表页面，当数据条数过多时，滑动到屏幕底部，加载下一页数据。</p>
        <nut-infiniteloading @on-refresh="onRefresh" @on-infinite="onInfinite" :noMore="noMore">
            <div v-for="item in resultList" class="item-li">{{item}}</div>
        </nut-infiniteloading>
    </div>
</template>

<script>
export default {
    data(){
        return{
            teml1:`<nut-infiniteloading @on-refresh="onRefresh" @on-infinite="onInfinite" :noMore="noMore">
    <div v-for="item in resultList">{{item}}</div>
</nut-infiniteloading>`,
            teml2:`export default {
    data(){
        return{
            page: 1, //当前页
            pageSize: 10, // 一页显示多少条
            noMore: false, //暂无更多数据显示
            resultList:[]
        }
    },
    created(){
        this.getList();
    },
    methods:{
        //查询列表
        getList(suc){
            let self = this;
            //模拟异步
            setTimeout(function(){
                let queryList = [1,2,3,4,5,6,7,8,9,10,11,12,13];
                if(self.page == 1){
                    self.resultList = queryList;
                } else {
                    self.resultList =[...self.resultList, ...queryList];
                }
                // self.noMoreFlag = true;//根据查询回的数据判断是否还有更多数据
                if(suc){
                    suc();
                }
            },600);
        },
        //刷新调用
        onRefresh(done) {
            this.page = 1;
            this.getList(done);
        },
        //下一页调用
        onInfinite(done) {
            this.page++;
            this.getList(done);
        }
    }
}`,
            page: 1, //当前页
            pageSize: 10, // 一页显示多少条
            noMore: false, //暂无更多数据显示
            resultList:[]
        }
    },
    created(){
        this.getList();
    },
    methods:{
        //查询列表
        getList(suc){
            let self = this;
            //模拟异步
            setTimeout(function(){
                let queryList = [1,2,3,4,5,6,7,8,9,10];
                if(self.page == 1){
                    self.resultList = queryList;
                } else {
                    self.resultList =[...self.resultList, ...queryList];
                }
                // self.noMoreFlag = true;//根据查询回的数据判断是否还有更多数据
                if(suc){
                    suc();
                }
            },600);
        },
        //刷新调用
        onRefresh(done) {
            this.page = 1;
            this.getList(done);
        },
        //下一页调用
        onInfinite(done) {
            this.page++;
            this.getList(done);
        }
    }
}
</script>

<style>
.item-li {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e7e7e7;
}
.no-more {
    text-align: center;
}
</style>
