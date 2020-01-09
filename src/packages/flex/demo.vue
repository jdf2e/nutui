<template>
  <div>
    <h4>基础布局</h4>
    <div class="box-item">
      <nut-row>
        <nut-col :span="12">
          <div class="flex-content">span:12</div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row>
        <nut-col :span="8">
          <div class="flex-content">span:8</div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
        </nut-col>
        <nut-col :span="8">
          <div class="flex-content">span:8</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="myValue">
          <div class="flex-content flex-content-light">span:{{myValue}}</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row>
        <nut-col :span="4">
          <div class="flex-content">span:4</div>
        </nut-col>
        <nut-col :span="4">
          <div class="flex-content flex-content-light">span:4</div>
        </nut-col>
        <nut-col :span="4">
          <div class="flex-content">span:4</div>
        </nut-col>
        <nut-col :span="4">
          <div class="flex-content flex-content-light">span:4</div>
        </nut-col>
        <nut-col :span="4">
          <div class="flex-content">span:4</div>
        </nut-col>
        <nut-col :span="4">
          <div class="flex-content flex-content-light">span:4</div>
        </nut-col>
      </nut-row>
    </div>
    <h4>设置元素间距</h4>
    <div class="box-item">
      <nut-row :gutter="10">
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
      </nut-row>
    </div>
    <h4>Flex布局</h4>
    <h6>wrap（是否换行）</h6>
    <div class="box-item">
      <nut-row type="flex" flexWrap="nowrap" :gutter="10">
        <nut-col :span="6">
          <div class="flex-content">1</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">2</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">3</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">4</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">5</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">7</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex" flexWrap="wrap" :gutter="10">
        <nut-col :span="6">
          <div class="flex-content">1</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">2</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">3</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">4</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">5</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">7</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex" flexWrap="reverse" :gutter="10">
        <nut-col :span="6">
          <div class="flex-content">1</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">2</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">3</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">4</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">5</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">7</div>
        </nut-col>
      </nut-row>
    </div>
    <h6>justify（主轴方向）</h6>
    <div class="box-item">
      <nut-row type="flex">
        <nut-col :span="6">
          <div class="flex-content">start</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">start</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">start</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex" justify="center">
        <nut-col :span="6">
          <div class="flex-content">center</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">center</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">center</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex" justify="end">
        <nut-col :span="6">
          <div class="flex-content">end</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">end</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">end</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex" justify="space-between">
        <nut-col :span="6">
          <div class="flex-content">between</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">between</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">between</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex" justify="space-around">
        <nut-col :span="6">
          <div class="flex-content">around</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">around</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">around</div>
        </nut-col>
      </nut-row>
    </div>
    <h6>align（侧轴方向）</h6>
    <div class="box-item">
      <nut-row type="flex" gutter="10" align="flex-start">
        <nut-col :span="6">
          <div class="flex-content flex-content-height">1</div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-light">顶部对齐 - flex-start</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-height">3</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex" gutter="10" align="center">
        <nut-col :span="6">
          <div class="flex-content flex-content-height">1</div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-light">居中对齐 - center</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-height">3</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex" gutter="10" align="flex-end">
        <nut-col :span="6">
          <div class="flex-content flex-content-height">1</div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-light">底部对齐 - flex-end</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-height">3</div>
        </nut-col>
      </nut-row>
    </div>
    <h4>分栏偏移</h4>
    <div class="box-item">
      <nut-row type="flex">
        <nut-col :offset="6" span="6">
          <div class="flex-content">offset:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex">
        <nut-col span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :offset="8" :span="6">
          <div class="flex-content flex-content-light">offset:8</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
      </nut-row>
    </div>
    <div class="box-item">
      <nut-row type="flex">
        <nut-col span="6" :offset="6">
          <div class="flex-content">offset:6</div>
        </nut-col>
        <nut-col :span="6" :offset="6">
          <div class="flex-content">offset:6</div>
        </nut-col>
      </nut-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          myValue:4
      };
  },
  methods:{
    text(){
      this.myValue++;
    }
  }
};
</script>

<style lang="scss" scoped>
.box-item {
  background: #fff;
  margin-bottom: 20px;
  padding: 20px 20px 10px;
  border: 1px solid #ddd;
}
.demo .nut-col {
  margin-bottom: 10px;
}
.flex-content {
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: #78a4f4;
  &.flex-content-light {
    background: #93b6f6;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
