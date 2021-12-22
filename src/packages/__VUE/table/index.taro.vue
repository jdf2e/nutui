<template>
  <view :class="classes">
    <view class="nut-table__main" :class="{ 'nut-table__main--striped': striped }">
      <view class="nut-table__main__head">
        <view class="nut-table__main__head__tr">
          <span
            class="nut-table__main__head__tr__th"
            :class="cellClasses(item)"
            v-for="item in columns"
            :key="item.key"
            @click="handleSorterClick(item)"
          >
            {{ item.title }}
            <slot name="icon"></slot>
            <nut-icon v-if="!$slots.icon && item.sorter" name="down-arrow" size="12px"></nut-icon>
          </span>
        </view>
      </view>
      <view class="nut-table__main__body">
        <view class="nut-table__main__body__tr" v-for="item in curData" :key="item">
          <span
            class="nut-table__main__body__tr__td"
            :class="cellClasses(getColumnItem(value))"
            v-for="value in Object.keys(item)"
            :key="value"
          >
            {{ typeof item[value] !== 'function' ? item[value] : '' }}
            <RenderColumn :slots="item[value]" v-if="typeof item[value] === 'function'"></RenderColumn>
          </span>
        </view>
      </view>
    </view>
    <view class="nut-table__summary" v-if="summary">
      <span class="nut-table__summary__text" v-html="summary().value"></span>
    </view>
    <view class="nut-table__nodata" v-if="!curData.length">
      <div class="nut-table__nodata" :class="{ 'nut-table__nodata--border': bordered }">
        <slot name="nodata"></slot>
        <div v-if="!$slots.nodata" class="nut-table__nodata__text"> 暂无数据 </div>
      </div>
    </view>
  </view>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('table');
import { component } from './common';
export default create(component(componentName));
</script>
