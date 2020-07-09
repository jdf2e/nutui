<template>
  <div class="demo-list">
    <h4>基本用法</h4>
    <div>
      <nut-cell :is-link="true" :show-icon="true" @click.native="showNav">
        <span slot="title">
          <label>右侧</label>
        </span>
      </nut-cell>
      <nut-popup position="right" v-model="show1" :style="{ width, height }">
        <nut-sidenavbar :show="show1">
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
    </div>
    <div>
      <nut-cell :is-link="true" :show-icon="true" @click.native="showNav2">
        <span slot="title">
          <label>左侧</label>
        </span>
      </nut-cell>
      <nut-popup position="left" v-model="show2" :style="{ width, height }">
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
    </div>
    <h4>导航嵌套（建议最多三层）,点击第一条回调</h4>
    <div>
      <nut-cell :is-link="true" :show-icon="true" @click.native="showNav3">
        <span slot="title">
          <label>显示</label>
        </span>
      </nut-cell>
      <nut-popup position="right" v-model="show3" :style="{ width, height }">
        <nut-sidenavbar :show="show3">
          <nut-sidenavbaritem ikey="1" title="人脸识别" @click="handleClick('人脸识别')"></nut-sidenavbaritem>
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
          <nut-subsidenavbar v-for="item in navs" :key="item.id" :title="item.name" :ikey="item.id">
            <nut-sidenavbaritem v-for="citem in item.arr" :key="citem.id" :title="citem.name"></nut-sidenavbaritem>
          </nut-subsidenavbar>
        </nut-sidenavbar>
      </nut-popup>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      width: '80%',
      height: '100%',
      navs: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.navs = [
        {
          id: 16,
          name: '异步abc16',
          arr: [{ pid: 16, id: 17, name: 'abc16-id17' }]
        },
        {
          id: 17,
          name: '异步abc17',
          arr: [{ pid: 17, id: 18, name: 'abc17-id18' }]
        }
      ];
    }, 2000);
  },
  methods: {
    showNav() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
    },
    showNav2() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
    },
    showNav3() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
    },
    handleClick(str) {
      alert(str);
    }
  }
};
</script>

<style lang="scss">
.popup-bg {
  z-index: 9999;
}
.popup-box {
  z-index: 9999;
}
</style>
