import React from 'react';
import clsx from 'clsx';

interface LoaderProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const Loader = React.forwardRef<HTMLSpanElement, LoaderProps>(function Loader(
  { className },
  ref
) {
  return (
    <span
      className={clsx(
        'border-primary border-3 inline-block h-6 w-6 animate-spin rounded-full border-b-transparent',
        className
      )}
      ref={ref}
    />
  );
});

export default Loader;
