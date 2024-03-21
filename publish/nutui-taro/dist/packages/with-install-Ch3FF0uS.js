const withInstall = (comp) => {
  const _comp = comp;
  _comp.install = (vue) => {
    if (_comp.name) {
      vue.component(_comp.name, _comp);
    }
  };
  return _comp;
};
export {
  withInstall as w
};
