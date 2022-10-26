// Components that need to be converted
export const DEFAULT_Components = new Set(['scroll-view']);
//whether to include the path to the current file
export const judgePath = (paths: string[], targetPath: string) => {
  for (let i = 0; i < paths.length; i++) {
    let reg = new RegExp(paths[i]);
    if (reg.test(targetPath)) {
      return true;
    }
  }
  return false;
};
import type { Plugin } from 'vite';
export interface transformOptions {
  exclude?: string[];
  components?: string[];
  envCondition?: string;
  include?: string[];
}
export function transformFinalCode(options: transformOptions = {}): Plugin {
  let _options: transformOptions = {
    envCondition: 'process.env.TARO_ENV',
    components: [],
    include: [],
    exclude: []
  };
  _options = Object.assign(_options, options);
  return {
    name: 'transformFinalCode',
    enforce: 'post',
    async config(config) {
      if (!_options.envCondition) {
        throw new Error('Environment variable is missing, check the envCondition field');
      }
      let _define = {};
      _define[_options.envCondition] = _options.envCondition;
      config.define = Object.assign(config.define, _define);
      return config;
    },
    transform(code: string, id: any) {
      let _code = code;
      let _components = DEFAULT_Components;
      if (_options.components && _options.components.length > 0) {
        _components = new Set(_options.components);
      }
      if (_options.exclude && _options.exclude.length !== 0 && judgePath(_options.exclude, id)) {
        return _code;
      }
      if (_options.include && _options.include.length !== 0 && !judgePath(_options.include, id)) {
        return _code;
      }
      _components.forEach((tagName) => {
        let Reg = new RegExp(`"${tagName}"`, 'ig');
        const r = `function(){if(${_options.envCondition} === 'h5'){return 'taro-${tagName}'}else{return '${tagName}'}}()`;
        _code = _code.replace(Reg, r);
      });
      return _code;
    }
  };
}
