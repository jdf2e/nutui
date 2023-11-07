import locale from '@/packages/locale';
import { getPropByPath } from '../util';

export const useLocale = (name = '') => {
  return (keyPath: string) => {
    name = name.toLocaleLowerCase();
    const languages = locale.languages();
    let text = keyPath;
    if (name && name.startsWith('nut')) {
      text = `${name.slice(3)}.${keyPath}`;
    }
    const res = getPropByPath(languages, text) || getPropByPath(languages, keyPath);
    return res;
  };
};
