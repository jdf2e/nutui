<template>
    <div>
      <nut-timeline>
        <nut-timelineitem>
          <div slot="dot">
            <nut-icon 
              type="trolley" 
              color="#f0250f"
              size="8px"
            >
            </nut-icon>
          </div>
          <div slot="title">2020-09-18</div>
          <div class="content">您提交了订单，请等待系统确认</div>
        </nut-timelineitem>
        <nut-timelineitem pointType="hollow">
          <div>您提交了订单，请等待系统确认</div>
        </nut-timelineitem>
        <nut-timelineitem :pointColor="'#456700'">
          <div class="content"> 您提交了订单，请等待系统确认</div>
        </nut-timelineitem>
        <nut-timelineitem>
          <div class="content">您提交了订单，请等待系统确认</div>
        </nut-timelineitem>
      </nut-timeline>
    </div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {};
  },
  methods: {
      
  }
};
</script>

<style lang="scss" scoped>
.content{
  padding-bottom: 20px;
}
</style>
