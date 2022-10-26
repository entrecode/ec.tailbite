import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/solid';
import { useMemo, useState } from 'react';
import Button from './Button';

const activateTheme = (theme) => {
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

const initTheme = (defaultTheme = 'light'): string => {
  const theme = localStorage.getItem('theme') || defaultTheme;
  activateTheme(theme);
  return theme;
};

function ThemeToggle({ defaultTheme = 'light', otherTheme = 'dark' }) {
  const initialTheme = useMemo(() => initTheme(defaultTheme), [defaultTheme]);
  const [theme, setTheme] = useState<string>(initialTheme);
  return (
    <Button
      $empty
      onClick={() => {
        const newTheme = theme === defaultTheme ? otherTheme : defaultTheme;
        activateTheme(newTheme);
        setTheme(newTheme);
      }}
    >
      {theme !== defaultTheme ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </Button>
  );
}
export default ThemeToggle;
