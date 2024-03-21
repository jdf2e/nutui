import { defineComponent } from "vue";
const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
function createComponent(name) {
  const componentName = "nut-" + name;
  return {
    componentName,
    create: function(_component) {
      _component.name = "Nut" + camelize("-" + name);
      _component.install = (vue) => {
        vue.component(_component.name, _component);
      };
      return defineComponent(_component);
    }
  };
}
export {
  createComponent as c
};
