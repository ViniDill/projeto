import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import ptBrTranslations from "../Translations/ptBr";

i18next.use(initReactI18next).init({
  resources: { ptBr: { translation: { ...ptBrTranslations } } },
  lng: "ptBr",
});
