<template>
  <Demo class="actionsheet">
    <h2>基础用法</h2>
    <nut-cell is-link @click="switchActionSheet('isVisible1')">
      <div>基础用法</div>
      <div>{{ state.val1 }}</div>
    </nut-cell>
    <nut-action-sheet v-model:visible="state.isVisible1" :menu-items="menuItemsOne" @choose="chooseItem" />

    <nut-cell is-link @click="switchActionSheet('isVisible2')">
      <div>展示取消按钮</div>
      <div>{{ state.val2 }}</div>
    </nut-cell>
    <nut-action-sheet
      v-model:visible="state.isVisible2"
      cancel-txt="取消"
      :menu-items="menuItemsOne"
      @choose="chooseItemTwo"
    />

    <nut-cell is-link @click="switchActionSheet('isVisible3')">
      <div>展示描述信息</div>
      <div>{{ state.val3 }}</div>
    </nut-cell>
    <nut-action-sheet
      v-model:visible="state.isVisible3"
      title="标题"
      description="这是一段描述信息"
      :menu-items="menuItemsTwo"
      cancel-txt="取消"
      @choose="chooseItemThree"
    />

    <h2>选项状态</h2>
    <nut-cell is-link @click="switchActionSheet('isVisible4')">
      <div>选项状态</div>
      <div>{{ state.val4 }}</div>
    </nut-cell>
    <nut-action-sheet
      v-model:visible="state.isVisible4"
      cancel-txt="取消"
      :menu-items="menuItemsThree"
      choose-tag-value="选中选项"
      @choose="chooseItemFour"
    />

    <h2>自定义内容</h2>
    <nut-cell is-link @click="switchActionSheet('isVisible5')">
      <div>自定义内容</div>
    </nut-cell>
    <nut-action-sheet v-model:visible="state.isVisible5" title="标题">
      <div class="custom-content">自定义内容</div>
    </nut-action-sheet>
  </Demo>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
interface Item {
  name: string;
  subname?: string;
  color?: string;
  disable?: boolean;
  loading?: boolean;
}
const state = reactive({
  isVisible1: false,
  isVisible2: false,
  isVisible3: false,
  isVisible4: false,
  isVisible5: false,
  val1: '',
  val2: '',
  val3: '',
  val4: ''
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
const switchActionSheet = (param: 'isVisible1' | 'isVisible2' | 'isVisible3' | 'isVisible4' | 'isVisible5') => {
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
</script>

<style lang="scss">
.custom-wrap {
  padding: 110px 0;
  text-align: center;
}
.actionsheet {
  .nut-cell {
    justify-content: space-between;
  }
}
.custom-content {
  padding: 10px 10px 160px;
}
</style>
