import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/solid';
import Button from './Button';
import { useTailbite } from './Tailbite';

function DarkToggle() {
  const { theme, setTheme } = useTailbite();
  return (
    <Button
      $empty
      onClick={() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme!(newTheme);
      }}
    >
      {theme !== 'light' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </Button>
  );
}
export default DarkToggle;
