import React from 'react';
import clsx from 'clsx';

export type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableCellElement> &
  React.TdHTMLAttributes<HTMLTableCellElement>;

export type Variant = 'head' | 'body' | 'footer';

interface ITableCell extends TableCellBaseProps {
  className?: string;
  children: React.ReactNode;
  component?: React.ElementType<TableCellBaseProps>;
  variant?: Variant;
}

const styles = {
  head: 'text-primary font-semibold text-xs border-t border-t-secondary',
  body: 'text-secondary text-sm',
  footer: '',
};

const TableCell = ({
  className,
  children,
  component = 'td',
  variant: propsVariant,
  ...otherProps
}: ITableCell) => {
  let variant: Variant = propsVariant || component === 'th' ? 'head' : 'body';

  return React.createElement(
    component,
    {
      className: clsx(
        'border-primary border-b px-1.5 py-2 text-left',
        styles[variant],
        className
      ),
      ...otherProps,
    },
    children
  );
};

export default TableCell;
