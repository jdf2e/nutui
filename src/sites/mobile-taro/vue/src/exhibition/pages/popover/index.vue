<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-row type="flex">
      <nut-col :span="8">
        <nut-popover
          v-model:visible="lightTheme"
          :list="iconItemList"
          location="bottom-start"
          @choose="chooseItem"
          custom-class="popover-demo-custom"
        >
          <template #reference>
            <nut-button type="primary" shape="square">明朗风格</nut-button>
          </template>
        </nut-popover>
      </nut-col>
      <nut-col :span="8">
        <nut-popover v-model:visible="darkTheme" theme="dark" :list="iconItemList" custom-class="popover-demo-custom">
          <template #reference>
            <nut-button type="primary" shape="square">暗黑风格</nut-button>
          </template>
        </nut-popover>
      </nut-col>
    </nut-row>

    <h2>选项配置</h2>
    <nut-row type="flex">
      <nut-col :span="8">
        <nut-popover v-model:visible="showIcon" theme="dark" :list="itemList" custom-class="popover-demo-custom">
          <template #reference>
            <nut-button type="primary" shape="square">展示图标</nut-button>
          </template>
        </nut-popover>
      </nut-col>
      <nut-col :span="8">
        <nut-popover
          v-model:visible="disableAction"
          :list="itemListDisabled"
          location="right-start"
          custom-class="popover-demo-custom"
        >
          <template #reference>
            <nut-button type="primary" shape="square">禁用选项</nut-button>
          </template>
        </nut-popover>
      </nut-col>
    </nut-row>

    <h2>自定义内容</h2>
    <nut-popover v-model:visible="Customized" location="top-start" custom-class="customClass">
      <template #reference>
        <nut-button type="primary" shape="square">自定义内容</nut-button>
      </template>

      <template #content>
        <div class="self-content">
          <div class="self-content-item" v-for="(item, index) in selfContent" :key="index">
            <!-- <component :is="renderIcon(item.name)"></component> -->
            <Service />
            <div class="self-content-desc">{{ item.desc }}</div>
          </div>
        </div>
      </template>
    </nut-popover>

    <h2>位置自定义</h2>
    <nut-cell title="点击查看更多方向" @click="handlePicker"></nut-cell>

    <nut-popup position="bottom" v-model:visible="showPicker" custom-class="popover-demo-custom">
      <nut-picker
        :columns="columns"
        title=""
        @change="change"
        :swipe-duration="500"
        @confirm="closePicker"
        @close="closePicker"
      >
        <template #top>
          <div class="brickBox">
            <div class="brick" id="pickerTarget"></div>
          </div>
        </template>
      </nut-picker>
    </nut-popup>

    <nut-popover
      v-model:visible="customPositon"
      targetId="pickerTarget"
      :location="curPostion"
      theme="dark"
      :list="positionList"
      custom-class="popover-demo-custom"
    >
    </nut-popover>

    <h2>自定义目标元素</h2>
    <nut-button type="primary" shape="square" id="popid" @click="clickCustomHandle"> 自定义对象 </nut-button>
    <nut-popover
      v-model:visible="customTarget"
      targetId="popid"
      :list="iconItemList"
      location="top-start"
      custom-class="popover-demo-custom"
    ></nut-popover>

    <h2>自定义颜色</h2>

    <nut-popover
      v-model:visible="customColor"
      :list="iconItemList"
      location="right-start"
      bgColor="#f00"
      theme="dark"
      custom-class="popover-demo-custom"
    >
      <template #reference>
        <nut-button type="primary" shape="square">自定义颜色</nut-button>
      </template>
    </nut-popover>
  </div>
</template>
<script lang="ts">
import { reactive, ref, toRefs, h } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
import { renderIcon } from '../../../../../../../packages/utils/create';
import { Service, Notice, Location, Category, Scan2, Message, Cart2, My2 } from '@nutui/icons-vue-taro';

export default {
  components: {
    Service,
    Header
  },
  setup() {
    const env = Taro.getEnv();
    const state = reactive({
      showIcon: false,
      placement: false,
      darkTheme: false,
      lightTheme: false,
      Customized: false,
      disableAction: false,
      topLocation: false, //向上弹出
      rightLocation: false, //向右弹出
      leftLocation: false, //向左弹出
      customPositon: false,

      showPicker: false,
      customTarget: false,
      customColor: false
    });
    const curPostion = ref('top');

    const columns = ref([
      { text: 'top', value: 'top' },
      { text: 'top-start', value: 'top-start' },
      { text: 'top-end', value: 'top-end' },
      { text: 'right', value: 'right' },
      { text: 'right-start', value: 'right-start' },
      { text: 'right-end', value: 'right-end' },
      { text: 'bottom', value: 'bottom' },
      { text: 'bottom-start', value: 'bottom-start' },
      { text: 'bottom-end', value: 'bottom-end' },
      { text: 'left', value: 'left' },
      { text: 'left-start', value: 'left-start' },
      { text: 'left-end', value: 'left-end' }
    ]);

    const iconItemList = reactive([
      {
        name: 'option1'
      },
      {
        name: 'option2'
      },
      {
        name: 'option3'
      }
    ]);

    const positionList = reactive([
      {
        name: 'option1'
      },
      {
        name: 'option2'
      }
    ]);

    const itemList = reactive([
      {
        name: 'option1',
        icon: () => {
          return h(My2, {
            width: '14px',
            color: 'rgba(250, 44, 25, 1)'
          });
        }
      },
      {
        name: 'option2',
        icon: () => {
          return h(Cart2, {
            width: '14px'
          });
        }
      },
      {
        name: 'option3',
        icon: () => {
          return h(Location, {
            width: '14px'
          });
        }
      }
    ]);

    const itemListDisabled = reactive([
      {
        name: 'option1',
        disabled: true
      },
      {
        name: 'option2',
        disabled: true
      },
      {
        name: 'option3'
      }
    ]);

    const selfContent = reactive([
      {
        name: Service,
        desc: 'option1'
      },
      {
        name: Notice,
        desc: 'option2'
      },
      {
        name: Location,
        desc: 'option3'
      },
      {
        name: Category,
        desc: 'option4'
      },
      {
        name: Scan2,
        desc: 'option5'
      },
      {
        name: Message,
        desc: 'option6'
      }
    ]);

    const chooseItem = (item: unknown, index: number) => {
      console.log(item, index);
    };

    const handlePicker = () => {
      state.showPicker = true;
      setTimeout(() => {
        state.customPositon = true;
      }, 1000);
    };

    const change = ({ selectedValue }) => {
      curPostion.value = selectedValue[0];
      if (state.showPicker) state.customPositon = true;
    };

    const clickCustomHandle = () => {
      state.customTarget = !state.customTarget;
    };

    const closePicker = () => {
      state.customPositon = false;
      state.showPicker = false;
    };

    return {
      iconItemList,
      itemList,
      ...toRefs(state),
      itemListDisabled,
      selfContent,
      chooseItem,
      curPostion,
      positionList,
      columns,
      change,
      handlePicker,
      clickCustomHandle,
      renderIcon,
      closePicker,
      env
    };
  }
};
</script>
<style lang="scss">
.demo > h2 {
  padding: 0;
}
.brickBox {
  margin: 80px 0;
  display: flex;
  justify-content: center;
  .brick {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #fa2c19 0%, #fa6419 100%);
    border-radius: 10px;
  }
}

.popover-demo-custom {
  .nut-popover-content {
    width: 120px;
  }
}

.customClass {
  .nut-popover-content {
    width: auto;
  }
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
}
</style>
