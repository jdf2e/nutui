<template>
    <div>
        <h1>Ceilinglamp</h1>
        <p>页面滑动到一定距离时页面顶部展示的吸顶条，常用于导航栏和搜索条。</p>
        <nut-ceilinglamp :fixedTop="fixedTop" :fixedType = "fixedType" :arrivalEl="arrivalEl">
          <div class="ceildiv">我能自动固定到顶部</div>
        </nut-ceilinglamp>
       

        <h5>Options</h5>
        <div class="tbl-wrapper">
        滚动滚动<br/>
        滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/><br/><br/><br/>
        <div id="arrivalEl">我是坐标元素，如果我向上滚动消失了，吸顶也消失</div><br/><br/><br/>
        滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>滚动滚动<br/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
    data(){
        return{
          fixedTop:0,
          fixedType:true,
          //screenNum:1,
          arrivalEl:'#arrivalEl'
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.ceildiv{
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #f8f8f8;
  border: 1px solid #ccc;
}
</style>
