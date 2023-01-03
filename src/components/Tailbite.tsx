import React, { createContext, useContext, useMemo, useState } from 'react';
import { hexContrastColor } from '../util/color';

declare interface ColorConfig {
  dark?: boolean;
  primary?: string;
  primaryContrast?: string;
  secondary?: string;
  accent?: string;
  text?: string;
  darkText?: string;
  bg?: string;
  darkBg?: string;
}

function getStyles(colors, isDark) {
  const variables = {
    'color-primary': colors.primary,
    'color-primary-contrast': colors.primaryContrast || hexContrastColor(colors.primary),
    'color-secondary': colors.secondary,
    'color-secondary-contrast': colors.secondaryContrast || hexContrastColor(colors.secondary),
    'color-accent': colors.accent,
    'color-bg': isDark ? colors.darkBg || '#111827' : colors.bg || 'white',
    'color-text': isDark ? colors.darkText || '#f3f4f6' : colors.text || '#111827',
  };
  return `* { ${Object.entries(variables)
    .filter(([_, v]) => !!v)
    .map(([variable, value]) => `--${variable}: ${value};`)
    .join('')}
    color: var(--color-text);
  }
  body {
    background-color: var(--color-bg);
  }`;
}

declare interface TailbiteEnvironment {
  env?: 'live' | 'stage';
  shortID?: string;
  accountServerUrl?: string; // see PasswortReset
  clubappApiUrl?: string; // see useClubappAPI
  theme?: string;
  colors?: ColorConfig;
  setTheme?: (theme: string) => void;
}

export const TailbiteEnvironmentContext = createContext<TailbiteEnvironment>({
  env: 'stage',
  shortID: 'MISSING',
  colors: {
    primary: '#efefef',
  },
} as TailbiteEnvironment);

function Tailbite({ children, environment }: React.PropsWithChildren<{ environment: TailbiteEnvironment }>) {
  if (!environment) {
    console.error('no environment passed to Tailbite component');
    return <></>;
  }
  let { colors } = environment;
  const initialTheme = useMemo(() => initTheme(), [colors]);
  const [theme, setTheme] = useState<string>(initialTheme);
  const isDark = theme === 'dark';
  const styles = getStyles(colors, isDark);
  return (
    <TailbiteEnvironmentContext.Provider
      value={{
        ...environment,
        colors,
        theme,
        setTheme: (t) => {
          setTheme(t);
          activateTheme(t);
        },
      }}
    >
      <style>{styles}</style>
      {children}
    </TailbiteEnvironmentContext.Provider>
  );
}

export function useTailbite() {
  return useContext(TailbiteEnvironmentContext);
}

export default Tailbite;

export const activateTheme = (theme) => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  body!.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme.includes('dark')) {
    html!.classList.add('dark');
  } else {
    html!.classList.remove('dark');
  }
};

export const initTheme = (defaultTheme = 'light'): string => {
  const theme = localStorage.getItem('theme') || defaultTheme;
  activateTheme(theme);
  return theme;
};
