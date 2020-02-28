<template>
  <div>
    <h2 class="title">基本用法</h2>
    <nut-cell
      isLink
      title="展示弹出层"
      :showIcon="true"
      @click.native="showBasic = true"
    >
    </nut-cell>
    <nut-popup :style="{ padding: '30px 50px' }"   v-model="showBasic" >正文</nut-popup>

    <h2 class="title">弹出位置</h2>

    <nut-cell
      isLink
      title="顶部弹出"
      :showIcon="true"
      @click.native="showTop = true"
    >
    </nut-cell>
    <nut-popup position="top" v-model="showTop" :style="{ height: '20%' }">
    </nut-popup>
    <nut-cell
      isLink
      title="底部弹出"
      :showIcon="true"
      @click.native="showBottom = true"
    >
    </nut-cell>
    <nut-popup
      v-model="showBottom"
      position="bottom"
      :style="{ height: '20%' }"
    >
    </nut-popup>
    <nut-cell
      isLink
      title="左侧弹出"
      :showIcon="true"
      @click.native="showLeft = true"
    >
    </nut-cell>
    <nut-popup
      :style="{ width: '20%', height: '100%' }"
      v-model="showLeft"
      position="left"
    ></nut-popup>
    <nut-cell
      isLink
      title="右侧弹出"
      :showIcon="true"
      @click.native="showRight = true"
    >
    </nut-cell>
    <nut-popup
      position="right"
      v-model="showRight"
      :style="{ width: '20%', height: '100%' }"
    ></nut-popup>
    <h2 class="title">关闭图标</h2>
    <nut-cell
      isLink
      title="关闭图标"
      :showIcon="true"
      @click.native="showIcon = true">
    </nut-cell>
    <nut-popup
      position="bottom"
      closeable 
      v-model="showIcon"
      :style="{ height: '20%' }"
    ></nut-popup>

    <nut-cell
      isLink
      title="图标位置"
      :showIcon="true"
      @click.native="showIconPosition = true">
    </nut-cell>
    <nut-popup
      position="bottom"
      closeable 
      close-icon-position="top-left"
      v-model="showIconPosition"
      :style="{ height: '20%' }"
    ></nut-popup>


    <nut-cell
      isLink
      title="自定义图标"
      :showIcon="true"
      @click.native="showCloseIcon = true">
    </nut-cell>
    <nut-popup
      position="bottom"
      closeable 
      close-icon="tick"
      v-model="showCloseIcon"
      :style="{ height: '20%' }"
    ></nut-popup>


    <h2 class="title">圆角弹框</h2>
    <nut-cell
      isLink
      title="圆角弹框"
      :showIcon="true"
      @click.native="showRound = true"
    >
    </nut-cell>
    <nut-popup
      round
      v-model="showRound"
      position="bottom"
      :style="{ height: '20%' }"
    ></nut-popup>

    <h2 class="title">指定挂载节点</h2>
    <nut-cell
      isLink
      title="指定挂载节点"
      :showIcon="true"
      @click.native="getContainer = true"
    >
    </nut-cell>
    <nut-popup :style="{ padding: '30px 50px' }"  get-container="body"  v-model="getContainer" >body</nut-popup>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showIcon: false,
      showRound: false,
      showIconPosition: false,
      showCloseIcon: false,
      getContainer:false
    };
  },
  methods: {     
    show() {
      this.isShow = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  text-align: left;
  margin: 0;
  padding: 32px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
.demo {
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
}
</style>
