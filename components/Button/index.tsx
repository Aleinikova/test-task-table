import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'primary';
  size?: 'xs' | 'sm';
}

const variants = {
  default:
    'border border-primary rounded-md text-primary font-semibold bg-white enabled:hover:bg-gray-100',
  primary: '',
};

const sizes = {
  xs: 'py-1.25 px-2 leading-tight',
  sm: 'p-2',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, variant = 'default', size = 'sm', ...otherProps },
  ref
) {
  return (
    <button
      className={clsx(
        'disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export default Button;
