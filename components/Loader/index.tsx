import React from 'react';
import clsx from 'clsx';

interface LoaderProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const Loader = React.forwardRef<HTMLSpanElement, LoaderProps>(function Loader(
  { className, ...otherProps },
  ref
) {
  return (
    <span
      className={clsx(
        'inline-block h-6 w-6 animate-spin rounded-full border-3 border-primary border-b-transparent',
        className
      )}
      ref={ref}
      {...otherProps}
    />
  );
});

export default Loader;
