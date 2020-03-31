import { shallowMount, mount } from "@vue/test-utils";
import TabSelect from "../tabselect.vue";
import Vue from "vue";

describe("TabSelect.vue", () => {
  const wrapper = mount(TabSelect, {
    propsData: {
      mainTitle: "配送测试",
      subTitle: "送达时间测试",
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
          tabTitle: "京东快递测试",
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
      show: true,
      multiple: false,
      isDefaultSelected: false,
      max: 2
    }
  });

  it("mainTitle标题", () => {
    return Vue.nextTick().then(function() {
      expect(
        wrapper
          .findAll(".nut-tabselect-main-title")
          .at(0)
          .text()
      ).toBe("配送测试");
    });
  });

  it("subTitle标题", () => {
    return Vue.nextTick().then(function() {
      expect(
        wrapper
          .findAll(".nut-tabselect-sub-title")
          .at(0)
          .text()
      ).toBe("送达时间测试");
      //   expect(wrapper.html()).toContain(
      //     '<div class="nut-tabselect-main-title">送达时间测试</div>'
      //   );
    });
  });

  it("defaultContent默认内容", () => {
    return Vue.nextTick().then(function() {
      expect(
        wrapper
          .findAll(".nut-tab-panel-list")
          .at(0)
          .text()
      ).toBe("11:00——12:00");
    });
  });

  it("是否支持单选", () => {
    wrapper
      .findAll(".nut-tab-panel-list")
      .at(1)
      .trigger("click");
    wrapper
      .findAll(".nut-tab-panel-list")
      .at(2)
      .trigger("click");
    return Vue.nextTick().then(function() {
      expect(wrapper.findAll(".nut-tab-panel-list-active").length).toBe(1);
    });
  });

  it("是否支持多选", () => {
    wrapper.setProps({ multiple: true });
    wrapper
      .findAll(".nut-tab-panel-list")
      .at(1)
      .trigger("click");
    return Vue.nextTick().then(function() {
      expect(wrapper.findAll(".nut-tab-panel-list-active").length).toBe(2);
    });
  });

  it("设置max", () => {
    wrapper
      .findAll(".nut-tab-panel-list")
      .at(3)
      .trigger("click");
    wrapper
      .findAll(".nut-tab-panel-list")
      .at(4)
      .trigger("click");
    return Vue.nextTick().then(function() {
      expect(wrapper.findAll(".nut-tab-panel-list-active").length).toBe(2);
    });
  });

  it("tabList整体数据", () => {
    return Vue.nextTick().then(function() {
      expect(
        wrapper
          .findAll(".nut-title-nav")
          .at(0)
          .text()
      ).toBe("京东快递测试");
    });
  });

  it("设置show", () => {
    wrapper.setProps({ show: true });
    return Vue.nextTick().then(function() {
      expect(
        wrapper
          .findAll(".popup-box")
          .at(0)
          .attributes("display")
      ).toBe(undefined);
    });
  });

  it("设置isDefaultSelected", () => {
    wrapper.setProps({ isDefaultSelected: true });
    return Vue.nextTick().then(function() {
      expect(wrapper.contains(".nut-tab-panel-list-active")).toBe(true);
    });
  });
});
