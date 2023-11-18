import Locale from '@/packages/locale';
import { useLocale } from '@/packages/utils/useLocale';
export const currentLang = Locale.currentLang;
// @type-challenges
type TupleToUnion<T extends any[]> = T[number];
export const useTranslate = <T extends string[]>(object: {
  'zh-CN': {
    [key in TupleToUnion<T>]: string | string[] | Function;
  };
  'en-US': {
    [key in TupleToUnion<T>]: string | string[] | Function;
  };
}) => {
  for (const [key, value] of Object.entries(object)) {
    Locale.merge(key, value);
  }
  return useLocale<TupleToUnion<T>>();
};

export const translateChange = () => {
  let href = '';
  let location = window.parent.location;
  let currentLang = Locale.currentLang;
  if (currentLang.value == 'zh-CN') {
    href = location.href.replace('zh-CN', 'en-US');
    Locale.use('en-US');
  } else {
    href = location.href.replace('en-US', 'zh-CN');
    Locale.use('zh-CN');
  }
  location.href = href;
};

export const initSiteLang = () => {
  const lang = location.href.includes('zh-CN') ? 'zh-CN' : 'en-US';
  Locale.use(lang);
};
