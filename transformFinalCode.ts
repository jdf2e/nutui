export const DEFAULT_Components = new Set(['scroll-view', 'picker', 'picker-view', 'picker-view-column']);

export function transformFinalCode() {
  //TODO 缺少异常处理
  return {
    name: 'transformFinalCode',
    transform(code: string, id: any) {
      let _code = code;
      DEFAULT_Components.forEach((tagName) => {
        let Reg = new RegExp(`"${tagName}"`, 'ig');
        const r = `function(){if(process.env.TARO_ENV === 'h5'){return 'taro-${tagName}'}else{return '${tagName}'}}()`;
        _code = _code.replace(Reg, r);
      });
      return _code;
    }
  };
}
