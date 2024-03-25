import Locale from '@/packages/locale'
import { useLocale } from '@/packages/utils/useLocale'
export const currentLang = Locale.currentLang

export const useTranslate = <
  T1 extends {
    [key: string]: any
  },
  T2 extends T1
>(object: {
  'zh-CN': T1
  'en-US': T2
}) => {
  for (const [key, value] of Object.entries(object)) {
    Locale.merge(key, value)
  }
  return useLocale<Exclude<Extract<keyof T1, keyof T2>, number | symbol>>()
}

export const translateChange = () => {
  let href = ''
  const location = window.parent.location
  const currentLang = Locale.currentLang
  if (currentLang.value == 'zh-CN') {
    href = location.href.replace('zh-CN', 'en-US')
    Locale.use('en-US')
  } else {
    href = location.href.replace('en-US', 'zh-CN')
    Locale.use('zh-CN')
  }
  location.href = href
}

export const initSiteLang = () => {
  const lang = location.href.includes('zh-CN') ? 'zh-CN' : 'en-US'
  Locale.use(lang)
}
