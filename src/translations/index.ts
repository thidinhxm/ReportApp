import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as resources from './resources';
import { store } from '../store'
const ns = Object.keys(Object.values(resources)[0]);
export const defaultNS = ns[0];

i18n.use(initReactI18next).init({
  ns,
  defaultNS,
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    ),
  },
  lng: store.getState().language,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  compatibilityJSON: 'v3',
});

export default i18n;
