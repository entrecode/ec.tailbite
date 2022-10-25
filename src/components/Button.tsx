import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import tw from 'tailwind-styled-components';
import { classNames } from '../util/classNames';
import Ink from './Ink';
import Spinner from './Spinner';
import Tooly from './Tooly';

const StyledButton = tw.button<{
  $primary?: boolean;
  $secondary?: boolean;
  $danger?: boolean;
  $disabled?: boolean;
  $empty?: boolean;
}>`
inline-flex justify-center items-center
font-medium 
px-4 py-2
border
rounded-md
text-sm
${({ $primary, $secondary, $danger }) =>
  ($primary || $secondary || $danger) && 'shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'}
${({ $primary }) => $primary && 'border-transparent text-white bg-primary hover:opacity-80 focus:ring-primary'}
${({ $secondary }) =>
  $secondary &&
  '`border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-primary'}
${({ $danger }) =>
  $danger &&
  'border-transparent text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'}
${({ $empty }) => $empty && 'border-transparent dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'}
${({ $disabled }) => $disabled && 'cursor-not-allowed opacity-90 grayscale'}`;

const Button = ({
  $disabled = false,
  onClick,
  loading = false,
  children = null,
  ...props
}: {
  onClick?: (...args: any[]) => any;
  children?: React.ReactNode;
  [key: string]: any;
  loading?: boolean;
  /* $disabled?: boolean;
  $empty?: boolean;
  $primary?: boolean;
  $secondary?: boolean;
  $danger?: boolean; */
}) => (
  // @ts-ignore
  <StyledButton $disabled={$disabled} onClick={$disabled ? () => {} : onClick} {...props}>
    {children} {loading && <Spinner className="ml-3" />}
  </StyledButton>
);

Button.Action = function ActionButton({ $disabled = false, children, onClick, tooltip, placement, className }: any) {
  return (
    <Ink.Secondary className={className}>
      <Tooly label={tooltip} placement={placement}>
        <Button $disabled={$disabled} $empty onClick={onClick} className="!px-2 text-gray-500 dark:text-gray-400">
          {children}
        </Button>
      </Tooly>
    </Ink.Secondary>
  );
};

Button.Tooly = function ToolyButton({ children, onClick, tooltip, placement, className, disabled }: any) {
  return (
    <Ink.Primary className={className}>
      {tooltip?.length ? (
        <Tooly label={tooltip} placement={placement}>
          {disabled ? (
            // needed to prevent the button from being clickable
            // and make tooly still disapear when disabled
            <div className="cursor-not-allowed">
              <div className="pointer-events-none">
                <Button $empty onClick={onClick} className="!px-2">
                  {children}
                </Button>
              </div>
            </div>
          ) : (
            <Button $empty onClick={onClick} className="!px-2">
              {children}
            </Button>
          )}
        </Tooly>
      ) : (
        <Button $disabled={disabled} $empty onClick={onClick} className="!px-2">
          {children}
        </Button>
      )}
    </Ink.Primary>
  );
};

export interface ExpanderProps {
  onClick: (e: any) => void;
  active: boolean;
  tooltip?: [string, string];
  placement?: string;
}

Button.Expander = (props: ExpanderProps) => {
  const { onClick, active, tooltip = ['Ausklappen', 'Einklappen'], placement = 'right' } = props;
  const [outLabel, inLabel] = tooltip;
  return (
    <Button.Action onClick={onClick} tooltip={!active ? outLabel : inLabel} placement={placement}>
      {!active ? (
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </Button.Action>
  );
};

// this is like Button.Disclosure but without headless ui trash
Button.ToggleHeader = ({ children, onClick, open, $last, $first, className }: any) => (
  <div
    onClick={onClick}
    className={classNames(
      'flex justify-between items-center w-full px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider whitespace-nowrap text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600',
      'border-gray-200 dark:border-gray-600 cursor-pointer',
      open ? 'border-b' : '',
      !$first ? 'border-t' : 'rounded-t-md',
      $last && !open ? 'rounded-b-md' : '',
      className,
    )}
  >
    <div className="grow">{children}</div>
    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-900 dark:text-gray-200`} />
  </div>
);

Button.Disclosure = ({ children, open, $last, $first }: any) => (
  <Disclosure.Button
    className={classNames(
      'flex justify-between items-center w-full px-4 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider whitespace-nowrap text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600',
      'border-gray-200 dark:border-gray-600',
      open ? 'border-b' : '',
      !$first ? 'border-t' : 'rounded-t-md',
      $last && !open ? 'rounded-b-md' : '',
    )}
  >
    <div className="grow">{children}</div>
    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-900 dark:text-gray-200`} />
  </Disclosure.Button>
);

export default Button;

export function ButtonExample() {
  return (
    <div className="space-x-2">
      <Button $primary>primary</Button>
      <Button $secondary>secondary</Button>
      <Button $empty>empty</Button>
      <Button $danger>danger</Button>
      <Button $disabled>disabled</Button>
    </div>
  );
}
