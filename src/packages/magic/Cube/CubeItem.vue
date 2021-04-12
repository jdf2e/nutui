<template>
  <div :class="`cube-item cube-item--${item.type}`" @click="cubeClick(item)">
    <div class="cube-item-box">
      <div class="sub-image" :style="{ backgroundImage: `url(${item.pictureUrl})` }"></div>
    </div>
    <div class="sub-desc" v-if="item.desc">
      <span>{{ item.desc }}</span>
    </div>
    <div class="sub-name" v-if="item.name">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CubeItem',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    cubeClick(item) {
      this.$emit('clickEvent', item);
    }
  }
};
</script>

<style lang="scss">
$module_name: '.cube-item';
#{$module_name} {
  height: 90px;
  width: 88px;
  // margin-left: auto;
  // margin-right: 10px;
  border-radius: 26px;
  overflow: hidden;
  position: relative;
  transform: translateZ(0);
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-radius: 0 0 26px 26px;
  }
  &-box {
    height: 63px;
    width: 100%;
    text-align: center;
    position: absolute;
    background: #fff;
    border-radius: 26px 26px 11px 11px;
    transform: translateZ(0);
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .sub-name {
    width: 100%;
    position: absolute;
    top: 63px;
    padding: 0 10px;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 27px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform: translateZ(0);
  }

  .sub-image {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    background-color: #fff;
    background-position: center;
    background-size: 100%;
    transform: translateY(6px);
  }
  .sub-desc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 77px;
    box-sizing: border-box;
    height: 15px;
    color: #fff;
    border-radius: 6px;
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 29px;
    left: 50%;
    transform-origin: 0 center;
    transform: translate3d(-50%, 0, 1px);
    span {
      width: 100%;
      display: block;
      line-height: normal;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  // 图片
  &--pic {
    &::before {
      background: url('../../../assets/img/magic/bg-cube-pic.png') no-repeat center/100%;
      height: 100%;
    }
    .cube-item-box {
      display: none;
    }
    .sub-desc {
      display: none;
    }
    .sub-name {
      display: none;
    }
  }
  // 活动
  &--act {
    &::before {
      background: url('../../../assets/img/magic/bg-cube-act.png') no-repeat center/100%;
    }
    .sub-desc {
      background: #ff5c17;
    }
  }
  // 榜单
  &--rank {
    &::before {
      background: url('../../../assets/img/magic/bg-cube-rank.png') no-repeat center/100%;
    }
    .sub-desc {
      background: #1f95fb;
    }
  }
  // shop
  &--shop {
    &::before {
      background: url('../../../assets/img/magic/bg-cube-pic.png') no-repeat center/100%;
    }
    .sub-desc {
      background: #ffd01f;
      span {
        color: #000;
      }
    }
  }
  // lbs
  &--lbs {
    &::before {
      background: url('../../../assets/img/magic/bg-cube-lbs.png') no-repeat center/100%;
    }
    .sub-desc {
      background: #ffd01f;
      span {
        color: #000;
      }
    }
  }
  // 未读
  &--unread {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    animation: show 2s infinite;
  }
  &--special {
    background-size: cover;
    background-repeat: no-repeat;
    &:before {
      display: none;
    }
    .cube-item-box {
      display: none;
    }
    .sub-desc {
      display: none;
    }
  }
  @keyframes show {
    0% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    100% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    }
  }
  @at-root .cube-wrapper--inited {
    .cube-col {
      .cube-item {
        .sub-image {
          animation: cube-image 0.2s cubic-bezier(0.33, 0, 0.67, 1) 1s forwards;
        }
      }
    }
  }

  @keyframes cube-image {
    0% {
      transform: translateY(13px);
    }
    66% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>
