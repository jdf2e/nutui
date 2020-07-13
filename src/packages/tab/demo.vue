<template>
  <div class="demo-list">
    <!-- DEMO区域 -->
    <h4>基础样式</h4>
    <nut-tab @tab-switch="tabSwitch">
      <nut-tab-panel tab-title="页签一">这里是页签1内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签二">这里是页签2内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签三">这里是页签3内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签四">这里是页签4内容</nut-tab-panel>
    </nut-tab>

    <h4>禁用样式</h4>
    <nut-tab @tab-switch="tabSwitch">
      <nut-tab-panel tab-title="页签一">这里是页签1内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签二">这里是页签2内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签三" :disable="true">这里是页签3内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签四">这里是页签4内容</nut-tab-panel>
    </nut-tab>

    <h4>超出界面宽度</h4>
    <nut-tab @tab-switch="tabSwitch" :is-scroll="true">
      <nut-tab-panel
        v-for="value in editableTabs"
        v-bind:key="value.tabTitle"
        :tab-title="value.tabTitle"
        :icon-url="value.iconUrl"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>

    <h4>纵向tab切换</h4>
    <nut-tab @tab-switch="tabSwitch" position-nav="left" :wrapper-height="350">
      <nut-tab-panel
        v-for="value in editableTabs"
        v-bind:key="value.tabTitle"
        :tab-title="value.tabTitle"
        :icon-url="value.iconUrl"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>

    <h4>纵向tab切换超出界面高度，设置tab区域高度</h4>
    <nut-tab @tab-switch="tabSwitch" position-nav="left" :is-scroll="true" :wrapper-height="200">
      <nut-tab-panel
        v-for="value in editableTabs"
        v-bind:key="value.tabTitle"
        :tab-title="value.tabTitle"
        :icon-url="value.iconUrl"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>

    <h4>设置可以滑动的线段</h4>
    <nut-tab @tab-switch="tabSwitch" :tab-line="false" :scroll-line="true">
      <nut-tab-panel tab-title="页签一">这里是页签1内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签二">这里是页签2内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签三">这里是页签3内容</nut-tab-panel>
      <nut-tab-panel tab-title="页签四">这里是页签4内容</nut-tab-panel>
    </nut-tab>

    <h4>若更新页面，将监听变化的数据传入init-data</h4>
    <nut-tab :def-index="defIndex" class="customer-css" :tab-line="false" @tab-switch="tabSwitch" :init-data="disableTabs" :scroll-line="true">
      <nut-tab-panel
        v-for="value in disableTabs"
        v-bind:key="value.tabTitle"
        :tab-title="value.tabTitle"
        :icon-url="value.iconUrl"
        :disable="value.disable"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>
    <div style="width: 100%; text-align: center;">
      <nut-button @click="resetHandler" type="light">重置Tab页面</nut-button>
      <nut-button @click="clickHandler">更新Tab页面</nut-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      defIndex: 1,
      positionNavCurr: 'top',
      editableTabs: [
        {
          tabTitle: '推荐分类',
          iconUrl: '',
          content: '<p>这里是推荐分类内容</p>',
        },
        {
          tabTitle: '家电清洗',
          iconUrl: '',
          content: '<p>这里是家电清洗内容</p>',
        },
        {
          tabTitle: '箱包养护',
          iconUrl: '',
          content: '<p>这里是箱包养护内容</p>',
        },
        {
          tabTitle: '屏幕换新',
          iconUrl: '',
          content: '<p>这里是屏幕换新内容</p>',
        },
        {
          tabTitle: '电池换新',
          iconUrl: '',
          content: '<p>这里是电池换新内容</p>',
        },
        {
          tabTitle: '内存升级',
          iconUrl: '',
          content: '<p>这里是内存升级内容</p>',
        },
        {
          tabTitle: '家电服务',
          iconUrl: '',
          content: '<p>这里是家电服务内容</p>',
        },
      ],
      disableTabs: [
        {
          tabTitle: '衣物',
          disable: true,
          iconUrl: 'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          content: '<p>衣物内容</p>',
        },
        {
          tabTitle: '日用品',
          iconUrl: 'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          content: '<p>日用品内容</p>',
        },
        {
          tabTitle: '运动器材',
          iconUrl: 'http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg',
          content: '<p>运动器材内容</p>',
        },
        {
          tabTitle: '电影票',
          iconUrl: 'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          content: '<p>电影票内容</p>',
        },
      ],
    };
  },
  methods: {
    tabSwitch: function (index, event) {
      console.log(index + '--' + event);
      //this.defIndex = index;
    },
    clickHandler: function () {
      let newEditableTabs = [
        {
          tabTitle: '衣物2',
          iconUrl: 'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          content: '<p>改变衣物内容</p>',
        },
        {
          tabTitle: '日用品2',
          iconUrl: 'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          content: '<p>改变日用品内容</p>',
        },
        {
          tabTitle: '器材2',
          iconUrl: 'http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg',
          content: '<p>改变运动器材内容</p>',
        },
        {
          tabTitle: '电影票2',
          iconUrl: 'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          content: '<p>改变电影票内容</p>',
        },
      ];
      this.disableTabs = newEditableTabs;
    },
    resetHandler: function () {
      let newEditableTabs = [
        {
          tabTitle: '衣物',
          disable: true,
          iconUrl: 'http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg',
          content: '<p>衣物内容</p>',
        },
        {
          tabTitle: '日用品',
          iconUrl: 'http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg',
          content: '<p>日用品内容</p>',
        },
        {
          tabTitle: '运动器材',
          iconUrl: 'http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg',
          content: '<p>运动器材内容</p>',
        },
        {
          tabTitle: '电影票',
          iconUrl: 'http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg',
          content: '<p>电影票内容</p>',
        },
      ];
      this.disableTabs = newEditableTabs;
    },
  },
};
</script>

<style lang="scss">
.customer-css {
  .nut-tab-active .nut-tab-link {
    color: #e1251b;
  }

  .nut-title-nav-list {
    background: #fff;
    border-left: 1px solid #e4e7ed;

    &:first-child {
      border-left: 0;
    }
  }

  .nut-tab-active {
    border: 0;
    transition: all 0.3s ease-in-out;
  }

  .nav-bar {
    background: $primary-color;
  }

  .nut-tab-link {
    width: 100%;
  }
}
</style>
