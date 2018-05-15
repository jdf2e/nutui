<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>      
        <!-- DEMO区域 -->
        <nut-sideslipbutton @slide-left="slideLeft" @slide-right="slideRight" @slide-no="slideNo" :during="0.2">
            <div slot="slidedom" class="slidedom">
                <div class="addr">
                    <p class="name-mobile">159****8888</p>
                    <p class="full-addr">北京市大兴区亦庄经济开发中心京东大厦B座</p>
                </div>
                <a class="addr-edit" href="javascript:void(0)"></a>
            </div>
            <div slot="slideoper" class="slideoper">删除/收藏</div>
        </nut-sideslipbutton>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
      slideLeft() {
          console.log('左划了');
      },
      slideRight() {
          console.log('右划了');
      },
      slideNo() {
          console.log('没有划动');
      }
    }
}
</script>

<style lang="scss">
.nut-sideslipbutton {
    position: relative;
    overflow: hidden;
    
}
.slidedom {
    padding: .2rem;
    position: relative;
    overflow: hidden;
    display: flex;
    border: 1px solid #d8d8d8;
    background: #fff;
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
        width: .7rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAAGXLeQ2AAAAAXNSR0IArs4c6QAAAdFJREFUSA2tVTFuAjEQtNF1KBIvoEEiD+CkVHRX0CaPgG9Aly9ADwVFaO8LkeABeUVOAWqys7k5+Xw+zkixdF7v7ux4vWuDMe5Yr9c3jOPxeOvRMZlMuDRGEEtDCKTFBP9ms9HpBwYOECmZGJ7IcjqdDEghe9baAx21nWhsyMvlQnqVSFpBrpUnqTloBBCOKndFlZMkZHt5nrs2c71eVbdyyrFEf9W8pTKfz3WFc+GTsULB3Lxqa1QGfkgMRCSY/EFGFIi7aL0FGAwAsK2aVWP9Xdr0ZLFYoCofkuJrG0j8Z/nSNn/QLodfoqTfwjwIIRqHBZDGUACrAszdg7pAELWCfWArOASErcFc3o2qk+45Gt38t0420nC39dcK5qX3ndTxSKTlh0Sm591uh0tcPXKCKAGUprxZGKQsYxHv8mX3goDlCHWd76LErHCX9JYOh0MznU5Nv99nfLT0SPUdpWlqE8lUr/9sNosmIzBE6j7QRt8ZeE92kTL2IfIYUl51bBBFXhSF2e/3TEhr6h6/cniLKHL5+VTC0WhkBoPg74hH+6dGkWdZFgzuMj703LrIfD/+Nc8wdj1RPzCkk4OcKEsqyud2u40vZoi5tAlXIcsXqL8z/jqozhCfMwAAAABJRU5ErkJggg==) no-repeat center center;
        background-size: .46rem .46rem;
    }
    .name-mobile {
        font-size: .3rem;
        color: #333;
    }
    .full-addr {
        font-size: .28rem;
        color: #666;
        margin-top: .2rem;
        line-height: .4rem;
        height: .8rem;
    }
}
.slideoper {
    position: absolute;
    right: -2rem;
    top: 0;
    width: 2rem;
    height: 100%;
    font-size: .3rem;
    background: #7352d5;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
