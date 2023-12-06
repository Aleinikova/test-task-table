import { HTMLAttributes } from 'react';

interface ITableRow extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children: React.ReactNode;
}

const TableRow = ({ className, children, ...otherProps }: ITableRow) => (
  <tr className={className} {...otherProps}>
    {children}
  </tr>
);

export default TableRow;
