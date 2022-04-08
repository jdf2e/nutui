<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-popover v-model:visible="visible.lightTheme" :list="iconItemList" @choose="chooseItem">
      <template #reference>
        <nut-button type="primary" shape="square">明朗风格</nut-button>
      </template>
    </nut-popover>

    <nut-popover v-model:visible="visible.darkTheme" theme="dark" :list="iconItemList">
      <template #reference>
        <nut-button type="primary" shape="square">暗黑风格</nut-button>
      </template>
    </nut-popover>

    <h2>选项配置</h2>
    <nut-popover v-model:visible="visible.showIcon" theme="dark" :list="itemList">
      <template #reference>
        <nut-button type="primary" shape="square">展示图标</nut-button>
      </template>
    </nut-popover>

    <nut-popover v-model:visible="visible.disableAction" :list="itemListDisabled">
      <template #reference>
        <nut-button type="primary" shape="square">禁用选项</nut-button>
      </template>
    </nut-popover>

    <h2>自定义内容</h2>
    <nut-popover v-model:visible="visible.Customized">
      <template #reference>
        <nut-button type="primary" shape="square">自定义内容</nut-button>
      </template>

      <template #content>
        <div class="self-content">
          <div class="self-content-item" v-for="(item, index) in selfContent" :key="index">
            <nut-icon :name="item.name" size="15"></nut-icon>
            <div class="self-content-desc">{{ item.desc }}</div>
          </div>
        </div>
      </template>
    </nut-popover>

    <h2>位置自定义</h2>
    <nut-popover v-model:visible="visible.topLocation" location="top" theme="dark" :list="iconItemList">
      <template #reference>
        <nut-button type="primary" shape="square">向上弹出</nut-button>
      </template>
    </nut-popover>

    <h2></h2>
    <nut-popover v-model:visible="visible.rightLocation" location="right" theme="dark" :list="iconItemList">
      <template #reference>
        <nut-button type="primary" shape="square">向右弹出</nut-button>
      </template>
    </nut-popover>
    <nut-popover v-model:visible="visible.leftLocation" location="left" theme="dark" :list="iconItemList">
      <template #reference>
        <nut-button type="primary" shape="square">向左弹出</nut-button>
      </template>
    </nut-popover>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue';

export default {
  setup() {
    const visible = ref({
      showIcon: false,
      placement: false,
      darkTheme: false,
      lightTheme: false,
      Customized: false,
      disableAction: false,
      topLocation: false, //向上弹出
      rightLocation: false, //向右弹出
      leftLocation: false //向左弹出
    });

    const iconItemList = reactive([
      {
        name: '选项一'
      },
      {
        name: '选项二'
      },
      {
        name: '选项三'
      }
    ]);

    const itemList = reactive([
      {
        name: '选项一',
        icon: 'my2'
      },
      {
        name: '选项二',
        icon: 'cart2'
      },
      {
        name: '选项三',
        icon: 'location2'
      }
    ]);

    const itemListDisabled = reactive([
      {
        name: '选项一',
        disabled: true
      },
      {
        name: '选项二',
        disabled: true
      },
      {
        name: '选项三'
      }
    ]);

    const selfContent = reactive([
      {
        name: 'service',
        desc: '选项一'
      },
      {
        name: 'notice',
        desc: '选项二'
      },
      {
        name: 'location',
        desc: '选项三'
      },
      {
        name: 'category',
        desc: '选项四'
      },
      {
        name: 'scan2',
        desc: '选项五'
      },
      {
        name: 'message',
        desc: '选项六'
      }
    ]);

    const chooseItem = () => {
      console.log('选择项');
    };

    return {
      iconItemList,
      itemList,
      visible,
      itemListDisabled,
      selfContent,
      chooseItem
    };
  }
};
</script>
<style lang="scss">
.self-content {
  width: 195px;
  display: flex;
  flex-wrap: wrap;
  &-item {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &-desc {
    margin-top: 5px;
    width: 60px;
    font-size: 10px;
    text-align: center;
  }
}
</style>
