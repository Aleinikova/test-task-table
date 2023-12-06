interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children: React.ReactNode;
}

const TableRow = ({ className, children, ...otherProps }: TableRowProps) => (
  <tr className={className} {...otherProps}>
    {children}
  </tr>
);

export default TableRow;
