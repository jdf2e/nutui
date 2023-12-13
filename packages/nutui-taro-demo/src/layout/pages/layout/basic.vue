<template>
  <nut-row>
    <nut-col :span="24">
      <div class="content">span:24</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="12">
      <div class="content">span:12</div>
    </nut-col>
    <nut-col :span="12">
      <div class="content light">span:12</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="8">
      <div class="content">span:8</div>
    </nut-col>
    <nut-col :span="8">
      <div class="content light">span:8</div>
    </nut-col>
    <nut-col :span="8">
      <div class="content">span:8</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
  </nut-row>
</template>
<style>
.content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  margin-bottom: 10px;
}
.light {
  background: #ffc7c4;
}
</style>
