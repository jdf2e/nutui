<template>
    <div class="demo-list">
        <h4>基本用法</h4>
        <div>
            <nut-cell>
                <span slot="title">
                <nut-range 
                    :rangeValues.sync="val1" 
                    :range="[-93,322]" 
                    :showLabel="true"></nut-range></span>
            </nut-cell>
            <nut-cell>
                    <span slot="title">{{val1[0]}},{{val1[1]}}</span>
            </nut-cell>
        </div>
        
        <h4>修改主题风格</h4>
        <div>
            <nut-cell>
                <span slot="title">
                <nut-range 
                    color="#31ccec"
                    :rangeValues.sync="val2" 
                    :range="[0,200]" 
                    :showLabel="true"></nut-range></span>
            </nut-cell>
            <nut-cell>
                    <span slot="title">{{val2[0]}},{{val2[1]}}</span>
            </nut-cell>
        </div>
        
        <h4>显示标签文字</h4>
        <div>
            <nut-cell>
                <span slot="title">
                <nut-range 
                    color="#31ccec"
                    :rangeValues.sync="val3" 
                    :range="[-10,10]" 
                    :showLabelAlways="true" 
                    :showLabel="true"
                    :showRangeTxt="true"></nut-range></span>
            </nut-cell>
            <nut-cell>
                    <span slot="title">{{val3[0]}},{{val3[1]}}</span>
            </nut-cell>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      val1: [-52, 120],
      val2: [0, 120],
      val3: [5, 5]
    };
  },
  methods: {}
};
</script>

