// import { shallowMount } from "@vue/test-utils";
// import Drag from "../Drag.vue";
// import Vue from "vue";

// describe("Drag.vue", () => {
//   const wrapper = shallowMount(Drag, {});
//   it("设置x轴拖拽方向", () => {
//     wrapper.setProps({
//       direction: "x",
//     });

//     return Vue.nextTick().then(function() {
//       expect(wrapper.find(".nut-drag").isVisible()).toBe(true);
//     });
//   });

//   it("设置y轴拖拽方向", () => {
//     wrapper.setProps({
//       direction: "y",
//     });

//     return Vue.nextTick().then(function() {
//       expect(wrapper.find(".nut-drag").isVisible()).toBe(true);
//     });
//   });

//   it("设置自动吸边", () => {
//     wrapper.setProps({
//       attract: true,
//     });

//     return Vue.nextTick().then(function() {
//       expect(wrapper.find(".nut-drag").isVisible()).toBe(true);
//     });
//   });

//   it("设置拖拽边界", () => {
//     wrapper.setProps({
//       boundary: {
//         top: 401,
//         left: 9,
//         bottom: document.documentElement.clientHeight - 601,
//         right: document.documentElement.clientWidth - 300 - 9,
//       },
//     });

//     return Vue.nextTick().then(function() {
//       expect(wrapper.find(".nut-drag").isVisible()).toBe(true);
//     });
//   });
// });
