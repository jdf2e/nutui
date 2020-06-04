<template>
  <div>
    <h4>基本用法</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-rate v-model="val"></nut-rate></span>
      </nut-cell>
      <nut-cell>
        <span slot="title">当前分数：{{ val }}分</span>
      </nut-cell>
    </div>

    <h4>只读</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-rate v-model="val2" :readOnly="true"></nut-rate></span>
      </nut-cell>
      <nut-cell>
        <span slot="title">结果：{{ val2 }}</span>
      </nut-cell>
    </div>

    <h4>自定义尺寸</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-rate :size="30"></nut-rate></span>
      </nut-cell>
    </div>

    <h4>自定义颜色</h4>
    <div>
      <nut-cell>
        <span slot="title">
          <nut-rate :checkedColor="checkedColor" v-model="val3" >
            <span class="fontcolor" slot="nut-rate-font">{{ val3 }},满意</span>
          </nut-rate>
        </span>
      </nut-cell>
    </div>

    <h4>事件</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-rate @click="onClick"></nut-rate></span>
      </nut-cell>
      <nut-cell>
        <span slot="title">结果：{{ result }}</span>
      </nut-cell>
    </div>

    <h4>自定义ICON</h4>
    <div>
      <nut-cell>
        <span slot="title"><nut-rate :checkedIcon="icon1" :uncheckedIcon="icon2"></nut-rate></span>
      </nut-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 4.5,
      val2: 2.5,
      val3:3.5,
      result: '',
      result2: '',
      checkedColor:'#FFC200',
      icon1: require('./../../assets/img/checked.png'),
      icon2: require('./../../assets/img/unchecked.png')
    };
  },

  methods: {
    onClick(idx) {
      this.result = '您点击了第' + idx + '个!';
    },
    onClick2(idx) {
      this.result2 = '您点击了第' + idx + '个!';
    }
  }
};
</script>

<style lang="scss" scoped>
.demo {
	padding-left: 0;
	padding-right: 0;
}

h4 {
	padding: 0 10px;
}

.fontcolor {
	color: #ffc200;
}
</style>
