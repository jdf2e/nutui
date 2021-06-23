<template>
  <div class="demo full">
    <h2>基础布局</h2>
    <div class="box-item">
      <nut-row>
        <nut-col :span="24">
          <div class="flex-content">span:24</div>
        </nut-col>
      </nut-row>
      <nut-row>
        <nut-col :span="12">
          <div class="flex-content">span:12</div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-light">span:12</div>
        </nut-col>
      </nut-row>
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
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
      </nut-row>
    </div>
    <h2>分栏间隔</h2>
    <div class="box-item">
      <nut-row :gutter="10">
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
    <h2>Flex布局</h2>
    <div class="box-item">
      <nut-row type="flex" wrap="nowrap">
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
      </nut-row>
      <nut-row type="flex" justify="center">
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
      </nut-row>
      <nut-row type="flex" justify="end">
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
      </nut-row>
      <nut-row type="flex" justify="space-between">
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
      </nut-row>
      <nut-row type="flex" justify="space-around">
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content flex-content-light">span:6</div>
        </nut-col>
        <nut-col :span="6">
          <div class="flex-content">span:6</div>
        </nut-col>
      </nut-row>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.box-item {
  background: #fff;
  margin-bottom: 20px;
  padding: 20px 0;
}
.demo .nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
