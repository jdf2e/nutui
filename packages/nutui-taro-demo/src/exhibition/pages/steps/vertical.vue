<template>
  <div style="height: 300px; padding: 15px 30px">
    <nut-steps direction="vertical" :current="2">
      <nut-step title="未开始" content="您的订单已经打包完成，商品已发出">1</nut-step>
      <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
      <nut-step title="已完成" content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦">3</nut-step>
    </nut-steps>
  </div>
</template>
