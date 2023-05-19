import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from '@src/shared/constants/i18nResource';

void i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
