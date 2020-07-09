<template>
  <div class="demo-list-pd">
    <h4>基本用法</h4>
    <nut-timeline>
      <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
    </nut-timeline>

    <h4>轴点类型</h4>
    <nut-timeline>
      <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem pointType="hollow">
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem :pointColor="'#456700'">
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
    </nut-timeline>

    <h4>自定义轴点样式</h4>
    <nut-timeline>
      <nut-timelineitem>
        <div slot="dot">
          <svg
            t="1585579204788"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1432"
            width="20"
            height="20"
          >
            <path d="M512 512m-460.8 0a460.8 460.8 0 1 0 921.6 0 460.8 460.8 0 1 0-921.6 0Z" fill="#5AE5CA" p-id="1433"></path>
            <path
              d="M709.12 248.32c4.096-17.408-6.656-34.816-24.064-38.912-17.408-4.096-34.816 6.656-38.912 24.064s7.68 62.976 17.92 65.024c10.24 3.072 40.96-32.768 45.056-50.176zM761.856 303.616c-5.12-16.896-23.552-26.624-40.448-21.504-16.896 5.12-50.688 37.888-47.616 48.128 3.072 10.24 49.152 18.944 66.048 13.824 17.408-5.12 27.136-23.04 22.016-40.448zM686.08 365.568h-61.44l-17.92-42.496c-5.632-13.312-18.944-22.016-33.28-22.016H450.56c-14.336 0-27.648 8.704-33.28 22.016L399.36 365.568H337.92c-39.424 0-71.68 32.256-71.68 71.68v214.528c0 39.424 32.256 71.68 71.68 71.68h348.16c39.424 0 71.68-32.256 71.68-71.68V437.248c0-39.424-32.256-71.68-71.68-71.68z m-141.312 300.544c-67.072 17.92-136.192-21.504-154.624-88.576-17.92-67.072 21.504-136.192 88.576-154.624 67.072-17.92 136.192 21.504 154.624 88.576 18.432 67.072-21.504 136.192-88.576 154.624zM687.616 460.8c-13.824 0-25.088-11.264-25.088-25.088s11.264-25.088 25.088-25.088 25.088 11.264 25.088 25.088-11.264 25.088-25.088 25.088z"
              fill="#FFFFFF"
              p-id="1434"
            ></path>
            <path
              d="M417.4574 550.456345a94.716211 94.716211 0 1 0 189.023149-12.445558 94.716211 94.716211 0 1 0-189.023149 12.445558Z"
              fill="#FFFFFF"
              p-id="1435"
            ></path>
          </svg>
        </div>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem pointType="hollow">
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem :pointColor="'#456700'">
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
      <nut-timelineitem>
        <div slot="title">2020-09-18</div>
        <div class="content">您提交了订单，请等待系统确认</div>
      </nut-timelineitem>
    </nut-timeline>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
