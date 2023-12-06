import React from 'react';

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  function TableHead({ className, children, ...otherProps }, ref) {
    return (
      <thead className={className} ref={ref} {...otherProps}>
        {children}
      </thead>
    );
  }
);

export default TableHead;
