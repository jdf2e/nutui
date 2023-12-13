<template>
  <nut-row type="flex" wrap="nowrap">
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="center">
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="end">
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-between">
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-around">
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-evenly">
    <nut-col :span="6">
      <div class="content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="content light">span:6</div>
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
