'use client';

enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  ERROR = 'error',
  SUCCESS = 'success',
}

enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

const SIZE_MAPS: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: 'px-5 rounded-lg h-8 text-xs',
  [ButtonSize.MEDIUM]: 'px-4 rounded-xl h-10 text-md uppercase',
};

const VARIANT_MAPS: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]: 'bg-transparent box-border text-blue-500 border border-blue-500 focus:ring-blue-400',
  [ButtonVariant.SECONDARY]:
    'bg-transparent box-border text-white border border-white hover:text-blue-500 hover:border-blue-500 focus:ring-blue-400',
  [ButtonVariant.ERROR]: 'bg-transparent box-border text-white border border-red-400 focus:ring-red-500',
  [ButtonVariant.SUCCESS]: 'bg-transparent box-border text-white border border-green-400 focus:ring-green-500',
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: `${ButtonVariant}`;
  uiSize?: `${ButtonSize}`;
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button(props: Props): JSX.Element {
  const {
    children,
    variant = ButtonVariant.SECONDARY,
    uiSize = ButtonSize.MEDIUM,
    rounded = false,
    disabled = false,
    className = '',
    type = 'button',
    onClick = (): void => {},
    ...attributes
  } = props;

  const buttonLayoutClasses = 'font-semibold shadow-sm focus:outline-none focus:ring-1 focus:ring-opacity-75';

  const roundedClasses = rounded ? '!rounded-full' : '';

  const disabledClasses = disabled ? 'opacity-30' : '';

  const finalButtonClasses = `${buttonLayoutClasses} ${className} ${VARIANT_MAPS[variant]} ${SIZE_MAPS[uiSize]} ${roundedClasses} ${disabledClasses}`;

  return (
    <button type={type} onClick={onClick} className={finalButtonClasses} disabled={disabled} {...attributes}>
      {children}
    </button>
  );
}

Button.variant = ButtonVariant;
Button.size = ButtonSize;
