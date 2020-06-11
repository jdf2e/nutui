<template>
  <div>
    <h4>基本用法</h4>
    <div>
      <nut-leftslip ref="demo1">
        <div slot="slip-main" class="slip-main base-style">左滑触发删除<span class="main-right">这里是内容</span></div>
        <div slot="slipbtns" class="slipbtns"
          ><a href="javascript:;" @click="delSlipItem">删除</a></div
        >
      </nut-leftslip>
    </div>
    
    <h4>多个按钮样式</h4>
    <p>如果超出一行宽度，默认右侧按钮区域占一行的80%</p>
    <div>
      <nut-leftslip :rightWidth="0.8">
        <div slot="slip-main" class="slip-main">左滑触发删除<span class="main-right">这里是内容</span></div>
        <div slot="slipbtns" class="slipbtns"
          ><a href="javascript:;">删除</a>
          <a href="javascript:;" class="favorite org3">确认</a>
          <a href="javascript:;" class="favorite">收藏</a>
        </div>
      </nut-leftslip>
    </div>
    <h4>自定义ICON</h4>
    <div>
      <nut-leftslip>
        <div slot="slip-main" class="slip-main">左滑触发删除<span class="main-right">这里是内容</span></div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;"><nut-icon type="trolley" size="20px" color="#fff"></nut-icon></a></div>
      </nut-leftslip>
    </div>
    <h4>列表</h4>
    <div class="address-list">
      <nut-leftslip v-for="(item, index) in list" :key="item.id" ref="leftslip" class="addr-item" >
        <div slot="slip-main" class="slip-main addr-main">
          <div class="addr">
            <p class="name-mobile">{{ item.tel }}</p>
            <p class="full-addr">{{ item.addr }}</p>
          </div>
          <a class="addr-edit" href="javascript:void(0)"></a>
        </div>
        <div slot="slipbtns" class="slipbtns"
          ><a href="javascript:;" @click="delItem(index)">删除</a></div
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
        { id: 'add1', addr: '北京市大兴区亦庄经济开发中心京东大厦B座1', tel: '159****8888' },
        { id: 'add2', addr: '北京市大兴区亦庄经济开发中心京东大厦B座2', tel: '159****8888' },
        { id: 'add3', addr: '北京市大兴区亦庄经济开发中心京东大厦B座3', tel: '159****8888' },
        { id: 'add4', addr: '北京市大兴区亦庄经济开发中心京东大厦B座4', tel: '159****8888' },
        { id: 'add5', addr: '北京市大兴区亦庄经济开发中心京东大厦B座5', tel: '159****8888' },
        { id: 'add6', addr: '北京市大兴区亦庄经济开发中心京东大厦B座6', tel: '159****8888' },
        { id: 'add7', addr: '北京市大兴区亦庄经济开发中心京东大厦B座7', tel: '159****8888' },
        { id: 'add8', addr: '北京市大兴区亦庄经济开发中心京东大厦B座8', tel: '159****8888' }
      ],
      rightWidth: 80,
      pageWidth: null
    };
  },
  methods: {
    delSlipItem(e) {
      alert('确定删除吗？');
      this.$refs.demo1.sliderEle.remove();
    },
    delItem(index) {
      this.list.splice(index, 1);
    },
    oneDel(par) {
      par.remove();
    }
  },
  mounted() {
    this.pageWidth = document.documentElement.clientWidth;
  }
};
</script>

<style lang="scss" scoped>

.slipbtns {
  a {
    &.favorite {
      background: #7C7A8A;
    }

    &.org1 {
      background: #ff9800;
    }

    &.org2 {
      background: #ffc107;
    }

    &.org3 {
      background: #3A7BFF;
    }
  }
}



.nut-leftslip-item-main .slip-main{
  justify-content: space-between;
  .main-right{
    color: #969696;
    font-size: 16px;
  }
}

.address-list{
  .addr-item{
    background: #fff;
    
  }
  .addr-main {
    margin: 0 15px;
    padding: 15px 5px;
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
}

</style>
