import { ref, reactive } from 'vue';
import lang from './lang/zh-CN';
import defaultLang from './lang/zh-CN';
import enUSLang from './lang/en-US';
const currentLang = ref('en-US');

type lang = Record<string, any>;
const langs = reactive<lang>({
  'zh-CN': defaultLang,
  'en-US': enUSLang
});
export class Locale {
  static languages(): lang {
    return langs[currentLang.value];
  }
  static use(lang: string) {
    currentLang.value = lang;
  }
}
export default Locale;
