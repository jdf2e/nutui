import { h } from "vue";
const renderIcon = (icon, props) => {
  if (icon)
    return h(icon, props);
  return "";
};
export {
  renderIcon as r
};
