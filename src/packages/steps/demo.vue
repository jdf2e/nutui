<template>
  <div>
    <h4>正常流程</h4>
    <nut-steps :current="current">
      <nut-step title="已完成" content></nut-step>
      <nut-step title content="这里是该步骤的描述信息"></nut-step>
      <nut-step title="进行中" content="这里是该步骤的描述信息"></nut-step>
      <nut-step title="待进行" content="这里是该步骤的描述信息"></nut-step>
      <nut-step title="待进行" content="这里是该步骤的描述信息"></nut-step>
    </nut-steps>
    <h4>流程终止</h4>
    <nut-steps :current="current" status="error">
      <nut-step title="已完成" content="这里是该步骤的描述信息"></nut-step>
      <nut-step title="已完成" content="这里是该步骤的描述信息"></nut-step>
      <nut-step title="进行中" content="这里是该步骤的描述信息"></nut-step>
      <nut-step title="待进行" content="这里是该步骤的描述信息"></nut-step>
      <nut-step title="待进行" content="这里是该步骤的描述信息"></nut-step>
    </nut-steps>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      current: 3
    };
  },
  methods: {
    next() {
      this.current = this.current + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.nut-steps {
  margin-left: 10px;
}
.next-step {
  text-align: center;
  line-height: 30px;
  color: #ffffff;
  background: #2d8cf0;
  border-radius: 3px;
}
</style>
