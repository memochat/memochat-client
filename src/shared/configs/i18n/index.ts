import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from '@src/shared/constant/i18nResource';

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
