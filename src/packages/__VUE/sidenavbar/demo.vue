<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell @click="handleClick1">
      <span
        ><label>{{ translate('right') }}</label></span
      >
    </nut-cell>
    <nut-popup position="right" v-model:visible="show1" :style="{ width, height }">
      <nut-sidenavbar>
        <nut-subsidenavbar :title="translate('title1')" ikey="6">
          <nut-subsidenavbar :title="translate('title2')" ikey="9">
            <nut-sidenavbaritem ikey="10" :title="translate('title3')"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="11" :title="translate('title4')"></nut-sidenavbaritem>
          </nut-subsidenavbar>
          <nut-subsidenavbar :title="translate('title16')" ikey="12">
            <nut-sidenavbaritem ikey="13" :title="translate('title5')"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="14" :title="translate('title6')"></nut-sidenavbaritem>
          </nut-subsidenavbar>
        </nut-subsidenavbar>
      </nut-sidenavbar>
    </nut-popup>
    <nut-cell @click="handleClick2">
      <span
        ><label>{{ translate('left') }}</label></span
      >
    </nut-cell>
    <nut-popup position="left" v-model:visible="show2" :style="{ width, height }">
      <nut-sidenavbar>
        <nut-subsidenavbar :title="translate('title7')" ikey="3" :open="false">
          <nut-sidenavbaritem ikey="4" :title="translate('title8')"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="5" :title="translate('title9')"></nut-sidenavbaritem>
        </nut-subsidenavbar>
        <nut-subsidenavbar :title="translate('title10')" ikey="12">
          <nut-sidenavbaritem ikey="13" :title="translate('title11')"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="14" :title="translate('title12')"></nut-sidenavbaritem>
        </nut-subsidenavbar>
      </nut-sidenavbar>
    </nut-popup>
    <h2>{{ translate('nest') }}</h2>
    <div>
      <nut-cell @click="handleClick3">
        <span
          ><label>{{ translate('show') }}</label></span
        >
      </nut-cell>
      <nut-popup position="right" v-model:visible="show3" :style="{ width, height }">
        <nut-sidenavbar :show="show3">
          <nut-sidenavbaritem
            ikey="1"
            :title="translate('title13')"
            @click="handleClick4(translate('title13'))"
          ></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="2" :title="translate('title10')"></nut-sidenavbaritem>
          <nut-subsidenavbar :title="translate('title7')" ikey="3" :open="false">
            <nut-sidenavbaritem ikey="4" :title="translate('title8')"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="5" :title="translate('title9')"></nut-sidenavbaritem>
          </nut-subsidenavbar>
          <nut-subsidenavbar :title="translate('title1')" ikey="6">
            <nut-sidenavbaritem ikey="7" :title="translate('title14')"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="8" :title="translate('title15')"></nut-sidenavbaritem>
            <nut-subsidenavbar :title="translate('title2')" ikey="9">
              <nut-sidenavbaritem ikey="10" :title="translate('title3')"></nut-sidenavbaritem>
              <nut-sidenavbaritem ikey="11" :title="translate('title4')"></nut-sidenavbaritem>
            </nut-subsidenavbar>
          </nut-subsidenavbar>
          <nut-subsidenavbar :title="translate('title10')" ikey="12">
            <nut-sidenavbaritem ikey="13" :title="translate('title11')"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="14" :title="translate('title12')"></nut-sidenavbaritem>
          </nut-subsidenavbar>
          <nut-subsidenavbar v-for="item in navs" :key="item.id" :title="item.name" :ikey="item.id">
            <nut-sidenavbaritem v-for="citem in item.arr" :key="citem.id" :title="citem.name"></nut-sidenavbaritem>
          </nut-subsidenavbar>
        </nut-sidenavbar>
      </nut-popup>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('sidenavbar');
import { Toast } from '@/packages/nutui.vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '智能城市AI',
      title2: '人体识别1',
      title3: '人体检测1',
      title4: '细粒度人像分割1',
      title5: '人体检测2',
      title6: '细粒度人像分割2',
      title7: '图像理解',
      title8: '菜品识别',
      title9: '拍照购',
      title10: '自然语言处理',
      title11: '词法分析',
      title12: '句法分析',
      title13: '人脸识别',
      title14: '企业风险预警模型',
      title15: '水质量检测',
      title16: '人体识别2',
      left: '左侧',
      right: '右侧',
      show: '显示',
      nest: '导航嵌套（建议最多三层）,点击第一条回调'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Intelligent City Ai',
      title2: 'Human body recognition 1',
      title3: 'Human testing 1',
      title4: 'Fine grained portrait segment 1',
      title5: 'Human testing 2',
      title6: 'Fine grained portrait segment 2',
      title7: 'image understanding',
      title8: 'Dish identification',
      title9: 'Photo shopping',
      title10: 'natural language processing',
      title11: 'lexical analysis',
      title12: 'Syntactic analysis',
      title13: 'Face recognition',
      title14: 'Enterprise risk early warning model',
      title15: 'Water quality inspection',
      title16: 'Human body recognition 2',
      left: 'left',
      right: 'right',
      show: 'show',
      nest: 'Navigation nesting (up to three layers are recommended), and click the first callback'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const state = reactive({
      show1: false,
      show2: false,
      show3: false,
      width: '80%',
      height: '100%',
      navs: [] as any[]
    });

    const handleClick1 = () => {
      state.show1 = true;
    };

    const handleClick2 = () => {
      state.show2 = true;
    };

    const handleClick3 = () => {
      state.show3 = true;
      setTimeout(() => {
        state.navs = [
          {
            id: 16,
            name: 'asyc abc16',
            arr: [{ pid: 16, id: 17, name: 'abc16-id17' }]
          },
          {
            id: 17,
            name: 'asyc abc17',
            arr: [{ pid: 17, id: 18, name: 'abc17-id18' }]
          }
        ];
      }, 2000);
    };

    const handleClick4 = (msg: string) => {
      Toast.text(msg);
    };

    return {
      ...toRefs(state),
      handleClick1,
      handleClick2,
      handleClick3,
      handleClick4,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
}
</style>
