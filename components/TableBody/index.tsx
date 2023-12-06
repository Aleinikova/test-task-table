import React from 'react';

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  function TableBody({ className, children, ...otherProps }, ref) {
    return (
      <tbody className={className} ref={ref} {...otherProps}>
        {children}
      </tbody>
    );
  }
);

export default TableBody;
