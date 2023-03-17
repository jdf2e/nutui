<template>
  <view :class="classes">
    <view class="nut-picker__bar" v-if="showToolbar">
      <view class="nut-picker__cancel nut-picker__left nut-picker__button" @click="cancel">{{
        cancelText || translate('cancel')
      }}</view>
      <view class="nut-picker__title"> {{ title }}</view>
      <view class="nut-picker__confirm nut-picker__right nut-picker__button" @click="confirmHandler()">{{
        okText || translate('confirm')
      }}</view>
    </view>
    <slot name="top"></slot>

    <!-- Taro 下转换成 微信小程序 -->
    <picker-view
      v-if="ENV != ENV_TYPE.WEB"
      :indicatorStyle="`height:${optionHeight}px`"
      :value="defaultIndexes"
      :style="pickerViewStyles"
      v-bind="$attrs"
      :immediateChange="true"
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
    <view class="nut-picker__column" :style="columnStyle" v-if="ENV == ENV_TYPE.WEB">
      <view class="nut-picker__columnitem" v-for="(column, columnIndex) in columnsList" :key="columnIndex">
        <nut-picker-column
          :ref="swipeRef"
          :column="column"
          :columnsType="columnsType"
          :value="defaultValues[columnIndex]"
          :threeDimensional="false"
          :swipeDuration="swipeDuration"
          :visibleOptionNum="visibleOptionNum"
          :optionHeight="optionHeight"
          @change="
            (option:PickerOption) => {
              changeHandler(columnIndex, option);
            }
          "
        ></nut-picker-column>
      </view>
    </view>
    <slot name="default"></slot>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { componentWeb, componentWeapp } from './common';
import Taro from '@tarojs/taro';
const { create } = createComponent('picker');
import { Component } from 'vue';
import { PickerOption } from './types';

const component: Component = Taro.getEnv() == Taro.ENV_TYPE.WEB ? componentWeb : componentWeapp;

export default create(component);
</script>
