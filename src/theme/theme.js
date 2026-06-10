export const LIGHT_THEME = "light";
export const DARK_THEME = "dark";
export const THEME_STORAGE_KEY = "site_theme";
export const THEME_META_COLOR_LIGHT = "#f2f3f5";
export const THEME_META_COLOR_DARK = "#0b0b0f";

export const isValidTheme = (value) =>
  value === LIGHT_THEME || value === DARK_THEME;

export const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isValidTheme(storedTheme) ? storedTheme : null;
};

export const resolveInitialTheme = () => getStoredTheme() ?? LIGHT_THEME;

export const applyTheme = (theme) => {
  if (typeof document === "undefined" || !isValidTheme(theme)) {
    return;
  }

  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  if (document.body) {
    document.body.dataset.theme = theme;
  }

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute(
      "content",
      theme === DARK_THEME ? THEME_META_COLOR_DARK : THEME_META_COLOR_LIGHT,
    );
  }
};

export const persistTheme = (theme) => {
  if (typeof window === "undefined" || !isValidTheme(theme)) {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
};
