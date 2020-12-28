<template>
  <div class="demo-list demo">
    <h4>基本用法(选择类)</h4>
    <div>
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
      <div>
        <nut-cell :isLink="true" @click="switchActionSheet('isVisible4')">
          <span><label>展示描述信息</label></span>
        </nut-cell>
      </div>
      <h4>自定义面板</h4>

      <nut-cell :isLink="true" @click="switchActionSheet('isVisible5')">
        <span><label>自定义内容</label></span>
        <!-- <div class="selected-option">打开</div> -->
      </nut-cell>
      <!-- <nut-cell
        :showIcon="true"
        :isLink="true"
        @click="switchActionSheet('isVisible1')"
      >
        <span><label>展示取消按钮</label></span>
      </nut-cell>
      <nut-cell
        :showIcon="true"
        :isLink="true"
        @click="switchActionSheet('isVisible2')"
      >
        <span><label>性别</label></span>
        <span>高亮选中项~~~~</span>
      </nut-cell>
      <nut-cell
        :showIcon="true"
        :isLink="true"
        @click="switchActionSheet('isVisible3')"
      >
        <span><label>性别</label></span>
        <span>设置禁用状态~~~~</span>
      </nut-cell>
    </div>
    <div>
      <nut-cell :isLink="true" @click="switchActionSheet('isVisible4')">
        <span><label>展示描述信息</label></span>
        <span>我是描述~~~~</span>
        <div class="selected-option">删除本条</div>
      </nut-cell>
    </div>
    <h4>自定义面板</h4>
    <div>
      <nut-cell :isLink="true" @click="switchActionSheet('isVisible5')">
        <span><label>自定义内容</label></span>
        <div class="selected-option">打开</div>
      </nut-cell> -->
    </div>
    <!-- demo -->
    <nut-actionsheet
      :is-visible="state.isVisible1"
      @close="switchActionSheet('isVisible1')"
      :menu-items="menuItems"
      @choose="chooseItem"
    ></nut-actionsheet>
    <!-- demo(带取消按钮） -->
    <nut-actionsheet
      :is-visible="state.isVisible2"
      @close="switchActionSheet('isVisible2')"
      cancelTxt="取消"
      :menu-items="menuItems"
      @choose="chooseItemTwo"
    ></nut-actionsheet>
    <!-- demo(高亮选中）-->
    <!-- <nut-actionsheet
      :is-visible="isVisible2"
      :menu-items="menuItems2"
      :chooseTagValue="sex2"
      @close="switchActionSheet('isVisible2')"
      @choose="chooseItemAge"
    ></nut-actionsheet> -->
    <!-- demo(设置禁用状态)-->
    <!-- <nut-actionsheet
      :is-visible="isVisible3"
      :menu-items="menuItems3"
      @close="switchActionSheet('isVisible3')"
      @choose="chooseItemConstellation"
    ></nut-actionsheet> -->
    <!-- demo 展示描述信息 -->
    <nut-actionsheet
      :is-visible="state.isVisible4"
      :menu-items="menuItems"
      :chooseTagValue="`确定`"
      cancelTxt="取消"
      @close="switchActionSheet('isVisible4')"
    >
      <span><label>确定删除吗？</label></span>
      <span>删除之后不能，描述信息，删除之后不能，描述信息</span>
    </nut-actionsheet>
    <!-- demo 自定义类 -->
    <nut-actionsheet
      :is-visible="state.isVisible5"
      @close="switchActionSheet('isVisible5')"
    >
      <div class="custom-wrap"><span>自定义</span></div>
    </nut-actionsheet>
  </div>
</template>

<script>
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
      val3: ''
    });
    const menuItems = [
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

    const switchActionSheet = param => {
      console.log(param);
      state[`${param}`] = !state[`${param}`];
    };

    const chooseItem = itemParams => {
      console.log(itemParams, 'itemParams');
      state.val1 = itemParams.name;
    };

    function chooseItemTwo(itemParams) {
      state.val2 = itemParams.name;
    }

    // function chooseItemAge(itemParams) {
    //   sex2 = itemParams.name;
    // }

    // function chooseItemConstellation(itemParams) {
    //   sex3 = itemParams.title;
    // }
    return {
      state,
      menuItems,
      chooseItem,
      chooseItemTwo,
      switchActionSheet
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  height: 100%;
  background: #f7f8fa;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 25px;
  padding-top: 57px;
  h4 {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #909ca4;
  }
}
.custom-wrap {
  padding: 110px 0;
  text-align: center;
}
</style>
