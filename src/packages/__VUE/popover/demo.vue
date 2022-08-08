<template>
  <div class="demo">
    <h2>{{ translate('title1') }}</h2>

    <nut-row type="flex">
      <nut-col :span="8">
        <nut-popover
          v-model:visible="visible.lightTheme"
          :list="iconItemList"
          location="bottom-start"
          @choose="chooseItem"
        >
          <template #reference>
            <nut-button type="primary" shape="square">{{ translate('light') }}</nut-button>
          </template>
        </nut-popover>
      </nut-col>
      <nut-col :span="8">
        <nut-popover v-model:visible="visible.darkTheme" theme="dark" :list="iconItemList">
          <template #reference>
            <nut-button type="primary" shape="square">{{ translate('dark') }}</nut-button>
          </template>
        </nut-popover>
      </nut-col>
    </nut-row>

    <h2>{{ translate('title2') }}</h2>

    <nut-row type="flex">
      <nut-col :span="8">
        <nut-popover v-model:visible="visible.showIcon" theme="dark" :list="itemList">
          <template #reference>
            <nut-button type="primary" shape="square">{{ translate('showIcon') }}</nut-button>
          </template>
        </nut-popover>
      </nut-col>
      <nut-col :span="8">
        <nut-popover v-model:visible="visible.disableAction" :list="itemListDisabled">
          <template #reference>
            <nut-button type="primary" shape="square">{{ translate('disableAction') }}</nut-button>
          </template>
        </nut-popover>
      </nut-col>
    </nut-row>

    <h2>{{ translate('title3') }}</h2>
    <nut-popover v-model:visible="visible.Customized" location="bottom-start">
      <template #reference>
        <nut-button type="primary" shape="square">{{ translate('content') }}</nut-button>
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

    <h2>{{ translate('title4') }}</h2>

    <nut-row type="flex" justify="center">
      <nut-col :span="24" style="text-align: center">
        <nut-popover
          v-model:visible="visible.customPositon"
          :location="curPostion"
          theme="dark"
          :list="positionList"
          customClass="brickBox"
        >
          <template #reference>
            <div class="brick"></div>
          </template>
        </nut-popover>
      </nut-col>
    </nut-row>

    <nut-radiogroup v-model="curPostion" direction="horizontal" class="radiogroup">
      <nut-radio shape="button" :label="pos" v-for="(pos, i) in position" :key="i">{{ pos }}</nut-radio>
    </nut-radiogroup>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('popover');
import { useTranslate } from '@/sites/assets/util/useTranslate';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '选项配置',
      title2: '自定义内容',
      title3: '位置自定义',
      light: '明朗风格',
      dark: '暗黑风格',
      showIcon: '展示图标',
      disableAction: '禁用选项',
      content: '自定义内容'
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Option Configuration',
      title2: 'Custom Content',
      title3: 'Custom Location',
      light: 'light',
      dark: 'dark',
      showIcon: 'show icon',
      disableAction: 'disabled',
      content: 'custom content'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const visible = ref({
      showIcon: false,
      placement: false,
      darkTheme: false,
      lightTheme: false,
      Customized: false,
      disableAction: false,
      topLocation: false, //向上弹出
      rightLocation: false, //向右弹出
      leftLocation: false, //向左弹出
      customPositon: false
    });
    const curPostion = ref('top');
    const position = ref([
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end'
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
        icon: 'my2'
      },
      {
        name: 'option2',
        icon: 'cart2'
      },
      {
        name: 'option3',
        icon: 'location2'
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
        name: 'service',
        desc: 'option1'
      },
      {
        name: 'notice',
        desc: 'option2'
      },
      {
        name: 'location',
        desc: 'option3'
      },
      {
        name: 'category',
        desc: 'option4'
      },
      {
        name: 'scan2',
        desc: 'option5'
      },
      {
        name: 'message',
        desc: 'option6'
      }
    ]);

    const chooseItem = (item: unknown, index: number) => {
      console.log(item, index);
      alert('selected');
    };

    return {
      iconItemList,
      itemList,
      visible,
      itemListDisabled,
      selfContent,
      chooseItem,
      position,
      curPostion,
      positionList,
      translate
    };
  }
});
</script>
<style lang="scss">
.demo > h2 {
  padding: 0;
}
.brickBox {
  margin: 80px 0;
  .brick {
    width: 60px;
    height: 60px;
    background: #1989fa;
    border-radius: 10px;
  }
}

.radiogroup {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding: 10px 6px;

  > .nut-radio {
    width: 110px;

    > .nut-radio__button {
      padding: 5px 12px;
      border: 1px solid #f6f7f9;
    }
  }
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
</style>
