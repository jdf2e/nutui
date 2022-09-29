<template>
  <view class="nut-pagination">
    <view
      :class="['nut-pagination-prev', mode == 'multi' ? '' : 'simple-border', modelValue == 1 ? 'disabled' : '']"
      @click="select(modelValue - 1, true)"
    >
      <slot name="prev-text">
        {{ prevText || translate('prev') }}
      </slot>
    </view>
    <view class="nut-pagination-contain" v-if="mode == 'multi'">
      <view
        v-for="(item, index) of pages"
        :key="index + 'pagination'"
        :class="['nut-pagination-item', item.active ? 'active' : '']"
        @click="select(item.number, true)"
      >
        <slot name="page" :item="item">
          {{ item.text }}
        </slot>
      </view>
    </view>
    <view class="nut-pagination-contain" v-if="mode == 'simple'">
      <view class="nut-pagination-simple">{{ modelValue }}/{{ countRef }}</view>
    </view>
    <view
      :class="['nut-pagination-next', modelValue >= countRef ? 'disabled' : '']"
      @click="select(modelValue + 1, true)"
    >
      <slot name="next-text">
        {{ nextText || translate('next') }}
      </slot>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, watchEffect, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, translate } = createComponent('pagination');

export default create({
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: 'multi'
    },
    prevText: {
      type: String,
      default: ''
    },
    nextText: {
      type: String,
      default: ''
    },
    pageCount: {
      type: [String, Number],
      default: ''
    },
    totalItems: {
      type: [String, Number],
      default: '0'
    },
    itemsPerPage: {
      type: [String, Number],
      default: '10'
    },
    showPageSize: {
      type: [String, Number],
      default: '5'
    },
    forceEllipses: {
      type: Boolean,
      default: false
    }
  },
  components: {},

  emits: ['change', 'update:modelValue'],

  setup(props, { emit }) {
    const { modelValue, mode, showPageSize, forceEllipses } = toRefs(props);

    //计算页面的数量
    const countRef = computed(() => {
      const { pageCount, totalItems, itemsPerPage } = toRefs(props);
      const num = +pageCount.value || Math.ceil(+totalItems.value / +itemsPerPage.value);
      return Math.max(1, num);
    });

    //点击选择page
    const select = (curPage: number, isSelect: boolean) => {
      if (curPage > countRef.value || curPage < 1) return;
      if (curPage != modelValue.value) emit('update:modelValue', curPage);
      if (isSelect) emit('change', curPage);
    };
    //set page 对象
    const setPage = (number: number, text: string | number, active = false) => {
      return { number, text, active };
    };
    //生成pages数组，用来遍历
    const pages = computed(() => {
      if (mode.value == 'simple') return;
      let items = [];
      const pageCount = countRef.value; //总的页面数量
      const pageSize = +showPageSize.value; //展示的页面个数
      let startPage = 1;
      let endPage = pageCount;
      const partialShow = pageCount > pageSize;
      if (partialShow) {
        //选中的page在展示的page中间
        startPage = Math.max(modelValue.value - Math.floor(pageSize / 2), 1);
        endPage = startPage + +pageSize - 1;
        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - +pageSize + 1;
        }
      }
      //遍历生成数组
      for (var i = startPage; i <= endPage; i++) {
        const page = setPage(i, i, modelValue.value == i);
        items.push(page);
      }
      //判断是否有折叠
      if (partialShow && pageSize > 0 && forceEllipses.value) {
        if (startPage > 1) {
          const prevPage = setPage(startPage - 1, '...');
          items.unshift(prevPage);
        }
        if (endPage < pageCount) {
          const nextPage = setPage(endPage + 1, '...');
          items.push(nextPage);
        }
      }

      return items;
    });

    //监听选中的page变化
    watchEffect(() => {
      select(modelValue.value, false);
    });

    return {
      modelValue,
      select,
      countRef,
      mode,
      pages,
      forceEllipses,
      translate
    };
  }
});
</script>
