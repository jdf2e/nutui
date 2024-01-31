<template>
  <nut-side-navbar>
    <nut-side-navbar-item title="人脸识别"></nut-side-navbar-item>
    <nut-side-navbar-item title="自然语言处理"></nut-side-navbar-item>
    <nut-sub-side-navbar title="图像理解" :open="false">
      <nut-side-navbar-item title="菜品识别"></nut-side-navbar-item>
      <nut-side-navbar-item title="拍照购"></nut-side-navbar-item>
    </nut-sub-side-navbar>
    <nut-sub-side-navbar title="智能城市AI">
      <nut-side-navbar-item title="企业风险预警模型"></nut-side-navbar-item>
      <nut-side-navbar-item title="水质量检测"></nut-side-navbar-item>
      <nut-sub-side-navbar title="人体识别">
        <nut-side-navbar-item title="人体检测"></nut-side-navbar-item>
        <nut-side-navbar-item title="细粒度人像分割"></nut-side-navbar-item>
      </nut-sub-side-navbar>
    </nut-sub-side-navbar>
    <nut-sub-side-navbar title="自然语言处理">
      <nut-side-navbar-item title="词法分析"></nut-side-navbar-item>
      <nut-side-navbar-item title="句法分析"></nut-side-navbar-item>
    </nut-sub-side-navbar>
  </nut-side-navbar>
</template>
