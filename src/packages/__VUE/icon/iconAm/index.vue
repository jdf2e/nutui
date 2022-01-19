<template>
  <view class="nut-iconam">
    <view class="loading loading1" v-if="name == 'am-loading1'">
      <view v-for="i in [0, 1, 2, 3, 4]" :key="i" :style="{ background: color }"></view>
    </view>

    <view class="loading loading2" v-if="name == 'am-loading2'">
      <view v-for="i in [0, 1, 2, 3, 4]" :key="i" :style="{ background: color }"></view>
    </view>

    <view class="loading loading3" v-if="name == 'am-loading3'">
      <view v-for="i in [0, 1, 2, 3, 4]" :key="i" :style="{ background: color }"></view>
    </view>

    <view class="loading loading4" v-if="name == 'am-loading4'">
      <view v-for="i in [0, 1, 2, 3, 4]" :key="i" :style="{ background: color }"></view>
    </view>

    <view class="loading loading5" v-if="name == 'am-loading5'">
      <view v-for="i in [0, 1, 2, 3, 4]" :key="i" :style="{ background: color }"></view>
    </view>

    <view class="loading loading6" v-if="name == 'am-loading6'" :style="{ '--main-color': color }">
      <view class="dot-pulse"></view>
    </view>

    <view class="loading loading7" v-if="name == 'am-loading7'" :style="{ '--main-color': color }">
      <view class="dot-collision"></view>
    </view>
    <view class="loading loading8" v-if="name == 'am-loading8'" :style="{ '--main-color': color }">
      <view class="dot-carousel"></view>
    </view>
    <view class="loading loading9" v-if="name == 'am-loading9'" :style="{ '--main-color': color }">
      <view class="dot-stretching"></view>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, ref } from 'vue';
import { createComponent } from '../../../utils/create';
const { create } = createComponent('icon-am');

export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  components: {},
  emits: ['click'],

  setup(props, { emit }) {
    return { ...toRefs(props) };
  }
});
</script>
<style lang="scss">
.nut-iconam {
  .loading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;

    --main-color: #666;
  }
  .loading1 {
    width: 20px;
    height: 20px;
    view {
      display: inline-block;
      width: 3px;
      height: 100%;
      border-radius: 4px;
      background: #666;
      -webkit-animation: load1 1s ease infinite;
      &:nth-child(2) {
        -webkit-animation-delay: 0.2s;
      }
      &:nth-child(3) {
        -webkit-animation-delay: 0.4s;
      }
      &:nth-child(4) {
        -webkit-animation-delay: 0.6s;
      }
      &:nth-child(5) {
        -webkit-animation-delay: 0.8s;
      }
    }

    @-webkit-keyframes load1 {
      0%,
      100% {
        height: 10px;
      }
      50% {
        height: 20px;
      }
    }
  }

  .loading2 {
    width: 40px;
    height: 20px;
    view {
      display: inline-block;
      width: 6px;
      height: 6px;
      background: #666;
      -webkit-animation: load2 1.04s ease infinite;
      &:last-child {
        margin-right: 0px;
      }

      &:nth-child(1) {
        -webkit-animation-delay: 0.13s;
      }
      &:nth-child(2) {
        -webkit-animation-delay: 0.26s;
      }
      &:nth-child(3) {
        -webkit-animation-delay: 0.39s;
      }
      &:nth-child(4) {
        -webkit-animation-delay: 0.52s;
      }
      &:nth-child(5) {
        -webkit-animation-delay: 0.65s;
      }
    }
    @-webkit-keyframes load2 {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  .loading3 {
    width: 40px;
    height: 20px;
    view {
      display: inline-block;
      width: 6px;
      height: 6px;
      background: #666;
      -webkit-animation: load3 1.04s ease infinite;
      &:last-child {
        margin-right: 0px;
      }

      &:nth-child(1) {
        -webkit-animation-delay: 0.13s;
      }
      &:nth-child(2) {
        -webkit-animation-delay: 0.26s;
      }
      &:nth-child(3) {
        -webkit-animation-delay: 0.39s;
      }
      &:nth-child(4) {
        -webkit-animation-delay: 0.52s;
      }
      &:nth-child(5) {
        -webkit-animation-delay: 0.65s;
      }
    }
    @-webkit-keyframes load3 {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        -webkit-transform: rotate(90deg);
      }
    }
  }

  .loading4 {
    width: 40px;
    height: 20px;
    view {
      display: inline-block;
      width: 6px;
      height: 6px;
      background: #666;
      -webkit-animation: load4 1.04s ease infinite;
      &:last-child {
        margin-right: 0px;
      }

      &:nth-child(1) {
        -webkit-animation-delay: 0.13s;
      }
      &:nth-child(2) {
        -webkit-animation-delay: 0.26s;
      }
      &:nth-child(3) {
        -webkit-animation-delay: 0.39s;
      }
      &:nth-child(4) {
        -webkit-animation-delay: 0.52s;
      }
      &:nth-child(5) {
        -webkit-animation-delay: 0.65s;
      }
    }
    @-webkit-keyframes load4 {
      0% {
        opacity: 1;
        -webkit-transform: scale(1);
      }
      100% {
        opacity: 0;
        -webkit-transform: rotate(90deg) scale(0.3);
      }
    }
  }

  .loading5 {
    width: 30px;
    height: 20px;
    justify-content: inherit;
    view {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #666;
      -webkit-animation: load5 1.04s ease-in infinite alternate;
      &:last-child {
        margin-right: 0px;
      }

      &:nth-child(1) {
        -webkit-animation-delay: 0.13s;
      }
      &:nth-child(2) {
        -webkit-animation-delay: 0.26s;
      }
      &:nth-child(3) {
        -webkit-animation-delay: 0.39s;
      }
      &:nth-child(4) {
        -webkit-animation-delay: 0.52s;
      }
      &:nth-child(5) {
        -webkit-animation-delay: 0.65s;
      }
    }
    @-webkit-keyframes load5 {
      0% {
        opacity: 1;
        -webkit-transform: translate(0px);
      }
      100% {
        opacity: 0.2;
        -webkit-transform: translate(30px);
      }
    }
  }

  .loading6 {
    height: 20px;
    .dot-pulse {
      position: relative;
      left: -9999px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--main-color);
      color: var(--main-color);
      box-shadow: 9984px 0 0 0 var(--main-color), 9999px 0 0 0 var(--main-color), 10014px 0 0 0 var(--main-color);
      animation: dotPulse 1.3s infinite linear;
    }

    @keyframes dotPulse {
      0% {
        box-shadow: 9984px 0 0 -5px var(--main-color), 9999px 0 0 0 var(--main-color) 6,
          10014px 0 0 2px var(--main-color);
      }

      25% {
        box-shadow: 9984px 0 0 0 var(--main-color), 9999px 0 0 2px var(--main-color), 10014px 0 0 0 var(--main-color);
      }

      50% {
        box-shadow: 9984px 0 0 2px var(--main-color), 9999px 0 0 0 var(--main-color), 10014px 0 0 -5px var(--main-color);
      }

      75% {
        box-shadow: 9984px 0 0 0 var(--main-color), 9999px 0 0 -5px var(--main-color), 10014px 0 0 0 var(--main-color);
      }

      100% {
        box-shadow: 9984px 0 0 -5px var(--main-color), 9999px 0 0 0 var(--main-color), 10014px 0 0 2px var(--main-color);
      }
    }
  }

  .loading7 {
    height: 20px;
    .dot-collision {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--main-color);
      color: var(--main-color);

      &::before,
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--main-color);
        color: var(--main-color);
      }

      &::before {
        left: -10px;
        animation: dotCollisionBefore 2s infinite ease-in;
      }

      &::after {
        left: 10px;
        animation: dotCollisionAfter 2s infinite ease-in;
        animation-delay: 1s;
      }
    }

    @keyframes dotCollisionBefore {
      0%,
      50%,
      75%,
      100% {
        transform: translateX(0);
      }

      25% {
        transform: translateX(-15px);
      }
    }

    @keyframes dotCollisionAfter {
      0%,
      50%,
      75%,
      100% {
        transform: translateX(0);
      }

      25% {
        transform: translateX(15px);
      }
    }
  }
  .loading8 {
    height: 20px;
    .dot-carousel {
      position: relative;
      left: -9999px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: var(--main-color);
      color: var(--main-color);
      box-shadow: 9984px 0 0 0 var(--main-color), 9999px 0 0 0 var(--main-color), 10014px 0 0 0 var(--main-color);
      animation: dotCarousel 1.5s infinite linear;
    }

    @keyframes dotCarousel {
      0% {
        box-shadow: 9984px 0 0 -1px var(--main-color), 9999px 0 0 1px var(--main-color),
          10014px 0 0 -1px var(--main-color);
      }

      50% {
        box-shadow: 10014px 0 0 -1px var(--main-color), 9984px 0 0 -1px var(--main-color),
          9999px 0 0 1px var(--main-color);
      }

      100% {
        box-shadow: 9999px 0 0 1px var(--main-color), 10014px 0 0 -1px var(--main-color),
          9984px 0 0 -1px var(--main-color);
      }
    }
  }

  .loading9 {
    height: 20px;
    .dot-stretching {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: var(--main-color);
      color: var(--main-color);
      animation: dotStretching 2s infinite ease-in;
      transform: scale(1.25, 1.25);
      &::before,
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: var(--main-color);
        color: var(--main-color);
      }

      &::before {
        animation: dotStretchingBefore 2s infinite ease-in;
      }

      &::after {
        animation: dotStretchingAfter 2s infinite ease-in;
      }
    }

    @keyframes dotStretching {
      0% {
        transform: scale(1.25, 1.25);
      }

      50%,
      60% {
        transform: scale(0.8, 0.8);
      }

      100% {
        transform: scale(1.25, 1.25);
      }
    }

    @keyframes dotStretchingBefore {
      0% {
        transform: translate(0) scale(0.7, 0.7);
      }

      50%,
      60% {
        transform: translate(-20px) scale(1, 1);
      }

      100% {
        transform: translate(0) scale(0.7, 0.7);
      }
    }

    @keyframes dotStretchingAfter {
      0% {
        transform: translate(0) scale(0.7, 0.7);
      }

      50%,
      60% {
        transform: translate(20px) scale(1, 1);
      }

      100% {
        transform: translate(0) scale(0.7, 0.7);
      }
    }
  }
}
</style>
