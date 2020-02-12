import { shallowMount, mount } from "@vue/test-utils";
import TabSelect from "../tabselect.vue";
import Vue from "vue";

describe("TabSelect.vue", () => {
  const wrapper = mount(TabSelect);

  it("mainTitle标题", () => {
    wrapper.setProps({ mainTitle: "配送" });
    return Vue.nextTick().then(function() {
      expect(
        wrapper
          .findAll(".nut-tabselect-main-title")
          .at(0)
          .text()
      ).toBe("配送");
    });
  });

  it("subTitle标题", () => {
    wrapper.setProps({ subTitle: "送达时间" });
    return Vue.nextTick().then(function() {
      setTimeout(() => {
        expect(
          wrapper
            .findAll(".nut-tabselect-sub-title")
            .at(0)
            .text()
        ).toBe("送达时间");
      }, 200);
    });
  });

  it("是否支持多选", () => {
    wrapper.setProps({ multiple: true });
    return Vue.nextTick().then(function() {
      setTimeout(() => {
        wrapper
          .findAll(".nut-tab-panel-list")
          .at(1)
          .trigger("click");
        wrapper
          .findAll(".nut-tab-panel-list")
          .at(2)
          .trigger("click");
        expect(
          wrapper
            .findAll(".nut-tab-panel-list")
            .at(1)
            .is(".nut-tab-panel-list-active")
        ).toBe(true);
        expect(
          wrapper
            .findAll(".nut-tab-panel-list")
            .at(2)
            .is(".nut-tab-panel-list-active")
        ).toBe(true);
      }, 200);
    });
  });

  it("是否支持单选", () => {
    wrapper.setProps({ multiple: false });
    return Vue.nextTick().then(function() {
      setTimeout(() => {
        wrapper
          .findAll(".nut-tab-panel-list")
          .at(1)
          .trigger("click");
        wrapper
          .findAll(".nut-tab-panel-list")
          .at(2)
          .trigger("click");
        expect(
          wrapper
            .findAll(".nut-tab-panel-list")
            .at(1)
            .is(".nut-tab-panel-list-active")
        ).toBe(false);
        expect(
          wrapper
            .findAll(".nut-tab-panel-list")
            .at(2)
            .is(".nut-tab-panel-list-active")
        ).toBe(true);
      }, 200);
    });
  });

  it("设置max", () => {
    wrapper.setProps({ max: 2, multiple: true });
    return Vue.nextTick().then(function() {
      setTimeout(() => {
        wrapper
          .findAll(".nut-tab-panel-list")
          .at(1)
          .trigger("click");
        wrapper
          .findAll(".nut-tab-panel-list")
          .at(2)
          .trigger("click");
        wrapper
          .findAll(".nut-tab-panel-list")
          .at(3)
          .trigger("click");
        expect(
          wrapper
            .findAll(".nut-tab-panel-list")
            .at(1)
            .is(".nut-tab-panel-list-active")
        ).toBe(true);
        expect(
          wrapper
            .findAll(".nut-tab-panel-list")
            .at(2)
            .is(".nut-tab-panel-list-active")
        ).toBe(true);
        expect(
          wrapper
            .findAll(".nut-tab-panel-list")
            .at(3)
            .is(".nut-tab-panel-list-active")
        ).toBe(false);
      }, 200);
    });
  });
});
