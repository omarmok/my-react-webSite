import { createContext, useContext, useMemo } from 'react';
import { translations } from './translations';

const defaultLanguage = 'en';
const experienceStartYear = 2008;
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
  const replaceVar = (match, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match;

  return value
    .replace(/{{\s*(\w+)\s*}}/g, replaceVar)
    .replace(/{(?!{)\s*(\w+)\s*}(?!})/g, replaceVar);
};

const getYearsFromStartYear = (startYear, now = new Date()) => {
  const currentYear = now.getUTCFullYear();
  return Math.max(0, currentYear - startYear);
};

const interpolateTree = (value, vars) => {
  if (typeof value === 'string') {
    return interpolate(value, vars);
  }
  if (Array.isArray(value)) {
    return value.map((item) => interpolateTree(item, vars));
  }
  if (!value || typeof value !== 'object') {
    return value;
  }
  return Object.fromEntries(
    Object.entries(value).map(([key, child]) => [key, interpolateTree(child, vars)])
  );
};

export const TranslationProvider = ({ language = defaultLanguage, children }) => {
  const baseDictionary = translations[language] || translations[defaultLanguage];
  const years = getYearsFromStartYear(experienceStartYear);
  const globalVars = useMemo(() => ({ years }), [years]);
  const dictionary = useMemo(
    () => interpolateTree(baseDictionary, globalVars),
    [baseDictionary, globalVars]
  );

  const t = useMemo(
    () => (path, vars) => {
      const mergedVars = vars ? { ...globalVars, ...vars } : globalVars;
      const currentValue = getNestedValue(dictionary, path);
      if (typeof currentValue === 'string') {
        return interpolate(currentValue, mergedVars);
      }

      const fallbackValue = getNestedValue(translations[defaultLanguage], path);
      if (typeof fallbackValue === 'string') {
        return interpolate(fallbackValue, mergedVars);
      }

      if (currentValue !== undefined) {
        return currentValue;
      }

      return path;
    },
    [dictionary, globalVars]
  );

  return (
    <TranslationContext.Provider value={{ language, dictionary, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
