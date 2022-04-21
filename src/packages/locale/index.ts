import { ref, reactive } from 'vue';
import ZhCNLang from './lang/zh-CN';
import EnUSLang from './lang/en-US';
import { deepMerge } from '../utils/util';
// 组件默认语言设置

export type Lang = Record<string, any>;
const langs = reactive<Lang>({
  'zh-CN': new ZhCNLang(),
  'en-US': new EnUSLang()
});
export class Locale {
  static currentLang = ref('zh-CN');
  static languages(): Lang {
    return langs[this.currentLang.value];
  }
  static use(lang: string, newLanguages?: any) {
    if (newLanguages) {
      langs[lang] = new newLanguages();
    }
    this.currentLang.value = lang;
  }
  static merge(lang: string, newLanguages: any) {
    if (newLanguages) {
      if (langs[lang]) {
        deepMerge(langs[lang], newLanguages);
      } else {
        this.use(lang, newLanguages);
      }
    }
  }
}
export default Locale;
