<template>
  <view class="nut-tabs" :class="[direction]" ref="container" id="container">
    <template v-if="sticky">
      <nut-sticky :top="top" :container="container" @scroll="onStickyScroll">
        <view
          class="nut-tabs__titles"
          :class="{ [type]: type, scrollable: titleScroll, [size]: size }"
          :style="tabsNavStyle"
        >
          <slot v-if="$slots.titles" name="titles"></slot>
          <template v-else>
            <view
              class="nut-tabs__titles-item"
              :style="titleStyle"
              @click="tabChange(item, index)"
              :class="{ active: item.paneKey == modelValue, disabled: item.disabled }"
              v-for="(item, index) in titles"
              :key="item.paneKey"
            >
              <view class="nut-tabs__titles-item__line" :style="tabsActiveStyle" v-if="type == 'line'"></view>
              <view class="nut-tabs__titles-item__smile" :style="tabsActiveStyle" v-if="type == 'smile'">
                <nut-icon :color="color" name="joy-smile" />
              </view>
              <view class="nut-tabs__titles-item__text" :class="{ ellipsis: ellipsis }">{{ item.title }} </view>
            </view>
          </template>
        </view>
      </nut-sticky>
    </template>
    <template v-else>
      <view
        class="nut-tabs__titles"
        :class="{ [type]: type, scrollable: titleScroll, [size]: size }"
        :style="tabsNavStyle"
      >
        <slot v-if="$slots.titles" name="titles"></slot>
        <template v-else>
          <view
            class="nut-tabs__titles-item"
            :style="titleStyle"
            @click="tabChange(item, index)"
            :class="{ active: item.paneKey == modelValue, disabled: item.disabled }"
            v-for="(item, index) in titles"
            :key="item.paneKey"
          >
            <view class="nut-tabs__titles-item__line" :style="tabsActiveStyle" v-if="type == 'line'"></view>
            <view class="nut-tabs__titles-item__smile" :style="tabsActiveStyle" v-if="type == 'smile'">
              <nut-icon :color="color" name="joy-smile" />
            </view>
            <view class="nut-tabs__titles-item__text" :class="{ ellipsis: ellipsis }">{{ item.title }} </view>
          </view>
        </template>
      </view>
    </template>
    <view class="nut-tabs__content" :style="contentStyle">
      <slot name="default"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
const { create } = createComponent('tabs');
export default create(component);
</script>
