import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources: Resource = {
  en: {
    translation: {
      hello: 'Hello',
      helloUser: 'Hello {name}',
      helloTag: '<h1>Hello</h1>',
      helloLineBreak: 'hello\nhi',
    },
  },
  ko: {
    translation: {
      hello: '안녕',
      helloUser: '안녕 {{name}}',
      helloTag: '<h1>안녕</h1>',
      helloLineBreak: '안녕\n안뇽',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
