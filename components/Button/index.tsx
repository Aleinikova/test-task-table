import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'primary';
  size?: 'xs' | 'sm';
}

const variants = {
  default: {
    active: 'border border-primary rounded-md text-primary font-semibold',
    disabled: 'disabled:opacity-50',
  },
  primary: {
    active: '',
    disabled: '',
  },
};

const sizes = {
  xs: 'py-1.5 px-2',
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
        variants[variant].active,
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
