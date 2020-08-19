<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <div>
      <nut-cell :show-icon="true" title="基础样式" :desc="option" @click.native="openSwitch('isVisible')"> </nut-cell>

      <nut-actionsheet :is-visible="isVisible" @close="closeSwitch('isVisible')" :option-list="optionList" @choose="choose"></nut-actionsheet>
      <nut-cell :show-icon="true" title="带取消按钮" :desc="option1" @click.native="openSwitch('isVisible1')"> </nut-cell>
      <nut-actionsheet
        :is-visible="isVisible1"
        @close="closeSwitch('isVisible1')"
        :is-cancel-btn="true"
        :option-list="optionList"
        @choose="choose1"
      ></nut-actionsheet>

      <nut-cell :show-icon="true" title="展示标题" :desc="option2" @click.native="openSwitch('isVisible2')"> </nut-cell>
      <nut-actionsheet :is-visible="isVisible2" @close="closeSwitch('isVisible2')" :is-cancel-btn="true" :option-list="optionList" @choose="choose2">
        <div slot="title">面板标题</div>
      </nut-actionsheet>

      <nut-actionsheet :is-visible="isVisible3" @close="closeSwitch('isVisible3')" :is-cancel-btn="true" :option-list="optionList" @choose="choose3">
        <div slot="desc">这里是一段描述，一段描述，一段描述，一段描述</div>
      </nut-actionsheet>
      <nut-cell :show-icon="true" title="展示描述信息" :desc="option3" @click.native="openSwitch('isVisible3')"> </nut-cell>
    </div>
    <h4>其他样式</h4>
    <div>
      <nut-cell :show-icon="true" title="带确认按钮" :desc="option4" @click.native="openSwitch('isVisible4')"> </nut-cell>
      <nut-actionsheet :is-visible="isVisible4" @close="closeSwitch('isVisible4')" :is-confirm-btn="true" :option-list="optionList" @choose="choose4">
        <div slot="title">面板标题</div>
      </nut-actionsheet>

      <nut-cell :show-icon="true" title="设置禁用状态" :desc="option5" @click.native="openSwitch('isVisible5')"> </nut-cell>
      <nut-actionsheet :is-visible="isVisible5" :option-list="optionListDis" @close="closeSwitch('isVisible5')" @choose="choose5"></nut-actionsheet>

      <nut-actionsheet
        :is-visible="isVisible6"
        :option-list="optionList"
        :chooseTagValue="option6"
        @close="closeSwitch('isVisible6')"
        @choose="choose6"
      ></nut-actionsheet>
      <nut-cell :show-icon="true" title="高亮选中项" :desc="option6" @click.native="openSwitch('isVisible6')"> </nut-cell>

      <nut-actionsheet :is-visible="isVisible7" @close="closeSwitch('isVisible7')" :option-list="optionList" @choose="choose7"></nut-actionsheet>
      <nut-popup id="combinationActionsheet" v-model="isVisible7">
        <img src="https://m.360buyimg.com/babel/s202x202_jfs/t1/125451/13/9108/20190/5f2fbe70E8d551f81/8a5d3b1215ae05bc.png" />
      </nut-popup>
      <nut-cell :show-icon="true" title="和popup组合使用" :desc="option7" @click.native="openSwitch('isVisible7')"> </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: '',
      isVisible: false,
      option1: '',
      isVisible1: false,
      option2: '',
      isVisible2: false,
      option3: '',
      isVisible3: false,
      option4: '',
      isVisible4: false,
      option5: '',
      isVisible5: false,
      option6: '选项B',
      isVisible6: false,
      optionList: [
        {
          name: '选项A',
          value: 0,
        },
        {
          name: '选项B',
          value: 1,
        },
        {
          name: '选项C',
          value: 1,
        },
      ],
      optionListDis: [
        {
          name: '选项A',
          value: 0,
        },
        {
          name: '选项B',
          value: 1,
          disable: true,
        },
        {
          name: '选项C',
          value: 1,
        },
      ],
      isVisible7: false,
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      console.log('关闭');
      this[`${param}`] = false;
    },

    // demo 1
    choose(itemParams) {
      this.option = itemParams.name;
    },

    choose1(itemParams) {
      this.option1 = itemParams.name;
    },

    choose2(itemParams) {
      this.option2 = itemParams.name;
    },

    choose3(itemParams) {
      this.option3 = itemParams.name;
    },

    choose4(itemParams) {
      this.option4 = itemParams.name;
    },

    choose5(itemParams) {
      this.option5 = itemParams.name;
    },

    choose6(itemParams) {
      this.option6 = itemParams.name;
    },

    choose7(itemParams) {
      this.option7 = itemParams.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-wrap {
  padding: 110px 0;
  text-align: center;
}
</style>
