interface TableFootProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children: React.ReactNode;
}

const TableFoot = ({ className, children, ...otherProps }: TableFootProps) => (
  <tfoot className={className} {...otherProps}>
    {children}
  </tfoot>
);

export default TableFoot;
