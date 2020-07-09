<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-leftslip ref="demo1">
        <div slot="slip-main" class="slip-main base-style">左滑触发删除<span class="main-right">这里是内容</span></div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;" @click="delSlipItem">删除</a></div>
      </nut-leftslip>
    </div>
    <h4>多个按钮</h4>
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
        <div slot="slipbtns" class="slipbtns"
          ><a href="javascript:;"><nut-icon type="trolley" size="20px" color="#fff"></nut-icon></a
        ></div>
      </nut-leftslip>
    </div>
    <h4>消息列表</h4>
    <div class="cell-box">
      <nut-leftslip v-for="(item, index) in list" :key="item.id" ref="leftslip">
        <div slot="slip-main" class="slip-main">
          <nut-cell class="cell-item" :title="item.title" :sub-title="item.subTitle">
            <div slot="avatar"><nut-avatar sizeNum="60" :bg-image="require('../../assets/img/cell-avatar.jpeg')" bg-icon></nut-avatar></div>
            <div slot="desc">
              <p class="timer">{{ item.time }}</p>
              <p class="badge"><nut-badge :is-dot="item.isDot" :value="item.value" :max="99" top="0px" right="15px"></nut-badge></p>
            </div>
          </nut-cell>
        </div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;" @click="delItem(index)">删除</a> </div>
      </nut-leftslip>
    </div>
    <h4>禁止滑动</h4>
    <div>
      <button class="btn" @click="disabledHandle">{{ isDisable ? '开启滑动' : '禁止滑动' }}</button>
      <nut-leftslip :disabled="isDisable">
        <div slot="slip-main" class="slip-main">左滑触发删除</div>
        <div slot="slipbtns" class="slipbtns"><a href="javascript:;">删除</a></div>
      </nut-leftslip>
    </div>
  </div>
</template>

<script>
import locale from '../../mixins/locale';
import { locale as i18n } from '../../locales';
import Icon from '../icon/icon.vue';
import Avatar from '../avatar/avatar.vue';
import Badge from '../badge/badge.vue';

export default {
  mixins: [locale],
  components: {
    'nut-icon': Icon,
    'nut-avatar': Avatar,
    'nut-badge': Badge,
  },
  data() {
    return {
      list: [
        { id: 'add1', title: '噜啦噜1', subTitle: '我又来送福利啦！关注之后你就会', time: '10:13', isDot: false, value: 9 },
        { id: 'add2', title: '噜啦噜2', subTitle: '我又来送福利啦！关注之后你就会', time: '10:12', isDot: true, value: 1 },
        { id: 'add5', title: '噜啦噜5', subTitle: '我又来送福利啦！关注之后你就会', time: '1小时前', isDot: false, value: 99 },
        { id: 'add8', title: '噜啦噜8', subTitle: '我又来送福利啦！关注之后你就会', time: '星期五', isDot: false, value: 100 },
      ],
      rightWidth: 80,
      pageWidth: null,
      isDisable: false,
    };
  },
  methods: {
    delSlipItem(e) {
      alert('确定删除吗？');
      this.$refs.demo1.sliderEle.remove();
    },
    delItem(index) {
      alert('确定删除吗？');
      this.list.splice(index, 1);
    },
    disabledHandle() {
      this.isDisable = !this.isDisable;
    },
  },
  mounted() {
    this.pageWidth = document.documentElement.clientWidth;
  },
};
</script>

<style lang="scss" scoped>
.demo {
  padding-bottom: 30px;
}
.slipbtns {
  a {
    &.favorite {
      background: #7c7a8a;
    }

    &.org1 {
      background: #ff9800;
    }

    &.org2 {
      background: #ffc107;
    }

    &.org3 {
      background: #3a7bff;
    }
  }
}

.nut-leftslip-item-main .slip-main {
  justify-content: space-between;

  .main-right {
    color: #969696;
    font-size: 16px;
  }
}

.cell-box {
  .slip-main {
    padding: 0;
  }
  .wrapper-cell {
    width: 100%;
  }
  .cell-item {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 0;
      border-bottom: 1px solid #efefef;
    }
  }
}
.timer {
  color: #c8c8c8ff;
}

.badge {
  .nut-badge {
    width: 100%;
    height: 100%;
  }
}

.btn {
  margin: 10px 0;
  background: #fff;
  border: 1px solid #ff5722;
  color: #ff5722;
  outline: none;
  border-radius: 4px;
  padding: 5px;
  margin-left: 15px;
}
</style>
