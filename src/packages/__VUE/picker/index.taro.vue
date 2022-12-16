<template>
  <view :class="classes">
    <nut-popup
      position="bottom"
      v-model:visible="show"
      :teleport="teleport"
      :lock-scroll="lockScroll"
      :close-on-click-overlay="closeOnClickOverlay"
      @close="close"
      :round="true"
      :safeAreaInsetBottom="safeAreaInsetBottom"
      :destroyOnClose="destroyOnClose"
    >
      <view class="nut-picker__bar">
        <view class="nut-picker__cancel nut-picker__left nut-picker__button" @click="close" v-if="showCancelText">{{
          cancelText || translate('cancel')
        }}</view>
        <view class="nut-picker__title"> {{ title }}</view>
        <view
          class="nut-picker__confirm nut-picker__right nut-picker__button"
          @click="confirmHandler()"
          v-if="showOkText"
          >{{ okText || translate('confirm') }}</view
        >
      </view>
      <slot name="top"></slot>

      <!-- Taro 下转换成 微信小程序 -->
      <picker-view
        v-if="ENV != ENV_TYPE.WEB"
        indicator-style="height: 34px;"
        :value="defaultIndexes"
        style="width: 100%; height: 252px"
        :immediate-change="true"
        @change="tileChange"
        @pickstart="handlePickstart"
        @pickend="handlePickend"
      >
        <picker-view-column v-for="(column, columnIndex) in columnsList" :key="columnIndex">
          <view
            class="nut-picker-roller-item-tarotile"
            v-for="(item, index) in column"
            :key="item.value ? item.value : index"
          >
            {{ item.text }}
          </view>
        </picker-view-column>
      </picker-view>

      <!-- Taro 下转换成 H5 -->
      <view class="nut-picker__column" v-if="ENV == ENV_TYPE.WEB">
        <view class="nut-picker__columnitem" v-for="(column, columnIndex) in columnsList" :key="columnIndex">
          <nut-picker-column
            :ref="swipeRef"
            :itemShow="show"
            :column="column"
            :readonly="readonly"
            :columnsType="columnsType"
            :value="defaultValues[columnIndex]"
            :threeDimensional="false"
            :swipeDuration="swipeDuration"
            @change="
              (option) => {
                changeHandler(columnIndex, option);
              }
            "
          ></nut-picker-column>
        </view>
      </view>
      <slot name="default"></slot>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { componentWeb, componentWeapp } from './common';
import Taro from '@tarojs/taro';
const { create } = createComponent('picker');

const component: any = Taro.getEnv() == Taro.ENV_TYPE.WEB ? componentWeb : componentWeapp;

export default create(component);
</script>
