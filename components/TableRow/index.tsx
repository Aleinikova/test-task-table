import React from 'react';

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children: React.ReactNode;
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  function TableRow({ className, children, ...otherProps }, ref) {
    return (
      <tr className={className} {...otherProps}>
        {children}
      </tr>
    );
  }
);

export default TableRow;
