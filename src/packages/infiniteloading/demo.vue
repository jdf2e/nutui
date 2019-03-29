<template>
    <div>
        <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true" :has-more="isHasMore" :is-loading="isLoading"
           :threshold="200">
            <ul class="list" >
                <li class="list-item" v-for="(item, index) of data" :key="item">我是测试数据{{index + 1}}</li>
            </ul>
        </nut-infiniteloading>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: new Array(30),
            page: 2,
            num: 30,
            isHasMore: true,
            isLoading: false,
            isErr: false,
            timer: null
        };
    },
    methods: {
        onInfinite () {
            this.isLoading = true;
            this.timer = setTimeout(() => {
                if (this.page <= 5) {
                    this.data = new Array(this.num * this.page);
                    this.page = this.page + 1;
                } else {
                    this.isHasMore = false;
                }
                this.isLoading = false;
            }, 100);
        }
    },
    destroyed() {
        clearTimeout(this.timer);
    }
};
</script>

<style lang="scss" scoped>
.list{
    padding-top: 10px; 
    .list-item{
        height: 50px;
        border: 1px solid mix($primary-color, #FFF, 40%);
        margin-bottom: 10px;
        font-size: 12px;
        color: mix($primary-color, #FFF, 80%);
        line-height: 50px;
        text-align: center;
        background-color: #fff;
    }
}
</style>
