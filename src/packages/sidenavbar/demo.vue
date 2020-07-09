<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <div>
      <nut-cell :is-link="true" :show-icon="true" @click.native="showNav3">
        <span slot="title">
          <label>展示一级</label>
        </span>
      </nut-cell>
      <nut-cell :is-link="true" :show-icon="true" @click.native="showNav4">
        <span slot="title">
          <label>展示icon</label>
        </span>
      </nut-cell>
    </div>
    <div>
      <nut-popup position="right" v-model="show3" :style="{ width, height }">
        <nut-sidenavbar>
          <nut-subsidenavbar title="菜单内容一" ikey="1" :open="false"></nut-subsidenavbar>
          <nut-subsidenavbar title="菜单内容二" ikey="2"></nut-subsidenavbar>
          <nut-subsidenavbar title="菜单内容三" ikey="3">
            <div slot="desc" class="desc">这里是对菜单的解释说明</div>
          </nut-subsidenavbar>
          <nut-subsidenavbar title="菜单内容四" ikey="4">
            <div slot="desc" class="desc">这里是对菜单的解释说明</div>
            <a href="javascript:;" slot="oper" class="oper">操作</a>
          </nut-subsidenavbar>
        </nut-sidenavbar>
      </nut-popup>
      <nut-popup position="right" v-model="show4" :style="{ width, height }">
        <nut-sidenavbar>
          <nut-subsidenavbar title="菜单内容一" ikey="1" :open="false">
            <nut-icon slot="icon" color="#6933ff" type="avatar"></nut-icon>
          </nut-subsidenavbar>
          <nut-subsidenavbar title="菜单内容二" ikey="2">
            <nut-icon slot="icon" type="nav" color="#ff613e"></nut-icon>
          </nut-subsidenavbar>
          <nut-subsidenavbar title="菜单内容三" ikey="3">
            <nut-icon slot="icon" type="star" color="#ffb600"></nut-icon>
            <div slot="desc" class="desc">这里是对菜单的解释说明</div>
          </nut-subsidenavbar>
          <nut-subsidenavbar title="菜单内容四" ikey="4">
            <nut-icon slot="icon" type="set" color="#2770f9"></nut-icon>
            <div slot="desc" class="desc">这里是对菜单的解释说明</div>
            <a href="javascript:;" slot="oper" class="oper">操作</a>
          </nut-subsidenavbar>
        </nut-sidenavbar>
      </nut-popup>
    </div>
    <h4>多级展示</h4>
    <div>
      <nut-cell :is-link="true" :show-icon="true" @click.native="showNav">
        <span slot="title">
          <label>右侧</label>
        </span>
      </nut-cell>
      <nut-cell :is-link="true" :show-icon="true" @click.native="showNav5">
        <span slot="title">
          <label>异步</label>
        </span>
      </nut-cell>
    </div>
    <div>
      <nut-popup position="right" v-model="show1" :style="{ width, height }">
        <nut-sidenavbar :show="show1">
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
      <nut-popup position="right" v-model="show5" :style="{ width, height }">
        <nut-sidenavbar :show="show5">
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
      show3: false,
      show4: false,
      show5: false,
      width: '80%',
      height: '100%',
      navs: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.navs = [
        {
          id: 16,
          name: '异步abc16',
          arr: [{ pid: 16, id: 17, name: 'abc16-id17' }],
        },
        {
          id: 17,
          name: '异步abc17',
          arr: [{ pid: 17, id: 18, name: 'abc17-id18' }],
        },
      ];
    }, 2000);
  },
  methods: {
    showNav() {
      this.show1 = true;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
    },
    showNav2() {
      this.show1 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
    },
    showNav3() {
      this.show1 = false;
      this.show3 = true;
      this.show4 = false;
      this.show5 = false;
    },
    showNav4() {
      this.show1 = false;
      this.show3 = false;
      this.show4 = true;
      this.show5 = false;
    },
    showNav5() {
      this.show1 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = true;
    },
    handleClick(str) {
      alert(str);
    },
  },
};
</script>

<style lang="scss">
.popup-bg {
  z-index: 9999;
}

.popup-box {
  z-index: 9999;
}

.desc {
  color: #c8c8c8;
  font-size: 13px;
}

.oper {
  display: inline-block;
  text-decoration: none;
  width: 50px;
  height: 28px;
  line-height: 28px;
  color: #fff;
  font-size: 13px;
  border-radius: 4px;
  background-color: #e1251b;
  text-align: center;
}
</style>
