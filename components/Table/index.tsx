import React from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  className?: string;
  children: React.ReactNode;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(function Table(
  { className, children, ...otherProps },
  ref
) {
  return (
    <table className={className} ref={ref} {...otherProps}>
      {children}
    </table>
  );
});

export default Table;
