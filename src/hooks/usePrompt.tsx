import React, { useRef, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const Context = React.createContext({} as any);

export default function usePrompt() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const userResolved = useRef<any>(null);
  const userRejected = useRef<any>(null);

  async function promptUser(message: string) {
    setPrompt(message);
    return new Promise<string>((resolve, reject) => {
      userResolved.current = resolve;
      userRejected.current = reject;
    });
  }

  const Prompt = () => {
    const { prompt, setPrompt, result, setResult, userResolved } = React.useContext(Context);

    if (!prompt) return null;
    return (
      <div
        ref={(me) => (me ? (me.style.left = `calc(50vw - ${me.getBoundingClientRect().width / 2}px )`) : null)}
        className="fixed top-[12vh] z-50 left-[50vw] min-w-[320px] rounded-md shadow-md bg-white dark:bg-gray-600 p-6 "
      >
        <div>
          <p className="text-sm mb-3 dark:text-white">{prompt}</p>
          <Input
            ref={(me) => me?.focus()}
            type="text"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                userResolved.current?.(result);
                setPrompt(null);
                setResult(null);
              }
            }}
          />
          <div className="flex gap-3 mt-3 justify-end">
            <Button
              $empty
              onClick={() => {
                userRejected.current?.('');
                setPrompt(null);
                setResult(null);
              }}
            >
              Abbrechen
            </Button>
            <Button
              $primary
              onClick={() => {
                userResolved.current?.(result);
                setPrompt(null);
                setResult(null);
              }}
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return {
    promptUser,
    PromptProvider: () => (
      <Context.Provider value={{ prompt, setPrompt, result, setResult, userResolved }}>
        <Prompt />
      </Context.Provider>
    ),
  };
}
