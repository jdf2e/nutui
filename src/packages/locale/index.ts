import { ref, reactive } from 'vue';
import ZhCNLang from './lang/zh-CN';
import EnUSLang from './lang/en-US';
// 组件默认语言设置
const currentLang = ref('zh-CN');
export type Lang = Record<string, any>;
const langs = reactive<Lang>({
  'zh-CN': new ZhCNLang(),
  'en-US': new EnUSLang()
});
export class Locale {
  static languages(): Lang {
    return langs[currentLang.value];
  }
  static use(lang: string, newLanguages?: any) {
    if (newLanguages) {
      langs[lang] = new newLanguages();
    }
    currentLang.value = lang;
  }
}
export default Locale;
