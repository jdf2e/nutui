<template>
  <div>
    <!-- DEMO区域 -->
    <h4>默认用法</h4>
    <nut-tab @tab-switch="tabSwitch">
        <nut-tab-panel tabTitle="页签1">页签1</nut-tab-panel>
        <nut-tab-panel tabTitle="页签2">页签2</nut-tab-panel>
        <nut-tab-panel tabTitle="页签3">页签3</nut-tab-panel>
    </nut-tab>
    <h4>支持导航条在上下左右位置</h4>
    <nut-tab @tab-switch="tabSwitch">
      <nut-tab-panel
        v-for="value in editableTabs"
        v-bind:key="value.tabTitle"
        :tabTitle="value.tabTitle"
        :iconUrl="value.iconUrl"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>
    <nut-tab @tab-switch="tabSwitch" positionNav="left">
      <nut-tab-panel
        v-for="value in editableTabs"
        v-bind:key="value.tabTitle"
        :tabTitle="value.tabTitle"
        :iconUrl="value.iconUrl"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>
    <nut-tab @tab-switch="tabSwitch" positionNav="right">
      <nut-tab-panel
        v-for="value in editableTabs"
        v-bind:key="value.tabTitle"
        :tabTitle="value.tabTitle"
        :iconUrl="value.iconUrl"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>
    <nut-tab @tab-switch="tabSwitch" positionNav="bottom">
      <nut-tab-panel
        v-for="value in editableTabs"
        v-bind:key="value.tabTitle"
        :tabTitle="value.tabTitle"
        :iconUrl="value.iconUrl"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>

    <h4>禁止选中，默认选中某个标签</h4>
    <h4>如需要更新页面，请将监听变化的数据传入init-data</h4>

    <nut-tab :defIndex="1" class="customer-css" @tab-switch="tabSwitch" :contentShow="true" :init-data="disableTabs">
      <nut-tab-panel
        v-for="value in disableTabs"
        v-bind:key="value.tabTitle"
        :tabTitle="value.tabTitle"
        :disable="value.disable"
        v-html="value.content"
      ></nut-tab-panel>
    </nut-tab>
    <div style="width:100%;height=50px;text-align:center">
      <Button @click="resetHandler" type="light">重置Tab页面</Button>
      <Button @click="clickHandler">更新Tab页面</Button>
    </div>
  </div>
</template>

<script>
import Button from '../button/button.vue';
export default {
  components:{
    Button
  },
  data() {
    return {
      positionNavCurr: "top",
      editableTabs: [
        {
          tabTitle: "衣物",
          iconUrl:
            "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
          content: "<p>衣物内容</p>"
        },
        {
          tabTitle: "日用品",
          iconUrl:
            "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
          content: "<p>日用品内容</p>"
        },
        {
          tabTitle: "器材",
          iconUrl:
            "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
          content: "<p>运动器材内容</p>"
        },
        {
          tabTitle: "电影票",
          iconUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        }
      ],
      disableTabs: [
        {
          tabTitle: "衣物",
          disable: false,
          iconUrl:
            "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
          content: "<p>衣物内容</p>"
        },
        {
          tabTitle: "日用品",
          iconUrl:
            "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
          content: "<p>日用品内容</p>"
        },
        {
          tabTitle: "运动器材",
          iconUrl:
            "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
          content: "<p>运动器材内容</p>"
        },
        {
          tabTitle: "电影票",
          iconUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        }
      ]
    };
  },
  methods: {
    tabSwitch: function(index, event) {
      console.log(index + "--" + event.target);
    },
    clickHandler:function(){
      let newEditableTabs = [
        {
          tabTitle: "衣物2",
          iconUrl:
            "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
          content: "<p>改变衣物内容</p>"
        },
        {
          tabTitle: "日用品2",
          iconUrl:
            "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
          content: "<p>改变日用品内容</p>"
        },
        {
          tabTitle: "器材2",
          iconUrl:
            "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
          content: "<p>改变运动器材内容</p>"
        },
        {
          tabTitle: "电影票2",
          iconUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>改变电影票内容</p>"
        }
      ]
      this.disableTabs = newEditableTabs;
    },
    resetHandler:function(){
        let newEditableTabs = [
        {
          tabTitle: "衣物",
          disable: false,
          iconUrl:
            "http://img13.360buyimg.com/uba/jfs/t27280/289/2061314663/2392/872e32ff/5bf76318Ndc80c1d8.jpg",
          content: "<p>衣物内容</p>"
        },
        {
          tabTitle: "日用品",
          iconUrl:
            "http://img13.360buyimg.com/uba/jfs/t30331/209/562746340/2190/6619973d/5bf763aaN6ff02099.jpg",
          content: "<p>日用品内容</p>"
        },
        {
          tabTitle: "运动器材",
          iconUrl:
            "http://img20.360buyimg.com/uba/jfs/t30346/262/553689202/2257/5dfa3983/5bf76407N72deabf4.jpg",
          content: "<p>运动器材内容</p>"
        },
        {
          tabTitle: "电影票",
          iconUrl:
            "http://img10.360buyimg.com/uba/jfs/t26779/215/2118525153/2413/470d1613/5bf767b2N075957b7.jpg",
          content: "<p>电影票内容</p>"
        }
      ]
      this.disableTabs = newEditableTabs;
    }
  }
};
</script>

<style lang="scss">
.customer-css {
  .nut-tab-active .nut-tab-link {
    color: #fff;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .nut-title-nav-list {
    background: #fff;
    border-left: 1px solid #e4e7ed;
  }
  .nut-title-nav-list:first-child {
    border-left: 0;
  }
  .nut-tab-active {
    background: $primary-color;
    border: 0;
  }
  .nav-bar {
    background: $primary-color;
  }
  .nut-tab-link {
    width: 100%;
  }
}
</style>

