const THEME_KEY = 'theme';

export const getTheme = (): string => {
  return localStorage.getItem(THEME_KEY) || 'light';
};

export const setTheme = (theme: string): void => {
  localStorage.setItem(THEME_KEY, theme);
};
