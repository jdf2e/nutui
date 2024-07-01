const nutFunctions = ["showToast", "showNotify", "showDialog", "showImagePreview"];
function getNutResolved(name, options) {
  const { taro = false, autoImport = false } = options;
  const packageName = taro ? "@nutui/nutui-taro" : "@nutui/nutui";
  const componentName = autoImport ? name.slice(4) : name;
  const style = `${packageName}/dist/packages/${componentName.toLowerCase()}/style`;
  return {
    name,
    from: packageName,
    sideEffects: style
  };
}
function NutUIResolver(options = {}) {
  return {
    type: "component",
    resolve: (name) => {
      const { autoImport = false } = options;
      if (autoImport && nutFunctions.includes(name)) return getNutResolved(name, options);
      if (name.startsWith("Nut")) return getNutResolved(name.slice(3), options);
    }
  };
}
export {
  NutUIResolver as default
};
