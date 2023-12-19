import locale from '@/packages/locale';
import { getPropByPath, isFunction } from '../util';

export const useLocale = <T extends string>(name = '') => {
  return (keyPath: T, ...args: unknown[]) => {
    name = name.toLocaleLowerCase();
    const languages = locale.languages();
    let text: string = keyPath;
    if (name && name.startsWith('nut')) {
      text = `${name.slice(3)}.${keyPath}`;
    }
    const res = getPropByPath(languages, text) || getPropByPath(languages, keyPath);
    return isFunction(res) ? res(...args) : res;
  };
};
