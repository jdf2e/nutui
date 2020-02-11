<template>
  <div>
    <nut-cell
      isLink
      title="展示单选弹出层"
      :showIcon="true"
      @click.native="show = true"
    >
    </nut-cell>
    <nut-tabselect
      :mainTitle="mainTitle"
      :subTitle="subTitle"
      :defaultContent="defaultContent"
      :tabList="tabList"
      :show="show"
      @close="show = false"
      @choose="choose"
      :multiple="false"
    ></nut-tabselect>

    <nut-cell
      isLink
      title="展示多选弹出层"
      :showIcon="true"
      @click.native="showMore = true"
    >
    </nut-cell>
    <nut-tabselect
      :mainTitle="mainTitle"
      :subTitle="subTitle"
      :defaultContent="defaultContent"
      :tabList="tabList"
      :show="showMore"
      @close="showMore = false"
      @choose="choose"
      :multiple="true"
      :max="3"
    ></nut-tabselect>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      mainTitle: "配送",
      subTitle: "送达时间",
      defaultContent: [
        "9:00——10:00",
        "10:00——11:00",
        "11:00——12:00",
        "12:00——13:00",
        "13:00——15:00",
        "15:00——17:00",
        "17:00——19:00"
      ],
      tabList: [
        {
          tabTitle: "京东快递",
          children: [
            {
              tabTitle: "1月13日 (星期一)",
              content: [
                "11:00——12:00",
                "12:00——13:00",
                "13:00——15:00",
                "15:00——17:00",
                "17:00——19:00"
              ]
            },
            {
              tabTitle: "1月14日 (星期二)"
            },
            {
              tabTitle: "1月15日 (星期三)"
            },
            {
              tabTitle: "1月16日 (星期四)"
            },
            {
              tabTitle: "1月17日 (星期五)"
            },
            {
              tabTitle: "1月18日 (星期六)"
            },
            {
              tabTitle: "1月19日 (星期天)"
            }
          ]
        },
        {
          tabTitle: "上门自提",
          children: [
            {
              tabTitle: "2月13日 (星期一)",
              content: ["13:00——15:00", "15:00——17:00", "17:00——19:00"]
            },
            {
              tabTitle: "2月14日 (星期二)"
            },
            {
              tabTitle: "2月15日 (星期三)"
            },
            {
              tabTitle: "2月16日 (星期四)"
            },
            {
              tabTitle: "2月17日 (星期五)"
            },
            {
              tabTitle: "2月18日 (星期六)"
            },
            {
              tabTitle: "2月19日 (星期天)"
            }
          ]
        }
      ],
      show: false,
      showMore: false
    };
  },
  methods: {
    choose(title, item) {
      console.log(title, item);
    }
  }
};
</script>

<style lang="scss" scoped></style>
