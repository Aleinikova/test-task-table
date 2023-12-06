import clsx from 'clsx';

interface LoaderProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => (
  <span
    className={clsx(
      'border-primary border-3 inline-block h-6 w-6 animate-spin rounded-full border-b-transparent',
      className
    )}
  />
);

export default Loader;
