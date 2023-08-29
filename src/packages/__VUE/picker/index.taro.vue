<template>
  <view class="nut-picker">
    <view v-if="showToolbar" class="nut-picker__bar">
      <view class="nut-picker__cancel nut-picker__left nut-picker__button" @click="cancel">{{
        cancelText || translate('cancel')
      }}</view>
      <view class="nut-picker__title"> {{ title }}</view>
      <view class="nut-picker__confirm nut-picker__right nut-picker__button" @click="confirmHandler">{{
        okText || translate('confirm')
      }}</view>
    </view>
    <slot name="top"></slot>

    <!-- Taro 下转换成 微信小程序 -->
    <picker-view
      v-if="ENV != ENV_TYPE.WEB"
      :indicator-style="`height:${optionHeight}px`"
      :value="defaultIndexes"
      :style="pickerViewStyles"
      v-bind="$attrs"
      :immediate-change="true"
      @change="tileChange"
      @pickstart="handlePickstart"
      @pickend="handlePickend"
    >
      <picker-view-column
        v-for="(column, columnIndex) in columnsList"
        :key="columnIndex"
        :filedNames="columnFieldNames"
      >
        <view
          v-for="(item, index) in column"
          :key="item[columnFieldNames.value] ?? index"
          class="nut-picker-roller-item-tarotile"
          :style="{
            lineHeight: pxCheck(optionHeight)
          }"
        >
          {{ item[columnFieldNames.text] }}
        </view>
      </picker-view-column>
    </picker-view>

    <!-- Taro 下转换成 H5 -->
    <view v-if="ENV == ENV_TYPE.WEB" class="nut-picker__column" :style="columnStyle">
      <view v-for="(column, columnIndex) in columnsList" :key="columnIndex" class="nut-picker__columnitem">
        <nut-picker-column
          :ref="swipeRef"
          :column="column"
          :columns-type="columnsType"
          :field-names="columnFieldNames"
          :value="defaultValues[columnIndex]"
          :three-dimensional="false"
          :swipe-duration="swipeDuration"
          :visible-option-num="visibleOptionNum"
          :option-height="optionHeight"
          taro
          @change="
            (option: any) => {
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

const component: Component = Taro.getEnv() == Taro.ENV_TYPE.WEB ? componentWeb : componentWeapp;

export default create(component);
</script>
