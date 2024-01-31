<template>
  <nut-row :gutter="10">
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
