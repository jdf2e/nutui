<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell :show-icon="true" :isLink="true" @click="switchActionSheet('isVisible1')">
      <span><label>基础用法</label></span>
      <div class="selected-option" v-html="state.val1"></div>
    </nut-cell>
    <nut-cell :showIcon="true" :isLink="true" @click="switchActionSheet('isVisible2')">
      <span><label>展示取消按钮</label></span>
      <div class="selected-option" v-html="state.val2"></div>
    </nut-cell>
    <nut-cell :isLink="true" @click="switchActionSheet('isVisible3')">
      <span><label>展示描述信息</label></span>
      <div class="selected-option" v-html="state.val3"></div>
    </nut-cell>
    <h2>选项状态</h2>

    <nut-cell :isLink="true" @click="switchActionSheet('isVisible4')">
      <span><label>选项状态</label></span>
      <div class="selected-option" v-html="state.val4"></div>
    </nut-cell>

    <h2>自定义</h2>

    <nut-cell :isLink="true" @click="switchActionSheet('isVisible5')">
      <span><label>自定义内容</label></span>
      <div class="selected-option"></div>
    </nut-cell>

    <!-- demo 基础用法 -->
    <nut-actionsheet
      :safe-area-inset-bottom="true"
      v-model:visible="state.isVisible1"
      :menu-items="menuItemsOne"
      @choose="chooseItem"
    >
    </nut-actionsheet>
    <!-- demo(带取消按钮） -->
    <nut-actionsheet
      v-model:visible="state.isVisible2"
      cancel-txt="取消"
      :menu-items="menuItemsOne"
      @choose="chooseItemTwo"
    >
    </nut-actionsheet>
    <!-- 展示描述信息 -->
    <nut-actionsheet
      v-model:visible="state.isVisible3"
      title="标题"
      :description="state.desc"
      :menu-items="menuItemsTwo"
      @choose="chooseItemThree"
      cancel-txt="取消"
    >
    </nut-actionsheet>
    <!-- demo 选项状态-->
    <nut-actionsheet
      v-model:visible="state.isVisible4"
      cancel-txt="取消"
      :menu-items="menuItemsThree"
      @choose="chooseItemFour"
      :choose-tag-value="state.chooseTagValue"
    ></nut-actionsheet>
    <!-- 自定义面板-->
    <nut-actionsheet v-model:visible="state.isVisible5" title="标题">
      <div class="custom-content">自定义内容</div>
    </nut-actionsheet>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
interface Item {
  name: string;
  subname?: string;
  color?: string;
  disable?: boolean;
  loading?: boolean;
}
export default {
  props: {},
  setup() {
    const state = reactive({
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      desc: '这是一段描述信息',
      chooseTagValue: '选中选项'
    });
    const menuItemsOne: Item[] = [
      {
        name: '选项一'
      },
      {
        name: '选项二'
      },
      {
        name: '选项三'
      }
    ];
    const menuItemsTwo: Item[] = [
      {
        name: '选项一'
      },
      {
        name: '选项二'
      },
      {
        name: '选项三',
        color: 'red',
        subname: '描述信息'
      }
    ];
    const menuItemsThree: Item[] = [
      {
        name: '选中选项'
      },
      {
        name: '禁用选项',
        disable: true
      },
      {
        name: '加载选项',
        loading: true
      }
    ];
    const switchActionSheet = (param: 'isVisible1' | 'isVisible2' | 'isVisible3' | 'isVisible4') => {
      state[param] = !state[param];
    };

    const chooseItem = (itemParams: any) => {
      console.log(itemParams, 'itemParams');
      state.val1 = itemParams.name;
    };

    function chooseItemTwo(itemParams: Item) {
      state.val2 = itemParams.name;
    }
    function chooseItemThree(itemParams: Item) {
      state.val3 = itemParams.name;
    }
    function chooseItemFour(itemParams: Item) {
      state.val4 = itemParams.name;
    }

    return {
      state,
      menuItemsOne,
      menuItemsTwo,
      menuItemsThree,
      chooseItem,
      chooseItemTwo,
      chooseItemThree,
      chooseItemFour,
      switchActionSheet
    };
  }
};
</script>

<style lang="scss">
.custom-wrap {
  padding: 110px 0;
  text-align: center;
}
.nut-cell {
  justify-content: space-between;
}
.custom-content {
  padding: 10px 10px 160px;
}
</style>
