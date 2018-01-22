<template>
    <div>
        <h1>InfiniteLoading</h1>
        <p>无限加载，多用于列表页面，当数据条数过多时，滑动到屏幕底部，加载下一页数据。</p>
        <a class="button button-primary" href="/demo.html#/infiniteLoading" target="_blank">Demo</a>
        <pre><code v-highlight v-text="teml1"></code></pre>
        <pre><code v-highlight v-text="teml2"></code></pre>
        <h5>Props</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>botLoading</td>
              <td>滚动到底部自动加载</td>
              <td>Boolen</td>
              <td>true</td>
              <td>--</td>
            </tr>
            <tr>
              <td>noMore</td>
              <td>是否还有更多数据</td>
              <td>Boolen</td>
              <td>false</td>
              <td>--</td>
            </tr>
            <tr>
              <td>enableInfinite</td>
              <td>允许无限加载</td>
              <td>Boolen</td>
              <td>true</td>
              <td>--</td>
            </tr>
            <tr>
              <td>enableRefresh</td>
              <td>允许刷新</td>
              <td>Boolen</td>
              <td>true</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>on-refresh</td>
              <td>列表顶部下拉时回调，通常用于刷新数据</td>
              <td>--</td>
            </tr>
            <tr>
              <td>on-infinite</td>
              <td>列表底部上拉时回调，通常用于加载更多数据</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
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
}`
        }
    },
    created(){

    },
    methods:{

    }
}
</script>

<style>

</style>
