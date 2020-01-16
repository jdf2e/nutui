<template>
    <div>
        <h4>基本用法</h4>
        <div>
            <nut-leftslip>
                <div slot="slip-main" class="slip-main">向左滑动我</div>
                <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a><a href="javascript:;" class="favorite">收藏</a></div>
            </nut-leftslip>
        </div>
        <p>单个按钮</p>
        <div>
            <nut-leftslip>
                <div slot="slip-main" class="slip-main">单一按钮</div>
                <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a></div>
            </nut-leftslip>
            <nut-leftslip onlyDel @oneDelete="oneDel($event)">
                <div slot="slip-main" class="slip-main">向左滑一键删除</div>
                <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a></div>
            </nut-leftslip>
        </div>
        <p>多个按钮</p>
        <div>
            <nut-leftslip>
                <div slot="slip-main" class="slip-main">
                    {{ 111 }}
                </div>
                <div slot="slipbtns" class="slipbtns"
                    ><a href="javascript:;">删除</a>
                    <a href="javascript:;" class="favorite">收藏</a>
                    <a href="javascript:;" class="favorite">收藏</a>
                    <a href="javascript:;" class="favorite">收藏</a>
                    <a href="javascript:;" class="favorite">收藏</a>
                    <a href="javascript:;" class="favorite">收藏1</a>
                    <a href="javascript:;" class="favorite">收藏2</a>
                    <a href="javascript:;" class="favorite">收藏3</a>
                    <a href="javascript:;" class="favorite">收藏4</a>
                </div>
            </nut-leftslip>
        </div>
        <p>列表</p>
        <div>
            <nut-leftslip v-for="(item, index) in list" :key="index">
                <div slot="slip-main" class="slip-main">
                    <div class="addr">
                        <p class="name-mobile">{{ item.tel }}</p>
                        <p class="full-addr">{{ item.addr }}</p>
                    </div>
                    <a class="addr-edit" href="javascript:void(0)"></a>
                </div>
                <div slot="slipbtns" class="slipbtns"
                    ><a href="javascript:;" @click="delItem(index)">删除</a><a href="javascript:;" class="favorite">收藏</a></div
                >
            </nut-leftslip>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            list: [
                {addr: '北京市大兴区亦庄经济开发中心京东大厦B座1', tel: '159****8888'},
                {addr: '北京市大兴区亦庄经济开发中心京东大厦B座2', tel: '159****8888'},
                {addr: '北京市大兴区亦庄经济开发中心京东大厦B座3', tel: '159****8888'},
                {addr: '北京市大兴区亦庄经济开发中心京东大厦B座4', tel: '159****8888'},
                {addr: '北京市大兴区亦庄经济开发中心京东大厦B座5', tel: '159****8888'},
                {addr: '北京市大兴区亦庄经济开发中心京东大厦B座6', tel: '159****8888'},
                {addr: '北京市大兴区亦庄经济开发中心京东大厦B座7', tel: '159****8888'},
                {addr: '北京市大兴区亦庄经济开发中心京东大厦B座8', tel: '159****8888'}
            ]
        };
    },
    methods: {
        delItem(index) {
            console.log(1);
            this.list.splice(index, 1);
        },
        oneDel(ev) {
            console.log(ev.target);
            alert('是否删除？');
            ev.target.remove();
        }
    }
};
</script>

<style lang="scss" scoped>
.slip-main {
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 200%;
        height: 0;
        box-sizing: border-box;
        transform: scale(0.5);
        transform-origin: left bottom;
        border-bottom: 1px solid #ececee;
    }
    .addr-wrap {
        display: flex;
        position: relative;
        width: 100%;
    }
    .addr {
        flex: 1;
    }
    .addr-edit {
        display: flex;
        width: 36px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAAGXLeQ2AAAAAXNSR0IArs4c6QAAAdFJREFUSA2tVTFuAjEQtNF1KBIvoEEiD+CkVHRX0CaPgG9Aly9ADwVFaO8LkeABeUVOAWqys7k5+Xw+zkixdF7v7ux4vWuDMe5Yr9c3jOPxeOvRMZlMuDRGEEtDCKTFBP9ms9HpBwYOECmZGJ7IcjqdDEghe9baAx21nWhsyMvlQnqVSFpBrpUnqTloBBCOKndFlZMkZHt5nrs2c71eVbdyyrFEf9W8pTKfz3WFc+GTsULB3Lxqa1QGfkgMRCSY/EFGFIi7aL0FGAwAsK2aVWP9Xdr0ZLFYoCofkuJrG0j8Z/nSNn/QLodfoqTfwjwIIRqHBZDGUACrAszdg7pAELWCfWArOASErcFc3o2qk+45Gt38t0420nC39dcK5qX3ndTxSKTlh0Sm591uh0tcPXKCKAGUprxZGKQsYxHv8mX3goDlCHWd76LErHCX9JYOh0MznU5Nv99nfLT0SPUdpWlqE8lUr/9sNosmIzBE6j7QRt8ZeE92kTL2IfIYUl51bBBFXhSF2e/3TEhr6h6/cniLKHL5+VTC0WhkBoPg74hH+6dGkWdZFgzuMj703LrIfD/+Nc8wdj1RPzCkk4OcKEsqyud2u40vZoi5tAlXIcsXqL8z/jqozhCfMwAAAABJRU5ErkJggg==)
            no-repeat center center;
        background-size: 23px 23px;
    }
    .name-mobile {
        font-size: 15px;
        color: #333;
    }
    .full-addr {
        font-size: 14px;
        color: #666;
        margin-top: 10px;
        line-height: 22px;
        // height: 40px;
    }
}
.slipbtns {
    a {
        &.favorite {
            background: #ccc;
        }
    }
}
</style>
