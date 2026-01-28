import { createContext, useContext, useMemo } from 'react';
import { translations } from './translations';

const defaultLanguage = 'en';
const TranslationContext = createContext({
  language: defaultLanguage,
  dictionary: translations[defaultLanguage],
  t: (path) => path
});

const getNestedValue = (root, path) => {
  if (!root || !path) {
    return undefined;
  }

  const keys = typeof path === 'string' ? path.split('.') : path;
  return keys.reduce((acc, key) => {
    if (acc === undefined || acc === null) {
      return undefined;
    }
    return acc[key];
  }, root);
};

const interpolate = (value, vars) => {
  if (typeof value !== 'string' || !vars) {
    return value;
  }
  return value.replace(/{{\s*(\w+)\s*}}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : _
  );
};

export const TranslationProvider = ({ language = defaultLanguage, children }) => {
  const dictionary = translations[language] || translations[defaultLanguage];

  const t = useMemo(
    () => (path, vars) => {
      const currentValue = getNestedValue(dictionary, path);
      if (typeof currentValue === 'string') {
        return interpolate(currentValue, vars);
      }

      const fallbackValue = getNestedValue(translations[defaultLanguage], path);
      if (typeof fallbackValue === 'string') {
        return interpolate(fallbackValue, vars);
      }

      if (currentValue !== undefined) {
        return currentValue;
      }

      return path;
    },
    [dictionary]
  );

  return (
    <TranslationContext.Provider value={{ language, dictionary, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
