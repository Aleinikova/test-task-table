import React from 'react';
import clsx from 'clsx';

export type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableCellElement> &
  React.TdHTMLAttributes<HTMLTableCellElement>;

export type Variant = 'head' | 'body' | 'foot';

interface TableCellProps extends TableCellBaseProps {
  className?: string;
  children: React.ReactNode;
  component?: React.ElementType<TableCellBaseProps>;
  variant?: Variant;
}

const styles = {
  head: 'text-primary font-semibold text-xs border-t border-t-head',
  body: 'text-secondary text-sm leading-none',
  foot: 'text-xs text-secondary font-medium',
};

const TableCell = ({
  className,
  children,
  component = 'td',
  variant: propsVariant,
  ...otherProps
}: TableCellProps) => {
  const variant: Variant =
    propsVariant || (component === 'th' ? 'head' : 'body');

  return React.createElement(
    component,
    {
      className: clsx(
        'border-table border-b p-1.5 text-left min-h-[32px]',
        styles[variant],
        className
      ),
      ...otherProps,
    },
    children
  );
};

export default TableCell;
