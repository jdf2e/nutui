import Locale from '@/packages/locale';
export const currentLang = Locale.currentLang;
export const useTranslate = (object: Record<string, any>) => {
  for (const [key, value] of Object.entries(object)) {
    Locale.merge(key, value);
  }
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
  let lang = Locale.currentLang.value;
  location.href = location.href.replace('zh-CN', lang).replace('en-US', lang);
};
