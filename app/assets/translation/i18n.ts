import { I18n } from 'i18n-js';

import ar from './ar.json';
import en from './en.json';

const i18n = new I18n();

i18n.translations = {
  ar,
  en,
};

i18n.defaultLocale = 'en';
i18n.locale = 'en';

i18n.enableFallback = true;

export const setI18nConfig = () => {
  i18n.locale = 'en';
};

export const getCurrentLanguage = () => i18n.locale;

export const isRTL = () => i18n.locale === 'ar';

export const changeLanguage = (language?: 'ar' | 'en') => {
  if (language) {
    i18n.locale = language;
  } else {
    i18n.locale = i18n.locale === 'en' ? 'ar' : 'en';
  }
};

export default i18n;
