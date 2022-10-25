import { classNames } from '../util/classNames';
import Ink from './Ink';
import Tooly from './Tooly';
import IXO from '../../public/assets/IXO.svg';

function Ixo(props) {
  const { icon, className, children, iconClass } = props;

  return (
    <div className={classNames('inline-flex', children ? 'inline-flex space-x-1 items-center' : '', className)}>
      <Ixo.Icon icon={icon} className={iconClass} />
      {children && <div>{children}</div>}
    </div>
  );
}

Ixo.Toggle = ({
  icon,
  tooltip,
  placement,
  value,
  onClick,
}: {
  icon: string;
  tooltip?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  value: boolean;
  onClick: () => void;
}) => {
  const body = (
    <Tooly label={tooltip || ''} placement={placement}>
      <Ixo.Icon icon={icon} className="w-6 h-6" />
    </Tooly>
  );
  if (!!value) {
    return (
      <Ink.Primary className="cursor-pointer" onClick={onClick}>
        {body}
      </Ink.Primary>
    );
  }
  return (
    <Ink.Light className="cursor-pointer" onClick={onClick}>
      {body}
    </Ink.Light>
  );
};

// pulled out for being able to override width and height
Ixo.Icon = (props) => {
  const { icon, className } = props;
  return (
    <div className={classNames('w-4 h-4', className)}>
      <svg className="w-full h-full fill-current">
        <use xlinkHref={`${IXO}#${icon}`} />
      </svg>
    </div>
  );
};

export default Ixo;
