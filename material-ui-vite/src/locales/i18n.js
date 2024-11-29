import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import ko from "./ko";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko", // 기본 언어는 한국어로 설정
  keySeparator: false,
  interpolation: {
    escapeValue: false, // React는 XSS 공격을 방지하므로 이 설정은 false로 설정
  },
});

export default i18n;
