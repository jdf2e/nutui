import { i18n } from '../../locales';

export default {
  methods: {
    nutTranslate() {
      return i18n.apply(this, arguments);
    }
  }
};
