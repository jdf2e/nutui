<template>
  <div class="demo-list demo">
    <h2>基本用法(选择类)</h2>
    <nut-cell
      :showIcon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible1')"
    >
      <span><label>基础用法</label></span>
      <div class="selected-option">{{ state.val1 }}</div>
    </nut-cell>
    <nut-cell
      :showIcon="true"
      :isLink="true"
      @click="switchActionSheet('isVisible2')"
    >
      <span><label>展示取消按钮</label></span>
      <div class="selected-option">{{ state.val2 }}</div>
    </nut-cell>
    <nut-cell :isLink="true" @click="switchActionSheet('isVisible3')">
      <span><label>展示描述信息</label></span>
      <div class="selected-option">{{ state.val3 }}</div>
    </nut-cell>
    <h2>选项状态</h2>

    <nut-cell :isLink="true" @click="switchActionSheet('isVisible4')">
      <span><label>选项状态</label></span>
      <!-- <div class="selected-option">打开</div> -->
    </nut-cell>
    <h2>自定义面板</h2>

    <nut-cell :isLink="true" @click="switchActionSheet('isVisible5')">
      <span><label>自定义内容</label></span>
      <!-- <div class="selected-option">打开</div> -->
    </nut-cell>
    <!-- demo 基础用法 -->
    <nut-actionsheet
      :is-visible="state.isVisible1"
      :menu-items="menuItemsOne"
      @choose="chooseItem"
    ></nut-actionsheet>
    <!-- demo(带取消按钮） -->
    <nut-actionsheet
      :is-visible="state.isVisible2"
      cancelTxt="取消"
      :menu-items="menuItemsOne"
      @choose="chooseItemTwo"
    ></nut-actionsheet>
    <!-- 展示描述信息 -->
    <nut-actionsheet
      :is-visible="state.isVisible3"
      :description="state.desc"
      :menu-items="menuItemsTwo"
      @choose="chooseItemThree"
      cancelTxt="取消"
    >
    </nut-actionsheet>
    <!-- demo 选项状态-->
    <nut-actionsheet
      :is-visible="state.isVisible4"
      cancelTxt="取消"
      :menu-items="menuItemsThree"
    ></nut-actionsheet>
    <!-- demo 自定义 -->
    <nut-actionsheet :is-visible="state.isVisible5" title="标题">
      <div class="myContent">内容</div>
    </nut-actionsheet>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('actionsheet');
export default createDemo({
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
      desc: '这是一段描述信息'
    });
    const menuItemsOne = [
      {
        name: '选项一',
        value: 0
      },
      {
        name: '选项二',
        value: 1
      },
      {
        name: '选项三',
        value: 2
      }
    ];
    const menuItemsTwo = [
      {
        name: '选项一',
        value: 0
      },
      {
        name: '选项二',
        value: 1
      },
      {
        name: '选项三',
        subname: '描述信息',
        value: 2
      }
    ];
    const menuItemsThree = [
      {
        name: '着色选项',
        color: '#ee0a24',
        value: 0
      },
      {
        name: '禁用选项',
        disable: true,
        value: 1
      }
    ];
    const switchActionSheet = param => {
      state[param] = !state[param];
      //   console.log(state[`${param}`], '2');
    };

    const chooseItem = itemParams => {
      console.log(itemParams, 'itemParams');
      state.val1 = itemParams.name;
    };

    function chooseItemTwo(itemParams) {
      state.val2 = itemParams.name;
    }
    function chooseItemThree(itemParams) {
      state.val3 = itemParams.name;
    }

    return {
      state,
      menuItemsOne,
      menuItemsTwo,
      menuItemsThree,
      chooseItem,
      chooseItemTwo,
      chooseItemThree,
      switchActionSheet
    };
  }
});
</script>

<style lang="scss" scoped>
.custom-wrap {
  padding: 110px 0;
  text-align: center;
}
.nut-cell {
  justify-content: space-between;
}
.myContent {
  padding: 10px 10px 160px;
}
</style>
