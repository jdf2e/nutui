<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell @click="handleClick1">
      <span><label>右侧</label></span>
    </nut-cell>
    <nut-popup position="right" v-model:visible="show1" :style="{ width, height }">
      <nut-sidenavbar>
        <nut-subsidenavbar title="智能城市AI" ikey="6">
          <nut-subsidenavbar title="人体识别1" ikey="9">
            <nut-sidenavbaritem ikey="10" title="人体检测1"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="11" title="细粒度人像分割1"></nut-sidenavbaritem>
          </nut-subsidenavbar>
          <nut-subsidenavbar title="人体识别2" ikey="12">
            <nut-sidenavbaritem ikey="13" title="人体检测2"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="14" title="细粒度人像分割2"></nut-sidenavbaritem>
          </nut-subsidenavbar>
        </nut-subsidenavbar>
      </nut-sidenavbar>
    </nut-popup>
    <nut-cell @click="handleClick2">
      <span><label>左侧</label></span>
    </nut-cell>
    <nut-popup position="left" v-model:visible="show2" :style="{ width, height }">
      <nut-sidenavbar>
        <nut-subsidenavbar title="图像理解" ikey="3" :open="false">
          <nut-sidenavbaritem ikey="4" title="菜品识别"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="5" title="拍照购"></nut-sidenavbaritem>
        </nut-subsidenavbar>
        <nut-subsidenavbar title="自然语言处理" ikey="12">
          <nut-sidenavbaritem ikey="13" title="词法分析"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="14" title="句法分析"></nut-sidenavbaritem>
        </nut-subsidenavbar>
      </nut-sidenavbar>
    </nut-popup>
    <h2>导航嵌套（建议最多三层）,点击第一条回调</h2>
    <div>
      <nut-cell @click="handleClick3">
        <span><label>显示</label></span>
      </nut-cell>
      <nut-popup position="right" v-model:visible="show3" :style="{ width, height }">
        <nut-sidenavbar :show="show3">
          <nut-sidenavbaritem ikey="1" title="人脸识别" @click="handleClick4('人脸识别')"></nut-sidenavbaritem>
          <nut-sidenavbaritem ikey="2" title="云存自然语言处理"></nut-sidenavbaritem>
          <nut-subsidenavbar title="图像理解" ikey="3" :open="false">
            <nut-sidenavbaritem ikey="4" title="菜品识别"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="5" title="拍照购"></nut-sidenavbaritem>
          </nut-subsidenavbar>
          <nut-subsidenavbar title="智能城市AI" ikey="6">
            <nut-sidenavbaritem ikey="7" title="企业风险预警模型"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="8" title="水质量检测"></nut-sidenavbaritem>
            <nut-subsidenavbar title="人体识别" ikey="9">
              <nut-sidenavbaritem ikey="10" title="人体检测"></nut-sidenavbaritem>
              <nut-sidenavbaritem ikey="11" title="细粒度人像分割"></nut-sidenavbaritem>
            </nut-subsidenavbar>
          </nut-subsidenavbar>
          <nut-subsidenavbar title="自然语言处理" ikey="12">
            <nut-sidenavbaritem ikey="13" title="词法分析"></nut-sidenavbaritem>
            <nut-sidenavbaritem ikey="14" title="句法分析"></nut-sidenavbaritem>
          </nut-subsidenavbar>
        </nut-sidenavbar>
      </nut-popup>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      show1: false,
      show2: false,
      show3: false,
      width: '80%',
      height: '100%'
    });

    const handleClick1 = () => {
      state.show1 = true;
    };

    const handleClick2 = () => {
      state.show2 = true;
    };

    const handleClick3 = () => {
      state.show3 = true;
    };

    const handleClick4 = (msg: string) => {
      console.log(msg);
    };

    return {
      ...toRefs(state),
      handleClick1,
      handleClick2,
      handleClick3,
      handleClick4
    };
  }
});
</script>
