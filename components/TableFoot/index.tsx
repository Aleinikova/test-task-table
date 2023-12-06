import React from 'react';

interface TableFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

const TableFoot = React.forwardRef<HTMLTableSectionElement, TableFootProps>(
  function TableFoot({ className, children, ...otherProps }, ref) {
    return (
      <tfoot className={className} ref={ref} {...otherProps}>
        {children}
      </tfoot>
    );
  }
);

export default TableFoot;
