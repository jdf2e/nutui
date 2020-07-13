<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <nut-steps>
      <nut-step title="已签收" content="您的订单已由本人签收。如有疑问您可以联系配送员，感谢您在京东购物。" time="2020-03-03 11:09:96">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('../../assets/svg/finish.svg')"></nut-icon>
        </template>
      </nut-step>
      <nut-step title="运输中" content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('../../assets/svg/processed.svg')"></nut-icon>
        </template>
      </nut-step>
      <nut-step content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
      <nut-step content="您的订单由京东【北京顺义分拣中心】送往【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
      <nut-step title="已下单" content="您提交了订单，请等待系统确认" time="2020-03-03 11:09:06">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('../../assets/svg/processed.svg')"></nut-icon>
        </template>
      </nut-step>
    </nut-steps>
    <h4>迷你样式</h4>
    <nut-steps type="mini">
      <nut-step title="已签收" content="您的订单已由本人签收。如有疑问您可以联系配送员，感谢您在京东购物。" time="2020-03-03 11:09:96"></nut-step>
      <nut-step title="运输中" content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
      <nut-step content="您的订单已达到京东【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
      <nut-step content="您的订单由京东【北京顺义分拣中心】送往【北京旧宫营业部】" time="2020-03-03 11:09:06"></nut-step>
      <nut-step title="已下单" content="您提交了订单，请等待系统确认" time="2020-03-03 11:09:06"></nut-step>
    </nut-steps>
    <h4>时间前置</h4>
    <nut-steps :time-forward="true">
      <nut-step title="已签收" content="您的订单已由本人签收。如有疑问您可以联系配送员，感谢您在京东购物。" time="03-03 11:09">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('../../assets/svg/finish.svg')"></nut-icon>
        </template>
      </nut-step>
      <nut-step title="运输中" content="您的订单已达到京东【北京旧宫营业部】" time="03-03 11:09">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('../../assets/svg/processed.svg')"></nut-icon>
        </template>
      </nut-step>
      <nut-step content="您的订单已达到京东【北京旧宫营业部】" time="03-03 11:09"></nut-step>
      <nut-step content="您的订单由京东【北京顺义分拣中心】送往【北京旧宫营业部】" time="03-03 11:09"></nut-step>
      <nut-step title="已下单" content="您提交了订单，请等待系统确认" time="03-03 11:09"></nut-step>
    </nut-steps>
    <h4>横向步骤条</h4>
    <nut-steps :current="1" type="process" direction="horizontal">
      <nut-step title="已完成"></nut-step>
      <nut-step title="进行中">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('../../assets/svg/process.svg')"></nut-icon>
        </template>
      </nut-step>
      <nut-step title="等待中"></nut-step>
    </nut-steps>
    <nut-steps :current="1" type="process" direction="horizontal">
      <nut-step title="已完成" content="这里是描述文字"></nut-step>
      <nut-step title="进行中" content="这里是描述文字">
        <template v-slot:status-icon>
          <nut-icon type="self" :url="require('../../assets/svg/process.svg')"></nut-icon>
        </template>
      </nut-step>
      <nut-step title="等待中" content="这里是描述文字"></nut-step>
    </nut-steps>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nut-steps {
  margin-left: 0 10px;
}

.next-step {
  text-align: center;
  line-height: 30px;
  color: #fff;
  background: #2d8cf0;
  border-radius: 3px;
}
</style>
